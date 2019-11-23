// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV8, MetadataV9, ModuleMetadataV9, StorageEntryTypeV8, StorageEntryTypeV9 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types';

// migrate a storage entry - only map types are different, with a kind enum
function createStorageEntry (registry: Registry, type: StorageEntryTypeV8): StorageEntryTypeV9 {
  return createType(registry, 'StorageEntryTypeV9',
    type.isPlain
      ? createType(registry, 'PlainTypeV9', type.asPlain)
      : type.isDoubleMap
        ? createType(registry, 'DoubleMapTypeV9', type.asDoubleMap)
        : createType(registry, 'MapTypeV9', {
          hasher: type.asMap.hasher,
          key: type.asMap.key,
          value: type.asMap.value,
          kind: createType(registry, 'StorageMapTypeV9', type.asMap.linked.isTrue ? 'LinkedMap' : 'Map')
        })
  );
}

/**
 * Convert from MetadataV8 to MetadataV9
 */
export default function toV9 (registry: Registry, { modules }: MetadataV8): MetadataV9 {
  return createType(registry, 'MetadataV9', {
    modules: modules.map(({ calls, constants, errors, events, name, storage }): ModuleMetadataV9 => {
      const _storage = storage.unwrapOr(null);

      return createType(registry, 'ModuleMetadataV9', {
        calls,
        constants,
        errors,
        events,
        name,
        storage: _storage
          ? {
            prefix: _storage.prefix,
            items: _storage.items.map(({ documentation, fallback, name, modifier, type }): any => ({
              documentation,
              fallback,
              name,
              modifier,
              type: createStorageEntry(registry, type)
            }))
          }
          : null
      });
    })
  });
}
