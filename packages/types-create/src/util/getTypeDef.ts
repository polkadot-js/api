// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyString } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';

import { sanitize } from '@polkadot/types-codec';
import { isNumber, isString, objectSpread } from '@polkadot/util';

import { TypeDefInfo } from '../types';
import { typeSplit } from './typeSplit';

interface TypeDefOptions {
  name?: string;
  displayName?: string;
}

const KNOWN_INTERNALS = ['_alias', '_fallback'];

function getTypeString (typeOrObj: any): string {
  return isString(typeOrObj)
    ? typeOrObj.toString()
    : JSON.stringify(typeOrObj);
}

function isRustEnum (details: Record<string, string> | Record<string, number>): details is Record<string, string> {
  const values = Object.values(details);

  if (values.some((v) => isNumber(v))) {
    if (!values.every((v) => isNumber(v) && v >= 0 && v <= 255)) {
      throw new Error('Invalid number-indexed enum definition');
    }

    return false;
  }

  return true;
}

// decode an enum of either of the following forms
//  { _enum: ['A', 'B', 'C'] }
//  { _enum: { A: AccountId, B: Balance, C: u32 } }
//  { _enum: { A: 1, B: 2 } }
function _decodeEnum (value: TypeDef, details: string[] | Record<string, string> | Record<string, number>, count: number, fallbackType?: string): TypeDef {
  value.info = TypeDefInfo.Enum;
  value.fallbackType = fallbackType;

  // not as pretty, but remain compatible with oo7 for both struct and Array types
  if (Array.isArray(details)) {
    value.sub = details.map((name, index): TypeDef => ({
      index,
      info: TypeDefInfo.Plain,
      name,
      type: 'Null'
    }));
  } else if (isRustEnum(details)) {
    value.sub = Object.entries(details).map(([name, typeOrObj], index): TypeDef =>
      objectSpread({}, getTypeDef(getTypeString(typeOrObj || 'Null'), { name }, count), { index })
    );
  } else {
    value.sub = Object.entries(details).map(([name, index]): TypeDef => ({
      index,
      info: TypeDefInfo.Plain,
      name,
      type: 'Null'
    }));
  }

  return value;
}

// decode a set of the form
//   { _set: { A: 0b0001, B: 0b0010, C: 0b0100 } }
function _decodeSet (value: TypeDef, details: Record<string, number>, fallbackType: string | undefined): TypeDef {
  value.info = TypeDefInfo.Set;
  value.fallbackType = fallbackType;
  value.length = details._bitLength;
  value.sub = Object
    .entries(details)
    .filter(([name]): boolean => !name.startsWith('_'))
    .map(([name, index]): TypeDef => ({
      index,
      info: TypeDefInfo.Plain,
      name,
      type: 'Null'
    }));

  return value;
}

// decode a struct, set or enum
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeStruct (value: TypeDef, type: string, _: string, count: number): TypeDef {
  const parsed = JSON.parse(type) as Record<string, unknown> & { _alias: string, _fallback?: string };
  const keys = Object.keys(parsed);

  if (keys.includes('_enum')) {
    return _decodeEnum(value, parsed._enum as string[], count, parsed._fallback);
  } else if (keys.includes('_set')) {
    return _decodeSet(value, parsed._set as Record<string, number>, parsed._fallback);
  }

  value.alias = parsed._alias
    ? new Map(Object.entries(parsed._alias))
    : undefined;
  value.fallbackType = parsed._fallback;
  value.sub = keys
    .filter((name) => !KNOWN_INTERNALS.includes(name))
    .map((name) =>
      getTypeDef(getTypeString(parsed[name]), { name }, count)
    );

  return value;
}

// decode a fixed vector, e.g. [u8;32]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeFixedVec (value: TypeDef, type: string, _: string, count: number): TypeDef {
  const max = type.length - 1;
  let index = -1;
  let inner = 0;

  for (let i = 1; (i < max) && (index === -1); i++) {
    switch (type[i]) {
      case ';': {
        if (inner === 0) {
          index = i;
        }

        break;
      }

      case '[':
      case '(':
      case '<':
        inner++;
        break;

      case ']':
      case ')':
      case '>':
        inner--;
        break;
    }
  }

  if (index === -1) {
    throw new Error(`${type}: Unable to extract location of ';'`);
  }

  const vecType = type.substring(1, index);
  const [strLength, displayName] = type.substring(index + 1, max).split(';');
  const length = parseInt(strLength.trim(), 10);

  if (length > 2048) {
    throw new Error(`${type}: Only support for [Type; <length>], where length <= 2048`);
  }

  value.displayName = displayName;
  value.length = length;
  value.sub = getTypeDef(vecType, {}, count);

  return value;
}

// decode a tuple
function _decodeTuple (value: TypeDef, _: string, subType: string, count: number): TypeDef {
  value.sub = subType.length === 0
    ? []
    : typeSplit(subType).map((inner) => getTypeDef(inner, {}, count));

  return value;
}

// decode a Int/UInt<bitLength[, name]>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _decodeAnyInt (value: TypeDef, type: string, _: string, clazz: 'Int' | 'UInt'): TypeDef {
  const [strLength, displayName] = type.substring(clazz.length + 1, type.length - 1).split(',');
  const length = parseInt(strLength.trim(), 10);

  if ((length > 8192) || (length % 8)) {
    throw new Error(`${type}: Only support for ${clazz}<bitLength>, where length <= 8192 and a power of 8, found ${length}`);
  }

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

  value.displayName = type.substring(NAME_LENGTH + 1, type.length - 1);

  return value;
}

function hasWrapper (type: string, [start, end]: [string, string, TypeDefInfo, any?]): boolean {
  return (type.substring(0, start.length) === start) && (type.slice(-1 * end.length) === end);
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
  ['Opaque<', '>', TypeDefInfo.WrapperOpaque],
  ['Option<', '>', TypeDefInfo.Option],
  ['Range<', '>', TypeDefInfo.Range],
  ['RangeInclusive<', '>', TypeDefInfo.RangeInclusive],
  ['Vec<', '>', TypeDefInfo.Vec],
  ['WrapperKeepOpaque<', '>', TypeDefInfo.WrapperKeepOpaque],
  ['WrapperOpaque<', '>', TypeDefInfo.WrapperOpaque]
];

function extractSubType (type: string, [start, end]: [string, string, TypeDefInfo, any?]): string {
  return type.substring(start.length, type.length - end.length);
}

export function getTypeDef (_type: AnyString, { displayName, name }: TypeDefOptions = {}, count = 0): TypeDef {
  // create the type via Type, allowing types to be sanitized
  const type = sanitize(_type);
  const value: TypeDef = { displayName, info: TypeDefInfo.Plain, name, type };

  if (++count > 64) {
    throw new Error('getTypeDef: Maximum nested limit reached');
  }

  const nested = nestedExtraction.find((nested) => hasWrapper(type, nested));

  if (nested) {
    value.info = nested[2];

    return nested[3](value, type, extractSubType(type, nested), count);
  }

  const wrapped = wrappedExtraction.find((wrapped) => hasWrapper(type, wrapped));

  if (wrapped) {
    value.info = wrapped[2];
    value.sub = getTypeDef(extractSubType(type, wrapped), {}, count);
  }

  return value;
}
