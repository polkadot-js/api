// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataV1, MetadataV2 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/** @internal */
export default function toV2 (registry: Registry, metadataV1: MetadataV1): MetadataV2 {
  return registry.createType('MetadataV2', metadataV1);
}
