// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import { Codec, Constructor } from '../types';
import Null from '../primitive/Null';
import StorageData from '../primitive/StorageData';
import Text from '../primitive/Text';
import Compact from './Compact';
import Enum from './Enum';
import Linkage from './Linkage';
import Option from './Option';
import Struct from './Struct';
import Tuple from './Tuple';
import U8aFixed, { BitLength as U8aFixedBitLength } from './U8aFixed';
import UInt from './UInt';
import Vector from './Vector';
import VectorFixed from './VectorFixed';
import getRegistry from './typeRegistry';

export enum TypeDefInfo {
  Compact,
  DoubleMap,
  Enum,
  Linkage,
  Option,
  Plain,
  Struct,
  Tuple,
  Vector,
  VectorFixed,
  // anything not full supported (keep this as the last entry)
  Null
}

export type TypeDefExtVecFixed = {
  length: number,
  type: string
};

export type TypeDef = {
  info: TypeDefInfo,
  ext?: TypeDefExtVecFixed, // add additional here as required
  name?: string,
  type: string,
  sub?: TypeDef | Array<TypeDef>
};

// safely split a string on ', ' while taking care of any nested occurences
export function typeSplit (type: string): Array<string> {
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

export function getTypeDef (_type: Text | string, name?: string): TypeDef {
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
    value.sub = typeSplit(subType).map((inner) => getTypeDef(inner));
  } else if (startingWith(type, '[', ']')) {
    // this handles e.g. [u8;32]
    const [vecType, _vecLen] = type.substr(1, type.length - 2).split(';');
    const vecLen = parseInt(_vecLen.trim(), 10);

    // as a first round, only u8 via u8aFixed, we can add more support
    assert(vecLen <= 256, `Only support for [Type; <length>], where length <= 256`);

    value.info = TypeDefInfo.VectorFixed;
    value.ext = { length: vecLen, type: vecType } as TypeDefExtVecFixed;
  } else if (startingWith(type, '{', '}')) {
    const parsed = JSON.parse(type);
    const keys = Object.keys(parsed);

    if (keys.length === 1 && keys[0] === '_enum') {
      const details = parsed[keys[0]];

      // not as pretty, but remain compatible with oo7 for both struct and Array types
      value.sub = Array.isArray(details)
        ? details.map((name) => ({
          info: TypeDefInfo.Plain,
          name,
          type: 'Null'
        }))
        : Object.keys(details).map((name) => ({
          info: TypeDefInfo.Plain,
          name,
          type: details[name] || 'Null'
        }));
      value.info = TypeDefInfo.Enum;
    } else {
      value.info = TypeDefInfo.Struct;
      value.sub = keys.map((name) => getTypeDef(parsed[name], name));
    }
  } else if (startingWith(type, 'Compact<', '>')) {
    value.info = TypeDefInfo.Compact;
    value.sub = getTypeDef(subType);
  } else if (startingWith(type, 'Option<', '>')) {
    value.info = TypeDefInfo.Option;
    value.sub = getTypeDef(subType);
  } else if (startingWith(type, 'Vec<', '>')) {
    value.info = TypeDefInfo.Vector;
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

// Returns the type Class for construction
export function getTypeClass (value: TypeDef, Fallback?: Constructor): Constructor {
  const Type = getRegistry().get(value.type);

  if (Type) {
    return Type;
  }

  switch (value.info) {
    case TypeDefInfo.Compact:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Compact');

      return Compact.with(
        getTypeClass(value.sub as TypeDef) as Constructor<UInt>
      );
    case TypeDefInfo.Enum:
      assert(value.sub && Array.isArray(value.sub), 'Expected subtype for Enum');

      return Enum.with(
        (value.sub as Array<TypeDef>).reduce((result, sub, index) => {
          result[sub.name as string] = getTypeClass(sub);

          return result;
        }, {} as { [index: string]: Constructor })
      );
    case TypeDefInfo.Option:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Option');

      return Option.with(
        getTypeClass(value.sub as TypeDef)
      );
    case TypeDefInfo.Struct:
      assert(Array.isArray(value.sub), 'Expected nested subtypes for Struct');

      return Struct.with(
        (value.sub as Array<TypeDef>).reduce((result, sub) => {
          result[sub.name as string] = getTypeClass(sub);

          return result;
        }, {} as { [index: string]: Constructor })
      );
    case TypeDefInfo.Tuple:
      assert(Array.isArray(value.sub), 'Expected nested subtypes for Tuple');

      return Tuple.with(
        (value.sub as Array<TypeDef>).map((Type) => getTypeClass(Type))
      );
    case TypeDefInfo.Vector:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Vector');

      return Vector.with(
        getTypeClass(value.sub as TypeDef)
      );
    case TypeDefInfo.VectorFixed:
      assert(value.ext, 'Expected length & type information for fixed vector');

      const ext = value.ext as TypeDefExtVecFixed;

      return ext.type === 'u8'
        ? U8aFixed.with((ext.length * 8) as U8aFixedBitLength)
        : VectorFixed.with(createClass(ext.type), ext.length);
    case TypeDefInfo.Linkage:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Linkage');

      return Linkage.withKey(
        getTypeClass(value.sub as TypeDef)
      );
    case TypeDefInfo.DoubleMap:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for DoubleMap');

      return getTypeClass(value.sub as TypeDef);
    case TypeDefInfo.Null:
      return Null;
  }

  if (Fallback) {
    return Fallback;
  }

  throw new Error(`Unable to determine type from '${value.type}'`);
}

export function createClass (type: Text | string): Constructor {
  return getTypeClass(
    getTypeDef(type)
  );
}

function initType (Type: Constructor, value?: any, isPedantic?: boolean): Codec {
  try {
    const created = new Type(value);

    // in pedantic mode, actually check that the encoding matches that supplied - this
    // is much slower, but ensures that we have a 100% grasp on the actual provided value
    if (isPedantic && value && value.toHex && value.toU8a) {
      const inHex = value.toHex(true);
      const crHex = created.toHex(true);

      assert(
        inHex === crHex || // check that the hex matches, if matching, all-ok
        (
          (value instanceof StorageData) && // input is from storage
          (created instanceof Uint8Array) && // we are a variable-lneght structure
          (value.toU8a(true).toString() === created.toU8a().toString()) // strip the input length
        ),
        `Input doesn't match output, received ${inHex}, created ${crHex}`
      );
    }

    return created;
  } catch (error) {
    if (Type.Fallback) {
      return initType(Type.Fallback, value, isPedantic);
    }

    throw error;
  }
}

export default function createType (type: Text | string, value?: any, isPedantic?: boolean): Codec {
  // l.debug(() => ['createType', { type, value }]);

  try {
    return initType(createClass(type), value, isPedantic);
  } catch (error) {
    throw new Error(`createType(${type}):: ${error.message}`);
  }
}
