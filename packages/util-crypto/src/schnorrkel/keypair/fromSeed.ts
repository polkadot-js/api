// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

import '../../polyfill';

import { sr25519KeypairFromSeed } from '@plugnet/wasm-crypto';

import keypairFromU8a from './fromU8a';

/**
 * @name schnorrkelKeypairFromSeed
 * @description Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 */
export default function schnorrkelKeypairFromSeed (seed: Uint8Array): Keypair {
  return keypairFromU8a(
    sr25519KeypairFromSeed(seed)
  );
}
