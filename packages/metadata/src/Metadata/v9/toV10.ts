// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV9, MetadataV10, ModuleMetadataV9, ModuleMetadataV10, StorageEntryMetadataV9, StorageEntryTypeV9, StorageEntryTypeV10 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType, StorageHasherV4, StorageHasherV10 } from '@polkadot/types';

// migrate a storage hasher type
// see https://github.com/paritytech/substrate/pull/4462
function createStorageHasher (registry: Registry, hasher: StorageHasherV4): StorageHasherV10 {
  // Blake2_128_Concat has been added at index 2, so we increment all the
  // indexes greater than 2
  if (hasher.toNumber() >= 2) {
    return createType(registry, 'StorageHasherV10', hasher.toNumber() + 1);
  }

  return createType(registry, 'StorageHasherV10', hasher);
}

function createStorageEntryType (registry: Registry, entryType: StorageEntryTypeV9): StorageEntryTypeV10 {
  if (entryType.isMap) {
    return createType(registry, 'StorageEntryTypeV10', {
      ...(entryType.toJSON() as object),
      hasher: createStorageHasher(registry, entryType.asMap.hasher)
    });
  }

  if (entryType.isDoubleMap) {
    return createType(registry, 'StorageEntryTypeV10', {
      ...(entryType.toJSON() as object),
      hasher: createStorageHasher(registry, entryType.asDoubleMap.hasher),
      key2Hasher: createStorageHasher(registry, entryType.asDoubleMap.key2Hasher)
    });
  }

  return createType(registry, 'StorageEntryTypeV10', entryType);
}

function convertModule (registry: Registry, mod: ModuleMetadataV9): ModuleMetadataV10 {
  const storage = mod.storage.unwrapOr(null);

  return createType(registry, 'ModuleMetadataV10', {
    ...mod,
    storage: storage
      ? {
        ...storage,
        items: storage.items.map((entryMeta: StorageEntryMetadataV9): any => ({
          ...entryMeta,
          type: createStorageEntryType(registry, entryMeta.type)
        }))
      }
      : null
  });
}

/**
 * Convert from MetadataV9 to MetadataV9
 */
export default function toV10 (registry: Registry, { modules }: MetadataV9): MetadataV10 {
  return createType(registry, 'MetadataV10', {
    modules: modules.map((mod): ModuleMetadataV10 => convertModule(registry, mod))
  });
}
