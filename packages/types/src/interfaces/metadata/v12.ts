// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export const v12: DefinitionsTypes = {
  // v12
  ErrorMetadataV12: 'ErrorMetadataV11',
  EventMetadataV12: 'EventMetadataV11',
  ExtrinsicMetadataV12: 'ExtrinsicMetadataV11',
  FunctionArgumentMetadataV12: 'FunctionArgumentMetadataV11',
  FunctionMetadataV12: 'FunctionMetadataV11',
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
  StorageHasherV12: 'StorageHasherV11'
};
