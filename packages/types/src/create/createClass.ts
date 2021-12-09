// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { U8aBitLength, UIntBitLength } from '../codec/types';
import type { Codec, Constructor, DetectConstructor, Registry } from '../types';
import type { TypeDef } from './types';

import { assert, isNumber, stringify } from '@polkadot/util';

import { BTreeMap, BTreeSet, CodecSet, Compact, DoNotConstruct, Enum, HashMap, Int, Option, Range, RangeInclusive, Result, Struct, Tuple, U8aFixed, UInt, Vec, VecFixed, WrapperOpaque } from '../codec';
import { Bytes, Null } from '../primitive';
import { getTypeDef } from './getTypeDef';
import { TypeDefInfo } from './types';

function getTypeDefType ({ lookupName, type }: TypeDef): string {
  return lookupName || type;
}

function getSubDefArray (value: TypeDef): TypeDef[] {
  assert(value.sub && Array.isArray(value.sub), () => `Expected subtype as TypeDef[] in ${stringify(value)}`);

  return value.sub;
}

function getSubDef (value: TypeDef): TypeDef {
  assert(value.sub && !Array.isArray(value.sub), () => `Expected subtype as TypeDef in ${stringify(value)}`);

  return value.sub;
}

function getSubType (value: TypeDef): string {
  return getTypeDefType(getSubDef(value));
}

// create a maps of type string constructors from the input
function getTypeClassMap (value: TypeDef): Record<string, string> {
  const subs = getSubDefArray(value);
  const map: Record<string, string> = {};

  for (let i = 0; i < subs.length; i++) {
    map[subs[i].name as string] = getTypeDefType(subs[i]);
  }

  return map;
}

// create an array of type string constructors from the input
function getTypeClassArray (value: TypeDef): string[] {
  return getSubDefArray(value).map(getTypeDefType);
}

function createInt (Clazz: typeof Int | typeof UInt, { displayName, length }: TypeDef): Constructor<Codec> {
  assert(isNumber(length), () => `Expected bitLength information for ${displayName || Clazz.constructor.name}<bitLength>`);

  return Clazz.with(length as UIntBitLength, displayName);
}

function createHashMap (Clazz: typeof BTreeMap | typeof HashMap, value: TypeDef): Constructor<Codec> {
  const [keyType, valueType] = getTypeClassArray(value);

  return Clazz.with(keyType, valueType);
}

function createWithSub (Clazz: { with: (t: string) => Constructor<Codec> }, value: TypeDef): Constructor<Codec> {
  return Clazz.with(getSubType(value));
}

const infoMapping: Record<TypeDefInfo, (registry: Registry, value: TypeDef) => Constructor<Codec>> = {
  [TypeDefInfo.BTreeMap]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createHashMap(BTreeMap, value),

  [TypeDefInfo.BTreeSet]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createWithSub(BTreeSet, value),

  [TypeDefInfo.Compact]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createWithSub(Compact, value),

  [TypeDefInfo.DoNotConstruct]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    DoNotConstruct.with(value.displayName || value.type),

  [TypeDefInfo.Enum]: (registry: Registry, value: TypeDef): Constructor<Codec> => {
    const subs = getSubDefArray(value);

    return Enum.with(
      subs.every(({ type }) => type === 'Null')
        ? subs.reduce<Record<string, number>>((out, { index, name }, count) => {
          out[name as string] = index || count;

          return out;
        }, {})
        : getTypeClassMap(value)
    );
  },

  [TypeDefInfo.HashMap]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createHashMap(HashMap, value),

  [TypeDefInfo.Int]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createInt(Int, value),

  // We have circular deps between Linkage & Struct
  [TypeDefInfo.Linkage]: (registry: Registry, value: TypeDef): Constructor<Codec> => {
    const type = `Option<${getSubType(value)}>`;
    // eslint-disable-next-line sort-keys
    const Clazz = Struct.with({ previous: type, next: type } as any);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    Clazz.prototype.toRawType = function (): string {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
      return `Linkage<${this.next.toRawType(true)}>`;
    };

    return Clazz;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (registry: Registry, _: TypeDef): Constructor<Codec> =>
    Null,

  [TypeDefInfo.Option]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createWithSub(Option, value),

  [TypeDefInfo.Plain]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    registry.getOrUnknown(value.type),

  [TypeDefInfo.Range]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    (value.type.includes('RangeInclusive') ? RangeInclusive : Range).with(getSubType(value)),

  [TypeDefInfo.Result]: (registry: Registry, value: TypeDef): Constructor<Codec> => {
    const [Ok, Err] = getTypeClassArray(value);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return Result.with({ Err, Ok });
  },

  [TypeDefInfo.Set]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    CodecSet.with(
      getSubDefArray(value).reduce<Record<string, number>>((result, { index, name }) => {
        result[name as string] = index as number;

        return result;
      }, {}),
      value.length
    ),

  [TypeDefInfo.Si]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    getTypeClass(registry, registry.lookup.getTypeDef(value.type)),

  [TypeDefInfo.Struct]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    Struct.with(getTypeClassMap(value), value.alias),

  [TypeDefInfo.Tuple]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    Tuple.with(getTypeClassArray(value)),

  [TypeDefInfo.UInt]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createInt(UInt, value),

  [TypeDefInfo.Vec]: (registry: Registry, { sub }: TypeDef): Constructor<Codec> => {
    assert(sub && !Array.isArray(sub), 'Expected type information for vector');

    return (
      sub.type === 'u8'
        ? Bytes
        : Vec.with(getTypeDefType(sub))
    );
  },

  [TypeDefInfo.VecFixed]: (registry: Registry, { displayName, length, sub }: TypeDef): Constructor<Codec> => {
    assert(sub && isNumber(length) && !Array.isArray(sub), 'Expected length & type information for fixed vector');

    return (
      sub.type === 'u8'
        ? U8aFixed.with((length * 8) as U8aBitLength, displayName)
        : VecFixed.with(getTypeDefType(sub), length)
    );
  },

  [TypeDefInfo.WrapperOpaque]: (registry: Registry, value: TypeDef): Constructor<Codec> =>
    createWithSub(WrapperOpaque, value)
};

export function constructTypeClass<T extends Codec = Codec> (registry: Registry, typeDef: TypeDef): Constructor<T> {
  try {
    const Type = infoMapping[typeDef.info](registry, typeDef);

    assert(Type, 'No class created');

    // don't clobber any existing
    if (!Type.__fallbackType && typeDef.fallbackType) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore ...this is the only place we we actually assign this...
      Type.__fallbackType = typeDef.fallbackType;
    }

    return Type as Constructor<T>;
  } catch (error) {
    throw new Error(`Unable to construct class from ${stringify(typeDef)}: ${(error as Error).message}`);
  }
}

// Returns the type Class for construction
export function getTypeClass<T extends Codec = Codec> (registry: Registry, typeDef: TypeDef): Constructor<T> {
  return registry.get(typeDef.type, false, typeDef) as Constructor<T>;
}

export function createClass<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K): DetectConstructor<T, K> {
  return getTypeClass(
    registry,
    registry.isLookupType(type)
      ? registry.lookup.getTypeDef(type)
      : getTypeDef(type)
  );
}
