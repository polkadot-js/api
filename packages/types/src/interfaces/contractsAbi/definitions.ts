// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable sort-keys */

const layout = {
  InkLayoutKey: '[u8; 32]',
  InkStorageLayout: {
    _enum: {
      Cell: 'InkLayoutCell',
      Hash: 'InkLayoutHash',
      Array: 'InkLayoutArray',
      Struct: 'InkLayoutStruct',
      Enum: 'InkLayoutEnum'
    }
  },
  InkLayoutCell: {
    key: 'InkLayoutKey',
    ty: 'MtLookupTypeId'
  },
  InkCryptoHasher: {
    _enum: ['Blake2x256', 'Sha2x256', 'Keccak256']
  },
  InkLayoutHash: {
    offset: 'InkLayoutKey',
    strategy: 'InkLayoutHashingStrategy',
    layout: 'InkStorageLayout'
  },
  InkLayoutHashingStrategy: {
    hasher: 'InkCryptoHasher',
    postfix: 'Vec<u8>',
    prefix: 'Vec<u8>'
  },
  InkLayoutArray: {
    offset: 'InkLayoutKey',
    len: 'u32',
    cellsPerElem: 'u64',
    layout: 'InkStorageLayout'
  },
  InkLayoutStruct: {
    fields: 'Vec<InkLayoutStructField>'
  },
  InkLayoutStructField: {
    layout: 'InkStorageLayout',
    name: 'Text'
  },
  InkDiscriminant: 'u32',
  InkLayoutEnum: {
    dispatchKey: 'InkLayoutKey',
    variants: 'BTreeMap<InkDiscriminant, InkLayoutStruct>'
  }
};

const spec = {
  InkPath: 'Vec<Text>',
  InkDisplayName: 'InkPath',
  InkConstructorSpec: {
    name: 'Text',
    selector: 'InkSelector',
    args: 'Vec<InkMessageParamSpec>',
    docs: 'Vec<Text>'
  },
  InkContractSpec: {
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
    payable: 'bool',
    args: 'Vec<InkMessageParamSpec>',
    returnType: 'Option<InkTypeSpec>',
    docs: 'Vec<Text>'
  },
  InkSelector: '[u8; 4]',
  InkTypeSpec: {
    type: 'MtLookupTypeId',
    displayName: 'InkDisplayName'
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
    InkContractContract: {
      authors: 'Vec<Text>',
      name: 'Text',
      version: 'Text'
    },
    InkContractSource: {
      compiler: 'Text',
      hash: '[u8; 32]',
      language: 'Text'
    },
    InkProject: {
      contract: 'InkContractContract',
      metadata_version: 'Text',
      source: 'InkContractSource',
      spec: 'InkContractSpec',
      storage: 'InkStorageLayout',
      types: 'Vec<MtType>'
    }
  }
};
