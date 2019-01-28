// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageFunctionMetadata, StorageFunctionModifier, StorageFunctionType } from '@polkadot/types/Metadata/v0/Modules';
import { StorageFunction } from '@polkadot/types/StorageKey';
import Text from '@polkadot/types/Text';
import Vector from '@polkadot/types/codec/Vector';

import createFunction from './utils/createFunction';

interface SubstrateMetadata {
  documentation: string;
  type: string;
}

// Small helper function to factorize code on this page.
const createRuntimeFunction = (method: string, key: string, { documentation, type }: SubstrateMetadata): StorageFunction =>
  createFunction(
    new Text('Substrate'),
    new Text(method),
    {
      documentation: new Vector(Text, [documentation]),
      modifier: new StorageFunctionModifier(0),
      type: new StorageFunctionType(type, 0),
      toJSON: (): any =>
        key
    } as StorageFunctionMetadata,
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
