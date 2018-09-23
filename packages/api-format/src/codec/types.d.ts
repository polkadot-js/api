// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

export interface Base <S> {
  raw: S;

  byteLength (): number;
  fromJSON (input: any): Base <S>;
  fromU8a (input: Uint8Array): Base <S>;
  toJSON (): any;
  toString (): string;
  toU8a (): Uint8Array;
}

export type NumberBitLength = 8 | 16 | 32 | 64 | 128;
