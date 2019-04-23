// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { getTypeDef } from '@polkadot/types/codec/createType';
import { StorageFunction } from '@polkadot/types/primitive/StorageKey';
import { Bytes } from '@polkadot/types/primitive';

import createFunction from './utils/createFunction';
import { TypeRegistry } from '@polkadot/types';

interface SubstrateMetadata {
  documentation: string;
  type: string;
}

// Small helper function to factorize code on this page.
const createRuntimeFunction = (method: string, key: string, { documentation, type }: SubstrateMetadata): (typeRegistry: TypeRegistry) => StorageFunction =>
  (typeRegistry: TypeRegistry) => TypeRegistry.withRegistry(typeRegistry, () => createFunction(
    'Substrate',
    method,
    {
      documentation: [documentation],
      modifier: 1, // default
      type: {
        isMap: false,
        isLinked: false,
        isDoubleMap: false,
        asType: () => getTypeDef(type),
        asDoubleMap: () => { throw new Error(); },
        asMap: () => { throw new Error(); }
      },
      name: 'substrate',
      fallback: new Bytes()
    },
    {
      isUnhashed: true,
      key
    }
  ));

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
