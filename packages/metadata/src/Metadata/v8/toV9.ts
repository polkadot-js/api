// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataV8, MetadataV9 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/** @internal */
export default function toV9 (registry: Registry, { modules }: MetadataV8): MetadataV9 {
  return registry.createType('MetadataV9', { modules });
}
