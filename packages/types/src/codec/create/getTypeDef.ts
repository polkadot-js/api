// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefExtVecFixed, TypeDefInfo } from './types';

import { assert } from '@polkadot/util';

import sanitize from './sanitize';
import { typeSplit } from './typeSplit';

// decode an enum of either of the following forms
//  { _enum: ['A', 'B', 'C'] }
//  { _enum: { A: AccountId, B: Balance, C: u32 } }
function _decodeEnum (value: TypeDef, details: string[] | Record<string, string>): TypeDef {
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
      getTypeDef(type || 'Null', { name })
    );

  return value;
}

// decode a set of the form
//   { _set: { A: 0b0001, B: 0b0010, C: 0b0100 } }
function _decodeSet (value: TypeDef, details: Record<string, number>): TypeDef {
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeStruct (value: TypeDef, type: string, _: string): TypeDef {
  const parsed = JSON.parse(type);
  const keys = Object.keys(parsed);

  if (keys.length === 1 && keys[0] === '_enum') {
    return _decodeEnum(value, parsed[keys[0]]);
  } else if (keys.length === 1 && keys[0] === '_set') {
    return _decodeSet(value, parsed[keys[0]]);
  }

  value.sub = keys.map((name): TypeDef =>
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getTypeDef(parsed[name], { name })
  );

  return value;
}

// decode a fixed vector, e.g. [u8;32]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeFixedVec (value: TypeDef, type: string, _: string): TypeDef {
  const [vecType, _vecLen] = type.substr(1, type.length - 2).split(';');
  const vecLen = parseInt(_vecLen.trim(), 10);

  // as a first round, only u8 via u8aFixed, we can add more support
  assert(vecLen <= 256, `${type}: Only support for [Type; <length>], where length <= 256`);

  value.ext = { length: vecLen, type: vecType } as TypeDefExtVecFixed;

  return value;
}

// decode a tuple
function _decodeTuple (value: TypeDef, _: string, subType: string): TypeDef {
  value.sub = subType.length === 0
    ? []
    : typeSplit(subType).map((inner): TypeDef =>
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      getTypeDef(inner)
    );

  return value;
}

function hasWrapper (type: string, [start, end]: [string, string, TypeDefInfo, any?]): boolean {
  if (type.substr(0, start.length) !== start) {
    return false;
  }

  assert(type.endsWith(end), `Expected '${start}' closing with '${end}' on ${type}`);

  return true;
}

const nestedExtraction: [string, string, TypeDefInfo, (value: TypeDef, type: string, subType: string) => TypeDef][] = [
  ['[', ']', TypeDefInfo.VecFixed, _decodeFixedVec],
  ['{', '}', TypeDefInfo.Struct, _decodeStruct],
  ['(', ')', TypeDefInfo.Tuple, _decodeTuple],
  // the inner for these are the same as tuple, multiple values
  ['BTreeMap<', '>', TypeDefInfo.BTreeMap, _decodeTuple],
  ['Result<', '>', TypeDefInfo.Result, _decodeTuple]
];

const wrappedExtraction: [string, string, TypeDefInfo][] = [
  ['BTreeSet<', '>', TypeDefInfo.BTreeSet],
  ['Compact<', '>', TypeDefInfo.Compact],
  ['Linkage<', '>', TypeDefInfo.Linkage],
  ['Option<', '>', TypeDefInfo.Option],
  ['Vec<', '>', TypeDefInfo.Vec]
];

function extractSubType (type: string, [start, end]: [string, string, TypeDefInfo, any?]): string {
  return type.substr(start.length, type.length - start.length - end.length);
}

interface TypeDefOptions {
  name?: string;
  displayName?: string;
}

export function getTypeDef (_type: string, { name, displayName }: TypeDefOptions = {}): TypeDef {
  // create the type via Type, allowing types to be sanitized
  const type = sanitize(_type);
  const value: TypeDef = { info: TypeDefInfo.Plain, displayName, name, type };
  const nested = nestedExtraction.find((nested): boolean =>
    hasWrapper(type, nested)
  );

  if (nested) {
    value.info = nested[2];

    return nested[3](value, type, extractSubType(type, nested));
  }

  const wrapped = wrappedExtraction.find((wrapped): boolean =>
    hasWrapper(type, wrapped)
  );

  if (wrapped) {
    value.info = wrapped[2];
    value.sub = getTypeDef(extractSubType(type, wrapped));
  }

  return value;
}
