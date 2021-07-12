// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export const v14: DefinitionsTypes = {
  // V14
  DoubleMapTypeV14: {
    hasher: 'StorageHasherV14',
    key1: 'MetaFormType',
    key2: 'MetaFormType',
    value: 'MetaFormType',
    key2Hasher: 'StorageHasherV14'
  },
  ExtrinsicMetadataV14: {
    type: 'MetaFormType',
    version: 'u8',
    signedExtensions: 'Vec<SignedExtensionMetadataV14>'
  },
  MapTypeV14: {
    hasher: 'StorageHasherV14',
    key: 'MetaFormType',
    value: 'MetaFormType',
    // is_linked flag previously, unused now to keep backwards compat
    unused: 'bool'
  },
  MetadataV14: {
    types: 'PortableRegistry',
    pallets: 'Vec<PalletMetadataV14>',
    extrinsic: 'ExtrinsicMetadataV14'
  },
  NMapTypeV14: {
    keys: 'MetaFormType',
    hashers: 'Vec<StorageHasherV14>',
    value: 'MetaFormType'
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
    entries: 'Vec<StorageEntryMetadataV14>'
  },
  SignedExtensionMetadataV14: {
    identifier: 'Text',
    type: 'MetaFormType'
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
    Plain: 'MetaFormType',
    Map: 'MapTypeV14',
    DoubleMap: 'DoubleMapTypeV14',
    NMap: 'NMapTypeV14'
  },
  StorageHasherV14: 'StorageHasherV13'
};
