// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataV12, MetadataV13 } from '../../interfaces/metadata/index.js';

/**
 * @internal
 **/
export function toV13 (registry: Registry, metadata: MetadataV12): MetadataV13 {
  return registry.createTypeUnsafe('MetadataV13', [metadata]);
}
