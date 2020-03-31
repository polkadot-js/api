// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const layout = {
  InkLayoutKey: '[u8; 32]',
  InkLayoutField: {
    name: 'MtLookupTextId',
    layout: 'InkStorageLayout'
  },
  InkLayoutRange: {
    offset: 'InkLayoutKey',
    len: 'u32',
    elemType: 'MtLookupTextId'
  },
  InkLayoutStruct: {
    type: 'MtLookupTextId',
    fields: 'Vec<InkLayoutField>'
  },
  InkStorageLayout: {
    _enum: {
      Range: 'InkLayoutRange',
      Struct: 'InkLayoutStruct'
    }
  }
};

const spec = {
  InkConstructorSpec: {
    name: 'MtLookupTextId',
    selector: 'InkSelector',
    args: 'Vec<InkMessageParamSpec>',
    docs: 'Vec<Text>'
  },
  InkContractSpec: {
    name: 'MtLookupTextId',
    constructors: 'Vec<InkConstructorSpec>',
    messages: 'Vec<InkMessageSpec>',
    events: 'Vec<InkEventSpec>',
    docs: 'Vec<Text>'
  },
  InkEventParamSpec: {
    name: 'MtLookupTextId',
    indexed: 'bool',
    type: 'InkTypeSpec',
    docs: 'Vec<Text>'
  },
  InkEventSpec: {
    name: 'MtLookupTextId',
    args: 'Vec<InkEventParamSpec>',
    docs: 'Vec<Text>'
  },
  InkMessageParamSpec: {
    name: 'MtLookupTextId',
    type: 'InkTypeSpec'
  },
  InkMessageSpec: {
    name: 'MtLookupTextId',
    selector: 'InkSelector',
    mutates: 'bool',
    args: 'Vec<InkMessageParamSpec>',
    returnType: 'Option<InkTypeSpec>',
    docs: 'Vec<Text>'
  },
  InkSelector: '[u8; 4]',
  InkTypeSpec: {
    id: 'MtLookupTypeId',
    displayName: 'MtLookupTextId'
  }
};

const registry = {
  MtLookupTypeId: 'u32',
  MtLookupTextId: 'u32',
  MtField: {
    name: 'Option<MtLookupTextId>',
    type: 'MtLookupTypeId'
  },
  MtRegistry: {
    strings: 'Vec<Text>',
    types: 'Vec<MtType>'
  },
  MtType: {
    _enum: {
      Composite: 'MtTypeComposite',
      Variant: 'MtTypeVariant',
      Slice: 'MtTypeSlice',
      Array: 'MtTypeArray',
      Tuple: 'MtTypeTuple',
      Primitive: 'MtTypePrimitive'
    }
  },
  MtTypeComposite: {
    name: 'MtLookupTextId',
    namespace: 'Vec<MtLookupTextId>',
    params: 'Vec<MtLookupTypeId>',
    fields: 'Vec<MtField>'
  },
  MtTypeVariant: {
    name: 'MtLookupTextId',
    namespace: 'Vec<MtLookupTextId>',
    params: 'Vec<MtLookupTypeId>',
    variants: 'Vec<MtVariant>'
  },
  MtTypeArray: {
    len: 'u16',
    type: 'MtLookupTypeId'
  },
  MtTypePrimitive: {
    // this enum definition is mapped in api-contracts/inkTypes.ts
    _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'I8', 'I16', 'I32', 'I64', 'I128']
  },
  MtTypeSlice: {
    type: 'MtLookupTypeId'
  },
  MtTypeTuple: 'Vec<MtLookupTypeId>',
  MtVariant: {
    name: 'MtLookupTextId',
    fields: 'Vec<MtField>',
    discriminant: 'Option<u64>'
  }
};

export default {
  types: {
    ...layout,
    ...registry,
    ...spec,
    InkProject: {
      _alias: {
        lookup: 'registry'
      },
      lookup: 'MtRegistry',
      storage: 'InkStorageLayout',
      contract: 'InkContractSpec'
    }
  }
};
