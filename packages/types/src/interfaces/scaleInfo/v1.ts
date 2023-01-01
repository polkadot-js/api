// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsTypes } from '../../types';

// order important in structs... :)
/* eslint-disable sort-keys */

export const Si1Variant = {
  name: 'Text',
  fields: 'Vec<Si1Field>',
  index: 'u8',
  docs: 'Vec<Text>'
};

export const v1: DefinitionsTypes = {
  Si1Field: {
    name: 'Option<Text>',
    type: 'Si1LookupTypeId',
    typeName: 'Option<Text>',
    docs: 'Vec<Text>'
  },
  Si1LookupTypeId: 'Compact<u32>',
  Si1Path: 'Si0Path',
  Si1Type: {
    path: 'Si1Path',
    params: 'Vec<Si1TypeParameter>',
    def: 'Si1TypeDef',
    docs: 'Vec<Text>'
  },
  Si1TypeDef: {
    _enum: {
      Composite: 'Si1TypeDefComposite',
      Variant: 'Si1TypeDefVariant',
      Sequence: 'Si1TypeDefSequence',
      Array: 'Si1TypeDefArray',
      Tuple: 'Si1TypeDefTuple',
      Primitive: 'Si1TypeDefPrimitive',
      Compact: 'Si1TypeDefCompact',
      BitSequence: 'Si1TypeDefBitSequence',
      // NOTE: This is specific to the implementation for pre-v14 metadata
      // compatibility (always keep this as the last entry in the enum)
      HistoricMetaCompat: 'Type'
    }
  },
  Si1TypeDefArray: {
    len: 'u32',
    type: 'Si1LookupTypeId'
  },
  Si1TypeDefBitSequence: {
    bitStoreType: 'Si1LookupTypeId',
    bitOrderType: 'Si1LookupTypeId'
  },
  Si1TypeDefCompact: {
    type: 'Si1LookupTypeId'
  },
  Si1TypeDefComposite: {
    fields: 'Vec<Si1Field>'
  },
  Si1TypeDefPrimitive: 'Si0TypeDefPrimitive',
  Si1TypeDefSequence: {
    type: 'Si1LookupTypeId'
  },
  Si1TypeDefTuple: 'Vec<Si1LookupTypeId>',
  Si1TypeParameter: {
    name: 'Text',
    type: 'Option<Si1LookupTypeId>'
  },
  Si1TypeDefVariant: {
    variants: 'Vec<Si1Variant>'
  },
  Si1Variant
};
