// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataV12, MetadataV13 } from '@polkadot/types/interfaces/metadata';
import type { Registry } from '@polkadot/types/types';

/**
 * @internal
 **/
export function toV13 (registry: Registry, metadata: MetadataV12): MetadataV13 {
  return registry.createType('MetadataV13', metadata);
}
