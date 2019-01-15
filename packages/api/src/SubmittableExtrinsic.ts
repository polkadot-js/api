// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { Extrinsic, ExtrinsicStatus, Index, Method, SignedBlock } from '@polkadot/types/index';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { SubmittableSendResult } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';

import ApiRx from './rx';
import filterEvents from './util/filterEvents';

type OnCallFunction<OnCall> = (...args: any[]) => OnCall;

export default class SubmittableExtrinsic<OnCall> extends Extrinsic {
  private _apiRx: ApiRx;
  private _onCall: OnCallFunction<OnCall>;

  constructor (apiRx: ApiRx, onCall: OnCallFunction<OnCall>, extrinsic: Extrinsic | Method) {
    super(extrinsic);

    this._apiRx = apiRx;
    this._onCall = onCall;
  }

  private trackStatus = (status: ExtrinsicStatus): Observable<SubmittableSendResult> => {
    if (status.type !== 'Finalised') {
      return this._onCall(
        () => of({
          status,
          type: status.type
        }),
        []
      ) as unknown as Observable<SubmittableSendResult>;
    }

    const blockHash = status.asFinalised;

    return combineLatest(
      this._apiRx.rpc.chain.getBlock(blockHash),
      this._apiRx.query.system.events.at(blockHash)
    ).pipe(
      map(([signedBlock, allEvents]) => ({
        events: filterEvents(this.hash, signedBlock as SignedBlock, allEvents as any),
        status,
        type: status.type
      }))
    );
  }

  send (): Observable<SubmittableSendResult> {
    return this._onCall(
      () => (this._apiRx.rpc.author
        .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
        .pipe(switchMap(this.trackStatus))
      , []
    ) as unknown as Observable<SubmittableSendResult>;
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic<OnCall> {
    super.sign(signerPair, nonce, blockHash || this._apiRx.genesisHash);

    return this;
  }

  signAndSend (signerPair: KeyringPair): Observable<SubmittableSendResult> {
    return this._apiRx.query.system
      .accountNonce(signerPair.address())
      .pipe(
        first(),
        switchMap((nonce) =>
          this.sign(signerPair, nonce as Index).send()
        )
      );
  }
}
