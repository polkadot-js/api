// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeDef, TypeDefInfo } from './types';

import { assert } from '@polkadot/util';

import sanitize from './sanitize';
import { typeSplit } from './typeSplit';

interface TypeDefOptions {
  name?: string;
  displayName?: string;
}

const MAX_NESTED = 64;

// decode an enum of either of the following forms
//  { _enum: ['A', 'B', 'C'] }
//  { _enum: { A: AccountId, B: Balance, C: u32 } }
function _decodeEnum (value: TypeDef, details: string[] | Record<string, string>, count: number): TypeDef {
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
      getTypeDef(type || 'Null', { name }, count)
    );

  return value;
}

// decode a set of the form
//   { _set: { A: 0b0001, B: 0b0010, C: 0b0100 } }
function _decodeSet (value: TypeDef, details: Record<string, number>): TypeDef {
  value.info = TypeDefInfo.Set;
  value.length = details._bitLength;
  value.sub = Object
    .entries(details)
    .filter(([name]): boolean => !name.startsWith('_'))
    .map(([name, index]): TypeDef => ({
      index,
      info: TypeDefInfo.Plain,
      name,
      type: name
    }));

  return value;
}

// decode a struct, set or enum
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeStruct (value: TypeDef, type: string, _: string, count: number): TypeDef {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const parsed: Record<string, any> = JSON.parse(type);
  const keys = Object.keys(parsed);

  if (keys.length === 1 && keys[0] === '_enum') {
    return _decodeEnum(value, parsed[keys[0]], count);
  } else if (keys.length === 1 && keys[0] === '_set') {
    return _decodeSet(value, parsed[keys[0]]);
  }

  value.alias = parsed._alias
    ? new Map(Object.entries(parsed._alias))
    : undefined;
  value.sub = keys.filter((name) => !['_alias'].includes(name)).map((name): TypeDef =>
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getTypeDef(parsed[name], { name }, count)
  );

  return value;
}

// decode a fixed vector, e.g. [u8;32]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeFixedVec (value: TypeDef, type: string, _: string, count: number): TypeDef {
  const [vecType, strLength, displayName] = type.substr(1, type.length - 2).split(';');
  const length = parseInt(strLength.trim(), 10);

  // as a first round, only u8 via u8aFixed, we can add more support
  assert(length <= 256, `${type}: Only support for [Type; <length>], where length <= 256`);

  value.displayName = displayName;
  value.length = length;
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  value.sub = getTypeDef(vecType, {}, count);

  return value;
}

// decode a tuple
function _decodeTuple (value: TypeDef, _: string, subType: string, count: number): TypeDef {
  value.sub = subType.length === 0
    ? []
    : typeSplit(subType).map((inner): TypeDef =>
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      getTypeDef(inner, {}, count)
    );

  return value;
}

// decode a Int/UInt<bitLength[, name]>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeAnyInt (value: TypeDef, type: string, _: string, clazz: 'Int' | 'UInt'): TypeDef {
  const [strLength, displayName] = type.substr(clazz.length + 1, type.length - clazz.length - 1 - 1).split(',');
  const length = parseInt(strLength.trim(), 10);

  // as a first round, only u8 via u8aFixed, we can add more support
  assert(length <= 8192 && (length % 8) === 0, `${type}: Only support for ${clazz}<bitLength>, where length <= 8192 and a power of 8, found ${length}`);

  value.displayName = displayName;
  value.length = length;

  return value;
}

function _decodeInt (value: TypeDef, type: string, subType: string): TypeDef {
  return _decodeAnyInt(value, type, subType, 'Int');
}

function _decodeUInt (value: TypeDef, type: string, subType: string): TypeDef {
  return _decodeAnyInt(value, type, subType, 'UInt');
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeDoNotConstruct (value: TypeDef, type: string, _: string): TypeDef {
  const NAME_LENGTH = 'DoNotConstruct'.length;

  value.displayName = type.substr(NAME_LENGTH + 1, type.length - NAME_LENGTH - 1 - 1);

  return value;
}

function hasWrapper (type: string, [start, end]: [string, string, TypeDefInfo, any?]): boolean {
  if (type.substr(0, start.length) !== start) {
    return false;
  }

  assert(type.endsWith(end), `Expected '${start}' closing with '${end}' on ${type}`);

  return true;
}

const nestedExtraction: [string, string, TypeDefInfo, (value: TypeDef, type: string, subType: string, count: number) => TypeDef][] = [
  ['[', ']', TypeDefInfo.VecFixed, _decodeFixedVec],
  ['{', '}', TypeDefInfo.Struct, _decodeStruct],
  ['(', ')', TypeDefInfo.Tuple, _decodeTuple],
  // the inner for these are the same as tuple, multiple values
  ['BTreeMap<', '>', TypeDefInfo.BTreeMap, _decodeTuple],
  ['HashMap<', '>', TypeDefInfo.HashMap, _decodeTuple],
  ['Int<', '>', TypeDefInfo.Int, _decodeInt],
  ['Result<', '>', TypeDefInfo.Result, _decodeTuple],
  ['UInt<', '>', TypeDefInfo.UInt, _decodeUInt],
  ['DoNotConstruct<', '>', TypeDefInfo.DoNotConstruct, _decodeDoNotConstruct]
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

export function getTypeDef (_type: string, { displayName, name }: TypeDefOptions = {}, count = 0): TypeDef {
  // create the type via Type, allowing types to be sanitized
  const type = sanitize(_type);
  const value: TypeDef = { displayName, info: TypeDefInfo.Plain, name, type };

  if (++count === MAX_NESTED) {
    console.warn('getTypeDef: Maximum nested limit reached');

    return value;
  }

  const nested = nestedExtraction.find((nested): boolean =>
    hasWrapper(type, nested)
  );

  if (nested) {
    value.info = nested[2];

    return nested[3](value, type, extractSubType(type, nested), count);
  }

  const wrapped = wrappedExtraction.find((wrapped): boolean =>
    hasWrapper(type, wrapped)
  );

  if (wrapped) {
    value.info = wrapped[2];
    value.sub = getTypeDef(extractSubType(type, wrapped), {}, count);
  }

  return value;
}
