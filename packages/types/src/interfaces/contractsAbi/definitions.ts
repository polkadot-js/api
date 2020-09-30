// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Definitions } from '../../types';

// order important in structs... :)
/* eslint-disable sort-keys */

const layout = {
  InkLayoutCell: {
    key: 'InkLayoutKey',
    ty: 'MtLookupTypeId'
  },
  InkLayoutField: {
    name: 'Text',
    layout: 'InkStorageLayout'
  },
  InkLayoutKey: '[u8; 32]',
  InkLayoutRange: {
    offset: 'InkLayoutKey',
    len: 'u32',
    elemType: 'Text'
  },
  InkLayoutStruct: {
    fields: 'Vec<InkLayoutField>'
  },
  InkStorageLayout: {
    _enum: {
      Cell: 'InkLayoutCell',
      // todo: Hash, Array, Enum
      Struct: 'InkLayoutStruct'
    }
  }
};

const spec = {
  InkConstructorSpec: {
    name: 'Text',
    selector: 'InkSelector',
    args: 'Vec<InkMessageParamSpec>',
    docs: 'Vec<Text>'
  },
  InkContractSpec: {
    name: 'Text',
    constructors: 'Vec<InkConstructorSpec>',
    messages: 'Vec<InkMessageSpec>',
    events: 'Vec<InkEventSpec>',
    docs: 'Vec<Text>'
  },
  InkEventParamSpec: {
    name: 'Text',
    indexed: 'bool',
    type: 'InkTypeSpec',
    docs: 'Vec<Text>'
  },
  InkEventSpec: {
    name: 'Text',
    args: 'Vec<InkEventParamSpec>',
    docs: 'Vec<Text>'
  },
  InkMessageParamSpec: {
    name: 'Text',
    type: 'InkTypeSpec'
  },
  InkMessageSpec: {
    name: 'Text',
    selector: 'InkSelector',
    mutates: 'bool',
    args: 'Vec<InkMessageParamSpec>',
    returnType: 'Option<InkTypeSpec>',
    docs: 'Vec<Text>'
  },
  InkSelector: '[u8; 4]',
  InkTypeSpec: {
    id: 'MtLookupTypeId',
    displayName: 'Text'
  }
};

const registry = {
  MtLookupTypeId: 'u32',
  MtField: {
    name: 'Option<Text>',
    type: 'MtLookupTypeId'
  },
  MtRegistry: {
    strings: 'Vec<Text>',
    types: 'Vec<MtType>'
  },
  MtType: {
    path: 'Vec<Text>',
    params: 'Vec<MtLookupTypeId>',
    def: 'MtTypeDef'
  },
  MtTypeDef: {
    _enum: {
      Composite: 'MtTypeDefComposite',
      Variant: 'MtTypeDefVariant',
      Slice: 'MtTypeDefSlice',
      Array: 'MtTypeDefArray',
      Tuple: 'MtTypeDefTuple',
      Primitive: 'MtTypeDefPrimitive'
    }
  },
  MtTypeDefComposite: {
    fields: 'Vec<MtField>'
  },
  MtTypeDefVariant: {
    variants: 'Vec<MtVariant>'
  },
  MtTypeDefArray: {
    len: 'u16',
    type: 'MtLookupTypeId'
  },
  MtTypeDefPrimitive: {
    // this enum definition is mapped in api-contracts/inkTypes.ts
    _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'I8', 'I16', 'I32', 'I64', 'I128']
  },
  MtTypeDefSlice: {
    type: 'MtLookupTypeId'
  },
  MtTypeDefTuple: 'Vec<MtLookupTypeId>',
  MtVariant: {
    name: 'Text',
    fields: 'Vec<MtField>',
    discriminant: 'Option<u64>'
  }
};

export default {
  rpc: {},
  types: {
    ...layout,
    ...registry,
    ...spec,
    InkProject: {
      spec: 'InkContractSpec',
      storage: 'InkStorageLayout',
      types: 'Vec<MtType>'
    }
  }
} as Definitions;
