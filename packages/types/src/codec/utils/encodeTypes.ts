// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef } from '../types';

export function encodeEnum (sub: TypeDef[]): string {
  const isNoData = sub.reduce(
    (bool: boolean, { type }: TypeDef): boolean => bool && type === 'Null',
    true
  );

  if (isNoData) {
    return `[${
      sub
        .map(({ name }: TypeDef): string => `"${name}"`)
        .join(', ')
    }]`;
  }

  return `{${
    sub
      .map(({ name, type }: TypeDef): string => `"${name}": ${type}`)
      .join(', ')
  }}`;
}

export function encodeStruct (sub: TypeDef[]): string {
  return `{${
    sub
      .map(({ name, type }: TypeDef): string => `"${name}": ${type}`)
      .join(', ')
  }}`;
}

export function encodeTuple (sub: TypeDef[]): string {
  return `(${
    sub
      .map(({ type }: TypeDef): string => type)
      .join(', ')
  })`;
}
