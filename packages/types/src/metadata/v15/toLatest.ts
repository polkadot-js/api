// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, MetadataV15 } from '../../interfaces/metadata/index.js';

/**
 * Convert the Metadata (which is an alias) to latest
 * @internal
 **/
export function toLatest (_registry: Registry, v15: MetadataV15, _metaVersion: number): MetadataLatest {
  return v15;
}
