// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

import { AllHashers } from './hashers.js';

export const v11: DefinitionsTypes = {
  // v11
  ErrorMetadataV11: 'ErrorMetadataV10',
  EventMetadataV11: 'EventMetadataV10',
  ExtrinsicMetadataV11: {
    version: 'u8',
    signedExtensions: 'Vec<Text>'
  },
  FunctionArgumentMetadataV11: 'FunctionArgumentMetadataV10',
  FunctionMetadataV11: 'FunctionMetadataV10',
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
    docs: 'Vec<Text>'
  },
  StorageEntryTypeV11: {
    _enum: {
      Plain: 'Type',
      Map: {
        hasher: 'StorageHasherV11',
        key: 'Type',
        value: 'Type',
        linked: 'bool'
      },
      DoubleMap: {
        hasher: 'StorageHasherV11',
        key1: 'Type',
        key2: 'Type',
        value: 'Type',
        key2Hasher: 'StorageHasherV11'
      }
    }
  },
  StorageMetadataV11: {
    prefix: 'Text',
    items: 'Vec<StorageEntryMetadataV11>'
  },
  StorageHasherV11: {
    _enum: AllHashers
  }
};
