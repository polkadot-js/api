// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { MetadataV9, MetadataV10, ModuleMetadataV9, ModuleMetadataV10, StorageEntryMetadataV9, StorageEntryTypeV9, StorageHasherV9, StorageHasherV10 } from '../../interfaces/metadata';

// migrate a storage hasher type
// see https://github.com/paritytech/substrate/pull/4462
/** @internal */
function createStorageHasher (registry: CodecRegistry, hasher: StorageHasherV9): StorageHasherV10 {
  // Blake2_128_Concat has been added at index 2, so we increment all the
  // indexes greater than 2
  if (hasher.toNumber() >= 2) {
    return registry.createTypeUnsafe('StorageHasherV10', [hasher.toNumber() + 1]);
  }

  return registry.createTypeUnsafe('StorageHasherV10', [hasher]);
}

/** @internal */
function createStorageType (registry: CodecRegistry, entryType: StorageEntryTypeV9): [any, number] {
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
function convertModule (registry: CodecRegistry, mod: ModuleMetadataV9): ModuleMetadataV10 {
  const storage = mod.storage.unwrapOr(null);

  return registry.createTypeUnsafe('ModuleMetadataV10', [{
    ...mod,
    storage: storage
      ? {
        ...storage,
        items: storage.items.map((item: StorageEntryMetadataV9): any => ({
          ...item,
          type: registry.createTypeUnsafe('StorageEntryTypeV10', createStorageType(registry, item.type))
        }))
      }
      : null
  }]);
}

/** @internal */
export function toV10 (registry: CodecRegistry, { modules }: MetadataV9): MetadataV10 {
  return registry.createTypeUnsafe('MetadataV10', [{
    modules: modules.map((mod) => convertModule(registry, mod))
  }]);
}
