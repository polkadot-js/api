// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignOptions } from '@polkadot/keyring/types';
import type { BN } from '@polkadot/util';
import type { FunctionMetadataLatest, StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Hash } from '../interfaces/runtime';
import type { AnyTuple, ArgsDef, Codec } from './codec';

export interface ICompact<T extends INumber = INumber> extends Codec {
  toBigInt (): bigint;
  toBn (): BN;
  toNumber (): number;
  unwrap (): T;
}

export interface IEnum extends Codec {
  readonly index: number;
  readonly isBasic: boolean
  readonly type: string;
  readonly value: Codec;

  toNumber (): number;
}

export interface INumber extends Codec {
  bitLength (): number;
  toBigInt (): bigint;
  toBn (): BN;
  toNumber (): number;
}

export interface IOption<T extends Codec = Codec> extends Codec {
  readonly isNone: boolean;
  readonly isSome: boolean;
  readonly value: Codec;

  unwrap (): T;
  unwrapOr <O>(other: O): T | O;
  unwrapOrDefault (): T;
}

export interface ISet<K extends string = string> extends Set<K>, Codec {
  readonly strings: string[];
  readonly valueEncoded: BN;
}

export interface IStruct<K extends string | number | symbol = string, V extends Codec = Codec> extends Map<K, V>, Codec {}

// A type alias for [Type1, Type2] & Codec, representing a tuple (Type1, Type2)
// FIXME Implement this generic <Sub> on Tuple.ts itself.
export type ITuple<S extends AnyTuple = Codec[]> = S & Codec;

export interface IU8a extends Uint8Array, Codec {
  bitLength (): number;
  toHuman (isExtended?: boolean): any;
  toJSON (): any;
}

export interface IVec<S extends Codec = Codec> extends Array<S>, Codec {}

export interface IKeyringPair {
  readonly address: string;
  readonly addressRaw: Uint8Array;
  readonly publicKey: Uint8Array;

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
