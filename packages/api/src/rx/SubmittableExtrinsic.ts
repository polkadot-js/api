// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiRxInterface } from './types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Extrinsic, ExtrinsicStatus } from '@polkadot/types/index';

type SendResult = {
  status: ExtrinsicStatus,
  type: string
};

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiRxInterface;

  constructor (api: ApiRxInterface, extrinsic: Extrinsic) {
    super(extrinsic);

    this._api = api;
  }

  send (): Observable<SendResult> {
    return this._api.rpc.author
      .submitAndWatchExtrinsic(this)
      .pipe(
        map((status: ExtrinsicStatus) => ({
          status,
          type: status.type
        }))
      );
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }
}
