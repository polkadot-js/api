// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventMetadataLatest, EventMetadataV12, FunctionMetadataLatest, FunctionMetadataV12, MetadataLatest, MetadataV12, ModuleConstantMetadataLatest, ModuleConstantMetadataV12, ModuleMetadataLatest, ModuleMetadataV12, StorageEntryMetadataLatest, StorageMetadataLatest, StorageMetadataV12 } from '@polkadot/types/interfaces/metadata';
import type { OverrideModuleType, Registry } from '@polkadot/types/types';

import { Type } from '@polkadot/types/primitive';
import { getModuleTypes } from '@polkadot/types-known';
import { stringCamelCase } from '@polkadot/util';

// Since we don't have insight into the origin specification, we can only define what we know about
// in a pure Substrate/Polkadot implementation, any other custom origins won't be handled at all
const KNOWN_ORIGINS: Record<string, string> = {
  Council: 'CollectiveOrigin',
  System: 'SystemOrigin',
  TechnicalCommittee: 'CollectiveOrigin'
};

/**
 * Find and apply the correct type override
 * @internal
 **/
function setTypeOverride (sectionTypes: OverrideModuleType, type: Type): void {
  const override = Object.keys(sectionTypes).find((aliased) => type.eq(aliased));

  if (override) {
    type.setOverride(sectionTypes[override]);
  } else {
    // FIXME: NOT happy with this approach, but gets over the initial hump cased by (Vec<Announcement>,BalanceOf)
    const orig = type.toString();
    const alias = Object.entries(sectionTypes).reduce((result: string, [from, to]): string =>
      [['<', '>'], ['<', ','], [',', '>'], ['(', ')'], ['(', ','], [',', ','], [',', ')']].reduce((result, [one, two]): string =>
        result.replace(`${one}${from}${two}`, `${one}${to}${two}`), result), orig);

    if (orig !== alias) {
      type.setOverride(alias);
    }
  }
}

/**
 * Apply module-specific type overrides (always be done as part of toLatest)
 * @internal
 **/
function convertCalls (registry: Registry, calls: FunctionMetadataV12[], sectionTypes: OverrideModuleType): FunctionMetadataLatest[] {
  return calls.map((c): FunctionMetadataLatest => {
    c.args.forEach(({ type }) => setTypeOverride(sectionTypes, type));

    return registry.createType('FunctionMetadataLatest', c);
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toLatest)
 * @internal
 */
function convertConstants (registry: Registry, constants: ModuleConstantMetadataV12[], sectionTypes: OverrideModuleType): ModuleConstantMetadataLatest[] {
  return constants.map((c): ModuleConstantMetadataLatest => {
    setTypeOverride(sectionTypes, c.type);

    return registry.createType('ModuleConstantMetadataLatest', c);
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toLatest)
 * @internal
 **/
function convertEvents (registry: Registry, events: EventMetadataV12[], sectionTypes: OverrideModuleType): EventMetadataLatest[] {
  return events.map((e): EventMetadataLatest => {
    e.args.forEach((type) => setTypeOverride(sectionTypes, type));

    return registry.createType('EventMetadataLatest', e);
  });
}

/**
 * Apply module-specific storage type overrides (always part of toLatest)
 * @internal
 **/
function convertStorage (registry: Registry, { items, prefix }: StorageMetadataV12, sectionTypes: OverrideModuleType): StorageMetadataLatest {
  return registry.createType('StorageMetadataLatest', {
    items: items.map((s): StorageEntryMetadataLatest => {
      let resultType: Type;

      if (s.type.isMap) {
        resultType = s.type.asMap.value;
      } else if (s.type.isDoubleMap) {
        resultType = s.type.asDoubleMap.value;
      } else {
        resultType = s.type.asPlain;
      }

      setTypeOverride(sectionTypes, resultType);

      return registry.createType('StorageEntryMetadataLatest', s);
    }),
    prefix
  });
}

// generate & register the OriginCaller type
function registerOriginCaller (registry: Registry, modules: ModuleMetadataV12[], metaVersion: number): void {
  registry.register({
    OriginCaller: {
      _enum: modules
        .map((mod, index): [string, number] => [
          mod.name.toString(),
          metaVersion >= 12 ? mod.index.toNumber() : index
        ])
        .sort((a, b) => a[1] - b[1])
        .reduce((result: Record<string, string>, [name, index]): Record<string, string> => {
          for (let i = Object.keys(result).length; i < index; i++) {
            result[`Empty${i}`] = 'Null';
          }

          result[name] = KNOWN_ORIGINS[name] || 'Null';

          return result;
        }, {})
    }
  });
}

/** @internal */
function createModule (registry: Registry, mod: ModuleMetadataV12, { calls, constants, events, storage }: { calls: FunctionMetadataV12[] | null, constants: ModuleConstantMetadataV12[], events: EventMetadataV12[] | null, storage: StorageMetadataV12 | null }): ModuleMetadataLatest {
  const sectionTypes = getModuleTypes(registry, stringCamelCase(mod.name));

  return registry.createType('ModuleMetadataLatest', {
    ...mod,
    calls: calls && convertCalls(registry, calls, sectionTypes),
    constants: convertConstants(registry, constants, sectionTypes),
    events: events && convertEvents(registry, events, sectionTypes),
    storage: storage && convertStorage(registry, storage, sectionTypes)
  });
}

/**
 * Convert the Metadata (which is an alias) to latest - effectively this _always_ get applied to the top-level &
 * most-recent metadata, since it allows us a chance to actually apply call and storage specific type aliasses
 * @internal
 **/
export function toLatest (registry: Registry, { extrinsic, modules }: MetadataV12, metaVersion: number): MetadataLatest {
  registerOriginCaller(registry, modules, metaVersion);

  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map((mod) => createModule(registry, mod, {
      calls: mod.calls.unwrapOr(null),
      constants: mod.constants,
      events: mod.events.unwrapOr(null),
      storage: mod.storage.unwrapOr(null)
    }))
  });
}
