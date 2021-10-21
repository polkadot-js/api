// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ModuleStorage, Storage } from '../types';

import { stringCamelCase, stringLowerFirst, u8aConcat } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import { createFunction } from './createFunction';
import { getStorage } from './getStorage';
import { createRuntimeFunction } from './util';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateStorage (registry: Registry, { pallets }: MetadataLatest, _metaVersion: number): Storage {
  return pallets.reduce((result: Storage, moduleMetadata): Storage => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const { name } = moduleMetadata;
    const section = stringCamelCase(name);
    const unwrapped = moduleMetadata.storage.unwrap();
    const prefix = unwrapped.prefix.toString();

    // For access, we change the index names, i.e. System.Account -> system.account
    result[section] = unwrapped.items.reduce((newModule, meta): ModuleStorage => {
      const method = meta.name.toString();

      newModule[stringLowerFirst(method)] = createFunction(registry, {
        meta,
        method,
        prefix,
        section
      }, {});

      return newModule;
    }, {
      palletVersion: createRuntimeFunction(
        name.toString(),
        'palletVersion',
        u8aConcat(xxhashAsU8a(name.toString(), 128), xxhashAsU8a(':__STORAGE_VERSION__:', 128)),
        {
          docs: 'Returns the current pallet version from storage',
          type: 'u16'
        }
      )(registry)
    } as ModuleStorage);

    return result;
  }, { ...getStorage(registry) });
}
