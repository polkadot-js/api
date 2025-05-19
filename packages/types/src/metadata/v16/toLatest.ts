// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, MetadataV16 } from '../../interfaces/metadata/index.js';

/**
 * Convert the Metadata (which is an alias) to latest
 * @internal
 **/
export function toLatest (_registry: Registry, v16: MetadataV16, _metaVersion: number): MetadataLatest {
  return v16;
}
