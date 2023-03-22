// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type { SignOptions } from '@polkadot/keyring/types';
import type { BN } from '@polkadot/util';
import type { ArgsDef, Codec } from './codec.js';
import type { AnyTuple } from './helpers.js';

export interface ICompact<T extends INumber = INumber> extends Codec {
  toBigInt (): bigint;
  toBn (): BN;
  toNumber (): number;
  unwrap (): T;
}

export interface IEnum extends Codec {
  readonly defIndexes: number[];
  readonly defKeys: string[];
  readonly index: number;
  readonly isBasic: boolean;
  readonly type: string;
  readonly value: Codec;

  toNumber (): number;
}

export interface IMap<K extends Codec = Codec, V extends Codec = Codec> extends Map<K, V>, Codec {}

export interface INumber extends Codec {
  bitLength (): number;
  toBigInt (): bigint;
  toBn (): BN;
  toNumber (): number;
  toPrimitive (): string | number;
}

export interface IFloat extends Codec {
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

export interface IResult<O extends Codec = Codec, E extends Codec = Codec> extends IEnum {
  readonly asErr: E;
  readonly asOk: O;
  readonly isErr: boolean;
  readonly isOk: boolean;
}

export interface ISet<K = string> extends Set<K>, Codec {
  readonly strings: string[];
}

export interface IStruct<K = string, V extends Codec = Codec> extends Map<K, V>, Codec {
  readonly defKeys: string[];

  getAtIndex (index: number): Codec
  toArray (): Codec[];
}

export interface IText extends String, Codec {
  // nothing additional
}

export type ITuple<T extends AnyTuple = Codec[]> = T & Codec;

export interface IU8a extends Uint8Array, Codec {
  readonly isAscii: boolean;
  readonly isUtf8: boolean

  bitLength (): number;
  toHuman (isExtended?: boolean): any;
  toJSON (): any;
  toUtf8 (): string;
}

export interface IVec<T extends Codec = Codec> extends Array<T>, Codec {
  toArray (): T[];
}

export interface IMethod<A extends AnyTuple = AnyTuple, M = any> extends Codec {
  readonly args: A;
  readonly argsDef: ArgsDef;
  readonly callIndex: Uint8Array;
  readonly data: Uint8Array;
  readonly meta: M;

  is: (tx: IMethod<AnyTuple>) => tx is IMethod<A>;
}
