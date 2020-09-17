// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataV9, MetadataV10, ModuleMetadataV9, ModuleMetadataV10, StorageEntryMetadataV9, StorageEntryTypeV9, StorageHasherV9, StorageHasherV10 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

// migrate a storage hasher type
// see https://github.com/paritytech/substrate/pull/4462
/** @internal */
function createStorageHasher (registry: Registry, hasher: StorageHasherV9): StorageHasherV10 {
  // Blake2_128_Concat has been added at index 2, so we increment all the
  // indexes greater than 2
  if (hasher.toNumber() >= 2) {
    return registry.createType('StorageHasherV10', hasher.toNumber() + 1);
  }

  return registry.createType('StorageHasherV10', hasher);
}

/** @internal */
function createStorageType (registry: Registry, entryType: StorageEntryTypeV9): [any, number] {
  if (entryType.isMap) {
    return [{
      ...entryType.asMap,
      hasher: createStorageHasher(registry, entryType.asMap.hasher)
    }, 1];
  }

  if (entryType.isDoubleMap) {
    return [{
      ...entryType.asDoubleMap,
      hasher: createStorageHasher(registry, entryType.asDoubleMap.hasher),
      key2Hasher: createStorageHasher(registry, entryType.asDoubleMap.key2Hasher)
    }, 2];
  }

  return [entryType.asPlain, 0];
}

/** @internal */
function convertModule (registry: Registry, mod: ModuleMetadataV9): ModuleMetadataV10 {
  const storage = mod.storage.unwrapOr(null);

  return registry.createType('ModuleMetadataV10', {
    ...mod,
    storage: storage
      ? {
        ...storage,
        items: storage.items.map((item: StorageEntryMetadataV9): any => ({
          ...item,
          type: registry.createType('StorageEntryTypeV10', ...createStorageType(registry, item.type))
        }))
      }
      : null
  });
}

/** @internal */
export default function toV10 (registry: Registry, { modules }: MetadataV9): MetadataV10 {
  return registry.createType('MetadataV10', {
    modules: modules.map((mod): ModuleMetadataV10 => convertModule(registry, mod))
  });
}
