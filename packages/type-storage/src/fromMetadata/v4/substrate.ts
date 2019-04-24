// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageFunctionMetadata, StorageFunctionModifier, StorageFunctionType } from '@polkadot/types/Metadata/v4/Storage';
import { StorageFunction } from '@polkadot/types/primitive/StorageKey';
import { Text, Vector, Bytes } from '@polkadot/types';

import createFunction from './createFunction';

interface SubstrateMetadata {
  documentation: string;
  type: string;
}

// Small helper function to factorize code on this page.
const createRuntimeFunction = (method: string, key: string, { documentation, type }: SubstrateMetadata): StorageFunction<StorageFunctionMetadata> =>
  createFunction(
    new Text('Substrate'),
    new Text(method),
    new StorageFunctionMetadata({
      documentation: new Vector(Text, [documentation]),
      fallback: new Bytes(), // unused
      modifier: new StorageFunctionModifier(1), // default
      name: key,
      type: new StorageFunctionType(type, 0)
    }),
    {
      isUnhashed: true,
      key
    }
  );

export const code = createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
});

export const heapPages = createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
});

export const authorityCount = createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
});

export const authorityPrefix = createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are storied.',
  type: 'u32'
});

export const extrinsicIndex = createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
});

export const changesTrieConfig = createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
});
