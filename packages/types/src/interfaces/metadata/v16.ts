// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v16: DefinitionsTypes = {
  // actual v16 definition
  MetadataV16: {
    lookup: 'PortableRegistry',
    pallets: 'Vec<PalletMetadataV15>',
    extrinsic: 'ExtrinsicMetadataV15',
    type: 'SiLookupTypeId',
    apis: 'Vec<RuntimeApiMetadataV15>',
    outerEnums: 'OuterEnums15',
    custom: 'CustomMetadata15'
  }
};
