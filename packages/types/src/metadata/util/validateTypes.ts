// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';

import { logger } from '@polkadot/util';

import { extractTypes } from './extractTypes.js';
import { flattenUniq } from './flattenUniq.js';

const l = logger('metadata');

/** @internal */
export function validateTypes (registry: Registry, throwError: boolean, types: string[]): string[] {
  const missing = flattenUniq(extractTypes(types))
    .filter((type) =>
      !registry.hasType(type) &&
      !registry.isLookupType(type)
    )
    .sort();

  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing.join(', ')}`;

    if (throwError) {
      throw new Error(message);
    } else {
      l.warn(message);
    }
  }

  return types;
}
