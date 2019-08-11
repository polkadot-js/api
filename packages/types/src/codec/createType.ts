// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes } from '../types';
import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from './types';

import { assert } from '@polkadot/util';

import { InterfaceRegistry } from '../interfaceRegistry';
import Compact from './Compact';
import Enum from './Enum';
import Linkage from './Linkage';
import Option from './Option';
import CodecSet from './Set';
import Struct from './Struct';
import Tuple from './Tuple';
import U8aFixed, { BitLength as U8aFixedBitLength } from './U8aFixed';
import Vec from './Vec';
import VecFixed from './VecFixed';
import getTypeRegistry from './typeRegistry';

// Type which says: if `K` is in the InterfaceRegistry, then return InterfaceRegistry[K], else fallback to T
type FromReg<T extends Codec, K extends string> = K extends InterfaceTypes ? InterfaceRegistry[K] : T

// safely split a string on ', ' while taking care of any nested occurences
export function typeSplit (type: string): string[] {
  let cDepth = 0; // compact/doublemap/linkedmap/option/vector depth
  let fDepth = 0; // vector (fixed) depth
  let sDepth = 0; // struct depth
  let tDepth = 0; // tuple depth
  let start = 0;
  const result = [];

  for (let index = 0; index < type.length; index++) {
    switch (type[index]) {
      case ',':
        // we are not nested, add the type
        if (cDepth === 0 && fDepth === 0 && sDepth === 0 && tDepth === 0) {
          result.push(type.substr(start, index - start).trim());
          start = index + 1;
        }
        break;

      // adjust compact/vec (and friends) depth
      case '<': cDepth++; break;
      case '>': cDepth--; break;

      // adjust fixed vec depths
      case '[': fDepth++; break;
      case ']': fDepth--; break;

      // adjust struct depth
      case '{': sDepth++; break;
      case '}': sDepth--; break;

      // adjusttuple depth
      case '(': tDepth++; break;
      case ')': tDepth--; break;

      // normal character
      default: break;
    }
  }

  assert(!cDepth && !fDepth && !sDepth && !tDepth, `Invalid defintion (missing terminators) found in ${type}`);

  // the final leg of the journey
  result.push(type.substr(start, type.length - start).trim());

  return result;
}

// decode an enum of either of the following forms
//  { _enum: ['A', 'B', 'C'] }
//  { _enum: { A: AccountId, B: Balance, C: u32 } }
function _decodeEnum (value: TypeDef, details: string[] | Record<string, string>): TypeDef {
  value.info = TypeDefInfo.Enum;

  // not as pretty, but remain compatible with oo7 for both struct and Array types
  value.sub = Array.isArray(details)
    ? details.map((name): TypeDef => ({
      info: TypeDefInfo.Plain,
      name,
      type: 'Null'
    }))
    : Object.entries(details).map(([name, type]): TypeDef =>
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      getTypeDef(type || 'Null', name)
    );

  return value;
}

// decode a set of the form
//   { _set: { A: 0b0001, B: 0b0010, C: 0b0100 } }
function _decodeSet (value: TypeDef, details: Record<string, number>): TypeDef {
  value.info = TypeDefInfo.Set;
  value.sub = Object.entries(details).map(([name, index]): TypeDef => ({
    index,
    info: TypeDefInfo.Plain,
    name,
    type: name
  }));

  return value;
}

export function getTypeDef (_type: string, name?: string): TypeDef {
  const type = _type.toString().trim();
  const value: TypeDef = {
    info: TypeDefInfo.Plain,
    name,
    type
  };
  let subType = '';

  const startingWith = (type: string, start: string, end: string): boolean => {
    if (type.substr(0, start.length) !== start) {
      return false;
    }

    assert(type[type.length - 1] === end, `Expected '${start}' closing with '${end}'`);

    subType = type.substr(start.length, type.length - start.length - 1);

    return true;
  };

  if (startingWith(type, '(', ')')) {
    value.info = TypeDefInfo.Tuple;
    value.sub = typeSplit(subType).map((inner): TypeDef => getTypeDef(inner));
  } else if (startingWith(type, '[', ']')) {
    // this handles e.g. [u8;32]
    const [vecType, _vecLen] = type.substr(1, type.length - 2).split(';');
    const vecLen = parseInt(_vecLen.trim(), 10);

    // as a first round, only u8 via u8aFixed, we can add more support
    assert(vecLen <= 256, `${type}: Only support for [Type; <length>], where length <= 256`);

    value.info = TypeDefInfo.VecFixed;
    value.ext = { length: vecLen, type: vecType } as unknown as TypeDefExtVecFixed;
  } else if (startingWith(type, '{', '}')) {
    const parsed = JSON.parse(type);
    const keys = Object.keys(parsed);

    if (keys.length === 1 && keys[0] === '_enum') {
      _decodeEnum(value, parsed[keys[0]]);
    } else if (keys.length === 1 && keys[0] === '_set') {
      _decodeSet(value, parsed[keys[0]]);
    } else {
      value.info = TypeDefInfo.Struct;
      value.sub = keys.map((name): TypeDef => getTypeDef(parsed[name], name));
    }
  } else if (startingWith(type, 'Compact<', '>')) {
    value.info = TypeDefInfo.Compact;
    value.sub = getTypeDef(subType);
  } else if (startingWith(type, 'Option<', '>')) {
    value.info = TypeDefInfo.Option;
    value.sub = getTypeDef(subType);
  } else if (startingWith(type, 'Vec<', '>')) {
    value.info = TypeDefInfo.Vec;
    value.sub = getTypeDef(subType);
  } else if (startingWith(type, 'Linkage<', '>')) {
    value.info = TypeDefInfo.Linkage;
    value.sub = getTypeDef(subType);
  } else if (startingWith(type, 'DoubleMap<', '>')) {
    value.info = TypeDefInfo.DoubleMap;
    value.sub = getTypeDef(subType);
  }

  return value;
}

export function createClass<T extends Codec = Codec, K extends string = string> (
  type: K
): Constructor<FromReg<T, K>> {
  // return memoizedCreateClass(type);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getTypeClass<FromReg<T, K>>(getTypeDef(type));
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if not parseable, will yield a
// runtime error.
export function ClassOfUnsafe<T extends Codec = Codec, K extends string = string> (name: K): Constructor<FromReg<T, K>> {
  return createClass<T, K>(name);
}

// alias for createClass
export function ClassOf<K extends InterfaceTypes> (name: K): Constructor<InterfaceRegistry[K]> {
  return ClassOfUnsafe<Codec, K>(name) as Constructor<InterfaceRegistry[K]>;
}

// create a maps of type string constructors from the input
export function getTypeClassMap (defs: TypeDef[]): Record<string, InterfaceTypes> {
  return defs.reduce((result, sub): Record<string, InterfaceTypes> => {
    result[sub.name as string] = sub.type as any;

    return result;
  }, {} as unknown as Record<string, InterfaceTypes>);
}

// create an array of type string constructors from the input
export function getTypeClassArray (defs: TypeDef[]): (InterfaceTypes)[] {
  return defs.map(({ type }): InterfaceTypes =>
    type as any
  );
}

// Returns the type Class for construction
export function getTypeClass<T extends Codec = Codec> (value: TypeDef): Constructor<T> {
  const Type = getTypeRegistry().get<T>(value.type);

  if (Type) {
    return Type;
  }

  switch (value.info) {
    case TypeDefInfo.Compact:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Compact');
      return Compact.with(
        (value.sub as TypeDef).type as any
      ) as unknown as Constructor<T>;

    case TypeDefInfo.Enum:
      assert(value.sub && Array.isArray(value.sub), 'Expected subtype for Enum');
      return Enum.with(
        getTypeClassMap(value.sub as TypeDef[]) as any
      ) as unknown as Constructor<T>;

    case TypeDefInfo.Option:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Option');
      return Option.with(
        (value.sub as TypeDef).type as any
      ) as unknown as Constructor<T>;

    case TypeDefInfo.Set:
      assert(Array.isArray(value.sub), 'Expected nested info for Set');
      return CodecSet.with(
        (value.sub as TypeDef[]).reduce((result, { name, index }): Record<string, number> => {
          result[name as string] = index as number;

          return result;
        }, {} as unknown as Record<string, number>)
      ) as unknown as Constructor<T>;

    case TypeDefInfo.Struct:
      assert(Array.isArray(value.sub), 'Expected nested subtypes for Struct');
      return Struct.with(
        getTypeClassMap(value.sub as TypeDef[])
      ) as unknown as Constructor<T>;

    case TypeDefInfo.Tuple:
      assert(Array.isArray(value.sub), 'Expected nested subtypes for Tuple');
      return Tuple.with(
        getTypeClassArray(value.sub as TypeDef[])
      ) as unknown as Constructor<T>;

    case TypeDefInfo.Vec:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Vec');

      const vsub = value.sub as TypeDef;

      return (
        vsub.type === 'u8'
          ? ClassOf('Bytes')
          : Vec.with(vsub.type as any)
      ) as unknown as Constructor<T>;

    case TypeDefInfo.VecFixed:
      assert(value.ext, 'Expected length & type information for fixed vector');

      const ext = value.ext as TypeDefExtVecFixed;

      return (
        ext.type === 'u8'
          ? U8aFixed.with((ext.length * 8) as U8aFixedBitLength)
          : VecFixed.with(ext.type as any, ext.length)
      ) as unknown as Constructor<T>;

    case TypeDefInfo.Linkage:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Linkage');
      return Linkage.withKey(
        (value.sub as TypeDef).type as any
      ) as unknown as Constructor<T>;

    case TypeDefInfo.DoubleMap:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for DoubleMap');
      return getTypeClass(value.sub as TypeDef);

    case TypeDefInfo.Null:
      return ClassOf('Null') as unknown as Constructor<T>;
  }

  throw new Error(`Unable to determine type from ${JSON.stringify(value)}`);
}

// Initializes a type with a value. This also checks for fallbacks and in the cases
// where isPedantic is specified (storage decoding), also check the format/structure
function initType<T extends Codec = Codec, K extends string = string> (Type: Constructor<FromReg<T, K>>, params: any[] = [], isPedantic?: boolean): FromReg<T, K> {
  const created = new Type(...params);
  const [value] = params;

  // With isPedantic, actually check that the encoding matches that supplied. This
  // is much slower, but verifies that we have the correct types defined
  if (isPedantic && value && value.toU8a && !value.isEmpty) {
    const inHex = value.toHex(true);
    const crHex = created.toHex(true);
    const hasMatch = inHex === crHex || (
      created instanceof Uint8Array
        // strip the input length
        ? (value.toU8a(true).toString() === created.toU8a().toString())
        // compare raw. without additions
        : (value.toU8a(true).toString() === created.toU8a(true).toString())
    );

    if (!hasMatch) {
      console.warn(`${created.toRawType()}:: Input doesn't match output, received ${inHex}, created ${crHex}`);
    }
  }

  return created;
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if not parseable, will yield a
// runtime error.
export function createTypeUnsafe<T extends Codec = Codec, K extends string = string> (
  type: K,
  params: any[] = [],
  isPedantic?: boolean
): FromReg<T, K> {
  try {
    return initType(createClass<T, K>(type), params, isPedantic);
  } catch (error) {
    throw new Error(`createType(${type}):: ${error.message}`);
  }
}

/**
 * Create an instance of a `type` with a given `value`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param value - The value to instantiate the type with
 * @param isPedantic - Double-check that the input's encoding matches the
 * output's one. Slower, but ensures that we have a 100% grasp on the actual
 * provided value
 */
export default function createType<K extends InterfaceTypes> (
  type: K,
  ...params: any[]
): InterfaceRegistry[K] {
  return createTypeUnsafe<Codec, K>(type, params) as InterfaceRegistry[K];
}
