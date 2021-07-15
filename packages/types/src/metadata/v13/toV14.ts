// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ErrorMetadataV13, EventMetadataV13, ExtrinsicMetadataV13, ExtrinsicMetadataV14, FunctionMetadataV13, MetadataV13, MetadataV14, ModuleConstantMetadataV13, ModuleMetadataV13, PalletCallMetadataV14, PalletConstantMetadataV14, PalletErrorMetadataV14, PalletEventMetadataV14, PalletMetadataV14, PalletStorageMetadataV14, StorageEntryMetadataV14, StorageEntryTypeV14, StorageMetadataV13 } from '../../interfaces/metadata';
import type { SiType, SiVariant } from '../../interfaces/scaleInfo';
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
function compatType (registry: Registry, types: SiType[], type: Text | string, path: (Text | string)[] = [], docs: (Text | string)[] = []): number {
  return types.push(
    registry.createType('SiType', {
      def: { HistoricMetaCompat: type },
      docs,
      path
    })
  ) - 1;
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
function convertCalls (registry: Registry, types: SiType[], modName: Text, calls: FunctionMetadataV13[], sectionTypes: OverrideModuleType): PalletCallMetadataV14 {
  const variants = calls.map(({ args, docs, name }, index): SiVariant => {
    setTypeOverride(sectionTypes, args.map(({ type }) => type));

    return registry.createType('SiVariant', {
      docs,
      fields: args.map(({ name, type }) =>
        registry.createType('SiField', { name, type: compatType(registry, types, type) })
      ),
      index,
      name
    });
  });

  const type = types.push(
    registry.createType('SiType', {
      def: {
        Variant: { variants }
      },
      path: [modName, 'Calls']
    })
  ) - 1;

  return registry.createType('PalletCallMetadataV14', { type });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 */
function convertConstants (registry: Registry, types: SiType[], constants: ModuleConstantMetadataV13[], sectionTypes: OverrideModuleType): PalletConstantMetadataV14[] {
  return constants.map(({ docs, name, type, value }): PalletConstantMetadataV14 => {
    setTypeOverride(sectionTypes, [type]);

    return registry.createType('PalletConstantMetadataV14', {
      docs,
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
function convertErrors (registry: Registry, types: SiType[], modName: Text, errors: ErrorMetadataV13[], _sectionTypes: OverrideModuleType): PalletErrorMetadataV14 {
  const variants = errors.map(({ docs, name }, index): SiVariant =>
    registry.createType('SiVariant', {
      docs,
      fields: [],
      index,
      name
    })
  );

  types.push(
    registry.createType('SiType', {
      def: {
        Variant: { variants }
      },
      path: [modName, 'Errors']
    })
  );

  return registry.createType('PalletErrorMetadataV14', { type: types.length - 1 });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 **/
function convertEvents (registry: Registry, types: SiType[], modName: Text, events: EventMetadataV13[], sectionTypes: OverrideModuleType): PalletEventMetadataV14 {
  const variants = events.map(({ args, docs, name }, index): SiVariant => {
    setTypeOverride(sectionTypes, args);

    return registry.createType('SiVariant', {
      docs,
      fields: args.map((type) =>
        registry.createType('SiField', { type: compatType(registry, types, type) })
      ),
      index,
      name
    });
  });

  types.push(
    registry.createType('SiType', {
      def: {
        Variant: { variants }
      },
      path: [modName, 'Events']
    })
  );

  return registry.createType('PalletEventMetadataV14', { type: types.length - 1 });
}

/**
 * Apply module-specific storage type overrides (always part of toV14)
 * @internal
 **/
function convertStorage (registry: Registry, types: SiType[], { items, prefix }: StorageMetadataV13, sectionTypes: OverrideModuleType): PalletStorageMetadataV14 {
  return registry.createType('PalletStorageMetadataV14', {
    items: items.map(({ docs, fallback, modifier, name, type }): StorageEntryMetadataV14 => {
      let entryType: StorageEntryTypeV14;

      if (type.isPlain) {
        const plain = type.asPlain;

        setTypeOverride(sectionTypes, [plain]);

        entryType = registry.createType('StorageEntryTypeV14', {
          Plain: compatType(registry, types, plain)
        });
      } else if (type.isMap) {
        const map = type.asMap;

        setTypeOverride(sectionTypes, [map.value, map.key]);

        entryType = registry.createType('StorageEntryTypeV14', {
          Map: {
            hasher: map.hasher,
            key: compatType(registry, types, map.key),
            value: compatType(registry, types, map.value)
          }
        });
      } else if (type.isDoubleMap) {
        const dm = type.asDoubleMap;

        setTypeOverride(sectionTypes, [dm.value, dm.key1, dm.key2]);

        entryType = registry.createType('StorageEntryTypeV14', {
          DoubleMap: {
            hasher: dm.hasher,
            key1: compatType(registry, types, dm.key1),
            key2: compatType(registry, types, dm.key2),
            key2Hasher: dm.key2Hasher,
            value: compatType(registry, types, dm.value)
          }
        });
      } else {
        const nm = type.asNMap;

        setTypeOverride(sectionTypes, [nm.value, ...nm.keyVec]);

        const key = types.push(
          registry.createType('SiType', {
            def: {
              Tuple: nm.keyVec.map((type) =>
                compatType(registry, types, type)
              )
            }
          })
        ) - 1;

        entryType = registry.createType('StorageEntryTypeV14', {
          NMap: {
            hashers: nm.hashers,
            key,
            value: compatType(registry, types, nm.value)
          }
        });
      }

      return registry.createType('StorageEntryMetadataV14', {
        docs,
        fallback,
        modifier,
        name,
        type: entryType
      });
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
function createPallet (registry: Registry, types: SiType[], mod: ModuleMetadataV13, { calls, constants, errors, events, storage }: { calls: FunctionMetadataV13[] | null, constants: ModuleConstantMetadataV13[], errors: ErrorMetadataV13[] | null, events: EventMetadataV13[] | null, storage: StorageMetadataV13 | null }): PalletMetadataV14 {
  const sectionTypes = getModuleTypes(registry, stringCamelCase(mod.name));

  return registry.createType('PalletMetadataV14', {
    calls: calls && convertCalls(registry, types, mod.name, calls, sectionTypes),
    constants: convertConstants(registry, types, constants, sectionTypes),
    errors: errors && convertErrors(registry, types, mod.name, errors, sectionTypes),
    events: events && convertEvents(registry, types, mod.name, events, sectionTypes),
    index: mod.index,
    name: mod.name,
    storage: storage && convertStorage(registry, types, storage, sectionTypes)
  });
}

/**
 * Convert the Metadata to v14
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
      errors: mod.errors.length ? mod.errors : null,
      events: mod.events.unwrapOr(null),
      storage: mod.storage.unwrapOr(null)
    })
  );

  return registry.createType('MetadataV14', { extrinsic, pallets, types: { types } });
}
