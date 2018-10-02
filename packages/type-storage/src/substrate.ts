// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { StorageFunctionModifier, StorageFunctionType } from '@polkadot/types/Metadata';
import Text from '@polkadot/types/Text';
import Vector from '@polkadot/types/codec/Vector';

import createFunction from './utils/createFunction';

interface SubstrateMetadata {
  documentation: string;
  type: string;
}

// Small helper function to factorize code on this page.
const createRuntimeFunction = (method: string, key: string, { documentation, type }: SubstrateMetadata) =>
  // TODO The expected 2nd argument is a StorageFunctionMetadata, but we
  // actually only need the fields `documentation` and `type` of it, so in
  // order to not input other fields (byteLength, fromJSON...) we lazily cast
  // as any.
  createFunction(
    new Text('Substrate'),
    new Text(key),
    {
      documentation: new Vector(Text, [documentation]),
      modifier: new StorageFunctionModifier().fromJSON(0),
      type: new StorageFunctionType(0, type)
    } as any,
    {
      isUnhashed: true,
      method
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
