// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringPair } from '@polkadot/keyring/types';
import type { Registry, SignerPayloadJSON, SignerPayloadRaw } from '@polkadot/types/types';
import type { Signer, SignerResult } from '../types/index.js';

import { hexToU8a, objectSpread, u8aToHex } from '@polkadot/util';

let id = 0;

export class SingleAccountSigner implements Signer {
  private readonly __$$_keyringPair: KeyringPair;
  private readonly __$$_registry: Registry;
  private readonly __$$_signDelay: number;

  constructor (registry: Registry, keyringPair: KeyringPair, signDelay = 0) {
    this.__$$_keyringPair = keyringPair;
    this.__$$_registry = registry;
    this.__$$_signDelay = signDelay;
  }

  public async signPayload (payload: SignerPayloadJSON): Promise<SignerResult> {
    if (payload.address !== this.__$$_keyringPair.address) {
      throw new Error('Signer does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signed = this.__$$_registry.createType('ExtrinsicPayload', payload, { version: payload.version }).sign(this.__$$_keyringPair);

        resolve(objectSpread({ id: ++id }, signed));
      }, this.__$$_signDelay);
    });
  }

  public async signRaw ({ address, data }: SignerPayloadRaw): Promise<SignerResult> {
    if (address !== this.__$$_keyringPair.address) {
      throw new Error('Signer does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signature = u8aToHex(this.__$$_keyringPair.sign(hexToU8a(data)));

        resolve({
          id: ++id,
          signature
        });
      }, this.__$$_signDelay);
    });
  }
}
