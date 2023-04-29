// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecClass, Registry } from '../types/index.js';

export function typesToMap (registry: Registry, [Types, keys]: [CodecClass[], string[]]): Record<string, string> {
  const result: Record<string, string> = {};

  for (let i = 0, count = keys.length; i < count; i++) {
    result[keys[i]] = registry.getClassName(Types[i]) || new Types[i](registry).toRawType();
  }

  return result;
}
