// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '../../codec';
import type { PortableType } from '../../interfaces/metadata';
import type { SiField, SiLookupTypeId, SiPath, SiType, SiTypeDefArray, SiTypeDefBitSequence, SiTypeDefCompact, SiTypeDefComposite, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiTypeParameter, SiVariant } from '../../interfaces/scaleInfo';
import type { Text, Type } from '../../primitive';
import type { Registry, TypeDef } from '../../types';

import { assert, isNumber, isString, stringCamelCase, stringify, stringUpperFirst } from '@polkadot/util';

import { Struct } from '../../codec/Struct';
import { withTypeString } from '../../create/encodeTypes';
import { getTypeDef } from '../../create/getTypeDef';
import { sanitize } from '../../create/sanitize';
import { TypeDefInfo } from '../../types';

// Just a placeholder for a type.unrwapOr()
const TYPE_UNWRAP = { toNumber: () => -1 };

// Alias the primitive enum with out known values
const PRIMITIVE_ALIAS: Record<string, string> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

// These are types where we have a specific decoding/encoding override + helpers
const PRIMITIVE_PATHS = [
  // match {node, polkadot, ...}_runtime
  '*_runtime::Call',
  '*_runtime::Event',
  // these have a specific encoding or logic (for pallets)
  'pallet_democracy::vote::Vote',
  'pallet_identity::types::Data',
  // these are well-known types with additional encoding
  'sp_core::crypto::AccountId32',
  'sp_runtime::generic::era::Era',
  'sp_runtime::multiaddress::MultiAddress',
  // shorten some well-known types
  'primitive_types::*',
  'sp_arithmetic::per_things::*',
  // ink!
  'ink_env::types::*'
].map((p) => p.split('::'));

// Mappings for types that should be converted to set via BitVec
const SETS = [
  'pallet_identity::types::BitFlags'
].map((p) => p.split('::'));

// These we never use these as top-level names, they are wrappers
const WRAPPERS = ['BoundedBTreeMap', 'BoundedVec', 'Box', 'BTreeMap', 'Cow', 'Result', 'Option', 'WeakBoundedVec', 'WrapperOpaque'];

// These are reserved and/or conflicts with built-in Codec or JS definitions
const RESERVED = ['entries', 'hash', 'keys', 'new', 'size'];

function matchParts (first: string[], second: (string | Text)[]): boolean {
  return first.length === second.length && first.every((a, index) => {
    const b = second[index].toString();

    if ((a === '*') || (a === b)) {
      return true;
    }

    if (a.includes('*') && a.includes('_') && b.includes('_')) {
      const suba = a.split('_');
      const subb = b.split('_');

      if (suba[0] === '*') {
        // the first parts where the length is greater is always a match
        while (suba.length < subb.length) {
          subb.shift();
        }
      }

      return matchParts(suba, subb);
    }

    return false;
  });
}

// check if the path matches the PRIMITIVE_SP (with wildcards)
function getPrimitivePath (path: SiPath): string | null {
  // TODO We need to handle ink! Balance in some way
  return path.length && PRIMITIVE_PATHS.some((p) => matchParts(p, path))
    ? path[path.length - 1].toString()
    : null;
}

function removeDuplicateNames (lookup: GenericPortableRegistry, names: [number, string | null, SiTypeParameter[]][]): [number, string][] {
  const rewrite: Record<number, string> = {};

  return names
    .map(([lookupIndex, name, params]): [number, string | null] => {
      if (!name) {
        return [lookupIndex, null];
      }

      // those where the name is matching
      const allSame = names.filter(([, oName]) => name === oName);

      // are there among matching names
      const anyDiff = allSame.some(([oIndex,, oParams]) =>
        lookupIndex !== oIndex && (
          params.length !== oParams.length ||
          params.some((p, index) =>
            !p.name.eq(oParams[index].name) ||
            p.type.unwrapOr(TYPE_UNWRAP).toNumber() !== oParams[index].type.unwrapOr(TYPE_UNWRAP).toNumber()
          )
        )
      );

      // everything matches, we can combine these
      if (!anyDiff || !allSame[0][2].length) {
        return [lookupIndex, name];
      }

      // find the first parameter that yields differences
      const paramIdx = allSame[0][2].findIndex(({ type }, index) =>
        allSame.every(([,, params]) => params[index].type.isSome) &&
        allSame.every(([,, params], aIndex) =>
          aIndex === 0 ||
          !params[index].type.eq(type)
        )
      );

      // No param found that is different
      if (paramIdx === -1) {
        return [lookupIndex, name];
      }

      // see if using the param type helps
      const adjusted = allSame.map(([oIndex, oName, oParams]): [number, string | null] => {
        const { def, path } = lookup.getSiType(oParams[paramIdx].type.unwrap());

        if (!def.isPrimitive && !path.length) {
          return [oIndex, null];
        }

        return [
          oIndex,
          def.isPrimitive
            ? `${oName as string}${def.asPrimitive.toString()}`
            : `${oName as string}${path[path.length - 1].toString()}`
        ];
      });

      // any dupes remaining?
      const noDupes = adjusted.every(([i, n]) =>
        !!n &&
        !adjusted.some(([ai, an]) =>
          i !== ai &&
          n === an
        )
      );

      if (noDupes) {
        // we filtered above for null names
        adjusted.forEach(([index, name]): void => {
          rewrite[index] = name as string;
        });
      }

      return noDupes
        ? [lookupIndex, name]
        : [lookupIndex, null];
    })
    .filter((n): n is [number, string] => !!n[1])
    .map(([lookupIndex, name]) => [
      lookupIndex,
      rewrite[lookupIndex] || name
    ]);
}

function extractName (types: PortableType[], { id, type: { params, path } }: PortableType): [number, string | null, SiTypeParameter[]] {
  const lookupIndex = id.toNumber();

  if (!path.length || WRAPPERS.includes(path[path.length - 1].toString())) {
    return [lookupIndex, null, []];
  }

  const parts = path
    .map((p) => stringUpperFirst(stringCamelCase(p)))
    .filter((p, index) =>
      (
        // Remove ::{pallet, traits, types}::
        index !== 1 ||
        !['Pallet', 'Traits', 'Types'].includes(p.toString())
      ) &&
      (
        // sp_runtime::generic::digest::Digest -> sp_runtime::generic::Digest
        // sp_runtime::multiaddress::MultiAddress -> sp_runtime::MultiAddress
        index === path.length - 1 ||
        p.toLowerCase() !== path[index + 1].toLowerCase()
      )
    );
  let typeName = parts.join('');

  if (parts.length === 2 && parts[parts.length - 1] === 'RawOrigin' && params.length === 2 && params[1].type.isSome) {
    // Do magic for RawOrigin lookup
    const instanceType = types[params[1].type.unwrap().toNumber()];

    if (instanceType.type.path.length === 2) {
      typeName = `${typeName}${instanceType.type.path[1].toString()}`;
    }
  }

  return [lookupIndex, typeName, params];
}

function extractNames (lookup: GenericPortableRegistry, types: PortableType[]): Record<number, string> {
  const dedup = removeDuplicateNames(lookup, types.map((t) =>
    extractName(types, t)
  ));

  const [names, typesNew] = dedup.reduce<[Record<number, string>, Record<string, string>]>(([names, types], [lookupIndex, name]) => {
    // We set the name for this specific type
    names[lookupIndex] = name;

    // we map to the actual lookupIndex
    types[name] = lookup.registry.createLookupType(lookupIndex);

    return [names, types];
  }, [{}, {}]);

  lookup.registry.register(typesNew);

  return names;
}

// types have an id, which means they are to be named by
// the specified id - ensure we have a mapping lookup for these
function extractTypeMap (types: PortableType[]): Record<number, PortableType> {
  return types.reduce<Record<number, PortableType>>((types, pt) => {
    types[pt.id.toNumber()] = pt;

    return types;
  }, {});
}

export class GenericPortableRegistry extends Struct {
  #names: Record<number, string>;
  #typeDefs: Record<number, TypeDef> = {};
  #types: Record<number, PortableType>;

  constructor (registry: Registry, value?: Uint8Array) {
    super(registry, {
      types: 'Vec<PortableType>'
    }, value);

    this.#names = extractNames(this, this.types);
    this.#types = extractTypeMap(this.types);
  }

  public get names (): string[] {
    return Object.values(this.#names);
  }

  /**
   * @description The types of the registry
   */
  public get types (): Vec<PortableType> {
    return this.get('types') as Vec<PortableType>;
  }

  /**
   * @description Returns the name for a specific lookup
   */
  public getName (lookupId: SiLookupTypeId | string | number): string | undefined {
    return this.#names[this.#getLookupId(lookupId)];
  }

  /**
   * @description Finds a specific type in the registry
   */
  public getSiType (lookupId: SiLookupTypeId | string | number): SiType {
    // NOTE catch-22 - this may already be used as part of the constructor, so
    // ensure that we have actually initialized it correctly
    const found = (this.#types || this.types)[this.#getLookupId(lookupId)];

    assert(found, () => `PortableRegistry: Unable to find type with lookupId ${lookupId.toString()}`);

    return found.type;
  }

  /**
   * @description Lookup the type definition for the index
   */
  public getTypeDef (lookupId: SiLookupTypeId | string | number): TypeDef {
    const lookupIndex = this.#getLookupId(lookupId);

    if (!this.#typeDefs[lookupIndex]) {
      const lookupName = this.#names[lookupIndex];
      const empty = {
        info: TypeDefInfo.DoNotConstruct,
        lookupIndex,
        lookupName,
        type: this.registry.createLookupType(lookupIndex)
      };

      // Set named items since we will get into circular lookups along the way
      if (lookupName) {
        this.#typeDefs[lookupIndex] = empty;
      }

      const extracted = this.#extract(this.getSiType(lookupId), lookupIndex);

      // For non-named items, we only set this right at the end
      if (!lookupName) {
        this.#typeDefs[lookupIndex] = empty;
      }

      Object.keys(extracted).forEach((k): void => {
        if (k !== 'lookupName' || extracted[k]) {
          // these are safe since we are looking through the keys as set
          this.#typeDefs[lookupIndex][k as 'info'] = extracted[k as 'info'];
        }
      });

      // don't set lookupName on lower-level, we want to always direct to the type
      if (extracted.info === TypeDefInfo.Plain) {
        this.#typeDefs[lookupIndex].lookupNameRoot = this.#typeDefs[lookupIndex].lookupName;
        delete this.#typeDefs[lookupIndex].lookupName;
      }
    }

    return this.#typeDefs[lookupIndex];
  }

  #createSiDef (lookupId: SiLookupTypeId): TypeDef {
    const typeDef = this.getTypeDef(lookupId);
    const lookupIndex = lookupId.toNumber();

    // Setup for a lookup on complex types
    return [TypeDefInfo.DoNotConstruct, TypeDefInfo.Enum, TypeDefInfo.Struct].includes(typeDef.info) && typeDef.lookupName
      ? {
        docs: typeDef.docs,
        info: TypeDefInfo.Si,
        lookupIndex,
        lookupName: this.#names[lookupIndex],
        type: this.registry.createLookupType(lookupId)
      }
      : typeDef;
  }

  #getLookupId (lookupId: SiLookupTypeId | string | number): number {
    if (isString(lookupId)) {
      assert(this.registry.isLookupType(lookupId), () => `PortableRegistry: Expected a lookup string type, found ${lookupId}`);

      return parseInt(lookupId.replace('Lookup', ''), 10);
    } else if (isNumber(lookupId)) {
      return lookupId;
    }

    return lookupId.toNumber();
  }

  #extract (type: SiType, lookupIndex: number): TypeDef {
    const namespace = [...type.path].join('::');
    let typeDef: TypeDef;
    const primType = getPrimitivePath(type.path);

    try {
      if (primType) {
        typeDef = this.#extractPrimitivePath(lookupIndex, primType);
      } else if (type.def.isArray) {
        typeDef = this.#extractArray(lookupIndex, type.def.asArray);
      } else if (type.def.isBitSequence) {
        typeDef = this.#extractBitSequence(lookupIndex, type.def.asBitSequence);
      } else if (type.def.isCompact) {
        typeDef = this.#extractCompact(lookupIndex, type.def.asCompact);
      } else if (type.def.isComposite) {
        typeDef = this.#extractComposite(lookupIndex, type, type.def.asComposite);
      } else if (type.def.isHistoricMetaCompat) {
        typeDef = this.#extractHistoric(lookupIndex, type.def.asHistoricMetaCompat);
      } else if (type.def.isPrimitive) {
        typeDef = this.#extractPrimitive(lookupIndex, type);
      } else if (type.def.isSequence) {
        typeDef = this.#extractSequence(lookupIndex, type.def.asSequence);
      } else if (type.def.isTuple) {
        typeDef = this.#extractTuple(lookupIndex, type.def.asTuple);
      } else if (type.def.isVariant) {
        typeDef = this.#extractVariant(lookupIndex, type, type.def.asVariant);
      } else {
        throw new Error(`No SiTypeDef handler for ${type.def.toString()}`);
      }
    } catch (error) {
      throw new Error(`PortableRegistry: ${lookupIndex}${namespace ? ` (${namespace})` : ''}: Error extracting ${stringify(type)}: ${(error as Error).message}`);
    }

    return {
      docs: type.docs.map((d) => d.toString()),
      namespace,
      ...typeDef
    };
  }

  #extractArray (_: number, { len: length, type }: SiTypeDefArray): TypeDef {
    assert(!length || length.toNumber() <= 256, 'Only support for [Type; <length>], where length <= 256');

    return withTypeString(this.registry, {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.#createSiDef(type)
    });
  }

  #extractBitSequence (_: number, { bitOrderType, bitStoreType }: SiTypeDefBitSequence): TypeDef {
    const bitOrder = this.#createSiDef(bitOrderType);
    const bitStore = this.#createSiDef(bitStoreType);

    // NOTE: Currently the BitVec type is one-way only, i.e. we only use it to decode, not
    // re-encode stuff. As such we ignore the msb/lsb identifier given by bitOrderType, or rather
    // we don't pass it though at all
    assert(['bitvec::order::Lsb0', 'bitvec::order::Msb0'].includes(bitOrder.namespace || ''), () => `Unexpected bitOrder found as ${bitOrder.namespace || '<unknown>'}`);
    assert(bitStore.info === TypeDefInfo.Plain && bitStore.type === 'u8', () => `Only u8 bitStore is currently supported, found ${bitStore.type}`);

    return {
      info: TypeDefInfo.Plain,
      type: 'BitVec'
    };
  }

  #extractCompact (_: number, { type }: SiTypeDefCompact): TypeDef {
    return withTypeString(this.registry, {
      info: TypeDefInfo.Compact,
      sub: this.#createSiDef(type)
    });
  }

  #extractComposite (lookupIndex: number, { params, path }: SiType, { fields }: SiTypeDefComposite): TypeDef {
    const specialVariant = path[0].toString();

    if (path.length === 1 && specialVariant === 'BTreeMap') {
      return withTypeString(this.registry, {
        info: TypeDefInfo.BTreeMap,
        sub: params.map(({ type }) => this.#createSiDef(type.unwrap()))
      });
    } else if (['Range', 'RangeInclusive'].includes(specialVariant)) {
      return withTypeString(this.registry, {
        info: TypeDefInfo.Range,
        sub: fields.map(({ name, type, typeName }, index) => ({
          name: name.isSome
            ? name.unwrap().toString()
            : ['start', 'end'][index],
          ...this.#createSiDef(type),
          ...(typeName.isSome
            ? { typeName: sanitize(typeName.unwrap()) }
            : {}
          )
        }))
      });
    } else if (path.length && path[path.length - 1].toString() === 'WrapperOpaque') {
      return withTypeString(this.registry, {
        info: TypeDefInfo.WrapperOpaque,
        sub: this.#createSiDef(params[0].type.unwrap())
      });
    }

    return SETS.some((p) => matchParts(p, path))
      ? this.#extractCompositeSet(lookupIndex, params, fields)
      : this.#extractFields(lookupIndex, fields);
  }

  #extractCompositeSet (_: number, params: SiTypeParameter[], fields: SiField[]): TypeDef {
    assert(params.length === 1 && fields.length === 1, 'Set handling expects param/field as single entries');

    return withTypeString(this.registry, {
      info: TypeDefInfo.Set,
      length: this.registry.createType(this.registry.createLookupType(fields[0].type) as 'u32').bitLength(),
      sub: this.getSiType(params[0].type.unwrap()).def.asVariant.variants.map(({ index, name }): TypeDef => ({
        // This will be an issue > 2^53 - 1 ... don't have those (yet)
        index: index.toNumber(),
        info: TypeDefInfo.Plain,
        name: name.toString(),
        type: 'Null'
      }))
    });
  }

  #extractFields (lookupIndex: number, fields: SiField[]): TypeDef {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], { name }) => ([
      isAllNamed && name.isSome,
      isAllUnnamed && name.isNone
    ]),
    [true, true]);

    assert(isTuple || isStruct, 'Invalid fields type detected, expected either Tuple (all unnamed) or Struct (all named)');

    if (fields.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: 'Null'
      };
    } else if (isTuple && fields.length === 1) {
      const typeDef = this.#createSiDef(fields[0].type);

      return {
        ...typeDef,
        ...(lookupIndex === -1
          ? {}
          : {
            lookupIndex,
            lookupName: this.#names[lookupIndex],
            lookupNameRoot: typeDef.lookupName
          }
        ),
        ...(fields[0].typeName.isSome
          ? { typeName: sanitize(fields[0].typeName.unwrap()) }
          : {}
        )
      };
    }

    const [sub, alias] = this.#extractFieldsAlias(fields);

    return withTypeString(this.registry, {
      info: isTuple // Tuple check first
        ? TypeDefInfo.Tuple
        : TypeDefInfo.Struct,
      ...(
        alias.size
          ? { alias }
          : {}
      ),
      ...(
        lookupIndex === -1
          ? {}
          : {
            lookupIndex,
            lookupName: this.#names[lookupIndex]
          }
      ),
      sub
    });
  }

  #extractFieldsAlias (fields: SiField[]): [TypeDef[], Map<string, string>] {
    const alias = new Map<string, string>();
    const sub = fields.map(({ docs, name, type, typeName }) => {
      const typeDef = this.#createSiDef(type);

      if (name.isNone) {
        return typeDef;
      }

      let nameField = stringCamelCase(name.unwrap());
      let nameOrig: string | null = null;

      if (nameField.includes('#')) {
        nameOrig = nameField;
        nameField = nameOrig.replace(/#/g, '_');
      } else if (RESERVED.includes(nameField)) {
        nameOrig = nameField;
        nameField = `${nameField}_`;
      }

      if (nameOrig) {
        alias.set(nameField, nameOrig);
      }

      return {
        ...typeDef,
        docs: docs.map((d) => d.toString()),
        name: nameField,
        ...(typeName.isSome
          ? { typeName: sanitize(typeName.unwrap()) }
          : {}
        )
      };
    });

    return [sub, alias];
  }

  #extractHistoric (_: number, type: Type): TypeDef {
    return {
      ...getTypeDef(type),
      displayName: type.toString(),
      isFromSi: true
    };
  }

  #extractPrimitive (_: number, type: SiType): TypeDef {
    const typeStr = type.def.asPrimitive.type.toString();

    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  #extractPrimitivePath (_: number, type: string): TypeDef {
    return {
      info: TypeDefInfo.Plain,
      type
    };
  }

  #extractSequence (lookupIndex: number, { type }: SiTypeDefSequence): TypeDef {
    const sub = this.#createSiDef(type);

    if (sub.type === 'u8') {
      return {
        info: TypeDefInfo.Plain,
        type: 'Bytes'
      };
    }

    return withTypeString(this.registry, {
      info: TypeDefInfo.Vec,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }

  #extractTuple (lookupIndex: number, ids: SiTypeDefTuple): TypeDef {
    if (ids.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: 'Null'
      };
    } else if (ids.length === 1) {
      return this.getTypeDef(ids[0]);
    }

    const sub = ids.map((type) => this.#createSiDef(type));

    return withTypeString(this.registry, {
      info: TypeDefInfo.Tuple,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }

  #extractVariant (lookupIndex: number, { params, path }: SiType, { variants }: SiTypeDefVariant): TypeDef {
    const specialVariant = path[0].toString();

    if (specialVariant === 'Option') {
      return withTypeString(this.registry, {
        info: TypeDefInfo.Option,
        sub: this.#createSiDef(params[0].type.unwrap())
      });
    } else if (specialVariant === 'Result') {
      return withTypeString(this.registry, {
        info: TypeDefInfo.Result,
        sub: params.map(({ type }, index) => ({
          name: ['Ok', 'Error'][index],
          ...this.#createSiDef(type.unwrap())
        }))
      });
    } else if (variants.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: 'Null'
      };
    }

    return this.#extractVariantEnum(lookupIndex, variants);
  }

  #extractVariantEnum (lookupIndex: number, variants: SiVariant[]): TypeDef {
    const sub: (TypeDef & { name: string })[] = [];

    // we may get entries out of order, arrange them first before creating with gaps filled
    // NOTE: Since we mutate, use a copy of the array as an input
    [...variants]
      .sort((a, b) => a.index.cmp(b.index))
      .forEach(({ fields, index, name }) => {
        const desired = index.toNumber();

        while (sub.length !== desired) {
          sub.push({
            index: sub.length,
            info: TypeDefInfo.Null,
            name: `__Unused${sub.length}`,
            type: 'Null'
          });
        }

        sub.push({
          ...this.#extractFields(-1, fields),
          index: index.toNumber(),
          name: name.toString()
        });
      });

    return withTypeString(this.registry, {
      info: TypeDefInfo.Enum,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }
}
