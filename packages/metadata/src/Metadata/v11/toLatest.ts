// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType } from '@polkadot/types/known/types';
import { FunctionMetadataV11, FunctionMetadataLatest, MetadataV11, MetadataLatest, ModuleMetadataLatest, StorageMetadataV11, StorageMetadataLatest, StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { getModuleTypes } from '@polkadot/types/known';
import { Type, createType } from '@polkadot/types';
import { stringCamelCase } from '@polkadot/util';

// TODO Handle consts as well

/**
 * Find and apply the correct type override
 * @internal
 **/
function setTypeOverride (sectionTypes: OverrideModuleType, type: Type): void {
  const override = Object.keys(sectionTypes).find((aliased): boolean => type.eq(aliased));

  if (override) {
    type.setOverride(sectionTypes[override]);
  }
}

/**
 * Apply module-specific type overrides (always be done as part of toLatest)
 * @internal
 **/
function convertCalls (registry: Registry, calls: FunctionMetadataV11[], sectionTypes: OverrideModuleType): FunctionMetadataLatest[] {
  return calls.map(({ args, documentation, name }): FunctionMetadataLatest => {
    args.forEach(({ type }): void => setTypeOverride(sectionTypes, type));

    return createType(registry, 'FunctionMetadataLatest', { args, name, documentation });
  });
}

/**
 * Apply module-specific storage type overrides (always part of toLatest)
 * @internal
 **/
function convertStorage (registry: Registry, { items, prefix }: StorageMetadataV11, sectionTypes: OverrideModuleType): StorageMetadataLatest {
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

/**
 * Convert the Metadata (which is an alias) to latest - effectively this _always_ get applied to the top-level &
 * most-recent metadata, since it allows us a chance to actually apply call and storage specific type aliasses
 * @internal
 **/
export default function toLatest (registry: Registry, { modules, extrinsic }: MetadataV11): MetadataLatest {
  return createType(registry, 'MetadataLatest', {
    modules: modules.map((mod): ModuleMetadataLatest => {
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
    }),
    extrinsic
  });
}
