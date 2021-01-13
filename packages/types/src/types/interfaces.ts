// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import type { SignOptions } from '@polkadot/keyring/types';
import type { FunctionMetadataLatest, StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Hash } from '../interfaces/runtime';
import type { AnyTuple, ArgsDef, Codec } from './codec';

export interface ICompact<T> extends Codec {
  toBigInt (): bigint;
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

export interface IMethod<A extends AnyTuple = AnyTuple> extends Codec {
  readonly args: A;
  readonly argsDef: ArgsDef;
  readonly callIndex: Uint8Array;
  readonly data: Uint8Array;
  readonly hash: Hash;
  readonly meta: FunctionMetadataLatest;

  is: (tx: IMethod<AnyTuple>) => tx is IMethod<A>;
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

export interface IStorageKey<A extends AnyTuple> {
  readonly args: A;
  readonly meta: StorageEntryMetadataLatest | undefined;
  readonly method: string | undefined;
  readonly outputType: string;
  readonly section: string | undefined;

  is: (key: IStorageKey<AnyTuple>) => key is IStorageKey<A>;
}

// A type alias for [Type1, Type2] & Codec, representing a tuple (Type1, Type2)
// FIXME Implement this generic <Sub> on Tuple.ts itself.
export type ITuple<Sub extends AnyTuple> = Sub & Codec

export interface IU8a extends Uint8Array, Codec {
  bitLength (): number;
  toHuman (isExtended?: boolean): any;
  toJSON (): any;
}
