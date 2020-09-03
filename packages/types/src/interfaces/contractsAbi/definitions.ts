// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const layout = {
  InkLayoutKey: '[u8; 32]',
  InkLayoutField: {
    name: 'Text',
    layout: 'InkStorageLayout'
  },
  InkLayoutCell: {
    key: 'InkLayoutKey',
    ty: 'MtLookupTypeId'
  },
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
};
