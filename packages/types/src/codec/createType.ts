// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import { Codec, Constructor } from '../types';
import Text from '../Text';
import Compact from './Compact';
import Tuple from './Tuple';
import UInt from './UInt';
import Vector from './Vector';
import registry from './typeRegistry';

export enum TypeDefInfo {
  Compact,
  Plain,
  Tuple,
  Vector
}

export type TypeDef = {
  info: TypeDefInfo,
  type: string,
  sub?: TypeDef | Array<TypeDef>
};

// safely split a string on ', ' while taking care of any nested occurences
export function typeSplit (type: string): Array<string> {
  let tDepth = 0;
  let vDepth = 0;
  let start = 0;
  const result = [];

  for (let index = 0; index < type.length; index++) {
    switch (type[index]) {
      case ',':
        // we are not nested, add the type
        if (tDepth === 0 && vDepth === 0) {
          result.push(type.substr(start, index - start).trim());
          start = index + 1;
        }
        break;

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

  assert(!tDepth, `Invalid Tuple in ${type}`);
  assert(!vDepth, `Invalid Compact/Vector in ${type}`);

  // the final leg of the journey
  result.push(type.substr(start, type.length - start).trim());

  return result;
}

export function getTypeDef (_type: Text | string): TypeDef {
  let subType = '';
  const type = _type.toString().trim();
  const value: TypeDef = {
    info: TypeDefInfo.Plain,
    type
  };
  const startingWith = (type: string, start: string, end: string): boolean => {
    if (type.substr(0, start.length) !== start) {
      return false;
    }

    assert(type[type.length - 1] === end, `Expected '${start}' closing with '${end}'`);

    subType = type.substr(8, type.length - start.length - 1);

    return true;
  };

  if (startingWith(type, '(', ')')) {
    value.info = TypeDefInfo.Tuple;
    value.sub = typeSplit(subType).map((inner) => getTypeDef(inner));
  } else if (startingWith(type, 'Compact<', '>')) {
    value.info = TypeDefInfo.Compact;
    value.sub = getTypeDef(subType);
  } else if (startingWith(type, 'Vec<', '>')) {
    value.info = TypeDefInfo.Vector;
    value.sub = getTypeDef(subType);
  }

  return value;
}

// Returns the type Class for construction
export function getTypeClass (value: TypeDef): Constructor {
  if (value.info === TypeDefInfo.Tuple) {
    assert(Array.isArray(value.sub), 'Expected nested subtypes for Tuple');

    return Tuple.with(
      (value.sub as Array<TypeDef>).map(getTypeClass)
    );
  } else if (value.info === TypeDefInfo.Compact) {
    assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Compact');

    return Compact.with(
      getTypeClass(value.sub as TypeDef) as Constructor<UInt>
    );
  } else if (value.info === TypeDefInfo.Vector) {
    assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Vector');

    return Vector.with(
      getTypeClass(value.sub as TypeDef)
    );
  }

  // NOTE We only load types via require - we have to avoid circular deps between type usage and creation
  const Types = require('../index');
  const Type = registry.get(value.type) || Types[value.type];

  assert(Type, `Unable to determine type from '${value.type}'`);

  return Type;
}

export default function createType (type: Text | string, value?: any): Codec {
  // l.debug(() => ['createType', { type, value }]);

  const Type = getTypeClass(
    getTypeDef(type)
  );

  return new Type(value);
}
