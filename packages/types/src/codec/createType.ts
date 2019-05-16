// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@plugnet/util';

import { Codec, Constructor } from '../types';
import Null from '../primitive/Null';
import Text from '../primitive/Text';
import Compact from './Compact';
import Enum from './Enum';
import Linkage from './Linkage';
import Option from './Option';
import Struct from './Struct';
import Tuple from './Tuple';
import UInt from './UInt';
import Vector from './Vector';
import getRegistry from './typeRegistry';

export enum TypeDefInfo {
  Compact,
  Enum,
  Option,
  Plain,
  Struct,
  Tuple,
  Vector,
  Linkage,
  // anything not full supported (keep this as the last entry)
  Null
}

export type TypeDef = {
  info: TypeDefInfo,
  name?: string,
  type: string,
  sub?: TypeDef | Array<TypeDef>
};

// safely split a string on ', ' while taking care of any nested occurences
export function typeSplit (type: string): Array<string> {
  let sDepth = 0;
  let tDepth = 0;
  let vDepth = 0;
  let start = 0;
  const result = [];

  for (let index = 0; index < type.length; index++) {
    switch (type[index]) {
      case ',':
        // we are not nested, add the type
        if (sDepth === 0 && tDepth === 0 && vDepth === 0) {
          result.push(type.substr(start, index - start).trim());
          start = index + 1;
        }
        break;

      // inc struct depth, start found
      case '{': sDepth++; break;

      // dec struct depth, end found
      case '}': sDepth--; break;

      // inc tuple depth, start found
      case '(': tDepth++; break;

      // dec tuple depth, end found
      case ')': tDepth--; break;

      // inc compact/vec depth, start found
      case '<': vDepth++; break;

      // dec compact/vec depth, end found
      case '>': vDepth--; break;

      // normal character
      default: break;
    }
  }

  assert(!sDepth && !tDepth && !vDepth, `Invalid defintion (missing terminators) found in ${type}`);

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
    // FIXME As a first step, only allow parsing of DoubleMap, don't actually init
    value.info = TypeDefInfo.Null;
  }

  return value;
}

// Returns the type Class for construction
export function getTypeClass (value: TypeDef): Constructor {
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
        (value.sub as Array<TypeDef>).map(getTypeClass)
      );
    case TypeDefInfo.Vector:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Vector');

      return Vector.with(
        getTypeClass(value.sub as TypeDef)
      );
    case TypeDefInfo.Linkage:
      assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Linkage');

      return Linkage.withKey(
        getTypeClass(value.sub as TypeDef)
      );
    case TypeDefInfo.Null:
      return Null;
  }

  throw new Error(`Unable to determine type from '${value.type}'`);
}

export function createClass (type: Text | string): Constructor {
  return getTypeClass(
    getTypeDef(type)
  );
}

export default function createType (type: Text | string, value?: any): Codec {
  // l.debug(() => ['createType', { type, value }]);

  const Type = createClass(type);

  return new Type(value);
}
