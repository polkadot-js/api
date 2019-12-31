// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV10, MetadataV9 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types';

/**
 * Convert from MetadataV8 to MetadataV9
 */
export default function toV10 (registry: Registry, { modules }: MetadataV9): MetadataV10 {
  return createType(registry, 'MetadataV10', { modules });
}
