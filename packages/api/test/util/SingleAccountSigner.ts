// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { SignatureOptions } from '@polkadot/types/types';

import { Extrinsic } from '@polkadot/types';

let id = 0;

export default class SingleAccountSigner {
  private keyringPair: KeyringPair;

  constructor (keyringPair: KeyringPair) {
    this.keyringPair = keyringPair;
  }

  async sign (extrinsic: Extrinsic, address: string, options: SignatureOptions) {
    if (!this.keyringPair || String(address) !== this.keyringPair.address) {
      throw new Error('does not have the keyringPair');
    }

    extrinsic.sign(this.keyringPair, options);

    return ++id;
  }
}
