// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

import { u8aConcat } from '@plugnet/util';

export default function schnorrkelKeypairToU8a ({ publicKey, secretKey }: Keypair): Uint8Array {
  return u8aConcat(secretKey, publicKey).slice();
}
