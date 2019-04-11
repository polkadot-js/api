// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../types';

import { assert } from '@plugnet/util';

import naclDeriveHard from '../nacl/deriveHard';
import naclKeypairFromSeed from '../nacl/keypair/fromSeed';
import DeriveJunction from './DeriveJunction';

export default function keyHdkdEd25519 (keypair: Keypair, { chainCode, isHard }: DeriveJunction): Keypair {
  assert(isHard, 'A soft key was found in the path (and is unsupported)');

  return naclKeypairFromSeed(
    naclDeriveHard(keypair.secretKey.subarray(0, 32), chainCode)
  );
}
