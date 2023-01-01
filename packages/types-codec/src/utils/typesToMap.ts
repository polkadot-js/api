// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecClass, Registry } from '../types';

export function typesToMap (registry: Registry, [Types, keys]: [CodecClass[], string[]]): Record<string, string> {
  const result: Record<string, string> = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = registry.getClassName(Types[i]) || new Types[i](registry).toRawType();
  }

  return result;
}
