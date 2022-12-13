// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, Text, Type, Vec } from '@polkadot/types-codec';
import type { AnyString, Registry } from '@polkadot/types-codec/types';
import type { ILookup, TypeDef } from '@polkadot/types-create/types';
import type { PortableType } from '../../interfaces/metadata';
import type { SiField, SiLookupTypeId, SiType, SiTypeDefArray, SiTypeDefBitSequence, SiTypeDefCompact, SiTypeDefComposite, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiTypeParameter, SiVariant } from '../../interfaces/scaleInfo';

import { sanitize, Struct, u32 } from '@polkadot/types-codec';
import { getTypeDef, TypeDefInfo, withTypeString } from '@polkadot/types-create';
import { assertUnreachable, isNumber, isString, logger, objectSpread, stringCamelCase, stringify, stringPascalCase } from '@polkadot/util';

const l = logger('PortableRegistry');

interface ExtractBase {
  lookupIndex: number;
  name: string;
}

interface Extract extends ExtractBase {
  lookupIndex: number;
  name: string;
  params: SiTypeParameter[];
}

interface TypeInfo {
  lookups: Record<string, string>;
  names: Record<number, string>;
  params: Record<string, SiTypeParameter[]>;
  types: Record<number, PortableType>;
}

// Just a placeholder for a type.unrwapOr()
const TYPE_UNWRAP = { toNumber: () => -1 };

// Alias the primitive enum with our known values
const PRIMITIVE_ALIAS: Record<string, string> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

// These are types where we have a specific decoding/encoding override + helpers
const PATHS_ALIAS = splitNamespace([
  // full matching on exact names...
  // these are well-known types with additional encoding
  'sp_core::crypto::AccountId32',
  'sp_runtime::generic::era::Era',
  'sp_runtime::multiaddress::MultiAddress',
  // weights 2 (1.5+) is a structure, potentially can be flatenned
  'frame_support::weights::weight_v2::Weight',
  'sp_weights::weight_v2::Weight',
  // ethereum overrides (Frontier, Moonbeam, Polkadot claims)
  'account::AccountId20',
  'polkadot_runtime_common::claims::EthereumAddress',
  // wildcard matching in place...
  // these have a specific encoding or logic, use a wildcard for {pallet, darwinia}_democracy
  '*_democracy::vote::Vote',
  '*_conviction_voting::vote::Vote',
  '*_identity::types::Data',
  // these are opaque Vec<u8> wrappers
  'sp_core::OpaqueMetadata',
  'sp_core::OpaquePeerId',
  'sp_core::offchain::OpaqueMultiaddr',
  // shorten some well-known types
  'primitive_types::*',
  'sp_arithmetic::per_things::*',
  // ink!
  'ink_env::types::*',
  'ink_primitives::types::*'
]);

// Mappings for types that should be converted to set via BitVec
const PATHS_SET = splitNamespace([
  'pallet_identity::types::BitFlags'
]);

// These are the set namespaces for BitVec definitions (the last 2 appear in types as well)
const BITVEC_NS_LSB = ['bitvec::order::Lsb0', 'BitOrderLsb0'];
const BITVEC_NS_MSB = ['bitvec::order::Msb0', 'BitOrderMsb0'];
const BITVEC_NS = [...BITVEC_NS_LSB, ...BITVEC_NS_MSB];

// These we never use these as top-level names, they are wrappers
const WRAPPERS = ['BoundedBTreeMap', 'BoundedBTreeSet', 'BoundedVec', 'Box', 'BTreeMap', 'BTreeSet', 'Cow', 'Option', 'Range', 'RangeInclusive', 'Result', 'WeakBoundedVec', 'WrapperKeepOpaque', 'WrapperOpaque'];

// These are reserved and/or conflicts with built-in Codec or JS definitions
const RESERVED = [
  // JS reserved words
  'entries', 'keys', 'new', 'size',
  // exposed by all Codec objects
  'hash', 'registry'
];

// Remove these from all paths at index 1
const PATH_RM_INDEX_1 = ['generic', 'misc', 'pallet', 'traits', 'types'];

/** @internal */
function sanitizeDocs (docs: Text[]): string[] {
  const result = new Array<string>(docs.length);

  for (let i = 0; i < docs.length; i++) {
    result[i] = docs[i].toString();
  }

  return result;
}

/** @internal */
function splitNamespace (values: string[]): string[][] {
  const result = new Array<string[]>(values.length);

  for (let i = 0; i < values.length; i++) {
    result[i] = values[i].split('::');
  }

  return result;
}

/** @internal */
function matchParts (first: string[], second: (string | Text)[]): boolean {
  return first.length === second.length && first.every((a, index) => {
    const b = second[index].toString();

    if ((a === '*') || (a === b)) {
      return true;
    }

    if (a.includes('*') && a.includes('_') && b.includes('_')) {
      let suba = a.split('_');
      let subb = b.split('_');

      // match initial *'s to multiples if we have a match for the other
      if (suba[0] === '*') {
        const indexOf = subb.indexOf(suba[1]);

        if (indexOf !== -1) {
          suba = suba.slice(1);
          subb = subb.slice(indexOf);
        }
      }

      // check for * matches at the end, adjust accordingly
      if ((suba.length === 2) && (suba[1] === '*') && (suba[0] === subb[0])) {
        return true;
      }

      return matchParts(suba, subb);
    }

    return false;
  });
}

// check if the path matches the PATHS_ALIAS (with wildcards)
/** @internal */
function getAliasPath ({ def, path }: SiType): string | null {
  // specific logic for weights - we only override when non-complex struct
  if (path.join('::') === 'sp_weights::weight_v2::Weight' && def.isComposite && def.asComposite.fields.length !== 1) {
    return null;
  }

  // TODO We need to handle ink! Balance in some way
  return path.length && PATHS_ALIAS.some((a) => matchParts(a, path))
    ? path[path.length - 1].toString()
    : null;
}

/** @internal */
function extractNameFlat (portable: PortableType[], lookupIndex: number, params: SiTypeParameter[], path: AnyString[], isInternal = false): Extract | null {
  const count = path.length;

  // if we have no path or determined as a wrapper, we just skip it
  if (count === 0 || WRAPPERS.includes(path[count - 1].toString())) {
    return null;
  }

  const camels = new Array<string>(count);
  const lowers = new Array<string>(count);

  // initially just create arrays of the camelCase and lowercase path
  // parts - we will check these to extract the final values. While
  // we have 2 loops here, we also don't do the same operation twice
  for (let i = 0; i < count; i++) {
    const c = stringPascalCase(
      isInternal
        ? path[i].replace('pallet_', '')
        : path[i]
    );
    const l = c.toLowerCase();

    camels[i] = c;
    lowers[i] = l;
  }

  let name = '';

  for (let i = 0; i < count; i++) {
    const l = lowers[i];

    // Remove ::{generic, misc, pallet, traits, types}::
    if (i !== 1 || !PATH_RM_INDEX_1.includes(l)) {
      // sp_runtime::generic::digest::Digest -> sp_runtime::generic::Digest
      // sp_runtime::multiaddress::MultiAddress -> sp_runtime::MultiAddress
      if (l !== lowers[i + 1]) {
        name += camels[i];
      }
    }
  }

  // do magic for RawOrigin lookup, e.g. pallet_collective::RawOrigin
  if (camels[1] === 'RawOrigin' && count === 2 && params.length === 2 && params[1].type.isSome) {
    const instanceType = portable[params[1].type.unwrap().toNumber()];

    if (instanceType.type.path.length === 2) {
      name = `${name}${instanceType.type.path[1].toString()}`;
    }
  }

  return { lookupIndex, name, params };
}

/** @internal */
function extractName (portable: PortableType[], lookupIndex: number, { type: { params, path } }: PortableType): Extract | null {
  return extractNameFlat(portable, lookupIndex, params, path);
}

/** @internal */
function nextDupeMatches (name: string, startAt: number, names: Extract[]): Extract[] {
  const result = [names[startAt]];

  for (let i = startAt + 1; i < names.length; i++) {
    const v = names[i];

    if (v.name === name) {
      result.push(v);
    }
  }

  return result;
}

/** @internal */
function rewriteDupes (input: ExtractBase[], rewrite: Record<number, string>): boolean {
  const count = input.length;

  for (let i = 0; i < count; i++) {
    const a = input[i];

    for (let j = i + 1; j < count; j++) {
      const b = input[j];

      // if the indexes are not the same and the names match, we have a dupe
      if (a.lookupIndex !== b.lookupIndex && a.name === b.name) {
        return false;
      }
    }
  }

  // add all the adjusted values to the rewite map
  for (let i = 0; i < count; i++) {
    const p = input[i];

    rewrite[p.lookupIndex] = p.name;
  }

  return true;
}

/** @internal */
function removeDupeNames (lookup: PortableRegistry, portable: PortableType[], names: Extract[]): Extract[] {
  const rewrite: Record<number, string> = {};

  return names
    .map((original, startAt): Extract | null => {
      const { lookupIndex, name, params } = original;

      if (!name) {
        // the name is empty (this is not expected, but have a failsafe)
        return null;
      } else if (rewrite[lookupIndex]) {
        // we have already rewritten this one, we can skip it
        return original;
      }

      // those where the name is matching starting from this index
      const allSame = nextDupeMatches(name, startAt, names);

      // we only have one, so all ok
      if (allSame.length === 1) {
        return original;
      }

      // are there param differences between matching names
      const anyDiff = allSame.some((o) =>
        params.length !== o.params.length ||
        params.some((p, index) =>
          !p.name.eq(o.params[index].name) ||
          p.type.unwrapOr(TYPE_UNWRAP).toNumber() !== o.params[index].type.unwrapOr(TYPE_UNWRAP).toNumber()
        )
      );

      // everything matches, we can combine these
      if (!anyDiff) {
        return original;
      }

      // TODO We probably want to attach all the indexes with differences,
      // not just the first
      // find the first parameter that yields differences
      const paramIdx = params.findIndex(({ type }, index) =>
        allSame.every(({ params }, aIndex) =>
          params[index].type.isSome && (
            aIndex === 0 ||
            !params[index].type.eq(type)
          )
        )
      );

      // No param found that is different
      if (paramIdx === -1) {
        return original;
      }

      // see if using the param type helps
      const adjusted = new Array<ExtractBase>(allSame.length);

      // loop through all, specifically checking that index where the
      // first param yields differences
      for (let i = 0; i < allSame.length; i++) {
        const { lookupIndex, name, params } = allSame[i];
        const { def, path } = lookup.getSiType(params[paramIdx].type.unwrap());

        // if it is not a primitive and it doesn't have a path, we really cannot
        // do anything at this point
        if (!def.isPrimitive && !path.length) {
          return null;
        }

        adjusted[i] = {
          lookupIndex,
          name: def.isPrimitive
            ? `${name}${def.asPrimitive.toString()}`
            : `${name}${path[path.length - 1].toString()}`
        };
      }

      // check to see if the adjusted names have no issues
      if (rewriteDupes(adjusted, rewrite)) {
        return original;
      }

      // TODO This is duplicated from the section just above...
      // ... we certainly need a better solution here
      //
      // Last-ditch effort to use the full type path - ugly
      // loop through all, specifically checking that index where the
      // first param yields differences
      for (let i = 0; i < allSame.length; i++) {
        const { lookupIndex, name, params } = allSame[i];
        const { def, path } = lookup.getSiType(params[paramIdx].type.unwrap());
        const flat = extractNameFlat(portable, lookupIndex, params, path, true);

        if (def.isPrimitive || !flat) {
          return null;
        }

        adjusted[i] = {
          lookupIndex,
          name: `${name}${flat.name}`
        };
      }

      // check to see if the adjusted names have no issues
      if (rewriteDupes(adjusted, rewrite)) {
        return original;
      }

      return null;
    })
    .filter((n): n is Extract => !!n)
    .map(({ lookupIndex, name, params }): Extract => ({
      lookupIndex,
      name: rewrite[lookupIndex] || name,
      params
    }));
}

/** @internal */
function registerTypes (lookup: PortableRegistry, lookups: Record<string, string>, names: Record<number, string>, params: Record<string, SiTypeParameter[]>): void {
  // Register the types we extracted
  lookup.$registry.register(lookups);

  // Try and extract the AccountId/Address/Signature type from UncheckedExtrinsic
  if (params.SpRuntimeUncheckedExtrinsic) {
    // Address, Call, Signature, Extra
    const [addrParam,, sigParam] = params.SpRuntimeUncheckedExtrinsic;
    const siAddress = lookup.getSiType(addrParam.type.unwrap());
    const siSignature = lookup.getSiType(sigParam.type.unwrap());
    const nsSignature = siSignature.path.join('::');
    let nsAccountId = siAddress.path.join('::');
    const isMultiAddress = nsAccountId === 'sp_runtime::multiaddress::MultiAddress';

    // With multiaddress, we check the first type param again
    if (isMultiAddress) {
      // AccountId, AccountIndex
      const [idParam] = siAddress.params;

      nsAccountId = lookup.getSiType(idParam.type.unwrap()).path.join('::');
    }

    lookup.$registry.register({
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

  // handle weight overrides
  if (params.SpWeightsWeightV2Weight) {
    const weight = Object
      .entries(names)
      .find(([, n]) => n === 'SpWeightsWeightV2Weight');

    if (!weight) {
      throw new Error('Unable to extract weight type from SpWeightsWeightV2Weight');
    }

    const weightDef = lookup.getTypeDef(`Lookup${weight[0]}`);

    lookup.$registry.register({
      Weight: Array.isArray(weightDef.sub) && weightDef.sub.length !== 1
        // we have a complex structure
        ? 'SpWeightsWeightV2Weight'
        // single entry, fallback to weight V1
        : 'WeightV1'
    });
  }
}

// this extracts aliases based on what we know the runtime config looks like in a
// Substrate chain. Specifically we want to have access to the Call and Event params
/** @internal */
function extractAliases (params: Record<string, SiTypeParameter[]>, isContract?: boolean): Record<number, string> {
  const hasParams = Object.keys(params).some((k) => !k.startsWith('Pallet'));
  const alias: Record<number, string> = {};

  if (params.SpRuntimeUncheckedExtrinsic) {
    // Address, Call, Signature, Extra
    const [, { type }] = params.SpRuntimeUncheckedExtrinsic;

    alias[type.unwrap().toNumber()] = 'Call';
  } else if (hasParams && !isContract) {
    l.warn('Unable to determine runtime Call type, cannot inspect sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic');
  }

  if (params.FrameSystemEventRecord) {
    // Event, Topic
    const [{ type }] = params.FrameSystemEventRecord;

    alias[type.unwrap().toNumber()] = 'Event';
  } else if (hasParams && !isContract) {
    l.warn('Unable to determine runtime Event type, cannot inspect frame_system::EventRecord');
  }

  return alias;
}

/** @internal */
function extractTypeInfo (lookup: PortableRegistry, portable: PortableType[]): TypeInfo {
  const nameInfo: Extract[] = [];
  const types: Record<number, PortableType> = {};
  const porCount = portable.length;

  for (let i = 0; i < porCount; i++) {
    const type = portable[i];
    const lookupIndex = type.id.toNumber();
    const extracted = extractName(portable, lookupIndex, portable[i]);

    if (extracted) {
      nameInfo.push(extracted);
    }

    types[lookupIndex] = type;
  }

  const lookups: Record<string, string> = {};
  const names: Record<number, string> = {};
  const params: Record<string, SiTypeParameter[]> = {};
  const dedup = removeDupeNames(lookup, portable, nameInfo);
  const dedupCount = dedup.length;

  for (let i = 0; i < dedupCount; i++) {
    const { lookupIndex, name, params: p } = dedup[i];

    names[lookupIndex] = name;
    lookups[name] = lookup.$registry.createLookupType(lookupIndex);
    params[name] = p;
  }

  return { lookups, names, params, types };
}

export class PortableRegistry extends Struct implements ILookup {
  #alias: Record<number, string>;
  #lookups: Record<string, string>;
  #names: Record<number, string>;
  #params: Record<string, SiTypeParameter[]>;
  #typeDefs: Record<number, TypeDef> = {};
  #types: Record<number, PortableType>;

  constructor (registry: Registry, value?: Uint8Array, isContract?: boolean) {
    // const timeStart = performance.now()

    super(registry, {
      types: 'Vec<PortableType>'
    }, value);

    const { lookups, names, params, types } = extractTypeInfo(this, this.types);

    this.#alias = extractAliases(params, isContract);
    this.#lookups = lookups;
    this.#names = names;
    this.#params = params;
    this.#types = types;

    // console.log('PortableRegistry', `${(performance.now() - timeStart).toFixed(2)}ms`)
  }

  public get names (): string[] {
    return Object.values(this.#names).sort();
  }

  /**
   * @description The types of the registry
   */
  public get types (): Vec<PortableType> {
    return this.getT('types');
  }

  public register (): void {
    registerTypes(this, this.#lookups, this.#names, this.#params);
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

    if (!found) {
      throw new Error(`PortableRegistry: Unable to find type with lookupId ${lookupId.toString()}`);
    }

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
        type: this.$registry.createLookupType(lookupIndex)
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

  public sanitizeField (name: Option<Text>): [string | null, string | null] {
    let nameField: string | null = null;
    let nameOrig: string | null = null;

    if (name.isSome) {
      nameField = stringCamelCase(name.unwrap());

      if (nameField.includes('#')) {
        nameOrig = nameField;
        nameField = nameOrig.replace(/#/g, '_');
      } else if (RESERVED.includes(nameField)) {
        nameOrig = nameField;
        nameField = `${nameField}_`;
      }
    }

    return [nameField, nameOrig];
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
        type: this.$registry.createLookupType(lookupId)
      }
      : typeDef;
  }

  #getLookupId (lookupId: SiLookupTypeId | string | number): number {
    if (isString(lookupId)) {
      if (!this.$registry.isLookupType(lookupId)) {
        throw new Error(`PortableRegistry: Expected a lookup string type, found ${lookupId}`);
      }

      return parseInt(lookupId.replace('Lookup', ''), 10);
    } else if (isNumber(lookupId)) {
      return lookupId;
    }

    return lookupId.toNumber();
  }

  #extract (type: SiType, lookupIndex: number): TypeDef {
    const namespace = type.path.join('::');
    let typeDef: TypeDef;
    const aliasType = this.#alias[lookupIndex] || getAliasPath(type);

    try {
      if (aliasType) {
        typeDef = this.#extractAliasPath(lookupIndex, aliasType);
      } else {
        switch (type.def.type) {
          case 'Array': typeDef = this.#extractArray(lookupIndex, type.def.asArray); break;
          case 'BitSequence': typeDef = this.#extractBitSequence(lookupIndex, type.def.asBitSequence); break;
          case 'Compact': typeDef = this.#extractCompact(lookupIndex, type.def.asCompact); break;
          case 'Composite': typeDef = this.#extractComposite(lookupIndex, type, type.def.asComposite); break;
          case 'HistoricMetaCompat': typeDef = this.#extractHistoric(lookupIndex, type.def.asHistoricMetaCompat); break;
          case 'Primitive': typeDef = this.#extractPrimitive(lookupIndex, type); break;
          case 'Sequence': typeDef = this.#extractSequence(lookupIndex, type.def.asSequence); break;
          case 'Tuple': typeDef = this.#extractTuple(lookupIndex, type.def.asTuple); break;
          case 'Variant': typeDef = this.#extractVariant(lookupIndex, type, type.def.asVariant); break;
          default: assertUnreachable(type.def.type);
        }
      }
    } catch (error) {
      throw new Error(`PortableRegistry: ${lookupIndex}${namespace ? ` (${namespace})` : ''}: Error extracting ${stringify(type)}: ${(error as Error).message}`);
    }

    return objectSpread({
      docs: sanitizeDocs(type.docs),
      namespace
    }, typeDef);
  }

  #extractArray (_: number, { len, type }: SiTypeDefArray): TypeDef {
    const length = len.toNumber();

    if (length > 2048) {
      throw new Error('Only support for [Type; <length>], where length <= 2048');
    }

    return withTypeString(this.$registry, {
      info: TypeDefInfo.VecFixed,
      length,
      sub: this.#createSiDef(type)
    });
  }

  #extractBitSequence (_: number, { bitOrderType, bitStoreType }: SiTypeDefBitSequence): TypeDef {
    // With the v3 of scale-info this swapped around, but obviously the decoder cannot determine
    // the order. With that in-mind, we apply a detection for LSb0/Msb and set accordingly
    const a = this.#createSiDef(bitOrderType);
    const b = this.#createSiDef(bitStoreType);
    const [bitOrder, bitStore] = BITVEC_NS.includes(a.namespace || '')
      ? [a, b]
      : [b, a];

    // NOTE: Currently the BitVec type is one-way only, i.e. we only use it to decode, not
    // re-encode stuff. As such we ignore the msb/lsb identifier given by bitOrderType, or rather
    // we don't pass it though at all (all displays in LSB)
    if (!BITVEC_NS.includes(bitOrder.namespace || '')) {
      throw new Error(`Unexpected bitOrder found as ${bitOrder.namespace || '<unknown>'}`);
    } else if (bitStore.info !== TypeDefInfo.Plain || bitStore.type !== 'u8') {
      throw new Error(`Only u8 bitStore is currently supported, found ${bitStore.type}`);
    }

    return {
      info: TypeDefInfo.Plain,
      type: 'BitVec'
    };
  }

  #extractCompact (_: number, { type }: SiTypeDefCompact): TypeDef {
    return withTypeString(this.$registry, {
      info: TypeDefInfo.Compact,
      sub: this.#createSiDef(type)
    });
  }

  #extractComposite (lookupIndex: number, { params, path }: SiType, { fields }: SiTypeDefComposite): TypeDef {
    if (path.length) {
      const pathFirst = path[0].toString();
      const pathLast = path[path.length - 1].toString();

      if (path.length === 1 && pathFirst === 'BTreeMap') {
        if (params.length !== 2) {
          throw new Error(`BTreeMap requires 2 parameters, found ${params.length}`);
        }

        return withTypeString(this.$registry, {
          info: TypeDefInfo.BTreeMap,
          sub: params.map(({ type }) => this.#createSiDef(type.unwrap()))
        });
      } else if (path.length === 1 && pathFirst === 'BTreeSet') {
        if (params.length !== 1) {
          throw new Error(`BTreeSet requires 1 parameter, found ${params.length}`);
        }

        return withTypeString(this.$registry, {
          info: TypeDefInfo.BTreeSet,
          sub: this.#createSiDef(params[0].type.unwrap())
        });
      } else if (['Range', 'RangeInclusive'].includes(pathFirst)) {
        if (params.length !== 1) {
          throw new Error(`Range requires 1 parameter, found ${params.length}`);
        }

        return withTypeString(this.$registry, {
          info: pathFirst === 'Range'
            ? TypeDefInfo.Range
            : TypeDefInfo.RangeInclusive,
          sub: this.#createSiDef(params[0].type.unwrap()),
          type: pathFirst
        });
      } else if (['WrapperKeepOpaque', 'WrapperOpaque'].includes(pathLast)) {
        if (params.length !== 1) {
          throw new Error(`WrapperOpaque requires 1 parameter, found ${params.length}`);
        }

        return withTypeString(this.$registry, {
          info: pathLast === 'WrapperKeepOpaque'
            ? TypeDefInfo.WrapperKeepOpaque
            : TypeDefInfo.WrapperOpaque,
          sub: this.#createSiDef(params[0].type.unwrap()),
          type: pathLast
        });
      }
    }

    return PATHS_SET.some((p) => matchParts(p, path))
      ? this.#extractCompositeSet(lookupIndex, params, fields)
      : this.#extractFields(lookupIndex, fields);
  }

  #extractCompositeSet (_: number, params: SiTypeParameter[], fields: SiField[]): TypeDef {
    if (params.length !== 1 || fields.length !== 1) {
      throw new Error('Set handling expects param/field as single entries');
    }

    return withTypeString(this.$registry, {
      info: TypeDefInfo.Set,
      length: this.$registry.createTypeUnsafe<u32>(this.$registry.createLookupType(fields[0].type), []).bitLength(),
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

    if (!isTuple && !isStruct) {
      throw new Error('Invalid fields type detected, expected either Tuple (all unnamed) or Struct (all named)');
    }

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
          ? null
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

    return withTypeString(this.$registry, objectSpread(
      {
        info: isTuple // Tuple check first
          ? TypeDefInfo.Tuple
          : TypeDefInfo.Struct,
        sub
      },
      alias.size
        ? { alias }
        : null,
      lookupIndex === -1
        ? null
        : {
          lookupIndex,
          lookupName: this.#names[lookupIndex]
        }
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
        const [nameField, nameOrig] = this.sanitizeField(name);

        if (nameField && nameOrig) {
          alias.set(nameField, nameOrig);
        }

        sub[i] = objectSpread(
          {
            docs: sanitizeDocs(docs),
            name: nameField
          },
          typeDef,
          typeName.isSome
            ? { typeName: sanitize(typeName.unwrap()) }
            : null
        );
      }
    }

    return [sub, alias];
  }

  #extractHistoric (_: number, type: Type): TypeDef {
    return objectSpread({
      displayName: type.toString(),
      isFromSi: true
    }, getTypeDef(type));
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

    return withTypeString(this.$registry, {
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

    const sub = ids.map((t) => this.#createSiDef(t));

    return withTypeString(this.$registry, {
      info: TypeDefInfo.Tuple,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }

  #extractVariant (lookupIndex: number, { params, path }: SiType, { variants }: SiTypeDefVariant): TypeDef {
    if (path.length) {
      const specialVariant = path[0].toString();

      if (specialVariant === 'Option') {
        if (params.length !== 1) {
          throw new Error(`Option requires 1 parameter, found ${params.length}`);
        }

        // NOTE This is opt-in (unhandled), not by default
        // if (sub.type === 'bool') {
        //   return withTypeString(this.$registry, {
        //     info: TypeDefInfo.Plain,
        //     type: 'OptionBool'
        //   });
        // }

        return withTypeString(this.$registry, {
          info: TypeDefInfo.Option,
          sub: this.#createSiDef(params[0].type.unwrap())
        });
      } else if (specialVariant === 'Result') {
        if (params.length !== 2) {
          throw new Error(`Result requires 2 parameters, found ${params.length}`);
        }

        return withTypeString(this.$registry, {
          info: TypeDefInfo.Result,
          sub: params.map(({ type }, index) =>
            objectSpread({
              name: ['Ok', 'Error'][index]
            }, this.#createSiDef(type.unwrap()))
          )
        });
      }
    }

    if (variants.length === 0) {
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
    variants
      .slice()
      .sort((a, b) => a.index.cmp(b.index))
      .forEach(({ fields, index: bnIndex, name }) => {
        const index = bnIndex.toNumber();

        while (sub.length !== index) {
          sub.push({
            index: sub.length,
            info: TypeDefInfo.Null,
            name: `__Unused${sub.length}`,
            type: 'Null'
          });
        }

        sub.push(
          objectSpread(this.#extractFields(-1, fields), {
            index,
            name: name.toString()
          })
        );
      });

    return withTypeString(this.$registry, {
      info: TypeDefInfo.Enum,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }
}
