// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
