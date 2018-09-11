// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

export interface Base <S> {
  value: S;

  byteLength (): number;
  fromJSON (input: any): Base <S>;
  fromU8a (input: Uint8Array): Base <S>;
  toJSON (): any;
  toString (): string;
  toU8a (): Uint8Array;
}

export type HashBitLength = 256 | 512;

export type NumberBitLength = 8 | 32 | 64 | 128;
