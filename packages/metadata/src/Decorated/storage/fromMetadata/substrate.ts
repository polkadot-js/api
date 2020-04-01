// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { StorageEntry } from '@polkadot/types/primitive/StorageKey';

import createFunction from './createFunction';

interface SubstrateMetadata {
  documentation: string;
  type: string;
}

// Small helper function to factorize code on this page.
/** @internal */
function createRuntimeFunction (method: string, key: string, { documentation, type }: SubstrateMetadata): (registry: Registry, metaVersion: number) => StorageEntry {
  return (registry: Registry, metaVersion: number): StorageEntry =>
    createFunction(registry, {
      meta: {
        documentation: registry.createType('Vec<Text>', [documentation]),
        modifier: registry.createType('StorageEntryModifierLatest', 1), // required
        toJSON: (): any => key,
        type: registry.createType('StorageEntryTypeLatest', type, 0)
      } as StorageEntryMetadataLatest,
      method,
      prefix: 'Substrate',
      section: 'substrate'
    }, { key, metaVersion, skipHashing: true });
}

export const code = createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
});

export const heapPages = createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
});

export const extrinsicIndex = createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
});

export const changesTrieConfig = createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
});

export const childStorageKeyPrefix = createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
  documentation: 'Prefix of child storage keys.',
  type: 'u32'
});
