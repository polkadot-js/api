// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataLatest, PalletStorageMetadataLatest, StorageEntryMetadataLatest } from '../../../interfaces';
import type { StorageEntry } from '../../../primitive/types';
import type { Registry } from '../../../types';
import type { ModuleStorage, Storage } from '../types';

import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import { createFunction, createKeyRaw } from './createFunction';
import { getStorage } from './getStorage';
import { createRuntimeFunction } from './util';

function lazyMethod (registry: Registry, result: ModuleStorage, meta: StorageEntryMetadataLatest, prefix: string, section: string): void {
  const method = meta.name.toString();
  let cached: StorageEntry | null = null;

  Object.defineProperty(result, stringLowerFirst(method), {
    enumerable: true,
    get: (): StorageEntry => {
      if (!cached) {
        cached = createFunction(registry, { meta, method, prefix, section }, {});
      }

      return cached;
    }
  });
}

function lazyMethods (registry: Registry, { items, prefix: _prefix }: PalletStorageMetadataLatest, moduleName: string, section: string): ModuleStorage {
  const prefix = _prefix.toString();
  const result: ModuleStorage = {
    palletVersion: createRuntimeFunction(
      { method: 'palletVersion', prefix, section },
      createKeyRaw(registry, { method: ':__STORAGE_VERSION__:', prefix: moduleName }, [], [], []),
      { docs: 'Returns the current pallet version from storage', type: 'u16' }
    )(registry)
  };

  for (let i = 0; i < items.length; i++) {
    lazyMethod(registry, result, items[i], prefix, section);
  }

  return result;
}

function lazySection (registry: Registry, result: Storage, { name, storage }: PalletMetadataLatest): void {
  if (storage.isNone) {
    return;
  }

  const section = stringCamelCase(name);
  let cached: ModuleStorage | null = null;

  Object.defineProperty(result, section, {
    enumerable: true,
    get: (): ModuleStorage => {
      if (!cached) {
        cached = lazyMethods(registry, storage.unwrap(), name.toString(), section);
      }

      return cached;
    }
  });
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateStorage (registry: Registry, { pallets }: MetadataLatest, _metaVersion: number): Storage {
  const result: Storage = getStorage(registry);

  for (let p = 0; p < pallets.length; p++) {
    lazySection(registry, result, pallets[p]);
  }

  return result;
}
