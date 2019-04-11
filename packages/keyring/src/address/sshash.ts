// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringToU8a, u8aConcat } from '@plugnet/util';
import { blake2AsU8a } from '@plugnet/util-crypto';

const SS58_PREFIX = stringToU8a('SS58PRE');

export default function hash (key: Uint8Array): Uint8Array {
  return blake2AsU8a(u8aConcat(SS58_PREFIX, key), 512);
}
