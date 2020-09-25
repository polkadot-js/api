// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Registry } from '@polkadot/types/types';

import extractTypes from './extractTypes';
import flattenUniq from './flattenUniq';

/** @internal */
export default function validateTypes (registry: Registry, types: string[], throwError: boolean): void {
  const missing = flattenUniq(extractTypes(types)).filter((type) => !registry.hasType(type));

  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing.join(', ')}`;

    if (throwError) {
      throw new Error(message);
    } else {
      console.warn(message);
    }
  }
}
