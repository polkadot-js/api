// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types';

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {},
  types: {
    SiField: {
      name: 'Option<Text>',
      type: 'SiLookupTypeId'
    },
    SiLookupTypeId: 'u32',
    SiPath: 'Vec<Text>',
    SiType: {
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
        Primitive: 'SiTypeDefPrimitive'
      }
    },
    SiTypeDefArray: {
      len: 'u16',
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
    SiVariant: {
      name: 'Text',
      fields: 'Vec<SiField>',
      discriminant: 'Option<u64>'
    }
  }
} as Definitions;
