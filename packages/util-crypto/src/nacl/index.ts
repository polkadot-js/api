// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @summary Implements [NaCl](http://nacl.cr.yp.to/) secret-key authenticated encryption, public-key authenticated encryption, hashing, and public-key signatures
 */
export { default as naclDecrypt } from './decrypt';
export { default as deriveHard } from './deriveHard';
export { default as naclEncrypt } from './encrypt';
export { default as naclKeypairFromRandom } from './keypair/fromRandom';
export { default as naclKeypairFromSecret } from './keypair/fromSecret';
export { default as naclKeypairFromSeed } from './keypair/fromSeed';
export { default as naclKeypairFromString } from './keypair/fromString';
export { default as naclSign } from './sign';
export { default as naclVerify } from './verify';
