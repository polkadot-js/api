// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types/create';

export function registerDefinitions (registry: TypeRegistry, extras: Record<string, Record<string, { types: Record<string, any> }>>): void {
  Object.values(extras).forEach((def): void => {
    Object.values(def).forEach(({ types }): void => {
      registry.register(types);
    });
  });
}
