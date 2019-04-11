// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../polyfill';

import { generateMnemonic } from 'bip39';
import { bip39Generate, isReady } from '@plugnet/wasm-crypto';

type WordCount = 12 | 15 | 18 | 21 | 24;

// mapping of words to the actual strength (as expected)
const STRENGTH_MAP = {
  12: 16 * 8,
  15: 20 * 8,
  18: 24 * 8,
  21: 28 * 8,
  24: 32 * 8
};

/**
 * @name mnemonicGenerate
 * @summary Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate } from '@plugnet/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * ```
 */
export default function mnemonicGenerate (numWords: WordCount = 12): string {
  return isReady()
    ? bip39Generate(numWords)
    : generateMnemonic(STRENGTH_MAP[numWords]);
}
