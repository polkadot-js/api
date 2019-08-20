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
    MetadataV0: {
      outerEvent: 'OuterEventMetadataV0',
      modules: 'Vec<RuntimeModuleMetadataV0>',
      outerDispatch: 'OuterDispatchMetadataV0'
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
    OuterEventEventMetadataEventsV0: 'Vec<EventMetadataV0>',
    OuterEventEventMetadataV0: '(Text, OuterEventEventMetadataEventsV0)',
    OuterEventMetadataV0: {
      name: 'Text',
      events: 'Vec<OuterEventEventMetadataV0>'
    },
    PlainTypeV0: 'Type',
    RuntimeModuleMetadataV0: {
      prefix: 'Text',
      module: 'ModuleMetadataV0',
      storage: 'Option<StorageMetadataV0>'
    },
    StorageFunctionMetadataV0: {
      name: 'Text',
      modifier: 'StorageFunctionModifierV0',
      type: 'StorageFunctionTypeV0',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageFunctionModifierV0: {
      _enum: ['Optional', 'Default', 'Required']
    },
    StorageFunctionTypeV0: {
      _enum: {
        Type: 'PlainTypeV0',
        Map: 'MapTypeV0'
      }
    },
    StorageMetadataV0: {
      prefix: 'Text',
      functions: 'Vec<StorageFunctionMetadataV0>'
    },

    // v1
    EventMetadataV1: 'EventMetadataV0',
    FunctionArgumentMetadataV1: 'FunctionArgumentMetadataV0',
    FunctionMetadataV1: {
      name: 'Text',
      args: 'Vec<FunctionArgumentMetadataV1>',
      documentation: 'Vec<Text>'
    },
    MetadataV1: {
      modules: 'Vec<ModuleMetadataV1>'
    },
    ModuleMetadataV1: {
      name: 'Text',
      prefix: 'Text',
      storage: 'Option<Vec<StorageFunctionMetadataV1>>',
      calls: 'Option<Vec<FunctionMetadataV1>>',
      events: 'Option<Vec<EventMetadataV1>>'
    },
    StorageFunctionMetadataV1: 'StorageFunctionMetadataV0',
    StorageFunctionModifierV1: 'StorageFunctionModifierV0',
    StorageFunctionTypeV1: 'StorageFunctionTypeV0',

    // v2
    EventMetadataV2: 'EventMetadataV1',
    FunctionArgumentMetadataV2: 'FunctionArgumentMetadataV1',
    FunctionMetadataV2: 'FunctionMetadataV1',
    MapTypeV2: {
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
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
    MapTypeV3: 'MapTypeV2',
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
    MapTypeV4: {
      hasher: 'StorageHasher',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
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
    MapTypeV5: 'MapTypeV4',
    PlainTypeV5: 'Type',
    StorageFunctionModifierV5: 'StorageFunctionModifierV4',

    // v6
    DoubleMapTypeV6: 'DoubleMapTypeV5',
    EventMetadataV6: 'EventMetadataV5',
    FunctionArgumentMetadataV6: 'FunctionArgumentMetadataV5',
    FunctionMetadataV6: 'FunctionMetadataV5',
    MapTypeV6: 'MapTypeV5',
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
    MapTypeV7: 'MapTypeV6',
    ModuleConstantMetadataV7: 'ModuleConstantMetadataV6',
    PlainTypeV7: 'Type',
    StorageEntryModifierV7: 'StorageEntryModifierV6'
  }
};
