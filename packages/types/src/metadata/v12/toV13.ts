// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataV12, MetadataV13 } from '../../interfaces/metadata';
import type { Registry } from '../../types';

/**
 * @internal
 **/
export function toV13 (registry: CodecRegistry, metadata: MetadataV12): MetadataV13 {
  return registry.createType('MetadataV13', metadata);
}
