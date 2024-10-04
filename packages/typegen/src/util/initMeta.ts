// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from '../generate/types.js';

import { Metadata, TypeRegistry } from '@polkadot/types';

import { registerDefinitions } from './register.js';

interface Result {
  metadata: Metadata;
  registry: TypeRegistry;
}

/**
 * This helper method has been transitioned to work with V14, V15 and up.
 */
export function initMeta (staticMeta: HexString, extraTypes: ExtraTypes = {}): Result {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  let metadata: Metadata;
  try {
    const opaqueMetadata = registry.createType('Option<OpaqueMetadata>', registry.createType('Raw', staticMeta).toU8a()).unwrap();
    metadata = new Metadata(registry, opaqueMetadata.toHex());
  } catch {
    metadata = new Metadata(registry, staticMeta);
  }

  registry.setMetadata(metadata);

  return { metadata, registry };
}
