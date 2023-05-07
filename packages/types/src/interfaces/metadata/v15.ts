// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v15: DefinitionsTypes = {
  // new/adjusted in v15
  PalletMetadataV15: {
    name: 'Text',
    storage: 'Option<PalletStorageMetadataV14>',
    calls: 'Option<PalletCallMetadataV14>',
    events: 'Option<PalletEventMetadataV14>',
    constants: 'Vec<PalletConstantMetadataV14>',
    errors: 'Option<PalletErrorMetadataV14>',
    index: 'u8',
    docs: 'Vec<Text>'
  },
  RuntimeApiMetadataV15: {
    name: 'Text',
    methods: 'Vec<RuntimeApiMethodMetadataV15>',
    docs: 'Vec<Text>'
  },
  RuntimeApiMethodMetadataV15: {
    name: 'Text',
    inputs: 'Vec<RuntimeApiMethodParamMetadataV15>',
    output: 'SiLookupTypeId',
    docs: 'Vec<Text>'
  },
  RuntimeApiMethodParamMetadataV15: {
    name: 'Text',
    type: 'SiLookupTypeId'
  },

  // actual v15 definition
  MetadataV15: {
    lookup: 'PortableRegistry',
    pallets: 'Vec<PalletMetadataV15>',
    extrinsic: 'ExtrinsicMetadataV14',
    type: 'SiLookupTypeId',
    apis: 'Vec<RuntimeApiMetadataV15>'
  }
};
