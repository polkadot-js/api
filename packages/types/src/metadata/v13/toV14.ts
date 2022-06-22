// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text, Type } from '@polkadot/types-codec';
import type { ErrorMetadataV13, EventMetadataV13, ExtrinsicMetadataV13, ExtrinsicMetadataV14, FunctionMetadataV13, MetadataV13, MetadataV14, ModuleConstantMetadataV13, ModuleMetadataV13, PalletCallMetadataV14, PalletConstantMetadataV14, PalletErrorMetadataV14, PalletEventMetadataV14, PalletMetadataV14, PalletStorageMetadataV14, StorageEntryMetadataV14, StorageEntryTypeV14, StorageHasherV13, StorageMetadataV13 } from '../../interfaces/metadata';
import type { SiVariant } from '../../interfaces/scaleInfo';
import type { OverrideModuleType, Registry } from '../../types';

import { stringCamelCase } from '@polkadot/util';

import { getAliasTypes } from '../../interfaces/alias';
import { knownOrigins } from '../../interfaces/runtime/definitions';

interface MapDef {
  hashers: StorageHasherV13[];
  isLinked: boolean;
  isOptional: boolean;
  keys: Type[];
  value: Type;
}

export interface TypeSpec {
  def: {
    HistoricMetaCompat?: string;
    Tuple?: number[];
    Variant?: {
      variants: SiVariant[];
    }
  },
  path?: string[];
}

const BOXES = [['<', '>'], ['<', ','], [',', '>'], ['(', ')'], ['(', ','], [',', ','], [',', ')']];

/**
 * Creates a compatible type mapping
 * @internal
 **/
function compatType (specs: TypeSpec[], _type: Text | string): number {
  const type = _type.toString();
  const index = specs.findIndex(({ def }) =>
    def.HistoricMetaCompat === type
  );

  if (index !== -1) {
    return index;
  }

  return specs.push({
    def: {
      HistoricMetaCompat: type
    }
  }) - 1;
}

function compatTypes (specs: TypeSpec[], ...types: (Text | string)[]): void {
  for (let i = 0; i < types.length; i++) {
    compatType(specs, types[i]);
  }
}

function makeTupleType (specs: TypeSpec[], entries: number[]): number {
  return specs.push({
    def: {
      Tuple: entries
    }
  }) - 1;
}

function makeVariantType (modName: Text, variantType: string, specs: TypeSpec[], variants: SiVariant[]): number {
  return specs.push({
    def: {
      Variant: { variants }
    },
    path: [`pallet_${modName.toString()}`, 'pallet', variantType]
  }) - 1;
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
        .reduce((result: string, [src, dst]) =>
          BOXES.reduce((result, [a, z]) =>
            result.replace(`${a}${src}${z}`, `${a}${dst}${z}`), result), orig);

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
function convertCalls (specs: TypeSpec[], registry: Registry, modName: Text, calls: FunctionMetadataV13[], sectionTypes: OverrideModuleType): PalletCallMetadataV14 {
  const variants = calls.map(({ args, docs, name }, index): SiVariant => {
    setTypeOverride(sectionTypes, args.map(({ type }) => type));

    return registry.createTypeUnsafe('SiVariant', [{
      docs,
      fields: args.map(({ name, type }) =>
        registry.createTypeUnsafe('SiField', [{ name, type: compatType(specs, type) }])
      ),
      index,
      name
    }]);
  });

  return registry.createTypeUnsafe('PalletCallMetadataV14', [{
    type: makeVariantType(modName, 'Call', specs, variants)
  }]);
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 */
function convertConstants (specs: TypeSpec[], registry: Registry, constants: ModuleConstantMetadataV13[], sectionTypes: OverrideModuleType): PalletConstantMetadataV14[] {
  return constants.map(({ docs, name, type, value }): PalletConstantMetadataV14 => {
    setTypeOverride(sectionTypes, [type]);

    return registry.createTypeUnsafe('PalletConstantMetadataV14', [{
      docs,
      name,
      type: compatType(specs, type),
      value
    }]);
  });
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function convertErrors (specs: TypeSpec[], registry: Registry, modName: Text, errors: ErrorMetadataV13[], _sectionTypes: OverrideModuleType): PalletErrorMetadataV14 {
  const variants = errors.map(({ docs, name }, index): SiVariant =>
    registry.createTypeUnsafe('SiVariant', [{
      docs,
      fields: [],
      index,
      name
    }])
  );

  return registry.createTypeUnsafe('PalletErrorMetadataV14', [{
    type: makeVariantType(modName, 'Error', specs, variants)
  }]);
}

/**
 * Apply module-specific type overrides (always be done as part of toV14)
 * @internal
 **/
function convertEvents (specs: TypeSpec[], registry: Registry, modName: Text, events: EventMetadataV13[], sectionTypes: OverrideModuleType): PalletEventMetadataV14 {
  const variants = events.map(({ args, docs, name }, index): SiVariant => {
    setTypeOverride(sectionTypes, args);

    return registry.createTypeUnsafe('SiVariant', [{
      docs,
      fields: args.map((t) =>
        registry.createTypeUnsafe('SiField', [{ type: compatType(specs, t) }])
      ),
      index,
      name
    }]);
  });

  return registry.createTypeUnsafe('PalletEventMetadataV14', [{
    type: makeVariantType(modName, 'Event', specs, variants)
  }]);
}

function createMapEntry (specs: TypeSpec[], registry: Registry, sectionTypes: OverrideModuleType, { hashers, isLinked, isOptional, keys, value }: MapDef): StorageEntryTypeV14 {
  setTypeOverride(sectionTypes, [value, ...(Array.isArray(keys) ? keys : [keys])]);

  return registry.createTypeUnsafe('StorageEntryTypeV14', [{
    Map: {
      hashers,
      key: hashers.length === 1
        ? compatType(specs, keys[0])
        : makeTupleType(specs, keys.map((t) => compatType(specs, t))),
      value: isLinked
        // For previous-generation linked-map support, the actual storage result
        // is a Tuple with the value and the Linkage (Option appears in teh value-part only)
        ? compatType(specs, `(${isOptional ? `Option<${value.toString()}>` : value.toString()}, Linkage<${keys[0].toString()}>)`)
        : compatType(specs, value)
    }
  }]);
}

/**
 * Apply module-specific storage type overrides (always part of toV14)
 * @internal
 **/
function convertStorage (specs: TypeSpec[], registry: Registry, { items, prefix }: StorageMetadataV13, sectionTypes: OverrideModuleType): PalletStorageMetadataV14 {
  return registry.createTypeUnsafe('PalletStorageMetadataV14', [{
    items: items.map(({ docs, fallback, modifier, name, type }): StorageEntryMetadataV14 => {
      let entryType: StorageEntryTypeV14;

      if (type.isPlain) {
        const plain = type.asPlain;

        setTypeOverride(sectionTypes, [plain]);

        entryType = registry.createTypeUnsafe('StorageEntryTypeV14', [{
          Plain: compatType(specs, plain)
        }]);
      } else if (type.isMap) {
        const map = type.asMap;

        entryType = createMapEntry(specs, registry, sectionTypes, {
          hashers: [map.hasher],
          isLinked: map.linked.isTrue,
          isOptional: modifier.isOptional,
          keys: [map.key],
          value: map.value
        });
      } else if (type.isDoubleMap) {
        const dm = type.asDoubleMap;

        entryType = createMapEntry(specs, registry, sectionTypes, {
          hashers: [dm.hasher, dm.key2Hasher],
          isLinked: false,
          isOptional: modifier.isOptional,
          keys: [dm.key1, dm.key2],
          value: dm.value
        });
      } else {
        const nm = type.asNMap;

        entryType = createMapEntry(specs, registry, sectionTypes, {
          hashers: nm.hashers,
          isLinked: false,
          isOptional: modifier.isOptional,
          keys: nm.keyVec,
          value: nm.value
        });
      }

      return registry.createTypeUnsafe('StorageEntryMetadataV14', [{
        docs,
        fallback,
        modifier,
        name,
        type: entryType
      }]);
    }),
    prefix
  }]);
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function convertExtrinsic (registry: Registry, { signedExtensions, version }: ExtrinsicMetadataV13): ExtrinsicMetadataV14 {
  return registry.createTypeUnsafe('ExtrinsicMetadataV14', [{
    signedExtensions: signedExtensions.map((identifier) => ({
      identifier,
      type: 0 // we don't map the fields at all
    })),
    type: 0, // Map to extrinsic like in v14?
    version
  }]);
}

/** @internal */
function createPallet (specs: TypeSpec[], registry: Registry, mod: ModuleMetadataV13, { calls, constants, errors, events, storage }: { calls: FunctionMetadataV13[] | null, constants: ModuleConstantMetadataV13[], errors: ErrorMetadataV13[] | null, events: EventMetadataV13[] | null, storage: StorageMetadataV13 | null }): PalletMetadataV14 {
  const sectionTypes = getAliasTypes(registry, stringCamelCase(mod.name));

  return registry.createTypeUnsafe('PalletMetadataV14', [{
    calls: calls && convertCalls(specs, registry, mod.name, calls, sectionTypes),
    constants: convertConstants(specs, registry, constants, sectionTypes),
    errors: errors && convertErrors(specs, registry, mod.name, errors, sectionTypes),
    events: events && convertEvents(specs, registry, mod.name, events, sectionTypes),
    index: mod.index,
    name: mod.name,
    storage: storage && convertStorage(specs, registry, storage, sectionTypes)
  }]);
}

/**
 * Convert the Metadata to v14
 * @internal
 **/
export function toV14 (registry: Registry, v13: MetadataV13, metaVersion: number): MetadataV14 {
  const specs: TypeSpec[] = [];

  // position 0 always has Null, additionally add internal defaults
  compatTypes(specs, 'Null', 'u8', 'u16', 'u32', 'u64');
  registerOriginCaller(registry, v13.modules, metaVersion);

  const extrinsic = convertExtrinsic(registry, v13.extrinsic);
  const pallets = v13.modules.map((mod) =>
    createPallet(specs, registry, mod, {
      calls: mod.calls.unwrapOr(null),
      constants: mod.constants,
      errors: mod.errors.length ? mod.errors : null,
      events: mod.events.unwrapOr(null),
      storage: mod.storage.unwrapOr(null)
    })
  );

  return registry.createTypeUnsafe('MetadataV14', [{
    extrinsic,
    lookup: {
      types: specs.map((type, id) =>
        registry.createTypeUnsafe('PortableType', [{ id, type }])
      )
    },
    pallets
  }]);
}
