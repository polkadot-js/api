// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes } from '../../types';
import { TypeDef, TypeDefExtVecFixed, TypeDefInfo } from './types';

import { assert } from '@polkadot/util';

import Compact from '../Compact';
import Enum from '../Enum';
import Linkage from '../Linkage';
import Option from '../Option';
import CodecSet from '../Set';
import Struct from '../Struct';
import Tuple from '../Tuple';
import U8aFixed, { BitLength as U8aFixedBitLength } from '../U8aFixed';
import Vec from '../Vec';
import VecFixed from '../VecFixed';
import { ClassOf } from './createClass';
import { getTypeRegistry } from './registry';

// create a maps of type string constructors from the input
function getTypeClassMap (defs: TypeDef[]): Record<string, InterfaceTypes> {
  const result: Record<string, InterfaceTypes> = {};

  return defs.reduce((result, sub): Record<string, InterfaceTypes> => {
    result[sub.name as string] = sub.type as any;

    return result;
  }, result);
}

// create an array of type string constructors from the input
function getTypeClassArray (defs: TypeDef[]): (InterfaceTypes)[] {
  return defs.map(({ type }): InterfaceTypes =>
    type as InterfaceTypes
  );
}

const infoMapping: Record<TypeDefInfo, (value: TypeDef) => Constructor> = {
  [TypeDefInfo.Compact]: (value: TypeDef): Constructor => {
    assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Compact');

    return Compact.with(
      (value.sub as TypeDef).type as InterfaceTypes
    );
  },

  [TypeDefInfo.DoubleMap]: (value: TypeDef): Constructor => {
    assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for DoubleMap');

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return getTypeClass(value.sub as TypeDef);
  },

  [TypeDefInfo.Enum]: (value: TypeDef): Constructor => {
    assert(value.sub && Array.isArray(value.sub), 'Expected subtype for Enum');

    return Enum.with(
      getTypeClassMap(value.sub as TypeDef[])
    );
  },

  [TypeDefInfo.Linkage]: (value: TypeDef): Constructor => {
    assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Linkage');

    return Linkage.withKey(
      (value.sub as TypeDef).type as InterfaceTypes
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (value: TypeDef): Constructor => {
    return ClassOf('Null');
  },

  [TypeDefInfo.Option]: (value: TypeDef): Constructor => {
    assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Option');

    return Option.with(
      (value.sub as TypeDef).type as InterfaceTypes
    );
  },

  [TypeDefInfo.Plain]: (value: TypeDef): Constructor => {
    throw new Error(`Unable to find plain type for ${value.name}:${value.type}`);
  },

  [TypeDefInfo.Set]: (value: TypeDef): Constructor => {
    assert(Array.isArray(value.sub), 'Expected nested info for Set');

    const result: Record<string, number> = {};

    return CodecSet.with(
      (value.sub as TypeDef[]).reduce((result, { name, index }): Record<string, number> => {
        result[name as string] = index as number;

        return result;
      }, result)
    );
  },

  [TypeDefInfo.Struct]: (value: TypeDef): Constructor => {
    assert(Array.isArray(value.sub), 'Expected nested subtypes for Struct');

    return Struct.with(
      getTypeClassMap(value.sub as TypeDef[])
    );
  },

  [TypeDefInfo.Tuple]: (value: TypeDef): Constructor => {
    assert(Array.isArray(value.sub), 'Expected nested subtypes for Tuple');

    return Tuple.with(
      getTypeClassArray(value.sub as TypeDef[])
    );
  },

  [TypeDefInfo.Vec]: (value: TypeDef): Constructor => {
    assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Vec');

    const vsub = value.sub as TypeDef;

    return (
      vsub.type === 'u8'
        ? ClassOf('Bytes')
        : Vec.with(vsub.type as InterfaceTypes)
    );
  },

  [TypeDefInfo.VecFixed]: (value: TypeDef): Constructor => {
    assert(value.ext, 'Expected length & type information for fixed vector');

    const ext = value.ext as TypeDefExtVecFixed;

    return (
      ext.type === 'u8'
        ? U8aFixed.with((ext.length * 8) as U8aFixedBitLength)
        : VecFixed.with(ext.type as InterfaceTypes, ext.length)
    );
  }
};

// Returns the type Class for construction
export function getTypeClass<T extends Codec = Codec> (value: TypeDef): Constructor<T> {
  const Type = getTypeRegistry().get<T>(value.type);

  if (Type) {
    return Type;
  }

  const getFn = infoMapping[value.info];

  if (!getFn) {
    throw new Error(`Unable to determine type from ${JSON.stringify(value)}`);
  }

  return getFn(value) as Constructor<T>;
}
