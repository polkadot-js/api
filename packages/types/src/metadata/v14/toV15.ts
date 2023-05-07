// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataV14, MetadataV15 } from '../../interfaces/metadata/index.js';
import type { Registry } from '../../types/index.js';

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
  //
  // A straight conversion with createTypeUndafe magic fills in details
  return registry.createTypeUnsafe('MetadataV15', [v14]);
}
