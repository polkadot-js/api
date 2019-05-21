// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Text } from '@plugnet/types';
import { StorageHasher } from '@plugnet/types/primitive';
import { blake2AsU8a, xxhashAsU8a } from '@plugnet/util-crypto';

type HasherInput = string | Buffer | Uint8Array;

export type HasherFunction = (data: HasherInput) => Uint8Array;

function toStorageHasher (text: Text): StorageHasher {
  switch (text.toString()) {
    case 'blake2_128':
      return new StorageHasher('Blake2_128');
    case 'blake2_256':
      return new StorageHasher('Blake2_256');
    case 'twox_128':
      return new StorageHasher('Twox128');
    case 'twox_256':
      return new StorageHasher('Twox256');
    case 'twox_64_concat':
      return new StorageHasher('Twox64Concat');
    default:
      throw new Error(`Invalid Storage hasher: ${text.toString()}`);
  }
}

export default function getHasher (hasherInput?: StorageHasher | Text): HasherFunction {
  // This one is the default for PlainType storage keys
  if (!hasherInput) {
    return (data: HasherInput) => xxhashAsU8a(data, 128);
  }

  const hasher: StorageHasher = hasherInput instanceof Text
    ? toStorageHasher(hasherInput)
    : hasherInput;

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
