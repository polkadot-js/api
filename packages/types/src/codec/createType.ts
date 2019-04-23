// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import Text from '../primitive/Text';
import { ITypeDef, TypeDefInfo } from './TypeRegistry';

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

export function getTypeDef (_type: Text | string, module?: string, meta?: {keyName: string}): ITypeDef {
  const type = _type.toString().trim();
  const value: ITypeDef = {
    type,
    module,
    meta: {
      info: TypeDefInfo.Plain,
      ...meta
    }
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
    value.meta.info = TypeDefInfo.Tuple;
    value.sub = typeSplit(subType).map((inner) => getTypeDef(inner, module));
  } else if (startingWith(type, '{', '}')) {
    const parsed = JSON.parse(type);
    const keys = Object.keys(parsed);

    if (keys.length === 1 && keys[0] === '_enum') {
      const details = parsed[keys[0]];

      // not as pretty, but remain compatible with oo7 for both struct and Array types
      value.sub = Array.isArray(details)
        ? details.map((name) => ({ info: TypeDefInfo.Plain, meta: { keyName: name }, type: 'Null' }))
        : Object.keys(details).map((name) => ({ info: TypeDefInfo.Plain, meta: { keyName: name }, type: details[name] || 'Null' }));
      value.meta.info = TypeDefInfo.Enum;
    } else {
      value.meta.info = TypeDefInfo.Struct;
      value.sub = keys.map((name) => getTypeDef(parsed[name], module, { keyName: name }));
    }
  } else if (startingWith(type, 'Compact<', '>')) {
    value.meta.info = TypeDefInfo.Compact;
    value.sub = getTypeDef(subType, module);
  } else if (startingWith(type, 'Option<', '>')) {
    value.meta.info = TypeDefInfo.Option;
    value.sub = getTypeDef(subType, module);
  } else if (startingWith(type, 'Vec<', '>')) {
    value.meta.info = TypeDefInfo.Vector;
    value.sub = getTypeDef(subType, module);
  } else if (startingWith(type, 'Linkage<', '>')) {
    value.meta.info = TypeDefInfo.Linkage;
    value.sub = getTypeDef(subType, module);
  }

  return value;
}
