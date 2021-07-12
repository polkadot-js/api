// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export const v13: DefinitionsTypes = {
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
      NMap: {
        keyVec: 'Vec<Type>',
        hashers: 'Vec<StorageHasherV13>',
        value: 'Type'
      }
    }
  },
  StorageMetadataV13: {
    prefix: 'Text',
    items: 'Vec<StorageEntryMetadataV13>'
  },
  StorageHasherV13: 'StorageHasherV12'
};
