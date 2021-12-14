// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { Codec } from './codec';

export type AnyJson = string | number | boolean | null | undefined | AnyJson[] | { [index: string]: AnyJson };

export type AnyFunction = (...args: any[]) => any;

export type AnyNumber = BN | bigint | Uint8Array | number | string;

export type AnyString = string | string;

export type AnyTuple = Codec[];

export type AnyU8a = Uint8Array | number[] | string;

export type UIntBitLength = 8 | 16 | 32 | 64 | 128 | 256;

// The 520 here is a weird one - it is explicitly for a [u8; 65] as found as a EcdsaSignature,
// and 264 here is explicity for a [u8; 33] as found as EcdsaPublic key.
// Likewise 160 is for [u8; 20], which is also a H160, i.e. an Ethereum address. Both these are
// as a result of the Polkadot claims module. (Technically we don't need the 520 in here)
export type U8aBitLength = 8 | 16 | 32 | 64 | 128 | 160 | 256 | 264 | 512 | 520 | 1024 | 2048;
