// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../polyfill';

import { validateMnemonic } from 'bip39';
import { bip39Validate, isReady } from '@plugnet/wasm-crypto';

/**
 * @name mnemonicValidate
 * @summary Validates a mnemonic input using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicValidate } from '@plugnet/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 * ```
 */
export default function mnemonicValidate (mnemonic: string): boolean {
  return isReady()
    ? bip39Validate(mnemonic)
    : validateMnemonic(mnemonic);
}
