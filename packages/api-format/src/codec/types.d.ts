// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

export interface BaseU8a <S> {
  raw: S;

  byteLength (): number;
  fromU8a (input: Uint8Array): BaseU8a <S>;
  toU8a (): Uint8Array;
}

export interface Base <S> extends BaseU8a <S> {
  fromJSON (input: any): Base <S>;
  toJSON (): any;
  toString (): string;
}
