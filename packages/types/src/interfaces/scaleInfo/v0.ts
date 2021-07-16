// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsTypes } from '../../types';

// order important in structs... :)
/* eslint-disable sort-keys */

export const v0: DefinitionsTypes = {
  Si0Field: {
    name: 'Option<Text>',
    type: 'Si0LookupTypeId',
    typeName: 'Option<Text>',
    docs: 'Vec<Text>'
  },
  Si0LookupTypeId: 'u32',
  Si0Path: 'Vec<Text>',
  Si0Type: {
    path: 'Si0Path',
    params: 'Vec<Si0LookupTypeId>',
    def: 'Si0TypeDef'
  },
  Si0TypeDef: {
    _enum: {
      Composite: 'Si0TypeDefComposite',
      Variant: 'Si0TypeDefVariant',
      Sequence: 'Si0TypeDefSequence',
      Array: 'Si0TypeDefArray',
      Tuple: 'Si0TypeDefTuple',
      Primitive: 'Si0TypeDefPrimitive',
      Compact: 'Si0TypeDefCompact',
      Phantom: 'Si0TypeDefPhantom',
      BitSequence: 'Si0TypeDefBitSequence'
    }
  },
  Si0TypeDefArray: {
    len: 'u32',
    type: 'Si0LookupTypeId'
  },
  Si0TypeDefBitSequence: {
    bitStoreType: 'Si0LookupTypeId',
    bitOrderType: 'Si0LookupTypeId'
  },
  Si0TypeDefCompact: {
    type: 'Si0LookupTypeId'
  },
  Si0TypeDefComposite: {
    fields: 'Vec<Si0Field>'
  },
  Si0TypeDefPhantom: 'Null',
  Si0TypeDefVariant: {
    variants: 'Vec<Si0Variant>'
  },
  Si0TypeDefPrimitive: {
    _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'U256', 'I8', 'I16', 'I32', 'I64', 'I128', 'I256']
  },
  Si0TypeDefSequence: {
    type: 'Si0LookupTypeId'
  },
  Si0TypeDefTuple: 'Vec<Si0LookupTypeId>',
  Si0TypeParameter: {
    name: 'Text',
    type: 'Option<Si0LookupTypeId>'
  },
  Si0Variant: {
    name: 'Text',
    fields: 'Vec<Si0Field>',
    index: 'Option<u8>',
    discriminant: 'Option<u64>',
    docs: 'Vec<Text>'
  }
};
