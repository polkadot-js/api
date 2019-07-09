// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadata, StorageEntryModifier, StorageEntryType } from '@polkadot/types/Metadata/v6/Storage';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { Text, Vector } from '@polkadot/types';

import createFunction from './createFunction';

interface SubstrateMetadata {
  documentation: string;
  type: string;
}

// Small helper function to factorize code on this page.
const createRuntimeFunction = (method: string, key: string, { documentation, type }: SubstrateMetadata): StorageEntry =>
  createFunction(
    new Text('Substrate'),
    new Text(method),
    {
      documentation: new Vector(Text, [documentation]),
      modifier: new StorageEntryModifier(1), // default
      type: new StorageEntryType(type, 0),
      toJSON: (): any => key
    } as StorageEntryMetadata,
    {
      key,
      skipHashing: true
    }
  );

// @deprecated: The ':auth:' (authorityPrefix) and ':auth:len' (authorityCount) storage keys
// have been removed in https://github.com/paritytech/substrate/pull/2802
export const authorityCount = createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
});

export const authorityPrefix = createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are stored.',
  type: 'u32'
});

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
