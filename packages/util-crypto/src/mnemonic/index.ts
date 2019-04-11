// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../polyfill';

/**
 * @summary Create valid mnemonic strings, validate them using BIP39, and convert them to valid seeds
 */

export { default as mnemonicGenerate } from './generate';
export { default as mnemonicToEntropy } from './toEntropy';
export { default as mnemonicToMiniSecret } from './toMiniSecret';
export { default as mnemonicToSeed } from './toSeed';
export { default as mnemonicValidate } from './validate';
