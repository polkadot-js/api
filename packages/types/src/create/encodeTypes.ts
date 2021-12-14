// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { TypeDef } from './types';

import { assert, isNumber, isUndefined, objectSpread, stringify } from '@polkadot/util';

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

function encodeWithParams (CodecRegistry: CodecRegistry, typeDef: TypeDef, outer: string): string {
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
    case TypeDefInfo.WrapperOpaque:
      return paramsNotation(outer, sub, (p) => encodeTypeDef(CodecRegistry, p));
  }

  throw new Error(`Unable to encode ${stringify(typeDef)} with params`);
}

function encodeSubTypes (CodecRegistry: CodecRegistry, sub: TypeDef[], asEnum?: boolean, extra?: Record<string, unknown>): string {
  const names = sub.map(({ name }) => name);

  assert(names.every((n) => !!n), () => `Subtypes does not have consistent names, ${names.join(', ')}`);

  const inner: Record<string, string> = objectSpread({}, extra);

  for (let i = 0; i < sub.length; i++) {
    const def = sub[i];

    inner[def.name as string] = encodeTypeDef(CodecRegistry, def);
  }

  return stringify(
    asEnum
      ? { _enum: inner }
      : inner
  );
}

// We setup a record here to ensure we have comprehensive coverage (any item not covered will result
// in a compile-time error with the missing index)
const encoders: Record<TypeDefInfo, (CodecRegistry: CodecRegistry, typeDef: TypeDef) => string> = {
  [TypeDefInfo.BTreeMap]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'BTreeMap'),
  [TypeDefInfo.BTreeSet]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'BTreeSet'),
  [TypeDefInfo.Compact]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'Compact'),
  [TypeDefInfo.DoNotConstruct]: (CodecRegistry: CodecRegistry, { displayName, lookupIndex, lookupName }: TypeDef) =>
    `DoNotConstruct<${lookupName || displayName || (isUndefined(lookupIndex) ? 'Unknown' : CodecRegistry.createLookupType(lookupIndex))}>`,
  [TypeDefInfo.Enum]: (CodecRegistry: CodecRegistry, { sub }: TypeDef): string => {
    assert(sub && Array.isArray(sub), 'Unable to encode Enum type');

    // c-like enums have all Null entries
    // TODO We need to take the disciminant into account and auto-add empty entries
    return sub.every(({ type }) => type === 'Null')
      ? stringify({ _enum: sub.map(({ name }, index) => `${name || `Empty${index}`}`) })
      : encodeSubTypes(CodecRegistry, sub, true);
  },
  [TypeDefInfo.HashMap]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'HashMap'),
  [TypeDefInfo.Int]: (CodecRegistry: CodecRegistry, { length = 32 }: TypeDef) =>
    `Int<${length}>`,
  [TypeDefInfo.Linkage]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'Linkage'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    'Null',
  [TypeDefInfo.Option]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'Option'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Plain]: (CodecRegistry: CodecRegistry, { displayName, type }: TypeDef) =>
    displayName || type,
  [TypeDefInfo.Range]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, typeDef.type.includes('RangeInclusive') ? 'RangeInclusive' : 'Range'),
  [TypeDefInfo.Result]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'Result'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Set]: (CodecRegistry: CodecRegistry, { length = 8, sub }: TypeDef): string => {
    assert(sub && Array.isArray(sub), 'Unable to encode Set type');

    return stringify({
      _set: sub.reduce((all, { index, name }, count) =>
        objectSpread(all, { [`${name || `Unknown${index || count}`}`]: index || count }),
      { _bitLength: length || 8 })
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Si]: (CodecRegistry: CodecRegistry, { lookupName, type }: TypeDef) =>
    lookupName || type,
  [TypeDefInfo.Struct]: (CodecRegistry: CodecRegistry, { alias, sub }: TypeDef): string => {
    assert(sub && Array.isArray(sub), 'Unable to encode Struct type');

    return encodeSubTypes(CodecRegistry, sub, false,
      alias
        ? {
          _alias: [...alias.entries()].reduce<Record<string, string>>((all, [k, v]) =>
            objectSpread(all, { [k]: v }), {}
          )
        }
        : {}
    );
  },
  [TypeDefInfo.Tuple]: (CodecRegistry: CodecRegistry, { sub }: TypeDef): string => {
    assert(sub && Array.isArray(sub), 'Unable to encode Tuple type');

    return `(${sub.map((type) => encodeTypeDef(CodecRegistry, type)).join(',')})`;
  },
  [TypeDefInfo.UInt]: (CodecRegistry: CodecRegistry, { length = 32 }: TypeDef) =>
    `UInt<${length}>`,
  [TypeDefInfo.Vec]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'Vec'),
  [TypeDefInfo.VecFixed]: (CodecRegistry: CodecRegistry, { length, sub }: TypeDef): string => {
    assert(isNumber(length) && !isUndefined(sub) && !Array.isArray(sub), 'Unable to encode VecFixed type');

    return `[${sub.type};${length}]`;
  },
  [TypeDefInfo.WrapperOpaque]: (CodecRegistry: CodecRegistry, typeDef: TypeDef) =>
    encodeWithParams(CodecRegistry, typeDef, 'WrapperOpaque')
};

function encodeType (CodecRegistry: CodecRegistry, typeDef: TypeDef, withLookup = true): string {
  return withLookup && typeDef.lookupName
    ? typeDef.lookupName
    : encoders[typeDef.info](CodecRegistry, typeDef);
}

export function encodeTypeDef (CodecRegistry: CodecRegistry, typeDef: TypeDef): string {
  // In the case of contracts we do have the unfortunate situation where the displayName would
  // refer to "Option" when it is an option. For these, string it out, only using when actually
  // not a top-level element to be used
  return (typeDef.displayName && !INFO_WRAP.some((i) => typeDef.displayName === i))
    ? typeDef.displayName
    : encodeType(CodecRegistry, typeDef);
}

export function withTypeString (CodecRegistry: CodecRegistry, typeDef: Omit<TypeDef, 'type'>): TypeDef {
  return objectSpread({}, typeDef, { type: encodeType(CodecRegistry, typeDef as TypeDef, false) });
}
