// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import { FromReg, TypeDef, TypeDefExtUInt, TypeDefExtVecFixed, TypeDefInfo } from './types';

import { assert } from '@polkadot/util';

import BTreeMap from '../codec/BTreeMap';
import BTreeSet from '../codec/BTreeSet';
import Compact from '../codec/Compact';
import Enum from '../codec/Enum';
import Int from '../codec/Int';
import Option from '../codec/Option';
import Result from '../codec/Result';
import CodecSet from '../codec/Set';
import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import U8aFixed, { BitLength as U8aFixedBitLength } from '../codec/U8aFixed';
import UInt from '../codec/UInt';
import Vec from '../codec/Vec';
import VecFixed from '../codec/VecFixed';
import { InterfaceRegistry } from '../interfaceRegistry';
import { getTypeDef } from './getTypeDef';

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
export function ClassOf<K extends InterfaceTypes> (registry: Registry, name: K): Constructor<InterfaceRegistry[K]> {
  // TS2589: Type instantiation is excessively deep and possibly infinite.
  // The above happens with as Constructor<InterfaceRegistry[K]>;
  return ClassOfUnsafe<Codec, K>(registry, name) as any;
}

function getSubDefArray (value: TypeDef): TypeDef[] {
  assert(value.sub && Array.isArray(value.sub), `Expected subtype as TypeDef[] in ${JSON.stringify(value)}`);

  return value.sub;
}

function getSubDef (value: TypeDef): TypeDef {
  assert(value.sub && !Array.isArray(value.sub), `Expected subtype as TypeDef in ${JSON.stringify(value)}`);

  return value.sub;
}

function getSubType (value: TypeDef): InterfaceTypes {
  return getSubDef(value).type as InterfaceTypes;
}

// create a maps of type string constructors from the input
function getTypeClassMap (value: TypeDef): Record<string, InterfaceTypes> {
  const result: Record<string, InterfaceTypes> = {};

  return getSubDefArray(value).reduce((result, sub): Record<string, InterfaceTypes> => {
    result[sub.name as string] = sub.type as any;

    return result;
  }, result);
}

// create an array of type string constructors from the input
function getTypeClassArray (value: TypeDef): (InterfaceTypes)[] {
  return getSubDefArray(value).map(({ type }): InterfaceTypes =>
    type as InterfaceTypes
  );
}

function createInt (value: TypeDef, Clazz: typeof Int | typeof UInt): Constructor {
  assert(value.ext, `Expected bitLength information for ${Clazz.constructor.name}<bitLength>`);

  const ext = value.ext as TypeDefExtUInt;

  return Clazz.with(ext.length, ext.typeName);
}

const infoMapping: Record<TypeDefInfo, (registry: Registry, value: TypeDef) => Constructor> = {
  [TypeDefInfo.BTreeMap]: (registry: Registry, value: TypeDef): Constructor => {
    const [keyType, valueType] = getTypeClassArray(value);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return BTreeMap.with(keyType, valueType);
  },

  [TypeDefInfo.BTreeSet]: (registry: Registry, value: TypeDef): Constructor => BTreeSet.with(getSubType(value)),

  [TypeDefInfo.Compact]: (registry: Registry, value: TypeDef): Constructor => Compact.with(getSubType(value)),

  [TypeDefInfo.Enum]: (registry: Registry, value: TypeDef): Constructor => Enum.with(getTypeClassMap(value)),

  [TypeDefInfo.Int]: (registry: Registry, value: TypeDef): Constructor => createInt(value, Int),

  // We have circular deps between Linkage & Struct
  [TypeDefInfo.Linkage]: (registry: Registry, value: TypeDef): Constructor => {
    const type = `Option<${getSubType(value)}>`;
    const Clazz = Struct.with({ previous: type, next: type } as any);

    ClassOf.prototype.toRawType = function (): string {
      return `Linkage<${this.next.toRawType(true)}>`;
    };

    return Clazz;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (registry: Registry, _: TypeDef): Constructor => ClassOf(registry, 'Null'),

  [TypeDefInfo.Option]: (registry: Registry, value: TypeDef): Constructor => Option.with(getSubType(value)),

  [TypeDefInfo.Plain]: (registry: Registry, value: TypeDef): Constructor =>
    registry.getOrUnknown(value.type),

  [TypeDefInfo.Result]: (registry: Registry, value: TypeDef): Constructor => {
    const [Ok, Error] = getTypeClassArray(value);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return Result.with({ Ok, Error });
  },

  [TypeDefInfo.Set]: (registry: Registry, value: TypeDef): Constructor => {
    const result: Record<string, number> = {};

    return CodecSet.with(
      getSubDefArray(value).reduce((result, { name, index }): Record<string, number> => {
        result[name as string] = index as number;

        return result;
      }, result)
    );
  },

  [TypeDefInfo.Struct]: (registry: Registry, value: TypeDef): Constructor => Struct.with(getTypeClassMap(value)),

  [TypeDefInfo.Tuple]: (registry: Registry, value: TypeDef): Constructor => Tuple.with(getTypeClassArray(value)),

  [TypeDefInfo.UInt]: (registry: Registry, value: TypeDef): Constructor => createInt(value, UInt),

  [TypeDefInfo.Vec]: (registry: Registry, value: TypeDef): Constructor => {
    const subType = getSubType(value);

    return (
      subType === 'u8'
        ? ClassOf(registry, 'Bytes')
        : Vec.with(subType)
    );
  },

  [TypeDefInfo.VecFixed]: (registry: Registry, value: TypeDef): Constructor => {
    assert(value.ext, 'Expected length & type information for fixed vector');

    const ext = value.ext as TypeDefExtVecFixed;

    return (
      ext.type === 'u8'
        ? U8aFixed.with((ext.length * 8) as U8aFixedBitLength, ext.rawName)
        : VecFixed.with(ext.type as InterfaceTypes, ext.length)
    );
  }
};

// Returns the type Class for construction
export function getTypeClass<T extends Codec = Codec> (registry: Registry, value: TypeDef): Constructor<T> {
  const Type = registry.get<T>(value.type);

  if (Type) {
    return Type;
  }

  const getFn = infoMapping[value.info];

  if (!getFn) {
    throw new Error(`Unable to construct class from ${JSON.stringify(value)}`);
  }

  return getFn(registry, value) as Constructor<T>;
}
