// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import { SignOptions } from '@polkadot/keyring/types';
import { Hash } from '../interfaces/runtime';
import { FunctionMetadataLatest } from '../interfaces/metadata';
import { ArgsDef, Codec } from './codec';

export interface ICompact<T> extends Codec {
  toBigInt (): BigInt;
  toBn (): BN;
  toNumber (): number;
  unwrap (): T;
}

export interface IKeyringPair {
  address: string;
  addressRaw: Uint8Array;
  publicKey: Uint8Array;
  sign: (data: Uint8Array, options?: SignOptions) => Uint8Array;
}

export interface IMethod extends Codec {
  readonly args: Codec[];
  readonly argsDef: ArgsDef;
  readonly callIndex: Uint8Array;
  readonly data: Uint8Array;
  readonly hash: Hash;
  readonly hasOrigin: boolean;
  readonly meta: FunctionMetadataLatest;
}

export interface IRuntimeVersion {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly apis: any[];
  readonly authoringVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly implName: String;
  readonly implVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly specName: String;
  readonly specVersion: BN;
  readonly transactionVersion: BN;
}

// A type alias for [Type1, Type2] & Codec, representing a tuple (Type1, Type2)
// FIXME Implement this generic <Sub> on Tuple.ts itself.
export type ITuple<Sub extends Codec[]> = Sub & Codec

export interface IU8a extends Uint8Array, Codec {
  bitLength (): number;
  toHuman (isExtended?: boolean): any;
  toJSON (): any;
}
