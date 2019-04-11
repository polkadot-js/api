// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../types';

import schnorrkelDeriveHard from '../schnorrkel/deriveHard';
import schnorrkelDeriveSoft from '../schnorrkel/deriveSoft';
import DeriveJunction from './DeriveJunction';

export default function keyHdkdSr25519 (keypair: Keypair, { chainCode, isSoft }: DeriveJunction): Keypair {
  return isSoft
    ? schnorrkelDeriveSoft(keypair, chainCode)
    : schnorrkelDeriveHard(keypair, chainCode);
}
