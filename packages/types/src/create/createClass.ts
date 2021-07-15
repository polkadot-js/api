// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { U8aBitLength, UIntBitLength } from '../codec/types';
import type { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import type { FromReg, TypeDef } from './types';

import { assert, isNumber, isUndefined, stringify } from '@polkadot/util';

import { BTreeMap, BTreeSet, CodecSet, Compact, DoNotConstruct, Enum, HashMap, Int, Option, Result, Struct, Tuple, U8aFixed, UInt, Vec, VecFixed } from '../codec';
import { getTypeDef } from './getTypeDef';
import { TypeDefInfo } from './types';

export function createClass<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K): Constructor<FromReg<T, K>> {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getTypeClass<FromReg<T, K>>(registry, getTypeDef(type));
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if it cannot be parsed, it will yield
// a runtime error.
export function ClassOfUnsafe<T extends Codec = Codec, K extends string = string> (registry: Registry, name: K): Constructor<FromReg<T, K>> {
  return createClass<T, K>(registry, name);
}

// alias for createClass
export function ClassOf<K extends keyof InterfaceTypes> (registry: Registry, name: K): Constructor<InterfaceTypes[K]> {
  // TS2589: Type instantiation is excessively deep and possibly infinite.
  // The above happens with as Constructor<InterfaceTypes[K]>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return ClassOfUnsafe<Codec, K>(registry, name) as any;
}

function getSub (registry: Registry, value: TypeDef): [Constructor, TypeDef, string?] {
  assert(value.sub && !Array.isArray(value.sub), () => `Expected subtype as TypeDef in ${stringify(value)}`);

  return [getTypeClass(registry, value.sub), value.sub, value.sub.name];
}

function getSubArray (registry: Registry, value: TypeDef): [Constructor, TypeDef, string][] {
  assert(value.sub && Array.isArray(value.sub), () => `Expected subtype as TypeDef[] in ${stringify(value)}`);

  return value.sub.map((t, index) => [getTypeClass(registry, t), t, t.name || `param${index}`]);
}

// create a maps of type string constructors from the input
function getSubMap (registry: Registry, value: TypeDef): Record<string, Constructor> {
  const result: Record<string, Constructor> = {};

  return getSubArray(registry, value).reduce<Record<string, Constructor>>((result, [sub,, name]) => {
    result[name] = sub;

    return result;
  }, result);
}

function createInt ({ displayName, length }: TypeDef, Clazz: typeof Int | typeof UInt): Constructor {
  assert(isNumber(length), () => `Expected bitLength information for ${displayName || Clazz.constructor.name}<bitLength>`);

  return Clazz.with(length as UIntBitLength, displayName);
}

function createHashMap (registry: Registry, value: TypeDef, Clazz: typeof BTreeMap | typeof HashMap): Constructor {
  const [[keyType], [valueType]] = getSubArray(registry, value);

  return Clazz.with(keyType, valueType);
}

const infoMapping: Record<TypeDefInfo, (registry: Registry, value: TypeDef) => Constructor> = {
  [TypeDefInfo.BTreeMap]: (registry: Registry, value: TypeDef): Constructor =>
    createHashMap(registry, value, BTreeMap),

  [TypeDefInfo.BTreeSet]: (registry: Registry, value: TypeDef): Constructor =>
    BTreeSet.with(getSub(registry, value)[0]),

  [TypeDefInfo.Compact]: (registry: Registry, value: TypeDef): Constructor =>
    Compact.with(getSub(registry, value)[0] as any),

  [TypeDefInfo.DoNotConstruct]: (registry: Registry, value: TypeDef): Constructor =>
    DoNotConstruct.with(value.displayName),

  [TypeDefInfo.Enum]: (registry: Registry, value: TypeDef): Constructor => {
    const subs = getSubArray(registry, value);

    return Enum.with(
      subs.every(([,, type]) => type === 'Null')
        ? subs.reduce<Record<string, number>>((out, [, { index, name }], count) => {
          out[name as string] = index || count;

          return out;
        }, {})
        : getSubMap(registry, value)
    );
  },

  [TypeDefInfo.HashMap]: (registry: Registry, value: TypeDef): Constructor =>
    createHashMap(registry, value, HashMap),

  [TypeDefInfo.Int]: (registry: Registry, value: TypeDef): Constructor =>
    createInt(value, Int),

  // We have circular deps between Linkage & Struct
  [TypeDefInfo.Linkage]: (registry: Registry, value: TypeDef): Constructor => {
    const type = `Option<${getSub(registry, value)[1].type}>`;
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
    createClass(registry, 'Null'),

  [TypeDefInfo.Option]: (registry: Registry, value: TypeDef): Constructor =>
    Option.with(getSub(registry, value)[0]),

  [TypeDefInfo.Plain]: (registry: Registry, value: TypeDef): Constructor =>
    registry.getOrUnknown(value.type),

  [TypeDefInfo.Result]: (registry: Registry, value: TypeDef): Constructor => {
    const [[Ok], [Err]] = getSubArray(registry, value);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return Result.with({ Err, Ok });
  },

  [TypeDefInfo.Set]: (registry: Registry, value: TypeDef): Constructor => {
    const result: Record<string, number> = {};

    return CodecSet.with(
      getSubArray(registry, value).reduce<Record<string, number>>((result, [, { index }, name]) => {
        result[name] = index as number;

        return result;
      }, result),
      value.length
    );
  },

  [TypeDefInfo.Struct]: (registry: Registry, value: TypeDef): Constructor =>
    Struct.with(getSubMap(registry, value), value.alias),

  [TypeDefInfo.Tuple]: (registry: Registry, value: TypeDef): Constructor =>
    Tuple.with(getSubArray(registry, value).map(([c]) => c)),

  [TypeDefInfo.UInt]: (registry: Registry, value: TypeDef): Constructor =>
    createInt(value, UInt),

  [TypeDefInfo.Vec]: (registry: Registry, value: TypeDef): Constructor => {
    const [subType, subDef] = getSub(registry, value);

    return (
      subDef.type === 'u8'
        ? createClass(registry, 'Bytes')
        : Vec.with(subType)
    );
  },

  [TypeDefInfo.VecFixed]: (registry: Registry, { displayName, length, sub }: TypeDef): Constructor => {
    assert(isNumber(length) && !isUndefined(sub) && !Array.isArray(sub), 'Expected length & type information for fixed vector');

    return (
      sub.type === 'u8'
        ? U8aFixed.with((length * 8) as U8aBitLength, displayName)
        : VecFixed.with(getSub(registry, sub)[0], length)
    );
  }
};

// Returns the type Class for construction
export function getTypeClass<T extends Codec = Codec> (registry: Registry, value: TypeDef): Constructor<T> {
  let Type = registry.get<T>(value.type);

  if (Type) {
    return Type;
  }

  const getFn = infoMapping[value.info];

  assert(getFn, () => `Unable to construct class from ${stringify(value)}`);

  try {
    Type = getFn(registry, value) as Constructor<T>;

    // don't clobber any existing
    if (!Type.__fallbackType && value.fallbackType) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore ...this is the only place we we actually assign this...
      Type.__fallbackType = value.fallbackType;
    }

    return Type;
  } catch (error) {
    throw new Error(`Failure constructing from ${stringify(value)}: ${(error as Error).message}`);
  }
}
