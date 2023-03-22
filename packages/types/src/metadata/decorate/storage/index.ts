// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, StorageEntryMetadataLatest } from '../../../interfaces/index.js';
import type { Storage } from '../types.js';

import { lazyMethod, lazyMethods, stringCamelCase } from '@polkadot/util';

import { objectNameToCamel } from '../util.js';
import { createFunction, createKeyRaw, NO_RAW_ARGS } from './createFunction.js';
import { getStorage } from './getStorage.js';
import { createRuntimeFunction } from './util.js';

const VERSION_NAME = 'palletVersion';
const VERSION_KEY = ':__STORAGE_VERSION__:';
const VERSION_DOCS = { docs: 'Returns the current pallet version from storage', type: 'u16' };

/** @internal */
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
              { method: VERSION_NAME, prefix, section },
              createKeyRaw(registry, { method: VERSION_KEY, prefix: name.toString() }, NO_RAW_ARGS),
              VERSION_DOCS
            )(registry)
          },
          items,
          (meta: StorageEntryMetadataLatest) =>
            createFunction(registry, { meta, method: meta.name.toString(), prefix, section }, {}),
          objectNameToCamel
        )
      );
    }
  }

  return result;
}
