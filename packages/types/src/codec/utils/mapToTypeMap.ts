// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor, InterfaceTypes, Registry } from '../../types';

import typeToConstructor from './typeToConstructor';

/**
 * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`
 */
export default function mapToTypeMap (registry: Registry, input: Record<string, keyof InterfaceTypes | Constructor>): Record<string, Constructor> {
  return Object
    .entries(input)
    .reduce((output: Record<string, Constructor>, [key, type]): Record<string, Constructor> => {
      output[key] = typeToConstructor(registry, type);

      return output;
    }, {});
}
