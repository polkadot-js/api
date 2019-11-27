// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV9, MetadataV10, ModuleMetadataV9, ModuleMetadataV10, StorageEntryTypeV9 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types';

// migrate a storage entry type - only map types are different (with a kind enum)
// all return the actual value for the enum, followed by the numeric index
function createStorageType (registry: Registry, entryType: StorageEntryTypeV9): [any, number] {
  if (entryType.isPlain) {
    return [entryType.asPlain, 0];
  } else if (entryType.isDoubleMap) {
    return [entryType.asDoubleMap, 2];
  }

  const map = entryType.asMap;

  // map needs a migration, removing linked and adding an explicit kind
  return [{
    ...map,
    kind: createType(registry, 'MapKindV10', null, map.linked.isTrue ? 1 : 0)
  }, 1];
}

function convertModule (registry: Registry, mod: ModuleMetadataV9): ModuleMetadataV10 {
  const storage = mod.storage.unwrapOr(null);

  return createType(registry, 'ModuleMetadataV10', {
    ...mod,
    storage: storage
      ? {
        ...storage,
        items: storage.items.map((item): any => ({
          ...item,
          type: createType(registry, 'StorageEntryTypeV10', ...createStorageType(registry, item.type))
        }))
      }
      : null
  });
}

/**
 * Convert from MetadataV9 to MetadataV10
 */
export default function toV10 (registry: Registry, { modules }: MetadataV9): MetadataV10 {
  return createType(registry, 'MetadataV10', {
    modules: modules.map((mod): ModuleMetadataV10 => convertModule(registry, mod))
  });
}
