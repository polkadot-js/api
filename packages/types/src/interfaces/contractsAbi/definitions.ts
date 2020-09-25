// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const layout = {
  InkLayoutArray: {
    cells_per_elem: 'u32',
    layout: 'InkStorageLayout',
    len: 'u32',
    offset: 'InkLayoutKey'
  },
  InkLayoutCell: {
    key: 'InkLayoutKey',
    ty: 'MtLookupTypeId'
  },
  InkLayoutField: {
    layout: 'InkStorageLayout',
    name: 'Text'
  },
  InkLayoutHash: {
    layout: 'InkStorageLayout',
    offset: 'InkLayoutKey',
    strategy: 'InkLayoutHashStrategy'
  },
  InkLayoutHashStrategy: {
    hasher: 'Text',
    postfix: 'Text',
    prefix: 'InkLayoutKey'
  },
  InkLayoutKey: '[u8; 32]',
  InkLayoutRange: {
    elemType: 'Text',
    len: 'u32',
    offset: 'InkLayoutKey'
  },
  InkLayoutStruct: {
    fields: 'Vec<InkLayoutField>'
  },
  InkStorageLayout: {
    _enum: {
      Array: 'InkLayoutArray',
      Cell: 'InkLayoutCell',
      // Enum: 'InkLayoutEnum',
      Hash: 'InkLayoutHash',
      Struct: 'InkLayoutStruct'
    }
  }
};

const spec = {
  InkConstructorSpec: {
    args: 'Vec<InkMessageParamSpec>',
    docs: 'Vec<Text>',
    name: 'Text',
    selector: 'InkSelector'
  },
  InkContractSpec: {
    constructors: 'Vec<InkConstructorSpec>',
    docs: 'Vec<Text>',
    events: 'Vec<InkEventSpec>',
    messages: 'Vec<InkMessageSpec>',
    name: 'Text'
  },
  InkEventParamSpec: {
    docs: 'Vec<Text>',
    indexed: 'bool',
    name: 'Text',
    type: 'InkTypeSpec'
  },
  InkEventSpec: {
    args: 'Vec<InkEventParamSpec>',
    docs: 'Vec<Text>',
    name: 'Text'
  },
  InkMessageParamSpec: {
    name: 'Text',
    type: 'InkTypeSpec'
  },
  InkMessageSpec: {
    args: 'Vec<InkMessageParamSpec>',
    docs: 'Vec<Text>',
    mutates: 'bool',
    name: 'Text',
    returnType: 'Option<InkTypeSpec>',
    selector: 'InkSelector'
  },
  InkSelector: '[u8; 4]',
  InkTypeSpec: {
    displayName: 'Text',
    id: 'MtLookupTypeId'
  }
};

const registry = {
  MtField: {
    name: 'Option<Text>',
    type: 'MtLookupTypeId'
  },
  MtLookupTypeId: 'u32',
  MtType: {
    def: 'MtTypeDef',
    params: 'Vec<MtLookupTypeId>',
    path: 'Vec<Text>'
  },
  MtTypeDef: {
    _enum: {
      Array: 'MtTypeDefArray',
      Composite: 'MtTypeDefComposite',
      Primitive: 'MtTypeDefPrimitive',
      Sequence: 'MtTypeDefSequence',
      Slice: 'MtTypeDefSlice',
      Tuple: 'MtTypeDefTuple',
      Variant: 'MtTypeDefVariant'
    }
  },
  MtTypeDefArray: {
    len: 'u16',
    type: 'MtLookupTypeId'
  },
  MtTypeDefComposite: {
    fields: 'Vec<MtField>'
  },
  MtTypeDefPrimitive: {
    // this enum definition is mapped in api-contracts/inkTypes.ts
    _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'I8', 'I16', 'I32', 'I64', 'I128']
  },
  MtTypeDefSequence: {
    type: 'MtLookupTypeId'
  },
  MtTypeDefSlice: {
    type: 'MtLookupTypeId'
  },
  MtTypeDefTuple: 'Vec<MtLookupTypeId>',
  MtTypeDefVariant: {
    variants: 'Vec<MtVariant>'
  },
  MtVariant: {
    discriminant: 'Option<u64>',
    fields: 'Vec<MtField>',
    name: 'Text'
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
};
