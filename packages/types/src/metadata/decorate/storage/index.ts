// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, StorageEntryMetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Storage } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { lazyMethod, lazyMethods } from '../../../create/lazy';
import { objectNameFirstLower } from '../util';
import { createFunction, createKeyRaw } from './createFunction';
import { getStorage } from './getStorage';
import { createRuntimeFunction } from './util';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateStorage (registry: Registry, { pallets }: MetadataLatest, _metaVersion: number): Storage {
  const result: Storage = getStorage(registry);

  for (let i = 0; i < pallets.length; i++) {
    const { name, storage } = pallets[i];

    if (storage.isSome) {
      const section = stringCamelCase(name);
      const { items, prefix: _prefix } = storage.unwrap();
      const prefix = _prefix.toString();

      lazyMethod(result, section, () =>
        lazyMethods(
          {
            palletVersion: createRuntimeFunction(
              { method: 'palletVersion', prefix, section },
              createKeyRaw(registry, { method: ':__STORAGE_VERSION__:', prefix: name.toString() }, [], [], []),
              { docs: 'Returns the current pallet version from storage', type: 'u16' }
            )(registry)
          },
          items,
          (meta: StorageEntryMetadataLatest) =>
            createFunction(registry, { meta, method: meta.name.toString(), prefix, section }, {}),
          objectNameFirstLower
        )
      );
    }
  }

  return result;
}
