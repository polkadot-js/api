// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../polyfill';

import { pbkdf2Sync } from 'pbkdf2';
import { bufferToU8a, stringToU8a, u8aToBuffer } from '@plugnet/util';
import { bip39ToMiniSecret, isReady } from '@plugnet/wasm-crypto';

import toEntropy from './toEntropy';

export default function toMiniSecret (mnemonic: string, password: string = ''): Uint8Array {
  if (isReady()) {
    return bip39ToMiniSecret(mnemonic, password);
  }

  const entropy = u8aToBuffer(toEntropy(mnemonic));
  const salt = u8aToBuffer(stringToU8a(`mnemonic${password}`));

  // return the first 32 bytes as the seed
  return bufferToU8a(
    pbkdf2Sync(entropy, salt, 2048, 64, 'sha512')
  ).slice(0, 32);
}
