// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export const AllHashers = {
  Blake2_128: null, // eslint-disable-line camelcase
  Blake2_256: null, // eslint-disable-line camelcase
  Blake2_128Concat: null, // eslint-disable-line camelcase
  Twox128: null,
  Twox256: null,
  Twox64Concat: null,
  // new in v11
  Identity: null
};

export default {
  rpc: {},
  types: {
    // v9
    DoubleMapTypeV9: {
      hasher: 'StorageHasherV9',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasherV9'
    },
    ErrorMetadataV9: {
      name: 'Text',
      documentation: 'Vec<Text>'
    },
    EventMetadataV9: {
      name: 'Text',
      args: 'Vec<Type>',
      documentation: 'Vec<Text>'
    },
    FunctionArgumentMetadataV9: {
      name: 'Text',
      type: 'Type'
    },
    FunctionMetadataV9: {
      name: 'Text',
      args: 'Vec<FunctionArgumentMetadataV9>',
      documentation: 'Vec<Text>'
    },
    MapTypeV9: {
      hasher: 'StorageHasherV9',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
    MetadataV9: {
      modules: 'Vec<ModuleMetadataV9>'
    },
    ModuleConstantMetadataV9: {
      name: 'Text',
      type: 'Type',
      value: 'Bytes',
      documentation: 'Vec<Text>'
    },
    ModuleMetadataV9: {
      name: 'Text',
      storage: 'Option<StorageMetadataV9>',
      calls: 'Option<Vec<FunctionMetadataV9>>',
      events: 'Option<Vec<EventMetadataV9>>',
      constants: 'Vec<ModuleConstantMetadataV9>',
      errors: 'Vec<ErrorMetadataV9>'
    },
    StorageEntryMetadataV9: {
      name: 'Text',
      modifier: 'StorageEntryModifierV9',
      type: 'StorageEntryTypeV9',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryModifierV9: {
      _enum: ['Optional', 'Default', 'Required']
    },
    StorageEntryTypeV9: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV9',
        DoubleMap: 'DoubleMapTypeV9'
      }
    },
    StorageHasherV9: {
      _enum: {
        Blake2_128: null, // eslint-disable-line camelcase
        Blake2_256: null, // eslint-disable-line camelcase
        Twox128: null,
        Twox256: null,
        Twox64Concat: null
      }
    },
    StorageMetadataV9: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV9>'
    },

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

    // v13
    DoubleMapTypeV13: 'DoubleMapTypeV12',
    ErrorMetadataV13: 'ErrorMetadataV12',
    EventMetadataV13: 'EventMetadataV12',
    ExtrinsicMetadataV13: 'ExtrinsicMetadataV12',
    FunctionArgumentMetadataV13: 'FunctionArgumentMetadataV12',
    FunctionMetadataV13: 'FunctionMetadataV12',
    MapTypeV13: 'MapTypeV12',
    MetadataV13: {
      modules: 'Vec<ModuleMetadataV13>',
      extrinsic: 'ExtrinsicMetadataV13'
    },
    ModuleConstantMetadataV13: 'ModuleConstantMetadataV12',
    ModuleMetadataV13: {
      name: 'Text',
      storage: 'Option<StorageMetadataV13>',
      calls: 'Option<Vec<FunctionMetadataV13>>',
      events: 'Option<Vec<EventMetadataV13>>',
      constants: 'Vec<ModuleConstantMetadataV13>',
      errors: 'Vec<ErrorMetadataV13>',
      index: 'u8'
    },
    NMapTypeV13: {
      keyVec: 'Vec<Type>',
      hashers: 'Vec<StorageHasherV13>',
      value: 'Type'
    },
    StorageEntryModifierV13: 'StorageEntryModifierV12',
    StorageEntryMetadataV13: {
      name: 'Text',
      modifier: 'StorageEntryModifierV13',
      type: 'StorageEntryTypeV13',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryTypeV13: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV13',
        DoubleMap: 'DoubleMapTypeV13',
        NMap: 'NMapTypeV13'
      }
    },
    StorageMetadataV13: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV13>'
    },
    StorageHasherV13: 'StorageHasherV12',

    // This always maps to the latest
    DoubleMapTypeLatest: 'DoubleMapTypeV13',
    ErrorMetadataLatest: 'ErrorMetadataV13',
    EventMetadataLatest: 'EventMetadataV13',
    ExtrinsicMetadataLatest: 'ExtrinsicMetadataV13',
    FunctionArgumentMetadataLatest: 'FunctionArgumentMetadataV13',
    FunctionMetadataLatest: 'FunctionMetadataV13',
    MapTypeLatest: 'MapTypeV13',
    MetadataLatest: 'MetadataV13',
    ModuleConstantMetadataLatest: 'ModuleConstantMetadataV13',
    ModuleMetadataLatest: 'ModuleMetadataV13',
    NMapTypeLatest: 'NMapTypeV13',
    StorageEntryMetadataLatest: 'StorageEntryMetadataV13',
    StorageEntryModifierLatest: 'StorageEntryModifierV13',
    StorageEntryTypeLatest: 'StorageEntryTypeV13',
    StorageMetadataLatest: 'StorageMetadataV13',
    StorageHasher: 'StorageHasherV13',

    // the enum containing all the mappings
    MetadataAll: {
      _enum: {
        V0: 'DoNotConstruct<MetadataV0>',
        V1: 'DoNotConstruct<MetadataV1>',
        V2: 'DoNotConstruct<MetadataV2>',
        V3: 'DoNotConstruct<MetadataV3>',
        V4: 'DoNotConstruct<MetadataV4>',
        V5: 'DoNotConstruct<MetadataV5>',
        V6: 'DoNotConstruct<MetadataV6>',
        V7: 'DoNotConstruct<MetadataV7>',
        V8: 'DoNotConstruct<MetadataV8>',
        // First version on Kusama in V9, dropping will be problematic
        V9: 'MetadataV9',
        V10: 'MetadataV10',
        V11: 'MetadataV11',
        V12: 'MetadataV12',
        V13: 'MetadataV13'
      }
    }
  }
} as Definitions;
