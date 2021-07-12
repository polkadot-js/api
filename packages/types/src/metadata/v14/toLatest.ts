// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, MetadataV14 } from '../../interfaces/metadata';
import type { Registry } from '../../types';

/**
 * Convert the Metadata (which is an alias) to latest - effectively this _always_ get applied to the top-level &
 * most-recent metadata, since it allows us a chance to actually apply call and storage specific type aliasses
 * @internal
 **/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function toLatest (registry: Registry, v14: MetadataV14, _metaVersion: number): MetadataLatest {
  return v14;
}
