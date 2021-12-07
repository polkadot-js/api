// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types';

import { objectSpread } from '@polkadot/util';

// order important in structs... :)
/* eslint-disable sort-keys */

const layout = {
  ContractCryptoHasher: {
    _enum: ['Blake2x256', 'Sha2x256', 'Keccak256']
  },
  ContractDiscriminant: 'u32',
  ContractLayoutArray: {
    offset: 'ContractLayoutKey',
    len: 'u32',
    cellsPerElem: 'u64',
    layout: 'ContractStorageLayout'
  },
  ContractLayoutCell: {
    key: 'ContractLayoutKey',
    ty: 'SiLookupTypeId'
  },
  ContractLayoutEnum: {
    dispatchKey: 'ContractLayoutKey',
    variants: 'BTreeMap<ContractDiscriminant, ContractLayoutStruct>'
  },
  ContractLayoutHash: {
    offset: 'ContractLayoutKey',
    strategy: 'ContractLayoutHashingStrategy',
    layout: 'ContractStorageLayout'
  },
  ContractLayoutHashingStrategy: {
    hasher: 'ContractCryptoHasher',
    postfix: 'Vec<u8>',
    prefix: 'Vec<u8>'
  },
  ContractLayoutKey: '[u8; 32]',
  ContractLayoutStruct: {
    fields: 'Vec<ContractLayoutStructField>'
  },
  ContractLayoutStructField: {
    layout: 'ContractStorageLayout',
    name: 'Text'
  },
  ContractStorageLayout: {
    _enum: {
      Cell: 'ContractLayoutCell',
      Hash: 'ContractLayoutHash',
      Array: 'ContractLayoutArray',
      Struct: 'ContractLayoutStruct',
      Enum: 'ContractLayoutEnum'
    }
  }
};

const spec = {
  ContractConstructorSpecV0: {
    name: 'Text',
    selector: 'ContractSelector',
    args: 'Vec<ContractMessageParamSpecV0>',
    docs: 'Vec<Text>'
  },
  ContractConstructorSpecV2: {
    label: 'Text',
    selector: 'ContractSelector',
    args: 'Vec<ContractMessageParamSpecV2>',
    docs: 'Vec<Text>'
  },
  ContractContractSpecV0: {
    constructors: 'Vec<ContractConstructorSpecV0>',
    messages: 'Vec<ContractMessageSpecV0>',
    events: 'Vec<ContractEventSpecV0>',
    docs: 'Vec<Text>'
  },
  ContractContractSpecV2: {
    constructors: 'Vec<ContractConstructorSpecV2>',
    messages: 'Vec<ContractMessageSpecV2>',
    events: 'Vec<ContractEventSpecV2>',
    docs: 'Vec<Text>'
  },
  ContractDisplayName: 'SiPath',
  ContractEventParamSpecV0: {
    name: 'Text',
    indexed: 'bool',
    type: 'ContractTypeSpec',
    docs: 'Vec<Text>'
  },
  ContractEventParamSpecV2: {
    label: 'Text',
    indexed: 'bool',
    type: 'ContractTypeSpec',
    docs: 'Vec<Text>'
  },
  ContractEventSpecV0: {
    name: 'Text',
    args: 'Vec<ContractEventParamSpecV0>',
    docs: 'Vec<Text>'
  },
  ContractEventSpecV2: {
    label: 'Text',
    args: 'Vec<ContractEventParamSpecV0>',
    docs: 'Vec<Text>'
  },
  ContractMessageParamSpecV0: {
    name: 'Text',
    type: 'ContractTypeSpec'
  },
  ContractMessageParamSpecV2: {
    label: 'Text',
    type: 'ContractTypeSpec'
  },
  ContractMessageSpecV0: {
    name: 'Text',
    selector: 'ContractSelector',
    mutates: 'bool',
    payable: 'bool',
    args: 'Vec<ContractMessageParamSpecV0>',
    returnType: 'Option<ContractTypeSpec>',
    docs: 'Vec<Text>'
  },
  ContractMessageSpecV2: {
    label: 'Text',
    selector: 'ContractSelector',
    mutates: 'bool',
    payable: 'bool',
    args: 'Vec<ContractMessageParamSpecV2>',
    returnType: 'Option<ContractTypeSpec>',
    docs: 'Vec<Text>'
  },
  ContractSelector: '[u8; 4]',
  ContractTypeSpec: {
    type: 'SiLookupTypeId',
    displayName: 'ContractDisplayName'
  }
};

const ContractMetadataV0 = {
  types: 'Vec<Si0Type>',
  spec: 'ContractContractSpecV0'
};

const ContractMetadataV1 = {
  types: 'Vec<PortableType>',
  spec: 'ContractContractSpecV0'
};

const ContractMetadataV2 = {
  types: 'Vec<PortableType>',
  spec: 'ContractContractSpecV2'
};

const ContractProjectInfo = {
  source: 'ContractProjectSource',
  contract: 'ContractProjectContract'
};

export default {
  rpc: {},
  types: objectSpread({}, layout, spec, {
    ContractProjectInfo,
    ContractMetadataV0,
    ContractMetadataV1,
    ContractMetadataV2,
    ContractMetadata: {
      _enum: {
        V0: 'ContractMetadataV0',
        V1: 'ContractMetadataV1',
        V2: 'ContractMetadataV2'
      }
    },
    ContractMetadataLatest: 'ContractMetadataV2',
    ContractProjectV0: objectSpread({ metadataVersion: 'Text' }, ContractProjectInfo, ContractMetadataV0),
    ContractProject: '(ContractProjectInfo, ContractMetadata)',
    ContractProjectContract: {
      _alias: {
        docs: 'documentation'
      },
      name: 'Text',
      version: 'Text',
      authors: 'Vec<Text>',
      description: 'Option<Text>',
      docs: 'Option<Text>',
      repository: 'Option<Text>',
      homepage: 'Option<Text>',
      license: 'Option<Text>'
    },
    ContractProjectSource: {
      _alias: {
        wasmHash: 'hash'
      },
      wasmHash: '[u8; 32]',
      language: 'Text',
      compiler: 'Text',
      wasm: 'Raw'
    }
  })
} as Definitions;
