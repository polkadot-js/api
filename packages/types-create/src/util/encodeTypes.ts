// Copyright 2017-2023 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';

import { isNumber, isUndefined, objectSpread, stringify } from '@polkadot/util';

import { TypeDefInfo } from '../types/index.js';

type ToString = { toString: () => string };

const stringIdentity = <T extends ToString> (value: T): string => value.toString();

const INFO_WRAP = ['BTreeMap', 'BTreeSet', 'Compact', 'HashMap', 'Option', 'Result', 'Vec'];

export function paramsNotation <T extends ToString> (outer: string, inner?: T | T[], transform: (_: T) => string = stringIdentity): string {
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
    case TypeDefInfo.Range:
    case TypeDefInfo.RangeInclusive:
    case TypeDefInfo.Result:
    case TypeDefInfo.Vec:
    case TypeDefInfo.WrapperKeepOpaque:
    case TypeDefInfo.WrapperOpaque:
      return paramsNotation(outer, sub, (p) => encodeTypeDef(registry, p));
  }

  throw new Error(`Unable to encode ${stringify(typeDef)} with params`);
}

function encodeSubTypes (registry: Registry, sub: TypeDef[], asEnum?: boolean, extra?: Record<string, unknown>): string {
  const names = sub.map(({ name }) => name);

  if (!names.every((n) => !!n)) {
    throw new Error(`Subtypes does not have consistent names, ${names.join(', ')}`);
  }

  const inner: Record<string, string> = objectSpread({}, extra);

  for (let i = 0; i < sub.length; i++) {
    const def = sub[i];

    inner[def.name as string] = encodeTypeDef(registry, def);
  }

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

  [TypeDefInfo.DoNotConstruct]: (registry: Registry, { displayName, lookupIndex, lookupName }: TypeDef) =>
    `DoNotConstruct<${lookupName || displayName || (isUndefined(lookupIndex) ? 'Unknown' : registry.createLookupType(lookupIndex))}>`,

  [TypeDefInfo.Enum]: (registry: Registry, { sub }: TypeDef): string => {
    if (!Array.isArray(sub)) {
      throw new Error('Unable to encode Enum type');
    }

    // c-like enums have all Null entries
    // TODO We need to take the disciminant into account and auto-add empty entries
    return sub.every(({ type }) => type === 'Null')
      ? stringify({ _enum: sub.map(({ name }, index) => `${name || `Empty${index}`}`) })
      : encodeSubTypes(registry, sub, true);
  },

  [TypeDefInfo.HashMap]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'HashMap'),

  [TypeDefInfo.Int]: (_registry: Registry, { length = 32 }: TypeDef) =>
    `Int<${length}>`,

  [TypeDefInfo.Linkage]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Linkage'),

  [TypeDefInfo.Null]: (_registry: Registry, _typeDef: TypeDef) =>
    'Null',

  [TypeDefInfo.Option]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Option'),

  [TypeDefInfo.Plain]: (_registry: Registry, { displayName, type }: TypeDef) =>
    displayName || type,

  [TypeDefInfo.Range]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Range'),

  [TypeDefInfo.RangeInclusive]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'RangeInclusive'),

  [TypeDefInfo.Result]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Result'),

  [TypeDefInfo.Set]: (_registry: Registry, { length = 8, sub }: TypeDef): string => {
    if (!Array.isArray(sub)) {
      throw new Error('Unable to encode Set type');
    }

    return stringify({
      _set: sub.reduce((all, { index, name }, count) =>
        objectSpread(all, { [`${name || `Unknown${index || count}`}`]: index || count }),
      { _bitLength: length || 8 })
    });
  },

  [TypeDefInfo.Si]: (_registry: Registry, { lookupName, type }: TypeDef) =>
    lookupName || type,

  [TypeDefInfo.Struct]: (registry: Registry, { alias, sub }: TypeDef): string => {
    if (!Array.isArray(sub)) {
      throw new Error('Unable to encode Struct type');
    }

    return encodeSubTypes(registry, sub, false,
      alias
        ? {
          _alias: [...alias.entries()].reduce<Record<string, string>>((all, [k, v]) =>
            objectSpread(all, { [k]: v }), {}
          )
        }
        : {}
    );
  },

  [TypeDefInfo.Tuple]: (registry: Registry, { sub }: TypeDef): string => {
    if (!Array.isArray(sub)) {
      throw new Error('Unable to encode Tuple type');
    }

    return `(${sub.map((type) => encodeTypeDef(registry, type)).join(',')})`;
  },

  [TypeDefInfo.UInt]: (_registry: Registry, { length = 32 }: TypeDef) =>
    `UInt<${length}>`,

  [TypeDefInfo.Vec]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'Vec'),

  [TypeDefInfo.VecFixed]: (_registry: Registry, { length, sub }: TypeDef): string => {
    if (!isNumber(length) || !sub || Array.isArray(sub)) {
      throw new Error('Unable to encode VecFixed type');
    }

    return `[${sub.type};${length}]`;
  },

  [TypeDefInfo.WrapperKeepOpaque]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'WrapperKeepOpaque'),

  [TypeDefInfo.WrapperOpaque]: (registry: Registry, typeDef: TypeDef) =>
    encodeWithParams(registry, typeDef, 'WrapperOpaque')
};

function encodeType (registry: Registry, typeDef: TypeDef, withLookup = true): string {
  return withLookup && typeDef.lookupName
    ? typeDef.lookupName
    : encoders[typeDef.info](registry, typeDef);
}

export function encodeTypeDef (registry: Registry, typeDef: TypeDef): string {
  // In the case of contracts we do have the unfortunate situation where the displayName would
  // refer to "Option" when it is an option. For these, string it out, only using when actually
  // not a top-level element to be used
  return (typeDef.displayName && !INFO_WRAP.some((i) => typeDef.displayName === i))
    ? typeDef.displayName
    : encodeType(registry, typeDef);
}

export function withTypeString (registry: Registry, typeDef: Omit<TypeDef, 'type'> & { type?: string }): TypeDef {
  return objectSpread({}, typeDef, {
    type: encodeType(registry, typeDef as TypeDef, false)
  });
}
