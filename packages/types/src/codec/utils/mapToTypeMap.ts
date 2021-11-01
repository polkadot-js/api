// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor, Registry } from '../../types';

import { typeToConstructor } from './typeToConstructor';

/**
 * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`
 */
export function mapToTypeMap (registry: Registry, input: Record<string, string | Constructor>): Record<string, Constructor> {
  const entries = Object.entries(input);
  const output: Record<string, Constructor> = {};

  for (let i = 0; i < entries.length; i++) {
    output[entries[i][0]] = typeToConstructor(registry, entries[i][1]);
  }

  return output;
}
