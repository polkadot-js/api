// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Signer, SignerPayload, SignerResult } from '@polkadot/api/types';
import { KeyringPair } from '@polkadot/keyring/types';

import { SignaturePayload } from '@polkadot/types';

let id = 0;

export default class SingleAccountSigner implements Signer {
  private keyringPair: KeyringPair;

  private signDelay: number;

  public constructor (keyringPair: KeyringPair, signDelay: number = 0) {
    this.keyringPair = keyringPair;
    this.signDelay = signDelay;
  }

  // @deprecated Kept here until we have it removed completely
  // public async sign (extrinsic: IExtrinsic, address: string, options: SignatureOptions): Promise<number> {
  //   if (!this.keyringPair || String(address) !== this.keyringPair.address) {
  //     throw new Error('does not have the keyringPair');
  //   }

  //   return new Promise((resolve): void => {
  //     setTimeout((): void => {
  //       extrinsic.sign(this.keyringPair, options);

  //       resolve(++id);
  //     }, this.signDelay);
  //   });
  // }

  public async signPayload (payload: SignerPayload): Promise<SignerResult> {
    if (!this.keyringPair || payload.address !== this.keyringPair.address) {
      throw new Error('does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signed = new SignaturePayload(payload, { version: payload.version }).sign(this.keyringPair);
        const result: SignerResult = { id: ++id, ...signed };

        resolve(result);
      }, this.signDelay);
    });
  }
}
