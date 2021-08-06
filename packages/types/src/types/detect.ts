// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Vec, VecFixed } from '../codec';
import type { Bytes } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ICompact, IEnum, INumber, IOption, IStruct, ITuple, IU8a, IVec } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec, K extends string> = __Expand<K, T>;

export type DetectConstructor<T extends Codec, K extends string> = Constructor<__Expand<K, T>>;

// trim leading and trailing spaces
export type Trim<K extends string> =
  K extends ` ${infer X}`
    ? Trim<X>
    : K extends `${infer X} `
      ? Trim<X>
      : K;

export type __Expand<K extends string, T extends Codec = Codec> = __Internal<Trim<K>, T>;

export type __Internal<K extends string, T extends Codec> =
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : T extends ICompact | IEnum | INumber | IOption | IStruct | ITuple | IU8a | IVec
      ? T
      : __Unwrap<K, T>;

// ensure whatever we wrap is always Compact-capable
export type __Compact<T extends Codec> =
  T extends INumber
    ? Compact<T>
    : never;

export type __Params<X extends string> =
  X extends `${infer A},${infer B}`
    ? [__Expand<A>, ...__Params<B>]
    : [__Expand<X>];

export type __Tuple<X extends string, T extends Codec> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  X extends `${infer A},${infer B}`
    ? ITuple<__Params<X>>
    : __Expand<X, T>;

// vec support with short-circuit for u8
export type __Vec<X extends string, T extends Codec> =
  Trim<X> extends 'u8'
    ? Bytes
    : Vec<__Expand<X, T>>;

// fixed vec support
export type __VecFixed<X extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  X extends `${infer Y};${infer _}`
    ? Trim<Y> extends 'u8'
      ? Raw
      : VecFixed<__Expand<Y>>
    : never;

export type __Unwrap<K extends string, T extends Codec> =
  K extends `Compact<${infer X}>`
    ? __Compact<__Expand<X>>
    : K extends `Option<${infer X}>`
      ? Option<__Expand<X>>
      : K extends `Vec<${infer X}>`
        ? __Vec<X, T>
        : K extends `[${infer X}]`
          ? __VecFixed<X>
          : K extends `(${infer X})`
            ? __Tuple<X, T>
            : T;
