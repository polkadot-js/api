// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataV2, MetadataV3 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/** @internal */
export default function toV3 (registry: Registry, metadataV2: MetadataV2): MetadataV3 {
  return registry.createType('MetadataV3', metadataV2);
}
