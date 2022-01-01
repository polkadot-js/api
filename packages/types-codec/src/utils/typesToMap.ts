// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecClass, CodecRegistry } from '../types';

export function typesToMap (registry: CodecRegistry, Types: Record<string, CodecClass>): Record<string, string> {
  const entries = Object.entries(Types);
  const result: Record<string, string> = {};

  for (let i = 0; i < entries.length; i++) {
    const [key, Type] = entries[i];

    result[key] = registry.getClassName(Type) || new Type(registry).toRawType();
  }

  return result;
}
