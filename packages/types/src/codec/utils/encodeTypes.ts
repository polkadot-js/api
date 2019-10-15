// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../types';

import { assert } from '@polkadot/util';

import { getTypeDef } from '../create';

const SPECIAL_TYPES = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

const identity = (value: string): string => value;

export function paramsNotation (outer: string, inner?: string | any[], transform: (_: any) => string = identity): string {
  let arrayStr = '';

  if (inner) {
    arrayStr = '<' + (Array.isArray(inner) ? inner : [inner]).map(transform).join(', ') + '>';
  }

  return `${outer}${arrayStr}`;
}

function encodeWithParams (typeDef: Pick<TypeDef, any>, outer = typeDef.displayName || typeDef.type): string {
  const { params } = typeDef;

  return paramsNotation(
    outer,
    params,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    (param: TypeDef) => displayType(param)
  );
}

function encodeSubTypes (sub: TypeDef[], asEnum?: boolean): string {
  return `{ ${asEnum ? '"_enum": { ' : ''}${
    sub
      .map((type: TypeDef): string => `"${type.name}": "${encodeWithParams(type)}"`)
      .join(', ')
  }} }`;
}

function encodeEnum (typeDef: Pick<TypeDef, any>): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Enum type');

  const sub = typeDef.sub as TypeDef[];

  const isClikeEnum = sub.reduce(
    (bool: boolean, { type }: TypeDef): boolean => bool && type === 'Null',
    true
  );

  if (isClikeEnum) {
    return `[${
      sub
        .map(({ name }: TypeDef): string => `"${name}"`)
        .join(', ')
    }]`;
  }

  return encodeSubTypes(sub, true);
}

function encodeStruct (typeDef: Pick<TypeDef, any>): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Struct type');

  const sub = typeDef.sub as TypeDef[];

  return encodeSubTypes(sub);
}

function encodeTuple (typeDef: Pick<TypeDef, any>): string {
  assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Tuple type');

  const sub = typeDef.sub as TypeDef[];

  return `(${
    sub
      .map((type: TypeDef): string => encodeWithParams(type))
      .join(', ')
  })`;
}

function encodeVecFixed (typeDef: Pick<TypeDef, any>): string {
  assert(typeDef.ext, 'Unable to encode VecFixed type');

  const { type, length } = typeDef.ext as TypeDefExtVecFixed;

  return `[${
    encodeWithParams(getTypeDef(type))
  };${
    length
  }]`;
}

// We setup a record here to ensure we have comprehensive coverage (any item not covered will result
// in a compile-time error with the missing index)
const encoders: Record<TypeDefInfo, (typeDef: TypeDef) => string> = {
  [TypeDefInfo.BTreeMap]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'BTreeMap'),
  [TypeDefInfo.Compact]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Compact'),
  [TypeDefInfo.DoubleMap]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'DoubleMap'),
  [TypeDefInfo.Enum]: (typeDef: TypeDef): string => encodeEnum(typeDef),
  [TypeDefInfo.Linkage]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Linkage'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [TypeDefInfo.Null]: (typeDef: TypeDef): string => 'Null',
  [TypeDefInfo.Option]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Option'),
  [TypeDefInfo.Plain]: (typeDef: TypeDef): string => typeDef.displayName || typeDef.type,
  [TypeDefInfo.Result]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Result'),
  [TypeDefInfo.Set]: (typeDef: TypeDef): string => typeDef.type,
  [TypeDefInfo.Struct]: (typeDef: TypeDef): string => encodeStruct(typeDef),
  [TypeDefInfo.Tuple]: (typeDef: TypeDef): string => encodeTuple(typeDef),
  [TypeDefInfo.Vec]: (typeDef: TypeDef): string => encodeWithParams(typeDef, 'Vec'),
  [TypeDefInfo.VecFixed]: (typeDef: TypeDef): string => encodeVecFixed(typeDef)
};

export function encodeType (typeDef: Pick<TypeDef, any>): string {
  const encoder = encoders[(typeDef as TypeDef).info];

  assert(encoder, `Cannot encode type: ${typeDef}.`);

  return encoder(typeDef as TypeDef);
}

export function displayType (typeDef: Pick<TypeDef, any>): string {
  if (typeDef.displayName) {
    return encodeWithParams(typeDef);
  }

  switch (typeDef.info) {
    case TypeDefInfo.Struct:
    case TypeDefInfo.Enum:
      return encodeWithParams(typeDef);

    default:
      return encodeType(typeDef);
  }
}

export function withTypeString (typeDef: Pick<TypeDef, any>): Pick<TypeDef, any> {
  return {
    ...typeDef,
    type: SPECIAL_TYPES.includes(typeDef.name)
      ? typeDef.name
      : encodeType(typeDef)
  };
}
