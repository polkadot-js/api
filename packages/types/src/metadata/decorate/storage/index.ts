// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataLatest, StorageEntryMetadataLatest } from '../../../interfaces';
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

  const lazySection = ({ name, storage }: PalletMetadataLatest): void => {
    const section = stringCamelCase(name);
    const { items, prefix: _prefix } = storage.unwrap();
    const prefix = _prefix.toString();

    lazyMethod(result, section, () =>
      lazyMethods(
        items,
        (meta: StorageEntryMetadataLatest) =>
          createFunction(registry, { meta, method: meta.name.toString(), prefix, section }, {}),
        objectNameFirstLower,
        {
          palletVersion: createRuntimeFunction(
            { method: 'palletVersion', prefix, section },
            createKeyRaw(registry, { method: ':__STORAGE_VERSION__:', prefix: name.toString() }, [], [], []),
            { docs: 'Returns the current pallet version from storage', type: 'u16' }
          )(registry)
        }
      )
    );
  };

  for (let p = 0; p < pallets.length; p++) {
    const pallet = pallets[p];

    if (pallet.storage.isSome) {
      lazySection(pallet);
    }
  }

  return result;
}
