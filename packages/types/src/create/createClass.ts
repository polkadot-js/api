// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { U8aBitLength, UIntBitLength } from '../codec/types';
import type { Codec, Constructor, DetectConstructor, Registry } from '../types';
import type { TypeDef } from './types';

import { assert, isNumber, isUndefined, stringify } from '@polkadot/util';

import { BTreeMap, BTreeSet, CodecSet, Compact, DoNotConstruct, Enum, HashMap, Int, Option, Result, Struct, Tuple, U8aFixed, UInt, Vec, VecFixed } from '../codec';
import { Bytes, Null } from '../primitive';
import { getTypeDef } from './getTypeDef';
import { TypeDefInfo } from './types';

export function createClass<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K): DetectConstructor<T, K> {
  return getTypeClass(
    registry,
    registry.isLookupType(type)
      ? registry.lookup.getTypeDef(type)
      : getTypeDef(type)
  );
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if it cannot be parsed, it will yield
// a runtime error.
export function ClassOfUnsafe<T extends Codec = Codec, K extends string = string> (registry: Registry, name: K): DetectConstructor<T, K> {
  return createClass<T, K>(registry, name);
}

// alias for createClass
export function ClassOf<T extends Codec = Codec, K extends string = string> (registry: Registry, name: K): DetectConstructor<T, K> {
  return ClassOfUnsafe<T, K>(registry, name);
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
  return getSubDef(value).type;
}

// create a maps of type string constructors from the input
function getTypeClassMap (value: TypeDef): Record<string, string> {
  const result: Record<string, string> = {};

  return getSubDefArray(value).reduce<Record<string, string>>((result, sub) => {
    result[sub.name as string] = sub.type;

    return result;
  }, result);
}

// create an array of type string constructors from the input
function getTypeClassArray (value: TypeDef): string[] {
  return getSubDefArray(value).map(({ type }) => type);
}

function createInt ({ displayName, length }: TypeDef, Clazz: typeof Int | typeof UInt): Constructor {
  assert(isNumber(length), () => `Expected bitLength information for ${displayName || Clazz.constructor.name}<bitLength>`);

  return Clazz.with(length as UIntBitLength, displayName);
}

function createHashMap (value: TypeDef, Clazz: typeof BTreeMap | typeof HashMap): Constructor {
  const [keyType, valueType] = getTypeClassArray(value);

  return Clazz.with(keyType, valueType);
}

const infoMapping: Record<TypeDefInfo, (registry: Registry, value: TypeDef) => Constructor> = {
  [TypeDefInfo.BTreeMap]: (registry: Registry, value: TypeDef): Constructor =>
    createHashMap(value, BTreeMap),

  [TypeDefInfo.BTreeSet]: (registry: Registry, value: TypeDef): Constructor =>
    BTreeSet.with(getSubType(value)),

  [TypeDefInfo.Compact]: (registry: Registry, value: TypeDef): Constructor =>
    Compact.with(getSubType(value)),

  [TypeDefInfo.DoNotConstruct]: (registry: Registry, value: TypeDef): Constructor =>
    DoNotConstruct.with(value.displayName || value.type),

  [TypeDefInfo.Enum]: (registry: Registry, value: TypeDef): Constructor => {
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

  [TypeDefInfo.HashMap]: (registry: Registry, value: TypeDef): Constructor =>
    createHashMap(value, HashMap),

  [TypeDefInfo.Int]: (registry: Registry, value: TypeDef): Constructor =>
    createInt(value, Int),

  // We have circular deps between Linkage & Struct
  [TypeDefInfo.Linkage]: (registry: Registry, value: TypeDef): Constructor => {
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
  [TypeDefInfo.Null]: (registry: Registry, _: TypeDef): Constructor =>
    Null,

  [TypeDefInfo.Option]: (registry: Registry, value: TypeDef): Constructor =>
    Option.with(getSubType(value)),

  [TypeDefInfo.Plain]: (registry: Registry, value: TypeDef): Constructor =>
    registry.getOrUnknown(value.type),

  [TypeDefInfo.Result]: (registry: Registry, value: TypeDef): Constructor => {
    const [Ok, Err] = getTypeClassArray(value);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return Result.with({ Err, Ok });
  },

  [TypeDefInfo.Set]: (registry: Registry, value: TypeDef): Constructor => {
    const result: Record<string, number> = {};

    return CodecSet.with(
      getSubDefArray(value).reduce<Record<string, number>>((result, { index, name }) => {
        result[name as string] = index as number;

        return result;
      }, result),
      value.length
    );
  },

  [TypeDefInfo.Si]: (registry: Registry, value: TypeDef): Constructor =>
    getTypeClass(registry, registry.lookup.getTypeDef(value.type)),

  [TypeDefInfo.Struct]: (registry: Registry, value: TypeDef): Constructor =>
    Struct.with(getTypeClassMap(value), value.alias),

  [TypeDefInfo.Tuple]: (registry: Registry, value: TypeDef): Constructor =>
    Tuple.with(getTypeClassArray(value)),

  [TypeDefInfo.UInt]: (registry: Registry, value: TypeDef): Constructor =>
    createInt(value, UInt),

  [TypeDefInfo.Vec]: (registry: Registry, value: TypeDef): Constructor => {
    const subType = getSubType(value);

    return (
      subType === 'u8'
        ? Bytes
        : Vec.with(subType)
    );
  },

  [TypeDefInfo.VecFixed]: (registry: Registry, { displayName, length, sub }: TypeDef): Constructor => {
    assert(isNumber(length) && !isUndefined(sub), 'Expected length & type information for fixed vector');

    const subType = (sub as TypeDef).type;

    return (
      subType === 'u8'
        ? U8aFixed.with((length * 8) as U8aBitLength, displayName)
        : VecFixed.with(subType, length)
    );
  }
};

// Returns the type Class for construction
export function getTypeClass<T extends Codec = Codec> (registry: Registry, typeDef: TypeDef): Constructor<T> {
  let Type = registry.get<T>(typeDef.type);

  if (Type) {
    return Type;
  }

  try {
    Type = infoMapping[typeDef.info](registry, typeDef) as Constructor<T>;

    assert(Type, 'No class created');

    // don't clobber any existing
    if (!Type.__fallbackType && typeDef.fallbackType) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore ...this is the only place we we actually assign this...
      Type.__fallbackType = typeDef.fallbackType;
    }

    return Type;
  } catch (error) {
    throw new Error(`Unable to construct class from ${stringify(typeDef)}: ${(error as Error).message}`);
  }
}
