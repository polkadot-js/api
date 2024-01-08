// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeRegistry } from '@polkadot/types/create';

export function registerDefinitions (registry: TypeRegistry, extras: Record<string, Record<string, { types: Record<string, any> }>>): void {
  Object.values(extras).forEach((def): void => {
    Object.values(def).forEach(({ types }): void => {
      registry.register(types);
    });
  });
}
