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
import { getTypeDef } from './utils';

// Type which says: if `K` is in the InterfaceRegistry, then return InterfaceRegistry[K], else fallback to T
type FromReg<T extends Codec, K extends string> = K extends InterfaceTypes ? InterfaceRegistry[K] : T

export function createClass<T extends Codec = Codec, K extends string = string> (
  type: K
): Constructor<FromReg<T, K>> {
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
export function createTypeUnsafe<T extends Codec = Codec, K extends string = string> (type: K, params: any[] = [], isPedantic?: boolean): FromReg<T, K> {
  try {
    return initType(createClass<T, K>(type), params, isPedantic);
  } catch (error) {
    throw new Error(`createType(${type}):: ${error.message}`);
  }
}

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export default function createType<K extends InterfaceTypes> (type: K, ...params: any[]): InterfaceRegistry[K] {
  return createTypeUnsafe<Codec, K>(type, params) as InterfaceRegistry[K];
}
