// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const layout = {
  InkLayoutKey: '[u8; 32]',
  InkLayoutField: {
    name: 'MtRegistryIndex',
    layout: 'InkStorageLayout'
  },
  InkLayoutRange: {
    offset: 'InkLayoutKey',
    len: 'u32',
    elemType: 'MtRegistryIndex'
  },
  InkLayoutStruct: {
    type: 'MtRegistryIndex',
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
    name: 'MtRegistryIndex',
    selector: 'InkSelector',
    args: 'Vec<InkMessageParamSpec>',
    docs: 'Vec<Text>'
  },
  InkContractSpec: {
    name: 'MtRegistryIndex',
    constructors: 'Vec<InkConstructorSpec>',
    messages: 'Vec<InkMessageSpec>',
    events: 'Vec<InkEventSpec>',
    docs: 'Vec<Text>'
  },
  InkEventParamSpec: {
    name: 'MtRegistryIndex',
    indexed: 'bool',
    type: 'InkTypeSpec',
    docs: 'Vec<Text>'
  },
  InkEventSpec: {
    name: 'MtRegistryIndex',
    args: 'Vec<InkEventParamSpec>',
    docs: 'Vec<Text>'
  },
  InkMessageParamSpec: {
    name: 'MtRegistryIndex',
    type: 'InkTypeSpec'
  },
  InkMessageSpec: {
    name: 'MtRegistryIndex',
    selector: 'InkSelector',
    mutates: 'bool',
    args: 'Vec<InkMessageParamSpec>',
    returnType: 'Option<InkTypeSpec>',
    docs: 'Vec<Text>'
  },
  InkSelector: '[u8; 4]',
  InkTypeSpec: {
    ty: 'MtRegistryIndex',
    displayName: 'MtRegistryIndex'
  }
};

const registry = {
  MtClikeEnumVariant: {
    name: 'MtRegistryIndex',
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
    name: 'MtRegistryIndex',
    types: 'Vec<MtRegistryIndex>'
  },
  MtEnumVariantStruct: {
    name: 'MtRegistryIndex',
    fields: 'Vec<MtNamedField>'
  },
  MtEnumVariantUnit: {
    name: 'MtRegistryIndex'
  },
  MtNamedField: {
    name: 'MtRegistryIndex',
    type: 'MtRegistryIndex'
  },
  MtRegistry: {
    strings: 'Vec<Text>',
    types: 'Vec<MtTypeIdDef>'
  },
  MtRegistryIndex: 'u32',
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
    types: 'Vec<MtRegistryIndex>'
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
    type: 'MtRegistryIndex'
  },
  MtTypeIdCustom: {
    name: 'MtRegistryIndex',
    namespace: 'Vec<MtRegistryIndex>',
    params: 'Vec<MtRegistryIndex>'
  },
  MtTypeIdDef: {
    id: 'MtTypeId',
    def: 'MtTypeDef'
  },
  MtTypeIdPrimitive: {
    _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'I8', 'I16', 'I32', 'I64', 'I128']
  },
  MtTypeIdSlice: {
    type: 'MtRegistryIndex'
  },
  MtTypeIdTuple: 'Vec<MtTypeId>'
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
