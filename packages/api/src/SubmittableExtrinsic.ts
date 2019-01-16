// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { Extrinsic, ExtrinsicStatus, Index, Method, SignedBlock } from '@polkadot/types/index';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiInterface$Rx, OnCallFunction, SubmittableSendResult } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';

import filterEvents from './util/filterEvents';

export default class SubmittableExtrinsic<OnCall> extends Extrinsic {
  private _api: ApiInterface$Rx;
  private _onCall: OnCallFunction<OnCall>;

  constructor (api: ApiInterface$Rx, onCall: OnCallFunction<OnCall>, extrinsic: Extrinsic | Method) {
    super(extrinsic);

    this._api = api;
    this._onCall = onCall;
  }

  private trackStatus (status: ExtrinsicStatus, statusCb?: (result: SubmittableSendResult) => any): Observable<SubmittableSendResult> {
    if (status.type !== 'Finalised') {
      return this._onCall(
        () => of({
          status,
          type: status.type
        }),
        [statusCb]
      ) as unknown as Observable<SubmittableSendResult>;
    }

    const blockHash = status.asFinalised;

    return this._onCall(
      () => combineLatest(
        this._api.rpc.chain.getBlock(blockHash),
        this._api.query.system.events.at(blockHash)
      ).pipe(
        map(([signedBlock, allEvents]) => ({
          events: filterEvents(this.hash, signedBlock as SignedBlock, allEvents as any),
          status,
          type: status.type
        }))
      ),
      [statusCb]
    ) as unknown as Observable<SubmittableSendResult>;
  }

  send (statusCb?: (result: SubmittableSendResult) => any): Observable<SubmittableSendResult> {
    return this._onCall(
      (...args: any[]) => (this._api.rpc.author
        .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
        .pipe(switchMap((status) => this.trackStatus(status, statusCb))),
      [statusCb]
    ) as unknown as Observable<SubmittableSendResult>;
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic<OnCall> {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }

  signAndSend (signerPair: KeyringPair, statusCb: (result: SubmittableSendResult) => any): Observable<SubmittableSendResult> {
    return this._api.query.system
      .accountNonce(signerPair.address())
      .pipe(
        first(),
        switchMap((nonce) =>
          this.sign(signerPair, nonce as Index).send(statusCb)
        )
      );
  }
}
