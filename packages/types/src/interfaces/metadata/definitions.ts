// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

const AllHashers = {
  Blake2_128: null, // eslint-disable-line camelcase
  Blake2_256: null, // eslint-disable-line camelcase
  Blake2_128Concat: null, // eslint-disable-line camelcase
  Twox128: null,
  Twox256: null,
  Twox64Concat: null,
  // new in v11
  Identity: null
};

export { AllHashers };

export default {
  rpc: {},
  types: {
    // v5
    DoubleMapTypeV5: {
      hasher: 'StorageHasherV5',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasherV5'
    },
    EventMetadataV5: {
      name: 'Text',
      args: 'Vec<Type>',
      documentation: 'Vec<Text>'
    },
    FunctionArgumentMetadataV5: {
      name: 'Text',
      type: 'Type'
    },
    FunctionMetadataV5: {
      name: 'Text',
      args: 'Vec<FunctionArgumentMetadataV5>',
      documentation: 'Vec<Text>'
    },
    MapTypeV5: {
      hasher: 'StorageHasherV5',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
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
    StorageFunctionMetadataV5: {
      name: 'Text',
      modifier: 'StorageFunctionModifierV5',
      type: 'StorageFunctionTypeV5',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageFunctionModifierV5: {
      _enum: ['Optional', 'Default', 'Required']
    },
    StorageFunctionTypeV5: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV5',
        DoubleMap: 'DoubleMapTypeV5'
      }
    },
    StorageHasherV5: {
      _enum: {
        Blake2_128: null, // eslint-disable-line camelcase
        Blake2_256: null, // eslint-disable-line camelcase
        Twox128: null,
        Twox256: null,
        Twox64Concat: null
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
    StorageHasherV6: 'StorageHasherV5',

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
    StorageHasherV7: 'StorageHasherV6',
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
    StorageEntryModifierV8: 'StorageEntryModifierV7',
    StorageEntryMetadataV8: 'StorageEntryMetadataV7',
    StorageEntryTypeV8: 'StorageEntryTypeV7',
    StorageHasherV8: 'StorageHasherV7',
    StorageMetadataV8: 'StorageMetadataV7',

    // v9
    DoubleMapTypeV9: 'DoubleMapTypeV8',
    ErrorMetadataV9: 'ErrorMetadataV8',
    EventMetadataV9: 'EventMetadataV8',
    FunctionArgumentMetadataV9: 'FunctionArgumentMetadataV8',
    FunctionMetadataV9: 'FunctionMetadataV8',
    MetadataV9: 'MetadataV8',
    ModuleConstantMetadataV9: 'ModuleConstantMetadataV8',
    ModuleMetadataV9: 'ModuleMetadataV8',
    StorageEntryModifierV9: 'StorageEntryModifierV8',
    StorageEntryMetadataV9: 'StorageEntryMetadataV8',
    StorageEntryTypeV9: 'StorageEntryTypeV8',
    StorageHasherV9: 'StorageHasherV8',
    StorageMetadataV9: 'StorageMetadataV8',

    // v10
    DoubleMapTypeV10: {
      hasher: 'StorageHasherV10',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasherV10'
    },
    ErrorMetadataV10: 'ErrorMetadataV9',
    EventMetadataV10: 'EventMetadataV9',
    FunctionArgumentMetadataV10: 'FunctionArgumentMetadataV9',
    FunctionMetadataV10: 'FunctionMetadataV9',
    MapTypeV10: {
      hasher: 'StorageHasherV10',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
    MetadataV10: {
      modules: 'Vec<ModuleMetadataV10>'
    },
    ModuleConstantMetadataV10: 'ModuleConstantMetadataV9',
    ModuleMetadataV10: {
      name: 'Text',
      storage: 'Option<StorageMetadataV10>',
      calls: 'Option<Vec<FunctionMetadataV10>>',
      events: 'Option<Vec<EventMetadataV10>>',
      constants: 'Vec<ModuleConstantMetadataV10>',
      errors: 'Vec<ErrorMetadataV10>'
    },
    StorageEntryModifierV10: 'StorageEntryModifierV9',
    StorageEntryMetadataV10: {
      name: 'Text',
      modifier: 'StorageEntryModifierV10',
      type: 'StorageEntryTypeV10',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryTypeV10: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV10',
        DoubleMap: 'DoubleMapTypeV10'
      }
    },
    StorageMetadataV10: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV10>'
    },
    StorageHasherV10: {
      _enum: {
        Blake2_128: null, // eslint-disable-line camelcase
        Blake2_256: null, // eslint-disable-line camelcase
        Blake2_128Concat: null, // eslint-disable-line camelcase
        Twox128: null,
        Twox256: null,
        Twox64Concat: null
      }
    },

    // v11
    DoubleMapTypeV11: {
      hasher: 'StorageHasherV11',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasherV11'
    },
    ErrorMetadataV11: 'ErrorMetadataV10',
    EventMetadataV11: 'EventMetadataV10',
    ExtrinsicMetadataV11: {
      version: 'u8',
      signedExtensions: 'Vec<Text>'
    },
    FunctionArgumentMetadataV11: 'FunctionArgumentMetadataV10',
    FunctionMetadataV11: 'FunctionMetadataV10',
    MapTypeV11: {
      hasher: 'StorageHasherV11',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
    MetadataV11: {
      modules: 'Vec<ModuleMetadataV11>',
      extrinsic: 'ExtrinsicMetadataV11'
    },
    ModuleConstantMetadataV11: 'ModuleConstantMetadataV10',
    ModuleMetadataV11: {
      name: 'Text',
      storage: 'Option<StorageMetadataV11>',
      calls: 'Option<Vec<FunctionMetadataV11>>',
      events: 'Option<Vec<EventMetadataV11>>',
      constants: 'Vec<ModuleConstantMetadataV11>',
      errors: 'Vec<ErrorMetadataV11>'
    },
    StorageEntryModifierV11: 'StorageEntryModifierV10',
    StorageEntryMetadataV11: {
      name: 'Text',
      modifier: 'StorageEntryModifierV11',
      type: 'StorageEntryTypeV11',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryTypeV11: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV11',
        DoubleMap: 'DoubleMapTypeV11'
      }
    },
    StorageMetadataV11: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV11>'
    },
    StorageHasherV11: {
      _enum: AllHashers
    },

    // v12
    DoubleMapTypeV12: 'DoubleMapTypeV11',
    ErrorMetadataV12: 'ErrorMetadataV11',
    EventMetadataV12: 'EventMetadataV11',
    ExtrinsicMetadataV12: 'ExtrinsicMetadataV11',
    FunctionArgumentMetadataV12: 'FunctionArgumentMetadataV11',
    FunctionMetadataV12: 'FunctionMetadataV11',
    MapTypeV12: 'MapTypeV11',
    MetadataV12: {
      modules: 'Vec<ModuleMetadataV12>',
      extrinsic: 'ExtrinsicMetadataV12'
    },
    ModuleConstantMetadataV12: 'ModuleConstantMetadataV11',
    ModuleMetadataV12: {
      name: 'Text',
      storage: 'Option<StorageMetadataV12>',
      calls: 'Option<Vec<FunctionMetadataV12>>',
      events: 'Option<Vec<EventMetadataV12>>',
      constants: 'Vec<ModuleConstantMetadataV12>',
      errors: 'Vec<ErrorMetadataV12>',
      index: 'u8'
    },
    StorageEntryModifierV12: 'StorageEntryModifierV11',
    StorageEntryMetadataV12: 'StorageEntryMetadataV11',
    StorageEntryTypeV12: 'StorageEntryTypeV11',
    StorageMetadataV12: 'StorageMetadataV11',
    StorageHasherV12: 'StorageHasherV11',

    // This always maps to the latest
    DoubleMapTypeLatest: 'DoubleMapTypeV12',
    EventMetadataLatest: 'EventMetadataV12',
    ExtrinsicMetadataLatest: 'ExtrinsicMetadataV12',
    FunctionArgumentMetadataLatest: 'FunctionArgumentMetadataV12',
    FunctionMetadataLatest: 'FunctionMetadataV12',
    MapTypeLatest: 'MapTypeV12',
    MetadataLatest: 'MetadataV12',
    ModuleConstantMetadataLatest: 'ModuleConstantMetadataV12',
    ModuleMetadataLatest: 'ModuleMetadataV12',
    StorageEntryMetadataLatest: 'StorageEntryMetadataV12',
    StorageEntryModifierLatest: 'StorageEntryModifierV12',
    StorageEntryTypeLatest: 'StorageEntryTypeV12',
    StorageMetadataLatest: 'StorageMetadataV12',
    StorageHasher: 'StorageHasherV12',

    // the enum containing all the mappings
    MetadataAll: {
      _enum: {
        V0: 'DoNotConstruct<MetadataV0>',
        V1: 'DoNotConstruct<MetadataV1>',
        V2: 'DoNotConstruct<MetadataV2>',
        V3: 'DoNotConstruct<MetadataV3>',
        V4: 'DoNotConstruct<MetadataV4>',
        V5: 'MetadataV5',
        V6: 'MetadataV6',
        V7: 'MetadataV7',
        V8: 'MetadataV8',
        V9: 'MetadataV9',
        V10: 'MetadataV10',
        V11: 'MetadataV11',
        V12: 'MetadataV12'
      }
    }
  }
} as Definitions;
