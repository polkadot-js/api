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

function encodeWithParams (registry: Registry, typeDef: TypeDef, outer: string): string {
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
      return paramsNotation(outer, sub, (p) => encodeTypeDef(registry, p));
  }

  throw new Error(`Unable to encode ${stringify(typeDef)} with params`);
}

function encodeSubTypes (registry: Registry, sub: TypeDef[], asEnum?: boolean, extra?: Record<string, unknown>): string {
  const names = sub.map(({ name }) => name);

  assert(names.every((n) => !!n), () => `Subtypes does not have consistent names, ${names.join(', ')}`);

  const inner = sub.reduce< Record<string, string>>((result, type) => ({
    ...result,
    [type.name as string]: encodeTypeDef(registry, type)
  }), { ...(extra as Record<string, string>) });

  return stringify(
    asEnum
      ? { _enum: inner }
      : inner
  );
}

// We setup a record here to ensure we have comprehensive coverage (any item not covered will result
// in a compile-time error with the missing index)
const encoders: Record<TypeDefInfo, (registry: Registry, typeDef: TypeDef) => string> = {
  [TypeDefInfo.BTreeMap]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'BTreeMap'),
  [TypeDefInfo.BTreeSet]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'BTreeSet'),
  [TypeDefInfo.Compact]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Compact'),
  [TypeDefInfo.DoNotConstruct]: (registry: Registry, { displayName, lookupIndex, lookupName }: TypeDef): string => {
    return `DoNotConstruct<${lookupName || displayName || (isUndefined(lookupIndex) ? 'Unknown' : registry.createLookupType(lookupIndex))}>`;
  },
  [TypeDefInfo.Enum]: (registry: Registry, typeDef: TypeDef): string => {
    assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Enum type');

    const sub = typeDef.sub;

    // c-like enums have all Null entries
    // TODO We need to take the disciminant into account and auto-add empty entries
    return sub.every(({ type }) => type === 'Null')
      ? stringify({ _enum: sub.map(({ name }, index) => `${name || `Empty${index}`}`) })
      : encodeSubTypes(registry, sub, true);
  },
  [TypeDefInfo.HashMap]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'HashMap'),
  [TypeDefInfo.Int]: (registry: Registry, { length }: TypeDef): string => {
    assert(isNumber(length), 'Unable to encode Int type');

    return `Int<${length}>`;
  },
  [TypeDefInfo.Linkage]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Linkage'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (registry: Registry, typeDef: TypeDef) =>
    'Null',
  [TypeDefInfo.Option]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Option'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Plain]: (registry: Registry, typeDef: TypeDef) =>
    typeDef.displayName || typeDef.type,
  [TypeDefInfo.Result]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Result'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Set]: (registry: Registry, typeDef: TypeDef): string => {
    assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Set type');

    return stringify({
      _set: typeDef.sub.reduce((all, { index, name }, count): Record<string, number> => ({
        ...all,
        [`${name || `Unknown${index || count}`}`]: index || count
      }), { _bitLength: typeDef.length || 8 } as Record<string, number>)
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Si]: (registry: Registry, typeDef: TypeDef) =>
    typeDef.lookupName || typeDef.type,
  [TypeDefInfo.Struct]: (registry: Registry, typeDef: TypeDef): string => {
    assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Struct type');

    return encodeSubTypes(registry, typeDef.sub, false, {
      ...(
        typeDef.alias
          ? { _alias: [...typeDef.alias.entries()].reduce<Record<string, string>>((all, [k, v]) => ({
            ...all,
            [k]: v
          }), {}) }
          : {}
      )
    });
  },
  [TypeDefInfo.Tuple]: (registry: Registry, typeDef: TypeDef): string => {
    assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Tuple type');

    return `(${typeDef.sub.map((type) => encodeTypeDef(registry, type)).join(',')})`;
  },
  [TypeDefInfo.UInt]: (registry: Registry, { length }: TypeDef): string => {
    assert(isNumber(length), 'Unable to encode Int type');

    return `UInt<${length}>`;
  },
  [TypeDefInfo.Vec]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Vec'),
  [TypeDefInfo.VecFixed]: (registry: Registry, { length, sub }: TypeDef): string => {
    assert(isNumber(length) && !isUndefined(sub) && !Array.isArray(sub), 'Unable to encode VecFixed type');

    return `[${sub.type};${length}]`;
  }
};

function encodeType (registry: Registry, typeDef: TypeDef, withLookup = true): string {
  typeDef.type = withLookup && typeDef.lookupName
    ? typeDef.lookupName
    : encoders[typeDef.info](registry, typeDef);

  return typeDef.type;
}

export function encodeTypeDef (registry: Registry, typeDef: TypeDef): string {
  // In the case of contracts we do have the unfortunate situation where the displayName would
  // refer to "Option" when it is an option. For these, string it out, only using when actually
  // not a top-level element to be used
  if (typeDef.displayName && !INFO_WRAP.some((i) => typeDef.displayName === i)) {
    return typeDef.displayName;
  }

  return encodeType(registry, typeDef);
}

export function withTypeString (registry: Registry, typeDef: Omit<TypeDef, 'type'>): TypeDef {
  const typeDefOut = typeDef as TypeDef;

  encodeType(registry, typeDefOut, false);

  return typeDefOut;
}
