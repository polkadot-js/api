// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageHasher } from '@polkadot/types/interfaces';
import { u8aConcat, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a, xxhashAsU8a } from '@polkadot/util-crypto';

export type HasherInput = string | Buffer | Uint8Array;

export type HasherFunction = (data: HasherInput) => Uint8Array;

type HasherCheck = 'isBlake2128' | 'isBlake2128Concat' | 'isBlake2256' | 'isTwox128' | 'isTwox256' | 'isTwox64Concat';

const DEFAULT = (data: HasherInput): Uint8Array => xxhashAsU8a(data, 128);

const map: Record<HasherCheck, HasherFunction> = {
  isBlake2128: (data: HasherInput): Uint8Array => blake2AsU8a(data, 128),
  isBlake2128Concat: (data: HasherInput): Uint8Array => u8aConcat(blake2AsU8a(data, 128), u8aToU8a(data)),
  isBlake2256: (data: HasherInput): Uint8Array => blake2AsU8a(data, 256),
  isTwox128: (data: HasherInput): Uint8Array => xxhashAsU8a(data, 128),
  isTwox256: (data: HasherInput): Uint8Array => xxhashAsU8a(data, 256),
  isTwox64Concat: (data: HasherInput): Uint8Array => u8aConcat(xxhashAsU8a(data, 64), u8aToU8a(data))
};

/** @internal */
export default function getHasher (hasher?: StorageHasher): HasherFunction {
  const [, fn] = (hasher && Object.entries(map).find(([check]): boolean =>
    hasher[check as HasherCheck]
  )) || [undefined, DEFAULT];

  return fn;
}
