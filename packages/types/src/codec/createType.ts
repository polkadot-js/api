// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import assert from '@polkadot/util/assert';

import * as Types from '../index';
import Base from './Base';
import Tuple from './Tuple';
import Vector from './Vector';

type Constructor = { new (value?: any): Base };

export enum TypeValueInfo {
  Plain,
  Tuple,
  Vector
}

export type TypeValue = {
  info: TypeValueInfo,
  type: string,
  sub?: TypeValue | Array<TypeValue>
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
        // inc vec depth
        vDepth++;
        break;

      case '>':
        // dec tuple depth
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

export function getTypeValue (_type: string): TypeValue {
  const type = _type.trim();
  const value: TypeValue = {
    info: TypeValueInfo.Plain,
    type
  };

  if (type[0] === '(') {
    assert(type[type.length - 1] === ')', `Expected tuple wrapped with ()`);

    // strip wrapping ()'s
    const innerTypes = typeSplit(type.substr(1, type.length - 2));

    value.info = TypeValueInfo.Tuple;
    value.sub = innerTypes.map((inner) =>
      getTypeValue(inner)
    );
  } else if (type.substr(0, 4) === 'Vec<') {
    assert(type[type.length - 1] === '>', `Expected Vec wrapped with <>`);

    // strip wrapping Vec<>
    const subType = type.substr(4, type.length - 5);

    value.info = TypeValueInfo.Vector;
    value.sub = getTypeValue(subType);
  }

  return value;
}

// Returns the type Class for construction
export function getType (value: TypeValue): Constructor {
  if (value.info === TypeValueInfo.Tuple) {
    if (!Array.isArray(value.sub)) {
      throw new Error(`Expected nested subtypes for Tuple`);
    }

    return Tuple.with(
      value.sub.reduce((result, type, index) => {
        result[`entry${index}`] = getType(type);

        return result;
      }, {} as { [index: string]: Constructor })
    );
  } else if (value.info === TypeValueInfo.Vector) {
    if (!value.sub || Array.isArray(value.sub)) {
      throw new Error(`Expected subtype for Vector`);
    }

    return Vector.with(
      getType(value.sub)
    );
  }

  const Type = (Types as any)[value.type];

  assert(Type, `Unable to determine type from '${value.type}'`);

  return Type;
}

export default function createType (type: string, value?: any): Base {
  // l.debug(() => ['createType', { type, value }]);

  const Type = getType(
    getTypeValue(type)
  );

  return new Type(value);
}
