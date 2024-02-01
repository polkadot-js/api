// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types/index.js';

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
  ContractConstructorSpecV1: {
    name: 'Vec<Text>',
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
  ContractConstructorSpecV3: {
    label: 'Text',
    selector: 'ContractSelector',
    payable: 'bool',
    args: 'Vec<ContractMessageParamSpecV2>',
    docs: 'Vec<Text>'
  },
  ContractConstructorSpecV4: {
    label: 'Text',
    selector: 'ContractSelector',
    payable: 'bool',
    args: 'Vec<ContractMessageParamSpecV2>',
    docs: 'Vec<Text>',
    default: 'bool',
    returnType: 'Option<ContractTypeSpec>'
  },
  ContractContractSpecV0: {
    constructors: 'Vec<ContractConstructorSpecV0>',
    messages: 'Vec<ContractMessageSpecV0>',
    events: 'Vec<ContractEventSpecV0>',
    docs: 'Vec<Text>'
  },
  ContractContractSpecV1: {
    constructors: 'Vec<ContractConstructorSpecV1>',
    messages: 'Vec<ContractMessageSpecV1>',
    events: 'Vec<ContractEventSpecV1>',
    docs: 'Vec<Text>'
  },
  ContractContractSpecV2: {
    constructors: 'Vec<ContractConstructorSpecV2>',
    messages: 'Vec<ContractMessageSpecV2>',
    events: 'Vec<ContractEventSpecV2>',
    docs: 'Vec<Text>'
  },
  ContractContractSpecV3: {
    constructors: 'Vec<ContractConstructorSpecV3>',
    messages: 'Vec<ContractMessageSpecV2>',
    events: 'Vec<ContractEventSpecV2>',
    docs: 'Vec<Text>'
  },
  ContractContractSpecV4: {
    constructors: 'Vec<ContractConstructorSpecV4>',
    messages: 'Vec<ContractMessageSpecV3>',
    events: 'Vec<ContractEventSpecV2>',
    docs: 'Vec<Text>',
    environment: 'ContractEnvironmentV4'
  },
  ContractContractSpecV5: {
    constructors: 'Vec<ContractConstructorSpecV4>',
    messages: 'Vec<ContractMessageSpecV3>',
    events: 'Vec<ContractEventSpecV3>',
    docs: 'Vec<Text>',
    environment: 'ContractEnvironmentV4'
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
  ContractEventSpecV1: {
    name: 'Text',
    args: 'Vec<ContractEventParamSpecV0>',
    docs: 'Vec<Text>'
  },
  ContractEventSpecV2: {
    label: 'Text',
    args: 'Vec<ContractEventParamSpecV2>',
    docs: 'Vec<Text>'
  },
  ContractEventSpecV3: {
    label: 'Text',
    args: 'Vec<ContractEventParamSpecV2>',
    docs: 'Vec<Text>',
    module_path: 'Text',
    signature_topic: "[u8; 32]"
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
  ContractMessageSpecV1: {
    name: 'Vec<Text>',
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
  ContractMessageSpecV3: {
    label: 'Text',
    selector: 'ContractSelector',
    mutates: 'bool',
    payable: 'bool',
    args: 'Vec<ContractMessageParamSpecV2>',
    returnType: 'Option<ContractTypeSpec>',
    docs: 'Vec<Text>',
    default: 'bool'
  },
  ContractSelector: '[u8; 4]',
  ContractTypeSpec: {
    type: 'SiLookupTypeId',
    displayName: 'ContractDisplayName'
  }
};

const latest = {
  ContractConstructorSpecLatest: 'ContractConstructorSpecV4',
  ContractEventSpecLatest: 'ContractEventSpecV3',
  ContractEventParamSpecLatest: 'ContractEventParamSpecV2',
  ContractMessageParamSpecLatest: 'ContractMessageParamSpecV2',
  ContractMessageSpecLatest: 'ContractMessageSpecV3',
  ContractMetadataLatest: 'ContractMetadataV5'
};

export default {
  rpc: {},
  types: {
    ...layout,
    ...spec,
    ...latest,
    ContractProjectInfo: {
      source: 'ContractProjectSource',
      contract: 'ContractProjectContract'
    },
    ContractMetadataV0: {
      metadataVersion: 'Text',
      types: 'Vec<Si0Type>',
      spec: 'ContractContractSpecV0'
    },
    ContractMetadataV1: {
      types: 'Vec<PortableType>',
      spec: 'ContractContractSpecV1'
    },
    ContractMetadataV2: {
      types: 'Vec<PortableType>',
      spec: 'ContractContractSpecV2'
    },
    ContractMetadataV3: {
      types: 'Vec<PortableType>',
      spec: 'ContractContractSpecV3'
    },
    ContractMetadataV4: {
      types: 'Vec<PortableType>',
      spec: 'ContractContractSpecV4'
    },
    ContractMetadataV5: {
      types: 'Vec<PortableType>',
      spec: 'ContractContractSpecV5'
    },
    ContractMetadata: {
      _enum: {
        V0: 'ContractMetadataV0',
        V1: 'ContractMetadataV1',
        V2: 'ContractMetadataV2',
        V3: 'ContractMetadataV3',
        V4: 'ContractMetadataV4',
        V5: 'ContractMetadataV5'
      }
    },
    ContractProjectV0: {
      metadataVersion: 'Text',
      source: 'ContractProjectSource',
      contract: 'ContractProjectContract',
      types: 'Vec<Si0Type>',
      spec: 'ContractContractSpecV0'
    },
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
    },
    ContractEnvironmentV4: {
      _alias: {
        hashType: 'hash'
      },
      // NOTE These are not marked optional in the Rust code, however since we
      // convert from older versions to newer, we may not have these fields.
      // The Option<...> works since our inputs are always JSON, so it will
      // be None when not specified.
      //
      // Additionally we don't mark the full structure as Option, rather we
      // do it on a per-field basis since fields may be added as the versions
      // progress.
      accountId: 'Option<ContractTypeSpec>',
      balance: 'Option<ContractTypeSpec>',
      blockNumber: 'Option<ContractTypeSpec>',
      hashType: 'Option<ContractTypeSpec>',
      timestamp: 'Option<ContractTypeSpec>',
      maxEventTopics: 'Option<u32>'
    }
  }
} as Definitions;
