// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ModuleStorage, Storage } from '../types';

import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import { createFunction, createKeyRaw } from './createFunction';
import { getStorage } from './getStorage';
import { createRuntimeFunction } from './util';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateStorage (registry: Registry, { pallets }: MetadataLatest, _metaVersion: number): Storage {
  const result: Storage = getStorage(registry);

  for (const m of pallets) {
    if (m.storage.isSome) {
      const { name } = m;
      const section = stringCamelCase(name);
      const unwrapped = m.storage.unwrap();
      const prefix = unwrapped.prefix.toString();
      const newModule: ModuleStorage = {
        palletVersion: createRuntimeFunction(
          { method: 'palletVersion', prefix, section },
          createKeyRaw(registry, { method: ':__STORAGE_VERSION__:', prefix: name.toString() }, [], [], []),
          { docs: 'Returns the current pallet version from storage', type: 'u16' }
        )(registry)
      };

      for (const meta of unwrapped.items) {
        const method = meta.name.toString();

        // For access, we change the index names, i.e. System.Account -> system.account
        newModule[stringLowerFirst(method)] = createFunction(registry, {
          meta,
          method,
          prefix,
          section
        }, {});
      }

      result[section] = newModule;
    }
  }

  return result;
}
