// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types';

import { v0 } from './v0';

// order important in structs... :)
/* eslint-disable sort-keys */

export const SiVariant = {
  name: 'Text',
  fields: 'Vec<SiField>',
  index: 'u8',
  docs: 'Vec<Text>'
};

export default {
  rpc: {},
  types: {
    ...v0,
    SiField: {
      name: 'Option<Text>',
      type: 'SiLookupTypeId',
      typeName: 'Option<Text>',
      docs: 'Vec<Text>'
    },
    SiLookupTypeId: 'Compact<u32>',
    SiPath: 'Vec<Text>',
    SiType: {
      path: 'SiPath',
      params: 'Vec<SiTypeParameter>',
      def: 'SiTypeDef',
      docs: 'Vec<Text>'
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
    SiVariant
  }
} as Definitions;
