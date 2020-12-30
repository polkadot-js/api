// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor, InterfaceTypes, Registry } from '../../types';

import { typeToConstructor } from './typeToConstructor';

/**
 * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`
 */
export function mapToTypeMap (registry: Registry, input: Record<string, keyof InterfaceTypes | Constructor>): Record<string, Constructor> {
  return Object
    .entries(input)
    .reduce((output: Record<string, Constructor>, [key, type]): Record<string, Constructor> => {
      output[key] = typeToConstructor(registry, type);

      return output;
    }, {});
}
