// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { Codec } from './codec.js';

export type AnyJson = string | number | boolean | null | undefined | AnyJson[] | { [index: string]: AnyJson };

export type AnyFunction = (...args: any[]) => any;

export type AnyNumber = BN | bigint | Uint8Array | number | string;

// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyFloat = Number | number | Uint8Array | string;

// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyString = String | string;

// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyBool = Boolean | boolean;

export type AnyTuple = Codec[];

export type AnyU8a = Uint8Array | number[] | string;

export type UIntBitLength = 8 | 16 | 32 | 64 | 128 | 256;

// The 520 here is a weird one - it is explicitly for a [u8; 65] as found as a EcdsaSignature,
// and 264 here is explicitly for a [u8; 33] as found as EcdsaPublic key.
// Likewise 160 is for [u8; 20], which is also a H160, i.e. an Ethereum address. Both these are
// as a result of the Polkadot claims module. (Technically we don't need the 520 in here)
export type U8aBitLength = 8 | 16 | 32 | 64 | 128 | 160 | 256 | 264 | 512 | 520 | 1024 | 2048;

export type AnyTupleValue = Exclude<AnyU8a, string> | HexString | (Codec | AnyU8a | AnyNumber | AnyString | undefined | null)[];

export interface ToString {
  toString: () => string;
}

export interface ToBn {
  toBn: () => BN;
}

export interface ToBigInt {
  toBigInt: () => bigint;
}

export interface DefinitionSetter <T> {
  definition?: T | undefined;
  setDefinition?: (d: T) => T;
}

export type LookupString = `Lookup${number}`;
