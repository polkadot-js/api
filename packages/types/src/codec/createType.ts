// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import { Constructor } from '../types';
import Text from '../Text';
import Base from './Base';
import PairOf from './PairOf';
import Tuple from './Tuple';
import Vector from './Vector';

export enum TypeDefInfo {
  PairOf,
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
        // inc vec/pair depth
        vDepth++;
        break;

      case '>':
        // dec vec/pair depth
        vDepth--;
        break;

      default:
        break;
    }
  }

  assert(tDepth === 0, `Invalid Tuple in ${type}`);
  assert(vDepth === 0, `Invalid Vector in ${type}`);

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
  } else if (type.substr(0, 4) === 'Vec<') {
    assert(type[type.length - 1] === '>', `Expected Vec wrapped with <>`);

    // strip wrapping Vec<>
    const subType = type.substr(4, type.length - 4 - 1);

    value.info = TypeDefInfo.Vector;
    value.sub = getTypeDef(subType);
  } else if (type.substr(0, 7) === 'PairOf<') {
    assert(type[type.length - 1] === '>', `Expected PairOf wrapped with <>`);

    // strip wrapping PairOf<>
    const subType = type.substr(7, type.length - 7 - 1);

    value.info = TypeDefInfo.PairOf;
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
      value.sub.reduce((result, type, index) => {
        result[`entry${index}`] = getTypeClass(type);

        return result;
      }, {} as { [index: string]: Constructor })
    );
  } else if (value.info === TypeDefInfo.Vector) {
    if (!value.sub || Array.isArray(value.sub)) {
      throw new Error(`Expected subtype for Vector`);
    }

    return Vector.with(
      getTypeClass(value.sub)
    );
  } else if (value.info === TypeDefInfo.PairOf) {
    if (!value.sub || Array.isArray(value.sub)) {
      throw new Error(`Expected subtype for PairOf`);
    }

    // This is not too cool... because of the static overrides we have a small issue here
    return PairOf.with<any>(
      getTypeClass(value.sub)
    );
  }

  // We are dynamically loading as to avoid circular dependencies
  const Types = require('../index');
  const Type = Types[value.type];

  assert(Type, `Unable to determine type from '${value.type}'`);

  return Type;
}

export default function createType (type: Text | string, value?: any): Base {
  // l.debug(() => ['createType', { type, value }]);

  const Type = getTypeClass(
    getTypeDef(type)
  );

  return value instanceof Type
    ? value
    : new Type(value);
}
