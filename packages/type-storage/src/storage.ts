// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as substrate from './substrate';
import { TypeRegistry } from '@polkadot/types';

// Prefill storage with well known keys, as not returned by state_getMetadata
export function substrateStorage (typeRegistry: TypeRegistry) {
  return {
    substrate: {
      code: substrate.code(typeRegistry),
      heapPages: substrate.heapPages(typeRegistry),
      authorityCount: substrate.authorityCount(typeRegistry),
      authorityPrefix: substrate.authorityPrefix(typeRegistry),
      extrinsicIndex: substrate.extrinsicIndex(typeRegistry),
      changesTrieConfig: substrate.changesTrieConfig(typeRegistry)
    }
  };
}
