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
  ContractConstructorSpec: {
    name: 'Text',
    selector: 'ContractSelector',
    args: 'Vec<ContractMessageParamSpec>',
    docs: 'Vec<Text>'
  },
  ContractContractSpec: {
    constructors: 'Vec<ContractConstructorSpec>',
    messages: 'Vec<ContractMessageSpec>',
    events: 'Vec<ContractEventSpec>',
    docs: 'Vec<Text>'
  },
  ContractDisplayName: 'SiPath',
  ContractEventParamSpec: {
    name: 'Text',
    indexed: 'bool',
    type: 'ContractTypeSpec',
    docs: 'Vec<Text>'
  },
  ContractEventSpec: {
    name: 'Text',
    args: 'Vec<ContractEventParamSpec>',
    docs: 'Vec<Text>'
  },
  ContractMessageParamSpec: {
    name: 'Text',
    type: 'ContractTypeSpec'
  },
  ContractMessageSpec: {
    name: 'Text',
    selector: 'ContractSelector',
    mutates: 'bool',
    payable: 'bool',
    args: 'Vec<ContractMessageParamSpec>',
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
  spec: 'ContractContractSpec'
};

const ContractMetadataV1 = {
  types: 'Vec<PortableType>',
  spec: 'ContractContractSpec'
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
    ContractMetadata: {
      _enum: {
        V0: 'ContractMetadataV0',
        V1: 'ContractMetadataV1'
      }
    },
    ContractMetadataLatest: 'ContractMetadataV1',
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
