// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { SubmittableSendResult } from '../types';
import { ApiRxInterface } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Extrinsic, ExtrinsicStatus, Hash, Index, Method } from '@polkadot/types/index';

import filterEvents from '../util/filterEvents';

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiRxInterface;

  constructor (api: ApiRxInterface, extrinsic: Extrinsic | Method) {
    super(extrinsic);

    this._api = api;
  }

  private trackStatus = (status: ExtrinsicStatus): Observable<SubmittableSendResult> => {
    if (status.type !== 'Finalised') {
      return of({
        status,
        type: status.type
      });
    }

    const blockHash = status.asFinalised;

    return combineLatest(
      this._api.rpc.chain.getBlock(blockHash),
      this._api.query.system.events.at(blockHash)
    ).pipe(
      map(([signedBlock, allEvents]) => ({
        events: filterEvents(this.hash, signedBlock, allEvents as any),
        status,
        type: status.type
      }))
    );
  }

  send (): Observable<SubmittableSendResult> {
    return this._api.rpc.author
      .submitAndWatchExtrinsic(this)
      .pipe(switchMap(this.trackStatus));
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }

  signAndSend (signerPair: KeyringPair): Observable<SubmittableSendResult> {
    return this._api.query.system
      .accountNonce(signerPair.address())
      .pipe(
        first(),
        switchMap((nonce) =>
          this.sign(signerPair, nonce as Index).send()
        )
      );
  }
}
