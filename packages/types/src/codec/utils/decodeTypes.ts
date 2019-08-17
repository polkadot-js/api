// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../types';

import { assert } from '@polkadot/util';

const simpleExtraction: [string, string, TypeDefInfo][] = [
  ['Compact<', '>', TypeDefInfo.Compact],
  ['Option<', '>', TypeDefInfo.Option],
  ['Vec<', '>', TypeDefInfo.Vec],
  ['Linkage<', '>', TypeDefInfo.Linkage],
  ['DoubleMap<', '>', TypeDefInfo.DoubleMap]
];

// safely split a string on ', ' while taking care of any nested occurences
export function typeSplit (type: string): string[] {
  let [cDepth, fDepth, sDepth, tDepth, start] = [0, 0, 0, 0, 0];
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

      // adjust tuple depth
      case '(': tDepth++; break;
      case ')': tDepth--; break;
    }
  }

  assert(!cDepth && !fDepth && !sDepth && !tDepth, `Invalid defintion (missing terminators) found in ${type}`);

  // the final leg of the journey
  result.push(type.substr(start, type.length - start).trim());

  return result;
}

// decode an enum of either of the following forms
//  { _enum: ['A', 'B', 'C'] }
//  { _enum: { A: AccountId, B: Balance, C: u32 } }
export function decodeEnum (value: TypeDef, details: string[] | Record<string, string>): TypeDef {
  value.info = TypeDefInfo.Enum;

  // not as pretty, but remain compatible with oo7 for both struct and Array types
  value.sub = Array.isArray(details)
    ? details.map((name): TypeDef => ({
      info: TypeDefInfo.Plain,
      name,
      type: 'Null'
    }))
    : Object.entries(details).map(([name, type]): TypeDef =>
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      getTypeDef(type || 'Null', name)
    );

  return value;
}

export function encodeEnum (sub: TypeDef[]): string {
  const isNoData = sub.reduce(
    (bool: boolean, { type }: TypeDef): boolean => bool && type === 'Null',
    true
  );

  if (isNoData) {
    return `[${
      sub
        .map(({ name }: TypeDef): string => `"${name}"`)
        .join(', ')
    }]`;
  }

  return `{${
    sub
      .map(({ name, type }: TypeDef): string => `"${name}": ${type}`)
      .join(', ')
  }}`;
}

// decode a set of the form
//   { _set: { A: 0b0001, B: 0b0010, C: 0b0100 } }
export function decodeSet (value: TypeDef, details: Record<string, number>): TypeDef {
  value.info = TypeDefInfo.Set;
  value.sub = Object.entries(details).map(([name, index]): TypeDef => ({
    index,
    info: TypeDefInfo.Plain,
    name,
    type: name
  }));

  return value;
}

// decode a struct, set or enum
export function decodeStruct (type: string, value: TypeDef): TypeDef {
  const parsed = JSON.parse(type);
  const keys = Object.keys(parsed);

  if (keys.length === 1 && keys[0] === '_enum') {
    return decodeEnum(value, parsed[keys[0]]);
  } else if (keys.length === 1 && keys[0] === '_set') {
    return decodeSet(value, parsed[keys[0]]);
  }

  value.info = TypeDefInfo.Struct;
  value.sub = keys.map((name): TypeDef =>
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getTypeDef(parsed[name], name)
  );

  return value;
}

export function encodeStruct (sub: TypeDef[]): string {
  return `{${
    sub
      .map(({ name, type }: TypeDef): string => `"${name}": ${type}`)
      .join(', ')
  }}`;
}

// decode a fixed vector, e.g. [u8;32]
export function decodeFixedVec (type: string, value: TypeDef): TypeDef {
  const [vecType, _vecLen] = type.substr(1, type.length - 2).split(';');
  const vecLen = parseInt(_vecLen.trim(), 10);

  // as a first round, only u8 via u8aFixed, we can add more support
  assert(vecLen <= 256, `${type}: Only support for [Type; <length>], where length <= 256`);

  value.info = TypeDefInfo.VecFixed;
  value.ext = { length: vecLen, type: vecType } as unknown as TypeDefExtVecFixed;

  return value;
}

// decode a tuple
export function decodeTuple (subType: string, value: TypeDef): TypeDef {
  value.info = TypeDefInfo.Tuple;
  value.sub = typeSplit(subType).map((inner): TypeDef =>
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getTypeDef(inner)
  );

  return value;
}

export function encodeTuple (sub: TypeDef[]): string {
  return `(${
    sub
      .map(({ type }: TypeDef): string => type)
      .join(', ')
  })`;
}

export function getTypeDef (_type: string, name?: string): TypeDef {
  const type = _type.toString().trim();
  const value: TypeDef = { info: TypeDefInfo.Plain, name, type };
  let subType = '';

  const _hasWrapper = (type: string, start: string, end: string): boolean => {
    if (type.substr(0, start.length) !== start) {
      return false;
    }

    assert(type[type.length - 1] === end, `Expected '${start}' closing with '${end}'`);

    subType = type.substr(start.length, type.length - start.length - 1);

    return true;
  };

  if (_hasWrapper(type, '[', ']')) {
    return decodeFixedVec(type, value);
  } else if (_hasWrapper(type, '{', '}')) {
    return decodeStruct(type, value);
  } else if (_hasWrapper(type, '(', ')')) {
    return decodeTuple(subType, value);
  }

  const extracted = simpleExtraction.find(([start, end]): boolean => _hasWrapper(type, start, end));

  if (extracted) {
    value.info = extracted[2];
    value.sub = getTypeDef(subType);
  }

  return value;
}
