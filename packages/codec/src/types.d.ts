// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

interface PrimitiveEncoder <S = Uint8Array> {
  toJSON (): any;
  toString (): string;
  toU8a (): S;
}

interface PrivitiveDecoder <C extends PrimitiveBase<any, S>, S = Uint8Array> {
  fromJSON (input: any): C;
  fromU8a (input: S): C;
}

interface PrimitiveBase <T, S = Uint8Array> extends PrimitiveEncoder<S> {
  value: T;
}

export type NumberBitLength = 8 | 32 | 64 | 128;

export interface BlockNumber extends PrimitiveBase<BN> {}
export interface BlockNumberDecoder extends PrivitiveDecoder<BlockNumber> {}

export interface AccountIndex extends PrimitiveBase<BN> {}
export interface AccountIndexDecoder extends PrivitiveDecoder<AccountIndex> {}

export interface U32 extends PrimitiveBase<BN> {}
export interface U32Decoder extends PrivitiveDecoder<U32> {}

export interface U64 extends PrimitiveBase<BN> {}
export interface U64Decoder extends PrivitiveDecoder<U64> {}

export interface U128 extends PrimitiveBase<BN> {}
export interface U128Decoder extends PrivitiveDecoder<U128> {}
