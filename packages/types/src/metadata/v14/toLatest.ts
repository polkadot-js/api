// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, MetadataV14 } from '../../interfaces/metadata';

/**
 * Convert the Metadata (which is an alias) to latest
 * @internal
 **/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function toLatest (registry: Registry, v14: MetadataV14, _metaVersion: number): MetadataLatest {
  return v14;
}
