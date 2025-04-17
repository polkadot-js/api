// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v16: DefinitionsTypes = {
  // actual v16 definition
  MetadataV16: {
    lookup: 'PortableRegistry',
    pallets: 'Vec<PalletMetadataV16>',
    extrinsic: 'ExtrinsicMetadataV16',
    type: 'SiLookupTypeId',
    apis: 'Vec<RuntimeApiMetadataV16>',
    outerEnums: 'OuterEnums15',
    custom: 'CustomMetadata15'
  },

  //---- Pallet definitions ----
  PalletMetadataV16: {
    name: 'Text',
    storage: 'Option<PalletStorageMetadataV16>',
    calls: 'Option<PalletCallMetadataV16>',
    events: 'Option<PalletEventMetadataV16>',
    constants: 'Vec<PalletConstantMetadataV16>',
    errors: 'Option<PalletErrorMetadataV16>',
    index: 'u8',
    docs: 'Vec<Text>'
  },
  PalletStorageMetadataV16: {
    prefix: 'Text',
    items: 'Vec<StorageEntryMetadataV16>'
  },
  StorageEntryMetadataV16: {
    name: 'Text',
    modifier: 'StorageEntryModifierV14',
    type: 'StorageEntryTypeV14',
    fallback: 'Bytes',
    docs: 'Vec<Text>',
    /// Deprecation info
	  deprecationInfo: 'DeprecationStatusV16',
  },
  DeprecationStatusV16: {
    _enum: {
      /// Entry is not deprecated
      NotDeprecated: 'Null',
      /// Deprecated without a note.
      DeprecatedWithoutNote: 'Null',
      /// Entry is deprecated with an note and an optional `since` field.
      Deprecated: {
        /// Note explaining the deprecation
        note: 'Text',
        /// Optional value for denoting version when the deprecation occurred.
        since: 'Option<Text>',
      },
    }
  },
  PalletCallMetadataV16: {
    type: 'SiLookupTypeId',
    /// Deprecation status of the pallet call
    deprecationInfo: 'DeprecationInfoV16'
  },
  DeprecationInfoV16: {
    _enum: {
      /// Type is not deprecated
      NotDeprecated: 'Null',
      /// Entry is fully deprecated.
	    ItemDeprecated: 'DeprecationStatusV16',
      /// Entry is partially deprecated.
	    VariantsDeprecated: 'BTreeMap<u8, DeprecationStatusV16>',
    }
  },
  PalletEventMetadataV16: {
    type: 'SiLookupTypeId',
    /// Deprecation info
    deprecationInfo: 'DeprecationInfoV16',
  },
  PalletConstantMetadataV16: {
    name: 'Text',
    type: 'SiLookupTypeId',
    value: 'Bytes',
    docs: 'Vec<Text>',
    /// Deprecation info
    deprecationInfo: 'DeprecationInfoV16',
  },
  PalletErrorMetadataV16: {
    type: 'SiLookupTypeId',
    /// Deprecation info
    deprecationInfo: 'DeprecationInfoV16',
  },

  //---- Extrinsic definitions ----
  ExtrinsicMetadataV16: {
    /// Extrinsic versions supported by the runtime.
    versions: 'Vec<u8>',
    /// The type of the address that signs the extrinsic
    addressType: 'SiLookupTypeId',
    /// The type of the extrinsic's signature.
    signatureType: 'SiLookupTypeId',
    /// A mapping of supported transaction extrinsic versions to their respective transaction extension indexes.
    ///
    /// For each supported version number, list the indexes, in order, of the extensions used.
    transactionExtensionsByVersion: 'BTreeMap<u8, Vec<Compact<u32>>>',
    /// The transaction extensions in the order they appear in the extrinsic.
    transactionExtensions: 'Vec<TransactionExtensionMetadataV16>'
  },
  TransactionExtensionMetadataV16: {
    /// The unique transaction extension identifier, which may be different from the type name.
    identifier: 'Text',
    /// The type of the transaction extension, with the data to be included in the extrinsic.
    type: 'SiLookupTypeId',
    /// The type of the implicit data, with the data to be included in the signed payload.
    implicit: 'SiLookupTypeId',
  },

  //---- Runtime Api definitions ----
  RuntimeApiMetadataV16: {
    name: 'Text',
    methods: 'Vec<RuntimeApiMethodMetadataV16>',
    docs: 'Vec<Text>',
    /// Deprecation info
	  deprecationInfo: 'DeprecationStatusV16',
    /// Runtime API version.
    version: 'Compact<u32>'
  },
  RuntimeApiMethodMetadataV16: {
    name: 'Text',
    inputs: 'Vec<RuntimeApiMethodParamMetadataV15>',
    output: 'SiLookupTypeId',
    docs: 'Vec<Text>',
    /// Deprecation info
	  deprecationInfo: 'DeprecationStatusV16',
  },
};
