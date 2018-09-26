import { StorageFunctionModifier, StorageFunctionType } from '@polkadot/api-codec/Metadata';
import Text from '@polkadot/api-codec/Text';
import U8a from '@polkadot/api-codec/codec/U8a';
import Vector from '@polkadot/api-codec/codec/Vector';

import { createFunction } from './utils/createFunction';

interface WKKMetadata {
  documentation: Vector<Text>;
  name: Text;
  type: StorageFunctionType;
}

// Small helper function to factorize code on this page.
const createWKKFunction = (prefix: Text | U8a, functionMetadata: WKKMetadata) =>
  // TODO The expected 2nd argument is a StorageFunctionMetadata, but we actually only need the fields `documentation`
  // and `type` of it, so in order to not input other fields (byteLength, fromJSON...) we lazily cast as any.
  createFunction(prefix, { ...functionMetadata, modifier: new StorageFunctionModifier().fromJSON(0) } as any, {
    isUnhashed: true
  });

export const code = createWKKFunction(new U8a(':code'), {
  documentation: new Vector(Text, ['Wasm code of the runtime.']),
  name: new Text('code'),
  type: new StorageFunctionType(0, 'Bytes')
});

export const heapPages = createWKKFunction(new U8a(':heappages'), {
  documentation: new Vector(Text, ['Number of wasm linear memory pages required for execution of the runtime.']),
  name: new Text('heapPages'),
  type: new StorageFunctionType(0, 'u64')
});

export const authorityCount = createWKKFunction(new U8a(':auth:len'), {
  documentation: new Vector(Text, ['Number of authorities.']),
  name: new Text('authorityCount'),
  type: new StorageFunctionType(0, 'u32')
});

export const authorityPrefix = createWKKFunction(new U8a(':auth:'), {
  documentation: new Vector(Text, ['Prefix under which authorities are storied.']),
  name: new Text('authorityPrefix'),
  type: new StorageFunctionType(0, 'u32')
});

export const extrinsicIndex = createWKKFunction(new U8a(':extrinsic_index'), {
  documentation: new Vector(Text, ['Current extrinsic index (u32) is stored under this key.']),
  name: new Text('extrinsicIndex'),
  type: new StorageFunctionType(0, 'u32')
});

export const changesTrieConfig = createWKKFunction(new U8a(':changes_trie'), {
  documentation: new Vector(Text, ['Changes trie configuration is stored under this key.']),
  name: new Text('changesTrieConfig'),
  type: new StorageFunctionType(0, 'u32')
});
