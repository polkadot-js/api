// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

import { Si1Variant } from '../scaleInfo/v1.js';

export const v14: DefinitionsTypes = {
  // registry
  PortableTypeV14: {
    id: 'Si1LookupTypeId',
    type: 'Si1Type'
  },

  // compatibility with earlier layouts, i.e. don't break previous users
  ErrorMetadataV14: {
    ...Si1Variant,
    args: 'Vec<Type>'
  },
  EventMetadataV14: {
    ...Si1Variant,
    args: 'Vec<Type>'
  },
  FunctionArgumentMetadataV14: {
    name: 'Text',
    type: 'Type',
    typeName: 'Option<Type>'
  },
  FunctionMetadataV14: {
    ...Si1Variant,
    args: 'Vec<FunctionArgumentMetadataV14>'
  },

  // V14
  ExtrinsicMetadataV14: {
    type: 'SiLookupTypeId',
    version: 'u8',
    signedExtensions: 'Vec<SignedExtensionMetadataV14>'
  },
  MetadataV14: {
    lookup: 'PortableRegistry',
    pallets: 'Vec<PalletMetadataV14>',
    extrinsic: 'ExtrinsicMetadataV14',
    type: 'SiLookupTypeId'
  },
  PalletCallMetadataV14: {
    type: 'SiLookupTypeId'
  },
  PalletConstantMetadataV14: {
    name: 'Text',
    type: 'SiLookupTypeId',
    value: 'Bytes',
    docs: 'Vec<Text>'
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
    events: 'Option<PalletEventMetadataV14>',
    constants: 'Vec<PalletConstantMetadataV14>',
    errors: 'Option<PalletErrorMetadataV14>',
    index: 'u8'
  },
  PalletStorageMetadataV14: {
    prefix: 'Text',
    // NOTE: Renamed from entries
    items: 'Vec<StorageEntryMetadataV14>'
  },
  SignedExtensionMetadataV14: {
    identifier: 'Text',
    type: 'SiLookupTypeId',
    additionalSigned: 'SiLookupTypeId'
  },
  StorageEntryMetadataV14: {
    name: 'Text',
    modifier: 'StorageEntryModifierV14',
    type: 'StorageEntryTypeV14',
    fallback: 'Bytes',
    docs: 'Vec<Text>'
  },
  StorageEntryModifierV14: 'StorageEntryModifierV13',
  StorageEntryTypeV14: {
    _enum: {
      Plain: 'SiLookupTypeId',
      Map: {
        hashers: 'Vec<StorageHasherV14>',
        key: 'SiLookupTypeId', // NOTE: Renamed from "keys"
        value: 'SiLookupTypeId'
      }
    }
  },
  StorageHasherV14: 'StorageHasherV13'
};
