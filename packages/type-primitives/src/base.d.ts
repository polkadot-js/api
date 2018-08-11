// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

export type Bytes = Uint8Array;
export type Hash = Uint8Array;
export type H160 = Uint8Array;
export type H256 = Uint8Array;
export type H512 = Uint8Array;
export type U32 = BN;
export type U64 = BN;
export type U128 = BN;
export type U256 = BN;

export type AccountId = H256;
export type Balance = U128;
export type BlockNumber = U64;
export type ChainId = U32;
export type HeaderHash = H256;
export type Index = U32;
export type ObjectId = U64;
export type ParaChainId = U64;
export type Proportion = U64;
export type Signature = H512;
export type Timestamp = U64;
