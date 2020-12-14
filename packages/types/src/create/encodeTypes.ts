// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from './types';

import { assert, isNumber, isUndefined } from '@polkadot/util';

import { TypeDefInfo } from './types';

const stringIdentity = <T extends { toString: () => string }> (value: T): string => value.toString();

const INFO_WRAP = ['BTreeMap', 'BTreeSet', 'Compact', 'HashMap', 'Option', 'Result', 'Vec'];

export function paramsNotation <T> (outer: string, inner?: T | T[], transform: (_: T) => string = stringIdentity): string {
  return `${outer}${
    inner
      ? `<${(Array.isArray(inner) ? inner : [inner]).map(transform).join(', ')}>`
      : ''
  }`;
}

function encodeWithParams (typeDef: TypeDef, outer: string): string {
  const { info, sub } = typeDef;

  switch (info) {
    case TypeDefInfo.BTreeMap:
    case TypeDefInfo.BTreeSet:
    case TypeDefInfo.Compact:
    case TypeDefInfo.HashMap:
    case TypeDefInfo.Linkage:
    case TypeDefInfo.Option:
    case TypeDefInfo.Result:
    case TypeDefInfo.Vec:
      return paramsNotation(outer, sub, (param) => encodeTypeDef(param));
  }

  throw new Error(`Unable to encode ${JSON.stringify(typeDef)} with params`);
}

function encodeDoNotConstruct ({ displayName }: TypeDef): string {
  return `DoNotConstruct<${displayName || 'Unknown'}>`;
}

function encodeSubTypes (sub: TypeDef[], asEnum?: boolean): string {
  const names = sub.map(({ name }) => name);

  assert(names.every((n) => !!n), `Subtypes does not have consistent names, ${names.join(', ')}`);

  const inner = sub.reduce((result: Record<string, string>, type): Record<string, string> => ({
    ...result,
    [type.name as string]: encodeTypeDef(type)
  }), {});

  return JSON.stringify(
    asEnum
      ? { _enum: inner }
      : inner
  );
}

function encodeEnum (typeDef: TypeDef): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Enum type');

  const sub = typeDef.sub;

  // c-like enums have all Null entries
  // TODO We need to take the disciminant into account and auto-add empty entries
  return sub.every(({ type }) => type === 'Null')
    ? JSON.stringify({ _enum: sub.map(({ name }, index) => `${name || `Empty${index}`}`) })
    : encodeSubTypes(sub, true);
}

function encodeStruct (typeDef: TypeDef): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Struct type');

  return encodeSubTypes(typeDef.sub);
}

function encodeTuple (typeDef: TypeDef): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Tuple type');

  return `(${typeDef.sub.map((type) => encodeTypeDef(type)).join(', ')})`;
}

function encodeUInt ({ length }: TypeDef, type: 'Int' | 'UInt'): string {
  assert(isNumber(length), 'Unable to encode VecFixed type');

  return `${type}<${length}>`;
}

function encodeVecFixed ({ length, sub }: TypeDef): string {
  assert(isNumber(length) && !isUndefined(sub) && !Array.isArray(sub), 'Unable to encode VecFixed type');

  return `[${sub.type};${length}]`;
}

// We setup a record here to ensure we have comprehensive coverage (any item not covered will result
// in a compile-time error with the missing index)
const encoders: Record<TypeDefInfo, (typeDef: TypeDef) => string> = {
  [TypeDefInfo.BTreeMap]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'BTreeMap'),
  [TypeDefInfo.BTreeSet]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'BTreeSet'),
  [TypeDefInfo.Compact]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Compact'),
  [TypeDefInfo.DoNotConstruct]: (typeDef: TypeDef): string => encodeDoNotConstruct(typeDef),
  [TypeDefInfo.Enum]: (typeDef: TypeDef): string => encodeEnum(typeDef),
  [TypeDefInfo.HashMap]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'HashMap'),
  [TypeDefInfo.Int]: (typeDef: TypeDef): string => encodeUInt(typeDef, 'Int'),
  [TypeDefInfo.Linkage]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Linkage'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (typeDef: TypeDef): string => 'Null',
  [TypeDefInfo.Option]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Option'),
  [TypeDefInfo.Plain]: (typeDef: TypeDef): string => typeDef.displayName || typeDef.type,
  [TypeDefInfo.Result]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Result'),
  [TypeDefInfo.Set]: (typeDef: TypeDef): string => typeDef.type,
  [TypeDefInfo.Struct]: (typeDef: TypeDef): string => encodeStruct(typeDef),
  [TypeDefInfo.Tuple]: (typeDef: TypeDef): string => encodeTuple(typeDef),
  [TypeDefInfo.UInt]: (typeDef: TypeDef): string => encodeUInt(typeDef, 'UInt'),
  [TypeDefInfo.Vec]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Vec'),
  [TypeDefInfo.VecFixed]: (typeDef: TypeDef): string => encodeVecFixed(typeDef)
};

function encodeType (typeDef:TypeDef): string {
  const encoder = encoders[typeDef.info];

  assert(encoder, `Cannot encode type: ${JSON.stringify(typeDef)}`);

  return encoder(typeDef);
}

export function encodeTypeDef (typeDef: TypeDef): string {
  assert(!isUndefined(typeDef.info), `Invalid type definition with no instance info, ${JSON.stringify(typeDef)}`);

  // In the case of contracts we do have the unfortunate situation where the displayName would
  // refer to "Option" when it is an option. For these, string it out, only using when actually
  // not a top-level element to be used
  if (typeDef.displayName && !INFO_WRAP.some((i) => typeDef.displayName === i)) {
    return typeDef.displayName;
  }

  return encodeType(typeDef);
}

export function withTypeString (typeDef: Omit<TypeDef, 'type'>): TypeDef {
  return {
    ...typeDef,
    type: encodeType(typeDef as TypeDef)
  };
}
