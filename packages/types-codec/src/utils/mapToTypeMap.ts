// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecClass, CodecRegistry } from '../types';

import { typeToConstructor } from './typeToConstructor';

/**
 * @description takes an input map of the form `{ [string]: string | CodecClass }` and returns a map of `{ [string]: CodecClass }`
 */
export function mapToTypeMap (registry: CodecRegistry, input: Record<string, string | CodecClass>): Record<string, CodecClass> {
  const entries = Object.entries(input);
  const output: Record<string, CodecClass> = {};

  for (let i = 0; i < entries.length; i++) {
    output[entries[i][0]] = typeToConstructor(registry, entries[i][1]);
  }

  return output;
}
