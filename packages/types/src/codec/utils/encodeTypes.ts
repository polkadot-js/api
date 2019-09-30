// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef } from '../types';

export function encodeTypeWithParams ({ type, params }: TypeDef): string {
  if (!params || params.length === 0) {
    return type;
  }

  return `${type}<${params.map(({ type }) => type).join(', ')}`;
}

function encodeSubTypes (sub: TypeDef[], asEnum?: boolean): string {
  return `{ ${asEnum && '"_enum": { '} ${
    sub
      .map((type: TypeDef): string => `"${type.name}": "${encodeTypeWithParams(type)}"`)
      .join(', ')
  }} }`;
}

export function encodeEnum (sub: TypeDef[]): string {
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

export function encodeStruct (sub: TypeDef[]): string {
  return encodeSubTypes(sub);
}

export function encodeTuple (sub: TypeDef[]): string {
  return `(${
    sub
      .map((type: TypeDef): string => encodeTypeWithParams(type))
      .join(', ')
  })`;
}
