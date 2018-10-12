// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/util-keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiRxInterface } from './types';

import { Observable } from 'rxjs';
import { Extrinsic, ExtrinsicStatus } from '@polkadot/types/index';

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiRxInterface;

  constructor (api: ApiRxInterface, extrinsic: Extrinsic) {
    super(extrinsic);

    this._api = api;
  }

  send (): Observable<ExtrinsicStatus> {
    return this._api.rpc.author.extrinsicUpdate(this);
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }
}
