import { StorageFunctionModifier, StorageFunctionType } from '@polkadot/api-codec/Metadata';
import Text from '@polkadot/api-codec/Text';
import U8a from '@polkadot/api-codec/codec/U8a';
import Vector from '@polkadot/api-codec/codec/Vector';

import { createFunction } from './utils/createFunction';

interface WKKMetadata {
  documentation: string;
  type: string;
}

// Small helper function to factorize code on this page.
const createWKKFunction = (prefix: string, functionMetadata: WKKMetadata) =>
  // TODO The expected 2nd argument is a StorageFunctionMetadata, but we
  // actually only need the fields `documentation` and `type` of it, so in
  // order to not input other fields (byteLength, fromJSON...) we lazily cast
  // as any.
  createFunction(
    new U8a(prefix),
    {
      documentation: new Vector(Text, [functionMetadata.documentation]),
      modifier: new StorageFunctionModifier().fromJSON(0),
      type: functionMetadata.type
    } as any,
    { isUnhashed: true }
  );

export const code = createWKKFunction(':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
});

export const heapPages = createWKKFunction(':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
});

export const authorityCount = createWKKFunction(':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
});

export const authorityPrefix = createWKKFunction(':auth:', {
  documentation: 'Prefix under which authorities are storied.',
  type: 'u32'
});

export const extrinsicIndex = createWKKFunction(':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
});

export const changesTrieConfig = createWKKFunction(':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
});
