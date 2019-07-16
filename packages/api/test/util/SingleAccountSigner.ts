// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { SignatureOptions } from '@polkadot/types/types';

import { Extrinsic } from '@polkadot/types';

let id = 0;

export default class SingleAccountSigner {
  private keyringPair: KeyringPair;

  private signDelay: number;

  public constructor (keyringPair: KeyringPair, signDelay: number = 0) {
    this.keyringPair = keyringPair;
    this.signDelay = signDelay;
  }

  public async sign (extrinsic: Extrinsic, address: string, options: SignatureOptions): Promise<number> {
    if (!this.keyringPair || String(address) !== this.keyringPair.address) {
      throw new Error('does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        extrinsic.sign(this.keyringPair, options);

        resolve(++id);
      }, this.signDelay);
    });
  }
}
