// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../types';

import '../polyfill';

import { sr25519DeriveKeypairSoft } from '@plugnet/wasm-crypto';

import keypairFromU8a from './keypair/fromU8a';
import keypairToU8a from './keypair/toU8a';

export default function deriveSoft (keypair: Keypair, chainCode: Uint8Array): Keypair {
  return keypairFromU8a(
    sr25519DeriveKeypairSoft(keypairToU8a(keypair), chainCode)
  );
}
