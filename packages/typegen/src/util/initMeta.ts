// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtraTypes } from '../generate/types';

import { Metadata, TypeRegistry } from '@polkadot/types';
import staticSubstrate from '@polkadot/types/metadata/static-substrate';

import { registerDefinitions } from './register';

interface Result {
  metadata: Metadata;
  registry: TypeRegistry;
}

export function initMeta (staticMeta = staticSubstrate, extraTypes: ExtraTypes = {}): Result {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  const metadata = new Metadata(registry, staticMeta);

  registry.setMetadata(metadata);

  return { metadata, registry };
}
