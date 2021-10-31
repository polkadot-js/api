// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor, Registry } from '../../types';

import { typeToConstructor } from './typeToConstructor';

/**
 * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`
 */
export function mapToTypeMap (registry: Registry, input: Record<string, string | Constructor>): Record<string, Constructor> {
  const output: Record<string, Constructor> = {};

  for (const [k, v] of Object.entries(input)) {
    output[k] = typeToConstructor(registry, v);
  }

  return output;
}
