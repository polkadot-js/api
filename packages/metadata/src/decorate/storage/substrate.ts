// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest } from '@polkadot/types/interfaces';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { Registry } from '@polkadot/types/types';

import { createFunction } from './createFunction';

interface SubstrateMetadata {
  documentation: string;
  type: string;
}

type Creator = (registry: Registry) => StorageEntry;

// Small helper function to factorize code on this page.
/** @internal */
function createRuntimeFunction (method: string, key: string, { documentation, type }: SubstrateMetadata): (registry: Registry) => StorageEntry {
  return (registry: Registry): StorageEntry =>
    createFunction(registry, {
      meta: {
        documentation: registry.createType('Vec<Text>', [documentation]),
        modifier: registry.createType('StorageEntryModifierLatest', 1), // required
        name: registry.createType('Text', method),
        toJSON: (): any => key,
        type: registry.createType('StorageEntryTypeLatest', type, 0)
      } as StorageEntryMetadataLatest,
      method,
      prefix: 'Substrate',
      section: 'substrate'
    }, { key, skipHashing: true });
}

export const substrate: Record<string, Creator> = {
  changesTrieConfig: createRuntimeFunction('changesTrieConfig', ':changes_trie', {
    documentation: ' Changes trie configuration is stored under this key.',
    type: 'u32'
  }),
  childStorageKeyPrefix: createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
    documentation: ' Prefix of child storage keys.',
    type: 'u32'
  }),
  code: createRuntimeFunction('code', ':code', {
    documentation: ' Wasm code of the runtime.',
    type: 'Bytes'
  }),
  extrinsicIndex: createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
    documentation: ' Current extrinsic index (u32) is stored under this key.',
    type: 'u32'
  }),
  heapPages: createRuntimeFunction('heapPages', ':heappages', {
    documentation: ' Number of wasm linear memory pages required for execution of the runtime.',
    type: 'u64'
  })
};
