// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/util-keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiPromiseInterface } from './types';

import { Extrinsic, ExtrinsicStatus, Hash } from '@polkadot/types/index';

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiPromiseInterface;

  constructor (api: ApiPromiseInterface, extrinsic: Extrinsic) {
    super(extrinsic);

    this._api = api;
  }

  send (statusCb?: (status: ExtrinsicStatus) => any): Promise<Hash> {
    if (status) {
      return this._api.rpc.author.extrinsicUpdate(this, statusCb);
    }

    return this._api.rpc.author.submitExtrinsic(this);
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }
}
