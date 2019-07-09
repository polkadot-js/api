// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageHasher } from '@polkadot/types/primitive';
import { blake2AsU8a, xxhashAsU8a } from '@polkadot/util-crypto';

type HasherInput = string | Buffer | Uint8Array;

export type HasherFunction = (data: HasherInput) => Uint8Array;

export default function getHasher (hasher?: StorageHasher): HasherFunction {
  // This one is the default for PlainType storage keys
  if (!hasher) {
    return (data: HasherInput) => xxhashAsU8a(data, 128);
  }

  if (hasher.isBlake2128) {
    return (data: HasherInput) => blake2AsU8a(data, 128);
  }

  if (hasher.isBlake2256) {
    return (data: HasherInput) => blake2AsU8a(data, 256);
  }

  if (hasher.isTwox128) {
    return (data: HasherInput) => xxhashAsU8a(data, 128);
  }

  if (hasher.isTwox256) {
    return (data: HasherInput) => xxhashAsU8a(data, 256);
  }

  // FIXME Add Twox128Concat

  // All cases should be handled above, but if not, return Twox128 for
  // backwards-compatbility
  return (data: HasherInput) => xxhashAsU8a(data, 128);
}
