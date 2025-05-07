// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, MetadataV16 } from '../../interfaces/metadata/index.js';

/**
 * Convert V16 to Latest (which is V16)
 * @internal
 **/
export function toLatest (registry: Registry, v16: MetadataV16, metaVersion: number): MetadataLatest {
  // V16 is the latest, so we just return it as MetadataLatest
  return v16 as MetadataLatest;
} 