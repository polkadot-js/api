// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types';

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {},
  types: {
    SiField: {
      name: 'Option<Text>',
      type: 'SiLookupTypeId',
      typeName: 'Option<Text>',
      docs: 'Vec<Text>'
    },
    SiLookupTypeId: 'u32',
    SiPath: 'Vec<Text>',
    SiType: {
      path: 'SiPath',
      params: 'Vec<SiTypeParameter>',
      def: 'SiTypeDef',
      docs: 'Vec<Text>'
    },
    SiType0: {
      path: 'SiPath',
      params: 'Vec<SiLookupTypeId>',
      def: 'SiTypeDef'
    },
    SiTypeDef: {
      _enum: {
        Composite: 'SiTypeDefComposite',
        Variant: 'SiTypeDefVariant',
        Sequence: 'SiTypeDefSequence',
        Array: 'SiTypeDefArray',
        Tuple: 'SiTypeDefTuple',
        Primitive: 'SiTypeDefPrimitive',
        Compact: 'SiTypeDefCompact',
        Phantom: 'SiTypeDefPhantom',
        BitSequence: 'SiTypeDefBitSequence',
        // NOTE: This is specific to the implementation for pre-v14 metadata
        // compatibility (always keep this as the last entry in the enum)
        HistoricMetaCompat: 'Type'
      }
    },
    SiTypeDefArray: {
      len: 'u32',
      type: 'SiLookupTypeId'
    },
    SiTypeDefBitSequence: {
      bitStoreType: 'SiLookupTypeId',
      bitOrderType: 'SiLookupTypeId'
    },
    SiTypeDefCompact: {
      type: 'SiLookupTypeId'
    },
    SiTypeDefComposite: {
      fields: 'Vec<SiField>'
    },
    SiTypeDefPhantom: 'Null',
    SiTypeDefVariant: {
      variants: 'Vec<SiVariant>'
    },
    SiTypeDefPrimitive: {
      _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'U256', 'I8', 'I16', 'I32', 'I64', 'I128', 'I256']
    },
    SiTypeDefSequence: {
      type: 'SiLookupTypeId'
    },
    SiTypeDefTuple: 'Vec<SiLookupTypeId>',
    SiTypeParameter: {
      name: 'Text',
      type: 'Option<SiLookupTypeId>'
    },
    SiVariant: {
      name: 'Text',
      fields: 'Vec<SiField>',
      index: 'Option<u8>',
      discriminant: 'Option<u64>',
      docs: 'Vec<Text>'
    }
  }
} as Definitions;
