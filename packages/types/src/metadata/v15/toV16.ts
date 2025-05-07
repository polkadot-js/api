// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataV15, MetadataV16, PalletMetadataV16 } from '../../interfaces/metadata/index.js';

/**
 * Convert V15 to V16 Metadata
 * @internal
 **/
export function toV16 (registry: Registry, v15: MetadataV15, _metaVersion: number): MetadataV16 {
  // Pallets will need to be converted individually if their structure changes for V16
  // For now, assuming PalletMetadataV15 can be cast or mapped to PalletMetadataV16
  // with the addition of an empty viewFunctions Vec.
  const pallets_V16 = v15.pallets.map((pallet_v15) => {
    return registry.createTypeUnsafe('PalletMetadataV16', [{
      ...pallet_v15.toPrimitive(), // Convert PalletMetadataV15 to a plain object
      viewFunctions: registry.createTypeUnsafe('Vec<PalletViewFunctionMetadataV16>', [[]])
    }]);
  });

  return registry.createTypeUnsafe('MetadataV16', [{
    lookup: v15.lookup,
    pallets: pallets_V16,
    extrinsic: v15.extrinsic,
    type: v15.type,
    apis: v15.apis,
    custom: v15.custom
    // NOTE: viewFunctions are part of PalletMetadataV16, not MetadataV16 directly
  }]);
} 