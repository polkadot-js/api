// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataV14, MetadataV15 } from '../../interfaces/metadata/index.js';
import type { Registry } from '../../types/index.js';

import { objectSpread } from '@polkadot/util';

/**
 * Convert the Metadata to v15
 * @internal
 **/
export function toV15 (registry: Registry, v14: MetadataV14, _: number): MetadataV15 {
  // V15 is mostly equivalent to v14 however it does add
  //
  // 1. The top-level apis entry - it is assumed that in usage we would
  //    just check for all-empty (like this would construct)
  // 2. A docs param on the pallet itself
  // 3. Additional extrinsic parameters
  //
  // A straight conversion with createTypeUndafe magic fills in details

  // We need the UncheckedExtrinsic to extract the types, at least for v14
  // which does have these details embedded (previous-gen won't populate)
  const unchecked = v14.lookup.paramTypes.SpRuntimeUncheckedExtrinsic;

  return registry.createTypeUnsafe('MetadataV15', [
    objectSpread({}, v14, {
      extrinsic: registry.createTypeUnsafe('ExtrinsicMetadataV15', [
        objectSpread({}, v14.extrinsic, {
          addressType: unchecked?.[0].type.unwrapOr(0),
          callType: unchecked?.[1].type.unwrapOr(0),
          extraType: unchecked?.[3].type.unwrapOr(0),
          signatureType: unchecked?.[2].type.unwrapOr(0)
        })
      ]),
      outerEnums: registry.createTypeUnsafe('OuterEnums15', [{
        // FIXME We need to extract & add the errorType in here
        // (these doesn't seem to be an esay way to detect & extract it)
        callType: unchecked?.[1].type.unwrapOr(0),
        eventType: v14.lookup.paramTypes.FrameSystemEventRecord?.[0].type.unwrapOr(0)
      }])
    })
  ]);
}
