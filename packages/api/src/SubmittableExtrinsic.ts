// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { Extrinsic, ExtrinsicStatus, Index, Method, RuntimeVersion, SignedBlock } from '@polkadot/types/index';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiInterface$Rx, OnCallFunction, SubmittableSendResult } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { isFunction } from '@polkadot/util';

import filterEvents from './util/filterEvents';

type SignatureOptionsPartial = {
  blockHash?: AnyU8a,
  era?: Uint8Array,
  nonce: AnyNumber,
  version?: RuntimeVersion
};

type StatusCb = (result: SubmittableSendResult) => any;

export default class SubmittableExtrinsic<OnCall> extends Extrinsic {
  private _api: ApiInterface$Rx;
  private _onCall: OnCallFunction<OnCall>;

  constructor (api: ApiInterface$Rx, onCall: OnCallFunction<OnCall>, extrinsic: Extrinsic | Method) {
    super(extrinsic);

    this._api = api;
    this._onCall = onCall;
  }

  private trackStatus (status: ExtrinsicStatus, statusCb?: StatusCb): Observable<SubmittableSendResult> {
    if (status.type !== 'Finalised') {
      return this._onCall(
        () => of({
          status,
          type: status.type
        }),
        [statusCb],
        false
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
      [statusCb],
      false
    ) as unknown as Observable<SubmittableSendResult>;
  }

  send (statusCb?: (result: SubmittableSendResult) => any): Observable<SubmittableSendResult> {
    return this._onCall(
      () => (this._api.rpc.author
        .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
        .pipe(switchMap((status) => this.trackStatus(status, statusCb))),
      [statusCb],
      true
    ) as unknown as Observable<SubmittableSendResult>;
  }

  sign (account: KeyringPair, { blockHash, era, nonce, version }: SignatureOptionsPartial): SubmittableExtrinsic<OnCall> {
    super.sign(account, {
      blockHash: blockHash || this._api.genesisHash,
      era,
      nonce,
      version: version || this._api.runtimeVersion
    });

    return this;
  }

  signAndSend (account: KeyringPair, statusCb?: StatusCb): Observable<SubmittableSendResult>;
  signAndSend (account: KeyringPair, _optionsOrStatusCb?: Partial<SignatureOptionsPartial> | StatusCb, _statusCb?: StatusCb): Observable<SubmittableSendResult> {
    let options: Partial<SignatureOptionsPartial> = {};
    let statusCb: StatusCb | undefined;

    if (isFunction(_optionsOrStatusCb)) {
      statusCb = _optionsOrStatusCb;
    } else {
      options = _optionsOrStatusCb || {};
    }

    return this._onCall(
      () => (
        options.nonce
          ? of(new Index(options.nonce))
          : this._api.query.system.accountNonce(account.address()) as Observable<Index>
        ).pipe(
          first(),
          switchMap((nonce) =>
            this
              .sign(account, { ...options, nonce })
              .send(statusCb)
          )
        ),
      [statusCb],
      false
    ) as unknown as Observable<SubmittableSendResult>;
  }
}
