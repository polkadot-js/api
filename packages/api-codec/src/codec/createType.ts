// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import assert from '@polkadot/util/assert';

import * as Types from '../index';
import Base from './Base';
import Tuple from './Tuple';
import Vector from './Vector';

type Constructor = { new (value?: any): Base };

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

  // the final leg of the journey
  result.push(type.substr(start, type.length - start).trim());

  return result;
}

// Handle Vector types, i.e Vec<AccountId> or Vec<(AccountId, Balance)>
export function getVectorType (type: string): Constructor {
  assert(type.substr(0, 4) === 'Vec<' && type[type.length - 1] === '>', `Expected Vec wrapped with <>`);

  // strip wrapping Vec<>
  const subType = type.substr(4, type.length - 5);

  return Vector.with(
    getType(subType)
  );
}

// Handle tuple types, (u32, String, AccountId). It could be nested and wrapped in other
// types, i.e. (u32, Vec<(AccountId, Balance)>)
export function getTupleType (type: string): Constructor {
  assert(type[0] === '(' && type[type.length - 1] === ')', `Expected tuple wrapped with ()`);

  // strip wrapping ()'s
  const innerTypes = typeSplit(type.substr(1, type.length - 2));

  return Tuple.with(
    innerTypes.reduce((result, type, index) => {
      result[`entry${index}`] = getType(type);

      return result;
    }, {} as { [index: string]: Constructor })
  );
}

// Returns the type Class for construction
export function getType (_type: string): Constructor {
  const type = _type.trim();

  if (type[0] === '(') {
    return getTupleType(type);
  } else if (type.substr(0, 4) === 'Vec<') {
    return getVectorType(type);
  }

  const Type = (Types as any)[type];

  assert(Type, `Unable to determine type from '${type}'`);

  return Type;
}

export default function createType (type: string, value?: any): Base {
  const Type = getType(type);

  return new Type(value);
}
