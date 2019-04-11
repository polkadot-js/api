// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mnemonicToSeed } from 'bip39';
import { bufferToU8a } from '@plugnet/util';
import { bip39ToSeed, isReady } from '@plugnet/wasm-crypto';

/**
 * @name toSeed
 * @summary Creates a valid seed from a mnemonic input
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicToSeed, mnemonicValidate } from '@plugnet/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 *
 * if (isValidMnemonic) {
 *   console.log(`Seed generated from mnemonic: ${mnemonicToSeed(mnemonic)}`); => u8a
 * }
 * ```
 */
export default function toSeed (mnemonic: string, password: string = ''): Uint8Array {
  return isReady()
    ? bip39ToSeed(mnemonic, password)
    : bufferToU8a(mnemonicToSeed(mnemonic, password)).subarray(0, 32);
}
