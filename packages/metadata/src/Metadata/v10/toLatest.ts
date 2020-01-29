// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType } from '@polkadot/types/known/types';
import { FunctionMetadataV10, FunctionMetadataLatest, MetadataV10, MetadataLatest, ModuleMetadataV10, ModuleMetadataLatest, StorageMetadataV10, StorageMetadataLatest, StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { getModuleTypes } from '@polkadot/types/known';
import { Type, createType } from '@polkadot/types';
import { stringCamelCase } from '@polkadot/util';

function setTypeOverride (sectionTypes: OverrideModuleType, type: Type): void {
  const override = Object.keys(sectionTypes).find((aliased): boolean => type.eq(aliased));

  if (override) {
    type.setOverride(sectionTypes[override]);
  }
}

// apply module-specific type overrides (always be done as part of toLatest)
/** @internal */
function convertCalls (registry: Registry, calls: FunctionMetadataV10[], sectionTypes: OverrideModuleType): FunctionMetadataLatest[] {
  return calls.map(({ args, documentation, name }): FunctionMetadataLatest => {
    args.forEach(({ type }): void => setTypeOverride(sectionTypes, type));

    return createType(registry, 'FunctionMetadataLatest', { args, name, documentation });
  });
}

// apply module-specific storage type overrides (always part of toLatest)
/** @internal */
function convertStorage (registry: Registry, { items, prefix }: StorageMetadataV10, sectionTypes: OverrideModuleType): StorageMetadataLatest {
  return createType(registry, 'StorageMetadataLatest', {
    items: items.map(({ documentation, fallback, modifier, name, type }): StorageEntryMetadataLatest => {
      let resultType: Type;

      if (type.isMap) {
        resultType = type.asMap.value;
      } else if (type.isDoubleMap) {
        resultType = type.asDoubleMap.value;
      } else {
        resultType = type.asPlain;
      }

      setTypeOverride(sectionTypes, resultType);

      return createType(registry, 'StorageEntryMetadataLatest', { documentation, fallback, modifier, name, type });
    }),
    prefix
  });
}

/** @internal */
function convertModule (registry: Registry, mod: ModuleMetadataV10): ModuleMetadataLatest {
  const calls = mod.calls.unwrapOr(null);
  const storage = mod.storage.unwrapOr(null);
  const sectionTypes = getModuleTypes(stringCamelCase(mod.name.toString()));

  return createType(registry, 'ModuleMetadataLatest', {
    ...mod,
    calls: calls
      ? convertCalls(registry, calls, sectionTypes)
      : null,
    storage: storage
      ? convertStorage(registry, storage, sectionTypes)
      : null
  });
}

/** @internal */
export default function toLatest (registry: Registry, { modules }: MetadataV10): MetadataLatest {
  return createType(registry, 'MetadataLatest', {
    modules: modules.map((mod): ModuleMetadataLatest => convertModule(registry, mod))
  });
}
