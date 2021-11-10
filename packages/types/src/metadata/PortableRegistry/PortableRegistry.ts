// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '../../codec';
import type { PortableType } from '../../interfaces/metadata';
import type { SiField, SiLookupTypeId, SiPath, SiType, SiTypeDefArray, SiTypeDefBitSequence, SiTypeDefCompact, SiTypeDefComposite, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiTypeParameter, SiVariant } from '../../interfaces/scaleInfo';
import type { Text, Type } from '../../primitive';
import type { Registry, TypeDef } from '../../types';

import { assert, isNumber, isString, objectSpread, stringCamelCase, stringify, stringUpperFirst } from '@polkadot/util';

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
const PATHS_ALIAS = splitNamespace([
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
  // ethereum overrides (Frontier, Moonbeam, Polkadot claims)
  'account::AccountId20',
  'polkadot_runtime_common::claims::EthereumAddress',
  // shorten some well-known types
  'primitive_types::*',
  'sp_arithmetic::per_things::*',
  // ink!
  'ink_env::types::*'
]);

// Mappings for types that should be converted to set via BitVec
const PATHS_SET = splitNamespace([
  'pallet_identity::types::BitFlags'
]);

// These we never use these as top-level names, they are wrappers
const WRAPPERS = ['BoundedBTreeMap', 'BoundedVec', 'Box', 'BTreeMap', 'Cow', 'Result', 'Option', 'WeakBoundedVec', 'WrapperOpaque'];

// These are reserved and/or conflicts with built-in Codec or JS definitions
const RESERVED = ['entries', 'hash', 'keys', 'new', 'size'];

// Remove these from all paths at index 1
const PATH_RM_INDEX_1 = ['generic', 'misc', 'pallet', 'traits', 'types'];

function splitNamespace (values: string[]): string[][] {
  return values.map((v) => v.split('::'));
}

function createNamespace ({ path }: SiType): string {
  return sanitizeDocs(path).join('::');
}

function sanitizeDocs (docs: Text[]): string[] {
  return docs.map((d) => d.toString());
}

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

// check if the path matches the PATHS_ALIAS (with wildcards)
function getAliasPath (path: SiPath): string | null {
  // TODO We need to handle ink! Balance in some way
  return path.length && PATHS_ALIAS.some((p) => matchParts(p, path))
    ? path[path.length - 1].toString()
    : null;
}

function hasNoDupes (input: [number, string, SiTypeParameter[]][]): boolean {
  for (let i = 0; i < input.length; i++) {
    const [ai, an] = input[i];

    for (let j = 0; j < input.length; j++) {
      const [bi, bn] = input[j];

      // if the indexes are not the same and the names match, we have a dupe
      if (ai !== bi && an === bn) {
        return false;
      }
    }
  }

  return true;
}

function removeDuplicateNames (lookup: PortableRegistry, names: [number, string | null, SiTypeParameter[]][]): [number, string, SiTypeParameter[]][] {
  const rewrite: Record<number, string> = {};

  return names
    .map(([lookupIndex, name, params]): [number, string, SiTypeParameter[]] | null => {
      if (!name) {
        return null;
      }

      // those where the name is matching (since name is filtered, these all do have names)
      const allSame = names.filter(([, oName]) => name === oName) as [number, string, SiTypeParameter[]][];

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
        return [lookupIndex, name, params];
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
        return [lookupIndex, name, params];
      }

      // see if using the param type helps
      const adjusted = new Array<[number, string, SiTypeParameter[]]>(allSame.length);

      for (let i = 0; i < allSame.length; i++) {
        const [oIndex, oName, oParams] = allSame[i];
        const { def, path } = lookup.getSiType(oParams[paramIdx].type.unwrap());

        if (!def.isPrimitive && !path.length) {
          return null;
        }

        adjusted[i] = [
          oIndex,
          def.isPrimitive
            ? `${oName}${def.asPrimitive.toString()}`
            : `${oName}${path[path.length - 1].toString()}`,
          params
        ];
      }

      if (hasNoDupes(adjusted)) {
        for (let i = 0; i < adjusted.length; i++) {
          const [index, name] = adjusted[i];

          rewrite[index] = name;
        }

        return [lookupIndex, name, params];
      }

      return null;
    })
    .filter((n): n is [number, string, SiTypeParameter[]] => !!n)
    .map(([lookupIndex, name, params]) => [
      lookupIndex,
      rewrite[lookupIndex] || name,
      params
    ]);
}

function extractName (types: PortableType[], { id, type: { params, path } }: PortableType): [number, string, SiTypeParameter[]] | null {
  // if we have no path or determined as a wrapper, we just skip it
  if (!path.length || WRAPPERS.includes(path[path.length - 1].toString())) {
    return null;
  }

  const parts = path
    .map((p) => stringUpperFirst(stringCamelCase(p)))
    .filter((p, index) => {
      const lower = p.toLowerCase();

      return (
        // Remove ::{generic, misc, pallet, traits, types}::
        index !== 1 ||
        !PATH_RM_INDEX_1.includes(lower)
      ) &&
      (
        // sp_runtime::generic::digest::Digest -> sp_runtime::generic::Digest
        // sp_runtime::multiaddress::MultiAddress -> sp_runtime::MultiAddress
        index === path.length - 1 ||
        lower !== path[index + 1].toLowerCase()
      );
    });
  let typeName = parts.join('');

  // do magic for RawOrigin lookup, e.g. pallet_collective::RawOrigin
  if (parts.length === 2 && parts[1] === 'RawOrigin' && params.length === 2 && params[1].type.isSome) {
    const instanceType = types[params[1].type.unwrap().toNumber()];

    if (instanceType.type.path.length === 2) {
      typeName = `${typeName}${instanceType.type.path[1].toString()}`;
    }
  }

  return [id.toNumber(), typeName, params];
}

function registerTypes (lookup: PortableRegistry, lookups: Record<string, string>, names: Record<number, string>, params: Record<string, SiTypeParameter[]>): void {
  // Register the types we extracted
  lookup.registry.register(lookups);

  // Try and extract the AccountId/Address/Signature type from UncheckedExtrinsic
  if (params.SpRuntimeUncheckedExtrinsic) {
    // Address, Call, Signature, Extra
    const [addrParam,, sigParam] = params.SpRuntimeUncheckedExtrinsic;
    const siAddress = lookup.getSiType(addrParam.type.unwrap());
    const siSignature = lookup.getSiType(sigParam.type.unwrap());
    const nsSignature = createNamespace(siSignature);
    let nsAccountId = createNamespace(siAddress);
    const isMultiAddress = nsAccountId === 'sp_runtime::multiaddress::MultiAddress';

    // With multiaddress, we check the first type param again
    if (isMultiAddress) {
      // AccountId, AccountIndex
      const [idParam] = siAddress.params;

      nsAccountId = createNamespace(lookup.getSiType(idParam.type.unwrap()));
    }

    lookup.registry.register({
      AccountId: ['sp_core::crypto::AccountId32'].includes(nsAccountId)
        ? 'AccountId32'
        : ['account::AccountId20', 'primitive_types::H160'].includes(nsAccountId)
          ? 'AccountId20'
          : 'AccountId32', // other, default to AccountId32
      Address: isMultiAddress
        ? 'MultiAddress'
        : 'AccountId',
      ExtrinsicSignature: ['sp_runtime::MultiSignature'].includes(nsSignature)
        ? 'MultiSignature'
        : names[sigParam.type.unwrap().toNumber()] || 'MultiSignature'
    });
  }
}

function extractTypeInfo (lookup: PortableRegistry, portable: PortableType[]): [Record<number, PortableType>, Record<string, string>, Record<number, string>, Record<string, SiTypeParameter[]>] {
  const nameInfo: [number, string, SiTypeParameter[]][] = [];
  const types: Record<number, PortableType> = {};

  for (let i = 0; i < portable.length; i++) {
    const type = portable[i];
    const extracted = extractName(portable, portable[i]);

    if (extracted) {
      nameInfo.push(extracted);
    }

    types[type.id.toNumber()] = type;
  }

  const dedup = removeDuplicateNames(lookup, nameInfo);
  const lookups: Record<string, string> = {};
  const names: Record<number, string> = {};
  const params: Record<string, SiTypeParameter[]> = {};

  for (let i = 0; i < dedup.length; i++) {
    const [lookupIndex, name, p] = dedup[i];

    names[lookupIndex] = name;
    lookups[name] = lookup.registry.createLookupType(lookupIndex);
    params[name] = p;
  }

  return [types, lookups, names, params];
}

export class PortableRegistry extends Struct {
  #names: Record<number, string>;
  #typeDefs: Record<number, TypeDef> = {};
  #types: Record<number, PortableType>;

  constructor (registry: Registry, value?: Uint8Array) {
    // console.time('PortableRegistry')

    super(registry, {
      types: 'Vec<PortableType>'
    }, value);

    const [types, lookups, names, params] = extractTypeInfo(this, this.types);

    this.#names = names;
    this.#types = types;

    registerTypes(this, lookups, names, params);

    // console.timeEnd('PortableRegistry')
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
    const aliasType = getAliasPath(type.path);

    try {
      if (aliasType) {
        typeDef = this.#extractAliasPath(lookupIndex, aliasType);
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

    return objectSpread({ docs: sanitizeDocs(type.docs), namespace }, typeDef);
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
        sub: fields.map(({ name, type, typeName }, index) =>
          objectSpread(
            {
              name: name.isSome
                ? name.unwrap().toString()
                : ['start', 'end'][index]
            },
            this.#createSiDef(type),
            typeName.isSome
              ? { typeName: sanitize(typeName.unwrap()) }
              : null
          ))
      });
    } else if (path.length) {
      if (path[path.length - 1].toString() === 'WrapperOpaque') {
        return withTypeString(this.registry, {
          info: TypeDefInfo.WrapperOpaque,
          sub: this.#createSiDef(params[0].type.unwrap())
        });
      } else if (path[path.length - 1].toString() === 'WrapperKeepOpaque') {
        return {
          info: TypeDefInfo.Plain,
          type: 'Bytes'
        };
      }
    }

    return PATHS_SET.some((p) => matchParts(p, path))
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
    let isStruct = true;
    let isTuple = true;

    for (let f = 0; f < fields.length; f++) {
      const { name } = fields[f];

      isStruct = isStruct && name.isSome;
      isTuple = isTuple && name.isNone;
    }

    assert(isTuple || isStruct, 'Invalid fields type detected, expected either Tuple (all unnamed) or Struct (all named)');

    if (fields.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: 'Null'
      };
    } else if (isTuple && fields.length === 1) {
      const typeDef = this.#createSiDef(fields[0].type);

      return objectSpread(
        {},
        typeDef,
        lookupIndex === -1
          ? {}
          : {
            lookupIndex,
            lookupName: this.#names[lookupIndex],
            lookupNameRoot: typeDef.lookupName
          },
        fields[0].typeName.isSome
          ? { typeName: sanitize(fields[0].typeName.unwrap()) }
          : null
      );
    }

    const [sub, alias] = this.#extractFieldsAlias(fields);

    return withTypeString(this.registry, objectSpread(
      {
        info: isTuple // Tuple check first
          ? TypeDefInfo.Tuple
          : TypeDefInfo.Struct
      },
      alias.size
        ? { alias }
        : null,
      lookupIndex === -1
        ? {}
        : {
          lookupIndex,
          lookupName: this.#names[lookupIndex]
        },
      { sub }
    ));
  }

  #extractFieldsAlias (fields: SiField[]): [TypeDef[], Map<string, string>] {
    const alias = new Map<string, string>();
    const sub = new Array<TypeDef>(fields.length);

    for (let i = 0; i < fields.length; i++) {
      const { docs, name, type, typeName } = fields[i];
      const typeDef = this.#createSiDef(type);

      if (name.isNone) {
        sub[i] = typeDef;
      } else {
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

        sub[i] = objectSpread(
          {},
          typeDef,
          {
            docs: sanitizeDocs(docs),
            name: nameField
          },
          typeName.isSome
            ? { typeName: sanitize(typeName.unwrap()) }
            : null
        );
      }
    }

    return [sub, alias];
  }

  #extractHistoric (_: number, type: Type): TypeDef {
    return objectSpread(
      {},
      getTypeDef(type),
      {
        displayName: type.toString(),
        isFromSi: true
      }
    );
  }

  #extractPrimitive (_: number, type: SiType): TypeDef {
    const typeStr = type.def.asPrimitive.type.toString();

    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  #extractAliasPath (_: number, type: string): TypeDef {
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
        sub: params.map(({ type }, index) =>
          objectSpread({ name: ['Ok', 'Error'][index] }, this.#createSiDef(type.unwrap()))
        )
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

        sub.push(
          objectSpread(
            this.#extractFields(-1, fields),
            {
              index: index.toNumber(),
              name: name.toString()
            }
          )
        );
      });

    return withTypeString(this.registry, {
      info: TypeDefInfo.Enum,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }
}
