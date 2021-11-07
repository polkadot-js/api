// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor, Registry } from '../../types';

export function typesToMap (registry: Registry, Types: Record<string, Constructor>): Record<string, string> {
  const entries = Object.entries(Types);
  const result: Record<string, string> = {};

  for (let i = 0; i < entries.length; i++) {
    const [key, Type] = entries[i];

    result[key] = registry.getClassName(Type) || new Type(registry).toRawType();
  }

  return result;
}
