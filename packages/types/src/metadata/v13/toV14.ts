// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventMetadataV13, FunctionMetadataV13, FunctionMetadataV14, MetadataV13, MetadataV14, ModuleConstantMetadataV13, ModuleMetadataV13, PalletConstantMetadataV14, PalletEventMetadataV14, PalletMetadataV14, PalletStorageMetadataV14, StorageEntryMetadataV14, StorageMetadataV13 } from '../../interfaces/metadata';
import type { OverrideModuleType, Registry } from '../../types';

import { getModuleTypes, knownOrigins } from '@polkadot/types-known';
import { stringCamelCase } from '@polkadot/util';

import { Type } from '../../primitive';

const BOXES = [['<', '>'], ['<', ','], [',', '>'], ['(', ')'], ['(', ','], [',', ','], [',', ')']];

/**
 * Find and apply the correct type override
 * @internal
 **/
function setTypeOverride (sectionTypes: OverrideModuleType, types: Type[]): void {
  types.forEach((type): void => {
    const override = Object.keys(sectionTypes).find((aliased) => type.eq(aliased));

    if (override) {
      type.setOverride(sectionTypes[override]);
    } else {
      // FIXME: NOT happy with this approach, but gets over the initial hump cased by (Vec<Announcement>,BalanceOf)
      const orig = type.toString();
      const alias = Object
        .entries(sectionTypes)
        .reduce((result: string, [from, to]) =>
          BOXES.reduce((result, [one, two]) =>
            result.replace(`${one}${from}${two}`, `${one}${to}${two}`), result), orig);

      if (orig !== alias) {
        type.setOverride(alias);
      }
    }
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 **/
function convertCalls (registry: Registry, calls: FunctionMetadataV13[], sectionTypes: OverrideModuleType): FunctionMetadataV14[] {
  return calls.map((c): FunctionMetadataV14 => {
    setTypeOverride(sectionTypes, c.args.map(({ type }) => type));

    return registry.createType('FunctionMetadataV14', c);
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 */
function convertConstants (registry: Registry, constants: ModuleConstantMetadataV13[], sectionTypes: OverrideModuleType): PalletConstantMetadataV14[] {
  return constants.map((c): PalletConstantMetadataV14 => {
    setTypeOverride(sectionTypes, [c.type]);

    return registry.createType('PalletConstantMetadataV14', c);
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 **/
function convertEvents (registry: Registry, events: EventMetadataV13[], sectionTypes: OverrideModuleType): PalletEventMetadataV14[] {
  return events.map((e): PalletEventMetadataV14 => {
    setTypeOverride(sectionTypes, e.args.map((type) => type));

    return registry.createType('PalletEventMetadataV14', e);
  });
}

/**
 * Apply module-specific storage type overrides (always part of toV14)
 * @internal
 **/
function convertStorage (registry: Registry, { items, prefix }: StorageMetadataV13, sectionTypes: OverrideModuleType): PalletStorageMetadataV14 {
  return registry.createType('PalletStorageMetadataV14', {
    items: items.map((s): StorageEntryMetadataV14 => {
      setTypeOverride(sectionTypes,
        s.type.isPlain
          ? [s.type.asPlain]
          : s.type.isMap
            ? [s.type.asMap.value, s.type.asMap.key]
            : s.type.isDoubleMap
              ? [s.type.asDoubleMap.value, s.type.asDoubleMap.key1, s.type.asDoubleMap.key2]
              : [s.type.asNMap.value, ...s.type.asNMap.keyVec]
      );

      return registry.createType('StorageEntryMetadataV14', s);
    }),
    prefix
  });
}

// generate & register the OriginCaller type
function registerOriginCaller (registry: Registry, modules: ModuleMetadataV13[], metaVersion: number): void {
  registry.register({
    OriginCaller: {
      _enum: modules
        .map((mod, index): [string, number] => [
          mod.name.toString(),
          metaVersion >= 12
            ? mod.index.toNumber()
            : index
        ])
        .sort((a, b) => a[1] - b[1])
        .reduce((result: Record<string, string>, [name, index]): Record<string, string> => {
          for (let i = Object.keys(result).length; i < index; i++) {
            result[`Empty${i}`] = 'Null';
          }

          result[name] = knownOrigins[name] || 'Null';

          return result;
        }, {})
    }
  });
}

/** @internal */
function createModule (registry: Registry, mod: ModuleMetadataV13, { calls, constants, events, storage }: { calls: FunctionMetadataV13[] | null, constants: ModuleConstantMetadataV13[], events: EventMetadataV13[] | null, storage: StorageMetadataV13 | null }): PalletMetadataV14 {
  const sectionTypes = getModuleTypes(registry, stringCamelCase(mod.name));

  return registry.createType('PalletMetadataV14', {
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
export function toV14 (registry: Registry, { extrinsic, modules }: MetadataV13, metaVersion: number): MetadataV14 {
  registerOriginCaller(registry, modules, metaVersion);

  return registry.createType('MetadataV14', {
    extrinsic,
    modules: modules.map((mod) => createModule(registry, mod, {
      calls: mod.calls.unwrapOr(null),
      constants: mod.constants,
      events: mod.events.unwrapOr(null),
      storage: mod.storage.unwrapOr(null)
    }))
  });
}
