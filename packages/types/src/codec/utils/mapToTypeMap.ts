// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes, Registry } from '../../types';

import { isString } from '@polkadot/util';

import { ClassOf } from '../create';

export function typeToConstructor <T = Codec> (registry: Registry, type: InterfaceTypes | Constructor<T>): Constructor<T> {
  return (
    isString(type)
      ? ClassOf(registry, type)
      : type
  ) as Constructor<T>;
}

/**
 * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Conbstructor }`
 */
export function mapToTypeMap (registry: Registry, input: Record<string, InterfaceTypes | Constructor>): Record<string, Constructor> {
  const output: Record<string, Constructor> = {};

  Object.entries(input).forEach(([key, type]): void => {
    output[key] = typeToConstructor(registry, type);
  });

  return output;
}
