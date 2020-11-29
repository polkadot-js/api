// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types/types';

import { logger } from '@polkadot/util';

import { extractTypes } from './extractTypes';
import { flattenUniq } from './flattenUniq';

const l = logger('metadata');

/** @internal */
export function validateTypes (registry: Registry, types: string[], throwError: boolean): void {
  const missing = flattenUniq(extractTypes(types)).filter((type) => !registry.hasType(type));

  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing.join(', ')}`;

    if (throwError) {
      throw new Error(message);
    } else {
      l.warn(message);
    }
  }
}
