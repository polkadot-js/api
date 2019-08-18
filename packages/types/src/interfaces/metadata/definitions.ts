// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    // v0
    CallMetadataV0: {
      name: 'Text',
      functions: 'Vec<FunctionMetadataV0>'
    },
    EventMetadataV0: {
      name: 'Text',
      args: 'Vec<Type>',
      documentation: 'Vec<Text>'
    },
    FunctionArgumentMetadataV0: {
      name: 'Text',
      type: 'Type'
    },
    FunctionMetadataV0: {
      id: 'u16',
      name: 'Text',
      args: 'Vec<FunctionArgumentMetadataV0>',
      documentation: 'Vec<Text>'
    },
    MapTypeV0: {
      key: 'Type',
      value: 'Type'
    },
    ModuleMetadataV0: {
      name: 'Text',
      call: 'CallMetadataV0'
    },
    OuterDispatchCallV0: {
      name: 'Text',
      prefix: 'Text',
      index: 'u16'
    },
    OuterDispatchMetadataV0: {
      name: 'Text',
      calls: 'Vec<OuterDispatchCallV0>'
    },
    PlainTypeV0: 'Type',
    StorageFunctionModifierV0: {
      _enum: ['Optional', 'Default', 'Required']
    },

    // v1
    EventMetadataV1: 'EventMetadataV0',
    FunctionArgumentMetadataV1: 'FunctionArgumentMetadataV0',
    FunctionMetadataV1: {
      name: 'Text',
      args: 'Vec<FunctionArgumentMetadataV1>',
      documentation: 'Vec<Text>'
    },
    PlainTypeV1: 'Type',
    StorageFunctionModifierV1: 'StorageFunctionModifierV0',

    // v2
    EventMetadataV2: 'EventMetadataV1',
    FunctionArgumentMetadataV2: 'FunctionArgumentMetadataV1',
    FunctionMetadataV2: 'FunctionMetadataV1',
    PlainTypeV2: 'Type',
    StorageFunctionModifierV2: 'StorageFunctionModifierV1',

    // v3
    DoubleMapTypeV3: {
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'Text'
    },
    EventMetadataV3: 'EventMetadataV2',
    FunctionArgumentMetadataV3: 'FunctionArgumentMetadataV2',
    FunctionMetadataV3: 'FunctionMetadataV2',
    PlainTypeV3: 'Type',
    StorageFunctionModifierV3: 'StorageFunctionModifierV2',

    // v4
    DoubleMapTypeV4: {
      hasher: 'StorageHasher',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'Text'
    },
    EventMetadataV4: 'EventMetadataV3',
    FunctionArgumentMetadataV4: 'FunctionArgumentMetadataV3',
    FunctionMetadataV4: 'FunctionMetadataV3',
    PlainTypeV4: 'Type',
    StorageFunctionModifierV4: 'StorageFunctionModifierV3',

    // v5
    DoubleMapTypeV5: {
      hasher: 'StorageHasher',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasher'
    },
    EventMetadataV5: 'EventMetadataV4',
    FunctionArgumentMetadataV5: 'FunctionArgumentMetadataV4',
    FunctionMetadataV5: 'FunctionMetadataV4',
    PlainTypeV5: 'Type',
    StorageFunctionModifierV5: 'StorageFunctionModifierV4',

    // v6
    DoubleMapTypeV6: 'DoubleMapTypeV5',
    EventMetadataV6: 'EventMetadataV5',
    FunctionArgumentMetadataV6: 'FunctionArgumentMetadataV5',
    FunctionMetadataV6: 'FunctionMetadataV5',
    ModuleConstantMetadataV6: {
      name: 'Text',
      type: 'Type',
      value: 'Bytes',
      documentation: 'Vec<Text>'
    },
    PlainTypeV6: 'Type',
    StorageEntryModifierV6: 'StorageFunctionModifierV5',

    // v7
    DoubleMapTypeV7: 'DoubleMapTypeV6',
    EventMetadataV7: 'EventMetadataV6',
    FunctionArgumentMetadataV7: 'FunctionArgumentMetadataV6',
    FunctionMetadataV7: 'FunctionMetadataV6',
    ModuleConstantMetadataV7: 'ModuleConstantMetadataV6',
    PlainTypeV7: 'Type',
    StorageEntryModifierV7: 'StorageEntryModifierV6'
  }
};
