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
const createRuntimeFunction = (method: string, functionMetadata: SubstrateMetadata) =>
  // TODO The expected 2nd argument is a StorageFunctionMetadata, but we
  // actually only need the fields `documentation` and `type` of it, so in
  // order to not input other fields (byteLength, fromJSON...) we lazily cast
  // as any.
  createFunction(
    new Text('Substrate'),
    new Text(method),
    {
      documentation: new Vector(Text, [functionMetadata.documentation]),
      modifier: new StorageFunctionModifier().fromJSON(0),
      type: new StorageFunctionType(0, functionMetadata.type)
    } as any,
    { isUnhashed: true }
  );

export const code = createRuntimeFunction(':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
});

export const heapPages = createRuntimeFunction(':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
});

export const authorityCount = createRuntimeFunction(':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
});

export const authorityPrefix = createRuntimeFunction(':auth:', {
  documentation: 'Prefix under which authorities are storied.',
  type: 'u32'
});

export const extrinsicIndex = createRuntimeFunction(':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
});

export const changesTrieConfig = createRuntimeFunction(':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
});
