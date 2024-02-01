// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '../types/index.js';

/**
 * @internal
 * From a type string or class, return the associated type class
 */
export function typeToConstructor <T extends Codec = Codec> (registry: Registry, type: string | CodecClass<T>): CodecClass<T> {
  return typeof type === 'function'
    ? type
    : registry.createClassUnsafe(type);
}

/**
 * @internal
 * Takes an input array of types and returns the associated classes for it
*/
export function typesToConstructors <T extends Codec = Codec> (registry: Registry, types: (string | CodecClass<T>)[]): CodecClass<T>[] {
  const count = types.length;
  const result = new Array<CodecClass<T>>(count);

  for (let i = 0; i < count; i++) {
    result[i] = typeToConstructor(registry, types[i]);
  }

  return result;
}

/**
 * @internal
 * Takes an input map of the form `{ [string]: string | CodecClass }` and returns a map of `{ [string]: CodecClass }`
 */
export function mapToTypeMap (registry: Registry, input: Record<string, string | CodecClass>): [CodecClass[], string[]] {
  const entries = Object.entries(input);
  const count = entries.length;
  const output: [CodecClass[], string[]] = [new Array<CodecClass>(count), new Array<string>(count)];

  for (let i = 0; i < count; i++) {
    output[1][i] = entries[i][0];
    output[0][i] = typeToConstructor(registry, entries[i][1]);
  }

  return output;
}
