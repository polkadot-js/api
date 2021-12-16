// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { MetadataV12, MetadataV13 } from '@polkadot/types/interfaces/metadata';

/**
 * @internal
 **/
export function toV13 (registry: CodecRegistry, metadata: MetadataV12): MetadataV13 {
  return registry.createTypeUnsafe('MetadataV13', [metadata]);
}
