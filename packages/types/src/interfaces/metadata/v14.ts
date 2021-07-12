// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export const v14: DefinitionsTypes = {
  // V14
  FunctionArgumentMetadataV14: {
    name: 'Text',
    type: 'SiLookupTypeId'
  },
  FunctionMetadataV14: {
    name: 'Text',
    arguments: 'Vec<FunctionArgumentMetadataV14>',
    documentation: 'Vec<Text>'
  },
  ExtrinsicMetadataV14: {
    type: 'SiLookupTypeId',
    version: 'u8',
    signedExtensions: 'Vec<SignedExtensionMetadataV14>'
  },
  MetadataV14: {
    types: 'PortableRegistry',
    pallets: 'Vec<PalletMetadataV14>',
    extrinsic: 'ExtrinsicMetadataV14'
  },
  PalletCallMetadataV14: {
    type: 'SiLookupTypeId',
    calls: 'Vec<FunctionMetadataV14>'
  },
  PalletConstantMetadataV14: {
    name: 'Text',
    type: 'SiLookupTypeId',
    value: 'Bytes',
    documentation: 'Vec<Text>'
  },
  PalletErrorMetadataV14: {
    type: 'SiLookupTypeId'
  },
  PalletEventMetadataV14: {
    type: 'SiLookupTypeId'
  },
  PalletMetadataV14: {
    name: 'Text',
    storage: 'Option<PalletStorageMetadataV14>',
    calls: 'Option<PalletCallMetadataV14>',
    event: 'Option<PalletEventMetadataV14>',
    constants: 'Vec<PalletConstantMetadataV14>',
    error: 'Option<PalletErrorMetadataV14>',
    index: 'u8'
  },
  PalletStorageMetadataV14: {
    prefix: 'Text',
    // NOTE: Renamed from entries
    items: 'Vec<StorageEntryMetadataV14>'
  },
  SignedExtensionMetadataV14: {
    identifier: 'Text',
    type: 'SiLookupTypeId'
  },
  StorageEntryMetadataV14: {
    name: 'Text',
    modifier: 'StorageEntryModifierV14',
    type: 'StorageEntryTypeV14',
    fallback: 'Bytes',
    documentation: 'Vec<Text>'
  },
  StorageEntryModifierV14: 'StorageEntryModifierV13',
  StorageEntryTypeV14: {
    _enum: {
      Plain: 'SiLookupTypeId',
      Map: {
        hasher: 'StorageHasherV14',
        key: 'SiLookupTypeId',
        value: 'SiLookupTypeId',
        // is_linked flag previously, unused now to keep backwards compat
        unused: 'bool'
      },
      DoubleMap: {
        hasher: 'StorageHasherV14',
        key1: 'SiLookupTypeId',
        key2: 'SiLookupTypeId',
        value: 'SiLookupTypeId',
        key2Hasher: 'StorageHasherV14'
      },
      NMap: {
        // NOTE: Renamed from "keys"
        key: 'SiLookupTypeId',
        hashers: 'Vec<StorageHasherV14>',
        value: 'SiLookupTypeId'
      }
    }
  },
  StorageHasherV14: 'StorageHasherV13'
};
