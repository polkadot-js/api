// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const layout = {
  InkLayoutKey: '[u8; 32]',
  InkLayoutField: {
    name: 'u32',
    layout: 'InkStorageLayout'
  },
  InkLayoutRange: {
    offset: 'InkLayoutKey',
    len: 'u32',
    elemType: 'u32'
  },
  InkLayoutStruct: {
    type: 'u32',
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
    name: 'u32',
    selector: '[u8; 4]',
    args: 'Vec<InkMessageParamSpec>',
    docs: 'Vec<Text>'
  },
  InkContractSpec: {
    name: 'u32',
    constructors: 'Vec<InkConstructorSpec>',
    messages: 'Vec<InkMessageSpec>',
    events: 'Vec<InkEventSpec>',
    docs: 'Vec<Text>'
  },
  InkEventParamSpec: {
    name: 'u32',
    indexed: 'bool',
    type: 'InkTypeSpec',
    docs: 'Vec<Text>'
  },
  InkEventSpec: {
    name: 'u32',
    args: 'Vec<InkEventParamSpec>',
    docs: 'Vec<Text>'
  },
  InkMessageParamSpec: {
    name: 'u32',
    type: 'InkTypeSpec'
  },
  InkMessageSpec: {
    name: 'u32',
    selector: '[u8; 4]',
    mutates: 'bool',
    args: 'Vec<InkMessageParamSpec>',
    returnType: 'Option<InkTypeSpec>',
    docs: 'Vec<Text>'
  },
  InkTypeSpec: {
    type: 'u32',
    displayName: 'u32'
  }
};

const registry = {
  MtClikeEnumVariant: {
    name: 'u32',
    discriminant: 'u64'
  },
  MtEnumVariant: {
    _enum: {
      Unit: 'MtEnumVariantUnit',
      Struct: 'MtEnumVariantStruct',
      // #[serde(rename = "tupleStruct")]
      TupleStruct: 'MtEnumVariantTupleStruct'
    }
  },
  MtEnumVariantTupleStruct: {
    name: 'u32',
    types: 'Vec<MtUnnamedField>'
  },
  MtEnumVariantStruct: {
    name: 'u32',
    fields: 'Vec<MtNamedField>'
  },
  MtEnumVariantUnit: {
    name: 'u32'
  },
  MtNamedField: {
    name: 'u32',
    type: 'u32'
  },
  MtRegistry: {
    strings: 'Vec<Text>',
    types: 'Vec<MtTypeIdDef>'
  },
  MtTypeDef: {
    _enum: {
      Builtin: 'Null',
      Struct: 'MtTypeDefStruct',
      // #[serde(rename = "tupleStruct")]
      TupleStruct: 'MtTypeDefTupleStruct',
      // #[serde(rename = "clikeEnum")]
      ClikeEnum: 'MtTypeDefClikeEnum',
      Enum: 'MtTypeDefEnum',
      Union: 'MtTypeDefUnion'
    }
  },
  MtTypeDefClikeEnum: {
    variants: 'Vec<MtClikeEnumVariant>'
  },
  MtTypeDefEnum: {
    variants: 'Vec<MtEnumVariant>'
  },
  MtTypeDefStruct: {
    fields: 'Vec<MtNamedField>'
  },
  MtTypeDefTupleStruct: {
    types: 'Vec<MtUnnamedField>'
  },
  MtTypeDefUnion: {
    fields: 'Vec<MtNamedField>'
  },
  MtTypeId: {
    _enum: {
      Custom: 'MtTypeIdCustom',
      Slice: 'MtTypeIdSlice',
      Array: 'MtTypeIdArray',
      Tuple: 'MtTypeIdTuple',
      Primitive: 'MtTypeIdPrimitive'
    }
  },
  MtTypeIdArray: {
    len: 'u16',
    type: 'u32'
  },
  MtTypeIdCustom: {
    name: 'u32',
    namespace: 'Vec<u32>',
    params: 'Vec<MtTypeId>'
  },
  MtTypeIdDef: {
    id: 'MtTypeId',
    def: 'MtTypeDef'
  },
  MtTypeIdPrimitive: {
    _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'I8', 'I16', 'I32', 'I64', 'I128']
  },
  MtTypeIdSlice: {
    type: 'u32'
  },
  MtTypeIdTuple: 'Vec<MtTypeId>',
  MtUnnamedField: {
    type: 'u32'
  }
};

export default {
  types: {
    ...layout,
    ...registry,
    ...spec,
    InkProject: {
      registry: 'MtRegistry',
      layout: 'InkStorageLayout',
      contract: 'InkContractSpec'
    }
  }
};
