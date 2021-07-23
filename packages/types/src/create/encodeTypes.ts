// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../types/registry';
import type { TypeDef } from './types';

import { assert, isNumber, isUndefined, stringify } from '@polkadot/util';

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

function encodeWithParams (registry: Registry, typeDef: TypeDef, lookupCounter: number, outer: string): string {
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
      return paramsNotation(outer, sub, (param) => encodeTypeDef(registry, param, lookupCounter));
  }

  throw new Error(`Unable to encode ${stringify(typeDef)} with params`);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function encodeDoNotConstruct (registry: Registry, { displayName }: TypeDef, lookupCounter: number): string {
  return `DoNotConstruct<${displayName || 'Unknown'}>`;
}

function encodeSubTypes (registry: Registry, sub: TypeDef[], lookupCounter: number, asEnum?: boolean): string {
  const names = sub.map(({ name }) => name);

  assert(names.every((n) => !!n), () => `Subtypes does not have consistent names, ${names.join(', ')}`);

  const inner = sub.reduce< Record<string, string>>((result, type) => ({
    ...result,
    [type.name as string]: encodeTypeDef(registry, type, lookupCounter)
  }), {});

  return stringify(
    asEnum
      ? { _enum: inner }
      : inner
  );
}

function encodeEnum (registry: Registry, typeDef: TypeDef, lookupCounter: number): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Enum type');

  const sub = typeDef.sub;

  // c-like enums have all Null entries
  // TODO We need to take the disciminant into account and auto-add empty entries
  return sub.every(({ type }) => type === 'Null')
    ? stringify({ _enum: sub.map(({ name }, index) => `${name || `Empty${index}`}`) })
    : encodeSubTypes(registry, sub, lookupCounter, true);
}

function encodeStruct (registry: Registry, typeDef: TypeDef, lookupCounter: number): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Struct type');

  return encodeSubTypes(registry, typeDef.sub, lookupCounter);
}

function encodeTuple (registry: Registry, typeDef: TypeDef, lookupCounter: number): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Tuple type');

  return `(${typeDef.sub.map((type) => encodeTypeDef(registry, type, lookupCounter)).join(',')})`;
}

function encodeUInt (registry: Registry, { length }: TypeDef, lookupCounter: number, type: 'Int' | 'UInt'): string {
  assert(isNumber(length), 'Unable to encode VecFixed type');

  return `${type}<${length}>`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function encodeVecFixed (registry: Registry, { length, sub }: TypeDef, lookupCounter: number): string {
  assert(isNumber(length) && !isUndefined(sub) && !Array.isArray(sub), 'Unable to encode VecFixed type');

  return `[${sub.type};${length}]`;
}

// We setup a record here to ensure we have comprehensive coverage (any item not covered will result
// in a compile-time error with the missing index)
const encoders: Record<TypeDefInfo, (registry: Registry, typeDef: TypeDef, lookupCounter: number) => string> = {
  [TypeDefInfo.BTreeMap]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'BTreeMap'),
  [TypeDefInfo.BTreeSet]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'BTreeSet'),
  [TypeDefInfo.Compact]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'Compact'),
  [TypeDefInfo.DoNotConstruct]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeDoNotConstruct(registry, typeDef, lookupCounter),
  [TypeDefInfo.Enum]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeEnum(registry, typeDef, lookupCounter),
  [TypeDefInfo.HashMap]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'HashMap'),
  [TypeDefInfo.Int]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeUInt(registry, typeDef, lookupCounter, 'Int'),
  [TypeDefInfo.Linkage]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'Linkage'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    'Null',
  [TypeDefInfo.Option]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'Option'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Plain]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    typeDef.displayName || typeDef.type,
  [TypeDefInfo.Result]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'Result'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Set]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    typeDef.type,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Si]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    typeDef.type,
  [TypeDefInfo.Struct]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeStruct(registry, typeDef, lookupCounter),
  [TypeDefInfo.Tuple]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeTuple(registry, typeDef, lookupCounter),
  [TypeDefInfo.UInt]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeUInt(registry, typeDef, lookupCounter, 'UInt'),
  [TypeDefInfo.Vec]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeWithParams(registry, typeDef, lookupCounter, 'Vec'),
  [TypeDefInfo.VecFixed]: (registry: Registry, typeDef: TypeDef, lookupCounter: number) =>
    encodeVecFixed(registry, typeDef, lookupCounter)
};

function encodeType (registry: Registry, typeDef: TypeDef, lookupCounter: number): string {
  const encoder = encoders[typeDef.info];

  assert(encoder, () => `Cannot encode type ${stringify(typeDef)}`);

  return lookupCounter < 0 && isNumber(typeDef.lookupIndex)
    ? typeDef.lookupName || registry.createLookupType(typeDef.lookupIndex)
    : encoder(registry, typeDef, lookupCounter--);
}

export function encodeTypeDef (registry: Registry, typeDef: TypeDef, lookupCounter = 0): string {
  assert(!isUndefined(typeDef.info), () => `Invalid type definition with no instance info, typeDef=${stringify(typeDef)}`);

  // In the case of contracts we do have the unfortunate situation where the displayName would
  // refer to "Option" when it is an option. For these, string it out, only using when actually
  // not a top-level element to be used
  if (typeDef.displayName && !INFO_WRAP.some((i) => typeDef.displayName === i)) {
    return typeDef.displayName;
  }

  return encodeType(registry, typeDef, lookupCounter);
}

export function withTypeString (registry: Registry, typeDef: Omit<TypeDef, 'type'>, lookupCounter = 0): TypeDef {
  return {
    ...typeDef,
    type: encodeType(registry, typeDef as TypeDef, lookupCounter)
  };
}
