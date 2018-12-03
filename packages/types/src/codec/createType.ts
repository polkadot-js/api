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

      case '(':
        // inc tuple depth
        tDepth++;
        break;

      case ')':
        // dec tuple depth
        tDepth--;
        break;

      case '<':
        // inc compact/vec depth
        vDepth++;
        break;

      case '>':
        // dec compact/vec depth
        vDepth--;
        break;

      default:
        break;
    }
  }

  assert(tDepth === 0, `Invalid Tuple in ${type}`);
  assert(vDepth === 0, `Invalid Compact/Vector in ${type}`);

  // the final leg of the journey
  result.push(type.substr(start, type.length - start).trim());

  return result;
}

export function getTypeDef (_type: Text | string): TypeDef {
  const type = _type.toString().trim();
  const value: TypeDef = {
    info: TypeDefInfo.Plain,
    type
  };

  if (type[0] === '(') {
    assert(type[type.length - 1] === ')', `Expected tuple wrapped with ()`);

    // strip wrapping ()'s
    const innerTypes = typeSplit(type.substr(1, type.length - 1 - 1));

    value.info = TypeDefInfo.Tuple;
    value.sub = innerTypes.map((inner) =>
      getTypeDef(inner)
    );
  } else if (type.substr(0, 8) === 'Compact<') {
    assert(type[type.length - 1] === '>', `Expected Compact wrapped with <>`);

    // strip wrapping Compact<>
    const subType = type.substr(8, type.length - 8 - 1);

    value.info = TypeDefInfo.Compact;
    value.sub = getTypeDef(subType);
  } else if (type.substr(0, 4) === 'Vec<') {
    assert(type[type.length - 1] === '>', `Expected Vec wrapped with <>`);

    // strip wrapping Vec<>
    const subType = type.substr(4, type.length - 4 - 1);

    value.info = TypeDefInfo.Vector;
    value.sub = getTypeDef(subType);
  }

  return value;
}

// Returns the type Class for construction
export function getTypeClass (value: TypeDef): Constructor {
  if (value.info === TypeDefInfo.Tuple) {
    if (!Array.isArray(value.sub)) {
      throw new Error(`Expected nested subtypes for Tuple`);
    }

    return Tuple.with(
      value.sub.map(getTypeClass)
    );
  } else if (value.info === TypeDefInfo.Compact) {
    if (!value.sub || Array.isArray(value.sub)) {
      throw new Error(`Expected subtype for Compact`);
    }

    return Compact.with(
      getTypeClass(value.sub) as Constructor<UInt>
    );
  } else if (value.info === TypeDefInfo.Vector) {
    if (!value.sub || Array.isArray(value.sub)) {
      throw new Error(`Expected subtype for Vector`);
    }

    return Vector.with(
      getTypeClass(value.sub)
    );
  }

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
