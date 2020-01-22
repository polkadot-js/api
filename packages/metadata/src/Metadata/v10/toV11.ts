// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType } from '@polkadot/types/known/types';
import { FunctionMetadataV10, FunctionMetadataV11, MetadataV10, MetadataV11, ModuleMetadataV10, ModuleMetadataV11, StorageEntryTypeV10 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { getModuleTypes } from '@polkadot/types/known';
import { createType } from '@polkadot/types';
import { stringCamelCase } from '@polkadot/util';

// migrate a storage entry type - only map types are different (with a kind enum)
// all return the actual value for the enum, followed by the numeric index
function createStorageType (registry: Registry, entryType: StorageEntryTypeV10): [any, number] {
  if (entryType.isPlain) {
    return [entryType.asPlain, 0];
  } else if (entryType.isDoubleMap) {
    return [entryType.asDoubleMap, 2];
  }

  const map = entryType.asMap;

  // map needs a migration, removing linked and adding an explicit kind
  return [{
    ...map,
    kind: createType(registry, 'MapKindV11', null, map.linked.isTrue ? 1 : 0)
  }, 1];
}

// apply module-specific type overrides
function convertCalls (registry: Registry, calls: FunctionMetadataV10[], sectionTypes: OverrideModuleType[]): FunctionMetadataV11[] {
  return calls.map(({ args, documentation, name }): FunctionMetadataV11 => {
    args.forEach(({ type }): void => {
      const queued = sectionTypes.find(({ name }): boolean => type.eq(name));

      if (queued) {
        type.setOverride(queued.override);
      }
    });

    return createType(registry, 'FunctionMetadataV11', { args, name, documentation });
  });
}

function convertModule (registry: Registry, mod: ModuleMetadataV10): ModuleMetadataV11 {
  const calls = mod.calls.unwrapOr(null);
  const storage = mod.storage.unwrapOr(null);
  const sectionTypes = getModuleTypes(stringCamelCase(mod.name.toString())) || [];

  return createType(registry, 'ModuleMetadataV11', {
    ...mod,
    calls: calls
      ? convertCalls(registry, calls, sectionTypes)
      : null,
    storage: storage
      ? {
        ...storage,
        items: storage.items.map((item): any => ({
          ...item,
          type: createType(registry, 'StorageEntryTypeV11', ...createStorageType(registry, item.type))
        }))
      }
      : null
  });
}

/**
 * Convert from MetadataV10 to MetadataV11
 */
export default function toV11 (registry: Registry, { modules }: MetadataV10): MetadataV11 {
  return createType(registry, 'MetadataV11', {
    modules: modules.map((mod): ModuleMetadataV11 => convertModule(registry, mod))
  });
}
