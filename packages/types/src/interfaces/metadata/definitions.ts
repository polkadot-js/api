// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { AllHashers } from './hashers';
import { v9 } from './v9';
import { v10 } from './v10';
import { v11 } from './v11';
import { v12 } from './v12';
import { v13 } from './v13';
import { v14 } from './v14';

export { AllHashers };

export default {
  rpc: {},
  types: {
    ...v9,
    ...v10,
    ...v11,
    ...v12,
    ...v13,
    ...v14,

    //
    // will be available once v14 is the default
    // TODO: Comment out all commented stuff below and remove block below
    //
    // ExtrinsicMetadataLatest: 'ExtrinsicMetadataV14',
    // FunctionArgumentMetadataLatest: 'FunctionArgumentMetadataV13',
    // FunctionMetadataLatest: 'FunctionMetadataV14',
    // MetadataLatest: 'MetadataV14',
    PalletCallMetadataLatest: 'PalletCallMetadataV14',
    PalletConstantMetadataLatest: 'PalletConstantMetadataV14',
    PalletErrorMetadataLatest: 'PalletErrorMetadataV14',
    PalletEventMetadataLatest: 'PalletEventMetadataV14',
    PalletMetadataLatest: 'PalletMetadataV14',
    PalletStorageMetadataLatest: 'PalletStorageMetadataV14',
    SignedExtensionMetadataLatest: 'SignedExtensionMetadataV14',
    // StorageEntryMetadataLatest: 'StorageEntryMetadataV14',
    // StorageEntryModifierLatest: 'StorageEntryModifierV14',
    // StorageEntryTypeLatest: 'StorageEntryTypeV14',

    // This always maps to the latest
    ErrorMetadataLatest: 'ErrorMetadataV13',
    EventMetadataLatest: 'EventMetadataV13',
    ExtrinsicMetadataLatest: 'ExtrinsicMetadataV13',
    FunctionArgumentMetadataLatest: 'FunctionArgumentMetadataV13',
    FunctionMetadataLatest: 'FunctionMetadataV13',
    MetadataLatest: 'MetadataV13',
    ModuleConstantMetadataLatest: 'ModuleConstantMetadataV13',
    ModuleMetadataLatest: 'ModuleMetadataV13',
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
        V13: 'MetadataV13',
        V14: 'MetadataV14'
      }
    }
  }
} as Definitions;
