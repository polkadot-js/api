// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataV9, MetadataV10, ModuleMetadataV9, ModuleMetadataV10, StorageEntryMetadataV9, StorageEntryTypeV9, StorageHasherV9, StorageHasherV10 } from '../../interfaces/metadata';

import { objectSpread } from '@polkadot/util';

// migrate a storage hasher type
// see https://github.com/paritytech/substrate/pull/4462
/** @internal */
function createStorageHasher (registry: Registry, hasher: StorageHasherV9): StorageHasherV10 {
  // Blake2_128_Concat has been added at index 2, so we increment all the
  // indexes greater than 2
  if (hasher.toNumber() >= 2) {
    return registry.createTypeUnsafe('StorageHasherV10', [hasher.toNumber() + 1]);
  }

  return registry.createTypeUnsafe('StorageHasherV10', [hasher]);
}

/** @internal */
function createStorageType (registry: Registry, entryType: StorageEntryTypeV9): [any, number] {
  if (entryType.isMap) {
    return [objectSpread({}, entryType.asMap, {
      hasher: createStorageHasher(registry, entryType.asMap.hasher)
    }), 1];
  }

  if (entryType.isDoubleMap) {
    return [objectSpread({}, entryType.asDoubleMap, {
      hasher: createStorageHasher(registry, entryType.asDoubleMap.hasher),
      key2Hasher: createStorageHasher(registry, entryType.asDoubleMap.key2Hasher)
    }), 2];
  }

  return [entryType.asPlain, 0];
}

/** @internal */
function convertModule (registry: Registry, mod: ModuleMetadataV9): ModuleMetadataV10 {
  const storage = mod.storage.unwrapOr(null);

  return registry.createTypeUnsafe('ModuleMetadataV10', [objectSpread({}, mod, {
    storage: storage
      ? objectSpread({}, storage, {
        items: storage.items.map((item: StorageEntryMetadataV9): any =>
          objectSpread({}, item, {
            type: registry.createTypeUnsafe('StorageEntryTypeV10', createStorageType(registry, item.type))
          })
        )
      })
      : null
  })]);
}

/** @internal */
export function toV10 (registry: Registry, { modules }: MetadataV9): MetadataV10 {
  return registry.createTypeUnsafe('MetadataV10', [{
    modules: modules.map((mod) => convertModule(registry, mod))
  }]);
}
