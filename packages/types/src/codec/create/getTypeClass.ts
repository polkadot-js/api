// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes } from '../../types';
import { TypeDef, TypeDefExtVecFixed, TypeDefInfo } from './types';

import { assert } from '@polkadot/util';

import BTreeMap from '../BTreeMap';
import Compact from '../Compact';
import Enum from '../Enum';
import Linkage from '../Linkage';
import Option from '../Option';
import Result from '../Result';
import CodecSet from '../Set';
import Struct from '../Struct';
import Tuple from '../Tuple';
import U8aFixed, { BitLength as U8aFixedBitLength } from '../U8aFixed';
import Vec from '../Vec';
import VecFixed from '../VecFixed';
import { ClassOf } from './createClass';
import { getTypeRegistry } from './registry';

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

const infoMapping: Record<TypeDefInfo, (value: TypeDef) => Constructor> = {
  [TypeDefInfo.BTreeMap]: (value: TypeDef): Constructor => {
    const [keyType, valueType] = getTypeClassArray(value);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return BTreeMap.with(keyType, valueType);
  },

  [TypeDefInfo.Compact]: (value: TypeDef): Constructor => Compact.with(getSubType(value)),

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  [TypeDefInfo.DoubleMap]: (value: TypeDef): Constructor => getTypeClass(getSubDef(value)),

  [TypeDefInfo.Enum]: (value: TypeDef): Constructor => Enum.with(getTypeClassMap(value)),

  [TypeDefInfo.Linkage]: (value: TypeDef): Constructor => Linkage.withKey(getSubType(value)),

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (_: TypeDef): Constructor => ClassOf('Null'),

  [TypeDefInfo.Option]: (value: TypeDef): Constructor => Option.with(getSubType(value)),

  [TypeDefInfo.Plain]: (value: TypeDef): Constructor =>
    getTypeRegistry().getOrThrow(value.type, `Unable to find plain type for ${JSON.stringify(value)}`),

  [TypeDefInfo.Result]: (value: TypeDef): Constructor => {
    const [Ok, Error] = getTypeClassArray(value);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return Result.with({ Ok, Error });
  },

  [TypeDefInfo.Set]: (value: TypeDef): Constructor => {
    const result: Record<string, number> = {};

    return CodecSet.with(
      getSubDefArray(value).reduce((result, { name, index }): Record<string, number> => {
        result[name as string] = index as number;

        return result;
      }, result)
    );
  },

  [TypeDefInfo.Struct]: (value: TypeDef): Constructor => Struct.with(getTypeClassMap(value)),

  [TypeDefInfo.Tuple]: (value: TypeDef): Constructor => Tuple.with(getTypeClassArray(value)),

  [TypeDefInfo.Vec]: (value: TypeDef): Constructor => {
    const subType = getSubType(value);

    return (
      subType === 'u8'
        ? ClassOf('Bytes')
        : Vec.with(subType)
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
