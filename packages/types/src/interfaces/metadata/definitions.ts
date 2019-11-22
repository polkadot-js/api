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
        Plain: 'PlainTypeV0',
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
    MetadataV2: {
      modules: 'Vec<ModuleMetadataV2>'
    },
    ModuleMetadataV2: {
      name: 'Text',
      prefix: 'Text',
      storage: 'Option<Vec<StorageFunctionMetadataV2>>',
      calls: 'Option<Vec<FunctionMetadataV2>>',
      events: 'Option<Vec<EventMetadataV2>>'
    },
    PlainTypeV2: 'Type',
    StorageFunctionMetadataV2: {
      name: 'Text',
      modifier: 'StorageFunctionModifierV2',
      type: 'StorageFunctionTypeV2',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageFunctionModifierV2: 'StorageFunctionModifierV1',
    StorageFunctionTypeV2: {
      _enum: {
        Plain: 'PlainTypeV2',
        Map: 'MapTypeV2'
      }
    },

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
    MetadataV3: {
      modules: 'Vec<ModuleMetadataV3>'
    },
    ModuleMetadataV3: {
      name: 'Text',
      prefix: 'Text',
      storage: 'Option<Vec<StorageFunctionMetadataV3>>',
      calls: 'Option<Vec<FunctionMetadataV3>>',
      events: 'Option<Vec<EventMetadataV3>>'
    },
    PlainTypeV3: 'Type',
    StorageFunctionMetadataV3: {
      name: 'Text',
      modifier: 'StorageFunctionModifierV3',
      type: 'StorageFunctionTypeV3',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageFunctionModifierV3: 'StorageFunctionModifierV2',
    StorageFunctionTypeV3: {
      _enum: {
        Plain: 'PlainTypeV3',
        Map: 'MapTypeV3',
        DoubleMap: 'DoubleMapTypeV3'
      }
    },

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
    MetadataV4: {
      modules: 'Vec<ModuleMetadataV4>'
    },
    ModuleMetadataV4: {
      name: 'Text',
      prefix: 'Text',
      storage: 'Option<Vec<StorageFunctionMetadataV4>>',
      calls: 'Option<Vec<FunctionMetadataV4>>',
      events: 'Option<Vec<EventMetadataV4>>'
    },
    PlainTypeV4: 'Type',
    StorageFunctionMetadataV4: {
      name: 'Text',
      modifier: 'StorageFunctionModifierV4',
      type: 'StorageFunctionTypeV4',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageFunctionModifierV4: 'StorageFunctionModifierV3',
    StorageFunctionTypeV4: {
      _enum: {
        Plain: 'PlainTypeV4',
        Map: 'MapTypeV4',
        DoubleMap: 'DoubleMapTypeV4'
      }
    },

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
    MetadataV5: {
      modules: 'Vec<ModuleMetadataV5>'
    },
    ModuleMetadataV5: {
      name: 'Text',
      prefix: 'Text',
      storage: 'Option<Vec<StorageFunctionMetadataV5>>',
      calls: 'Option<Vec<FunctionMetadataV5>>',
      events: 'Option<Vec<EventMetadataV5>>'
    },
    PlainTypeV5: 'Type',
    StorageFunctionMetadataV5: {
      name: 'Text',
      modifier: 'StorageFunctionModifierV5',
      type: 'StorageFunctionTypeV5',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageFunctionModifierV5: 'StorageFunctionModifierV4',
    StorageFunctionTypeV5: {
      _enum: {
        Plain: 'PlainTypeV5',
        Map: 'MapTypeV5',
        DoubleMap: 'DoubleMapTypeV5'
      }
    },

    // v6
    DoubleMapTypeV6: 'DoubleMapTypeV5',
    EventMetadataV6: 'EventMetadataV5',
    FunctionArgumentMetadataV6: 'FunctionArgumentMetadataV5',
    FunctionMetadataV6: 'FunctionMetadataV5',
    MapTypeV6: 'MapTypeV5',
    MetadataV6: {
      modules: 'Vec<ModuleMetadataV6>'
    },
    ModuleConstantMetadataV6: {
      name: 'Text',
      type: 'Type',
      value: 'Bytes',
      documentation: 'Vec<Text>'
    },
    ModuleMetadataV6: {
      name: 'Text',
      prefix: 'Text',
      storage: 'Option<Vec<StorageEntryMetadataV6>>',
      calls: 'Option<Vec<FunctionMetadataV6>>',
      events: 'Option<Vec<EventMetadataV6>>',
      constants: 'Vec<ModuleConstantMetadataV6>'
    },
    PlainTypeV6: 'Type',
    StorageEntryModifierV6: 'StorageFunctionModifierV5',
    StorageEntryMetadataV6: 'StorageFunctionMetadataV5',
    StorageEntryTypeV6: 'StorageFunctionTypeV5',

    // v7
    DoubleMapTypeV7: 'DoubleMapTypeV6',
    EventMetadataV7: 'EventMetadataV6',
    FunctionArgumentMetadataV7: 'FunctionArgumentMetadataV6',
    FunctionMetadataV7: 'FunctionMetadataV6',
    MapTypeV7: 'MapTypeV6',
    MetadataV7: {
      modules: 'Vec<ModuleMetadataV7>'
    },
    ModuleConstantMetadataV7: 'ModuleConstantMetadataV6',
    ModuleMetadataV7: {
      name: 'Text',
      storage: 'Option<StorageMetadataV7>',
      calls: 'Option<Vec<FunctionMetadataV7>>',
      events: 'Option<Vec<EventMetadataV7>>',
      constants: 'Vec<ModuleConstantMetadataV7>'
    },
    PlainTypeV7: 'Type',
    StorageEntryModifierV7: 'StorageEntryModifierV6',
    StorageEntryMetadataV7: 'StorageEntryMetadataV6',
    StorageEntryTypeV7: 'StorageEntryTypeV6',
    StorageMetadataV7: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV7>'
    },

    // v8
    DoubleMapTypeV8: 'DoubleMapTypeV7',
    ErrorMetadataV8: {
      name: 'Text',
      documentation: 'Vec<Text>'
    },
    EventMetadataV8: 'EventMetadataV7',
    FunctionArgumentMetadataV8: 'FunctionArgumentMetadataV7',
    FunctionMetadataV8: 'FunctionMetadataV7',
    MapTypeV8: 'MapTypeV7',
    MetadataV8: {
      modules: 'Vec<ModuleMetadataV8>'
    },
    ModuleConstantMetadataV8: 'ModuleConstantMetadataV7',
    ModuleMetadataV8: {
      name: 'Text',
      storage: 'Option<StorageMetadataV8>',
      calls: 'Option<Vec<FunctionMetadataV8>>',
      events: 'Option<Vec<EventMetadataV8>>',
      constants: 'Vec<ModuleConstantMetadataV8>',
      errors: 'Vec<ErrorMetadataV8>'
    },
    PlainTypeV8: 'Type',
    StorageEntryModifierV8: 'StorageEntryModifierV7',
    StorageEntryMetadataV8: 'StorageEntryMetadataV7',
    StorageEntryTypeV8: 'StorageEntryTypeV7',
    StorageMetadataV8: 'StorageMetadataV7',

    // v9
    DoubleMapTypeV9: 'DoubleMapTypeV8',
    ErrorMetadataV9: 'ErrorMetadataV8',
    EventMetadataV9: 'EventMetadataV8',
    FunctionArgumentMetadataV9: 'FunctionArgumentMetadataV8',
    FunctionMetadataV9: 'FunctionMetadataV8',
    MapTypeV9: {
      hasher: 'StorageHasher',
      key: 'Type',
      value: 'Type',
      kind: 'StorageMapTypeV9'
    },
    MetadataV9: {
      modules: 'Vec<ModuleMetadataV9>'
    },
    ModuleConstantMetadataV9: 'ModuleConstantMetadataV8',
    ModuleMetadataV9: {
      name: 'Text',
      storage: 'Option<StorageMetadataV9>',
      calls: 'Option<Vec<FunctionMetadataV9>>',
      events: 'Option<Vec<EventMetadataV9>>',
      constants: 'Vec<ModuleConstantMetadataV9>',
      errors: 'Vec<ErrorMetadataV9>'
    },
    PlanTypeV9: 'Type',
    StorageEntryMetadataV9: 'StorageEntryMetadataV8',
    StorageEntryModifierV9: 'StorageEntryModifierV8',
    StorageEntryTypeV9: 'StorageEntryTypeV9',
    StorageFunctionMetadataV9: {
      name: 'Text',
      modifier: 'StorageFunctionModifierV9',
      type: 'StorageFunctionTypeV9',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageFunctionModifierV9: 'StorageFunctionModifierV8',
    StorageFunctionTypeV9: {
      _enum: {
        Plain: 'PlainTypeV9',
        Map: 'MapTypeV9',
        DoubleMap: 'DoubleMapTypeV9'
      }
    },
    StorageMapTypeV9: {
      _enum: ['Map', 'LinkedMap', 'PrefixedMap']
    },
    StorageMetadataV9: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV9>'
    },

    // This always maps to the latest
    EventMetadataLatest: 'EventMetadataV9',
    FunctionArgumentMetadataLatest: 'FunctionArgumentMetadataV9',
    FunctionMetadataLatest: 'FunctionMetadataV9',
    MetadataLatest: 'MetadataV9',
    ModuleConstantMetadataLatest: 'ModuleConstantMetadataV9',
    ModuleMetadataLatest: 'ModuleMetadataV9',
    PlainTypeLatest: 'PlainTypeV9',
    StorageEntryMetadataLatest: 'StorageEntryMetadataV9',
    StorageEntryModifierLatest: 'StorageEntryModifierV9',
    StorageEntryTypeLatest: 'StorageEntryTypeV9'
  }
};
