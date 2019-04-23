// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageHasher } from '@polkadot/types/Metadata/v4/Storage';
import { xxhashAsU8a } from '@polkadot/util-crypto';

type HasherFunction = (data: string | Buffer | Uint8Array, bitLength?: number) => Uint8Array;

export default function getHasher (hasher?: StorageHasher): HasherFunction {
  // Backwards-compatibility: before introducing custom hashers, we used
  // xxhashAsU8a everywhere
  if (!hasher) {
    return xxhashAsU8a;
  }

  console.log(hasher.toString());
  return xxhashAsU8a;
}
