// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeypairType, Keypair } from '../types';

import DeriveJunction from './DeriveJunction';
import keyHdkdEd15519 from './hdkdEd25519';
import keyHdkdSr15519 from './hdkdSr25519';

export default function keyFromPath (pair: Keypair, path: Array<DeriveJunction>, type: KeypairType): Keypair {
  const isEd25519 = type === 'ed25519';

  return path.reduce((pair, junction) => {
    return isEd25519
      ? keyHdkdEd15519(pair, junction)
      : keyHdkdSr15519(pair, junction);
  }, pair);
}
