// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV1, MetadataV2 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/** @internal */
export default function toV2 (registry: Registry, metadataV1: MetadataV1): MetadataV2 {
  return registry.createType('MetadataV2', metadataV1);
}
