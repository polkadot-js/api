// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType } from '@polkadot/types/known/types';
import { FunctionMetadataV10, FunctionMetadataLatest, MetadataV10, MetadataLatest, ModuleMetadataV10, ModuleMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { getModuleTypes } from '@polkadot/types/known';
import { createType } from '@polkadot/types';
import { stringCamelCase } from '@polkadot/util';

// apply module-specific type overrides - this should always be done as part of toLatest
/** @internal */
function convertCalls (registry: Registry, calls: FunctionMetadataV10[], sectionTypes: OverrideModuleType[]): FunctionMetadataLatest[] {
  return calls.map(({ args, documentation, name }): FunctionMetadataLatest => {
    args.forEach(({ type }): void => {
      const queued = sectionTypes.find(({ name }): boolean => type.eq(name));

      if (queued) {
        type.setOverride(queued.override);
      }
    });

    return createType(registry, 'FunctionMetadataLatest', { args, name, documentation });
  });
}

/** @internal */
function convertModule (registry: Registry, mod: ModuleMetadataV10): ModuleMetadataLatest {
  const calls = mod.calls.unwrapOr(null);
  const sectionTypes = getModuleTypes(stringCamelCase(mod.name.toString())) || [];

  return createType(registry, 'ModuleMetadataLatest', {
    ...mod,
    calls: calls
      ? convertCalls(registry, calls, sectionTypes)
      : null
  });
}

/** @internal */
export default function toLatest (registry: Registry, { modules }: MetadataV10): MetadataLatest {
  return createType(registry, 'MetadataLatest', {
    modules: modules.map((mod): ModuleMetadataLatest => convertModule(registry, mod))
  });
}
