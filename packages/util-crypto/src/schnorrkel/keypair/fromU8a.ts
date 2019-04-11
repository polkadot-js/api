// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

const SEC_LEN = 64;
const PUB_LEN = 32;

export default function schnorrkelKeypairFromU8a (full: Uint8Array): Keypair {
  return {
    publicKey: full.slice(SEC_LEN, SEC_LEN + PUB_LEN),
    secretKey: full.slice(0, SEC_LEN)
  };
}
