// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataV15, MetadataV16 } from '../../interfaces/metadata/index.js';
import type { Registry } from '../../types/index.js';

import { objectSpread } from '@polkadot/util';

/**
 * Convert the Metadata to v16
 * @internal
 **/
//TODO: return the correct information type
export function toV16 (registry: Registry, v15: MetadataV15, _: number): MetadataV16 {

  //const unchecked = v14.lookup.paramTypes.SpRuntimeUncheckedExtrinsic;

  return registry.createTypeUnsafe('MetadataV16', [
   /*  objectSpread({}, v14, {
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
    }) */
  ]);
}
