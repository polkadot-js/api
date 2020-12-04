// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Signer, SignerResult } from '@polkadot/api/types';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ExtrinsicPayload } from '@polkadot/types/interfaces';
import type { SignerPayloadRaw } from '@polkadot/types/types';

import { assert, hexToU8a, u8aToHex } from '@polkadot/util';

let id = 0;

export class SingleAccountSigner implements Signer {
  readonly #keyringPair: KeyringPair;

  readonly #signDelay: number;

  constructor (keyringPair: KeyringPair, signDelay = 0) {
    this.#keyringPair = keyringPair;
    this.#signDelay = signDelay;
  }

  public async signExtrinsic (address: string, payload: ExtrinsicPayload): Promise<SignerResult> {
    assert(address === this.#keyringPair.address, 'Signer does not have the keyringPair');

    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve({
          ...payload.sign(this.#keyringPair),
          id: ++id
        });
      }, this.#signDelay);
    });
  }

  public async signRaw ({ address, data }: SignerPayloadRaw): Promise<SignerResult> {
    assert(address === this.#keyringPair.address, 'Signer does not have the keyringPair');

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signature = u8aToHex(this.#keyringPair.sign(hexToU8a(data)));

        resolve({
          id: ++id,
          signature
        });
      }, this.#signDelay);
    });
  }
}
