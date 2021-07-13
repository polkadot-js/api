// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ErrorMetadataV13, EventMetadataV13, ExtrinsicMetadataV13, ExtrinsicMetadataV14, FunctionMetadataV13, FunctionMetadataV14, MetadataV13, MetadataV14, ModuleConstantMetadataV13, ModuleMetadataV13, PalletConstantMetadataV14, PalletErrorMetadataV14, PalletEventMetadataV14, PalletMetadataV14, PalletStorageMetadataV14, StorageEntryMetadataV14, StorageMetadataV13 } from '../../interfaces/metadata';
import type { SiType } from '../../interfaces/scaleInfo';
import type { Text } from '../../primitive/Text';
import type { Type } from '../../primitive/Type';
import type { OverrideModuleType, Registry } from '../../types';

import { getModuleTypes, knownOrigins } from '@polkadot/types-known';
import { stringCamelCase } from '@polkadot/util';

const BOXES = [['<', '>'], ['<', ','], [',', '>'], ['(', ')'], ['(', ','], [',', ','], [',', ')']];

/**
 * Creates a compatible type mapping
 * @internal
 **/
function compatType (registry: Registry, types: SiType[], type: Text | string, path: (Text | string)[] = [], documentation: (Text | string)[] = []): number {
  types.push(
    registry.createType('SiType', {
      def: { HistoricMetaCompat: type },
      documentation,
      path
    })
  );

  return types.length - 1;
}

/**
 * @internal
 * generate & register the OriginCaller type
 **/
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
function convertCalls (registry: Registry, types: SiType[], calls: FunctionMetadataV13[], sectionTypes: OverrideModuleType): FunctionMetadataV14[] {
  return calls.map((c): FunctionMetadataV14 => {
    setTypeOverride(sectionTypes, c.args.map(({ type }) => type));

    return registry.createType('FunctionMetadataV14', c);
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 */
function convertConstants (registry: Registry, types: SiType[], constants: ModuleConstantMetadataV13[], sectionTypes: OverrideModuleType): PalletConstantMetadataV14[] {
  return constants.map(({ documentation, name, type, value }): PalletConstantMetadataV14 => {
    setTypeOverride(sectionTypes, [type]);

    return registry.createType('PalletConstantMetadataV14', {
      documentation,
      name,
      type: compatType(registry, types, type),
      value
    });
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function convertErrors (registry: Registry, types: SiType[], errors: ErrorMetadataV13[], _sectionTypes: OverrideModuleType): PalletErrorMetadataV14[] {
  return errors.map(({ documentation, name }): PalletErrorMetadataV14 =>
    registry.createType('PalletErrorMetadataV14', {
      type: compatType(registry, types, 'Null', [name], documentation)
    })
  );
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 **/
function convertEvents (registry: Registry, types: SiType[], events: EventMetadataV13[], sectionTypes: OverrideModuleType): PalletEventMetadataV14[] {
  return events.map((e): PalletEventMetadataV14 => {
    setTypeOverride(sectionTypes, e.args.map((type) => type));

    return registry.createType('PalletEventMetadataV14', e);
  });
}

/**
 * Apply module-specific storage type overrides (always part of toV14)
 * @internal
 **/
function convertStorage (registry: Registry, types: SiType[], { items, prefix }: StorageMetadataV13, sectionTypes: OverrideModuleType): PalletStorageMetadataV14 {
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

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function convertExtrinsic (registry: Registry, _types: SiType[], { signedExtensions, version }: ExtrinsicMetadataV13): ExtrinsicMetadataV14 {
  return registry.createType('ExtrinsicMetadataV14', {
    signedExtensions: signedExtensions.map((identifier) => ({
      identifier,
      type: 0 // we don't map the fields at all
    })),
    type: 0, // Map to extrinsic like in v14?
    version: version
  });
}

/** @internal */
function createPallet (registry: Registry, types: SiType[], mod: ModuleMetadataV13, { calls, constants, errors, events, storage }: { calls: FunctionMetadataV13[] | null, constants: ModuleConstantMetadataV13[], errors: ErrorMetadataV13[], events: EventMetadataV13[] | null, storage: StorageMetadataV13 | null }): PalletMetadataV14 {
  const sectionTypes = getModuleTypes(registry, stringCamelCase(mod.name));

  return registry.createType('PalletMetadataV14', {
    calls: calls && convertCalls(registry, types, calls, sectionTypes),
    constants: convertConstants(registry, types, constants, sectionTypes),
    errors: convertErrors(registry, types, errors, sectionTypes),
    events: events && convertEvents(registry, types, events, sectionTypes),
    index: mod.index,
    name: mod.name,
    storage: storage && convertStorage(registry, types, storage, sectionTypes)
  });
}

/**
 * Convert the Metadata (which is an alias) to latest - effectively this _always_ get applied to the top-level &
 * most-recent metadata, since it allows us a chance to actually apply call and storage specific type aliasses
 * @internal
 **/
export function toV14 (registry: Registry, v13: MetadataV13, metaVersion: number): MetadataV14 {
  // the types that we will pass
  const types: SiType[] = [];

  compatType(registry, types, 'Null'); // position 0 always has Null
  registerOriginCaller(registry, v13.modules, metaVersion);

  const extrinsic = convertExtrinsic(registry, types, v13.extrinsic);
  const pallets = v13.modules.map((mod) =>
    createPallet(registry, types, mod, {
      calls: mod.calls.unwrapOr(null),
      constants: mod.constants,
      errors: mod.errors,
      events: mod.events.unwrapOr(null),
      storage: mod.storage.unwrapOr(null)
    })
  );

  return registry.createType('MetadataV14', { extrinsic, pallets, types });
}
