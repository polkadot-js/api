// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Vec, VecFixed } from '../codec';
import type { Bytes } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ICompact, IEnum, INumber, IOption, IStruct, ITuple, IU8a, IVec } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec, K extends string> = __Expand<__Unspace<K>, T>;

export type DetectConstructor<T extends Codec, K extends string> = Constructor<__Expand<__Unspace<K>, T>>;

// remove all leading, training and all internal spaces
export type __Unspace<K extends string> =
  K extends ` ${infer X} ` | ` ${infer X}` | `${infer X} `
    ? __Unspace<X>
    : K extends `${infer A} ${infer B}`
      ? __Unspace<`${A}${B}`>
      : K;

export type __NextCall<X extends string, E extends string, R extends [string, string]> =
  __Next<X, R[0], `${R[1]}${E}`>;

export type __Next<X extends string, K extends string, I extends string = ''> =
  K extends `${X}${infer Z}`
    ? [Z, I]
    : K extends `Compact<${infer Z}`
      ? __NextCall<X, '>', __Next<'>', Z, `${I}Compact<`>>
      : K extends `Option<${infer Z}`
        ? __NextCall<X, '>', __Next<'>', Z, `${I}Option<`>>
        : K extends `Vec<${infer Z}`
          ? __NextCall<X, '>', __Next<'>', Z, `${I}Vec<`>>
          : K extends `(${infer Z}`
            ? __NextCall<X, ')', __Next<')', Z, `${I}(`>>
            : K extends `[${infer Z}`
              ? __NextCall<X, ']', __Next<']', Z, `${I}[`>>
              : K extends `{${infer Z}`
                ? __NextCall<X, '}', __Next<'}', Z, `${I}(`>>
                : K extends `${infer C}${infer Z}`
                  ? __Next<X, Z, `${I}${C}`>
                  : ['', I];

export type __ParseParams<K extends string | string[], T extends string[] = [], R extends string = ''> =
  K extends string
    ? K extends `,${infer Z}` | `;${infer Z}`
      ? __ParseParams<Z, [...T, R]>
      : K extends `${infer C}${infer Z}`
        ? __ParseParams<Z, T, `${R}${C}`>
        : [...T, R]
    : [K, T];
export type __Parse<K extends string, R extends string = ''> =
  K extends `{${infer Z}`
    ? ['Struct', __Parse<Z, R>]
    : K extends `(${infer Z}`
      ? ['Tuple', __ParseParams<__Parse<Z, R>>]
      : K extends `[${infer Z}`
        ? ['VecFixed', __ParseParams<__Parse<Z, R>>]
        : K extends `Compact<${infer Z}`
          ? ['Compact', __Parse<Z>]
          : K extends `Option<${infer Z}`
            ? ['Option', __Parse<Z>]
            : K extends `Vec<${infer Z}`
              ? ['Vec', __Parse<Z>]
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              : K extends `>${infer _Z}` | `)${infer _Z}` | `}${infer _Z}`
                ? R
                : K extends `${infer C}${infer Z}`
                  ? __Parse<Z, `${R}${C}`>
                  : ['', R];

type TEST_Parse_01 = __Parse<'Vec<u8>'>;
type TEST_Parse_02 = __Parse<'Vec<Vec<u32>>'>;
type TEST_Parse_03 = __Parse<'Vec<Option<Compact<u32>>>'>;
type TEST_Parse_04 = __Parse<'(u32,Vec<Option<Compact<u32>>>)'>;
type TEST_Parse_05 = __Parse<'()'>;
type TEST_Parse_06 = __Parse<'(u32)'>;
type TEST_Parse_07 = __Parse<'(u32,u64)'>;
type TEST_Parse_08 = __Parse<'Vec<(u32,Option<u64>)>'>;

export type __Expand<K extends string, T extends Codec = Codec> =
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : T extends ICompact | IEnum | INumber | IOption | IStruct | ITuple | IU8a | IVec
      ? T
      : __Unwrap<K, T>;

// ensure whatever we wrap is always Compact-capable
export type __Compact<R extends [string, string]> = __CompactImpl<__Expand<R[1]>>;
export type __CompactImpl<T extends Codec> =
  T extends INumber
    ? Compact<T>
    : never;

// handle option types
export type __Option<R extends [string, string]> = __OptionImpl<__Expand<R[1]>>;
export type __OptionImpl<T extends Codec> =
  T extends Codec
    ? Option<T>
    : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type __Struct<R extends [string, string]> = Codec;

export type __Tuple<R extends [string, string]> =
  __TupleWrap<__TupleParams<[], __Next<',', R[1]>>>;
export type __TupleWrap<T extends Codec[]> =
  T[1] extends Codec
    ? ITuple<T>
    : T[0] extends Codec
      ? T[0]
      : Codec;
export type __TuplePush<T extends Codec[], V extends string> =
  V extends ''
    ? T
    : [...T, __Expand<V>];
export type __TupleParams<T extends Codec[], R extends [string, string]> =
  R[0] extends ''
    ? __TuplePush<T, R[1]>
    : __TupleParams<__TuplePush<T, R[1]>, __Next<',', R[0]>>;

// vec support with short-circuit for u8
export type __Vec<R extends [string, string]> =
  R[1] extends 'u8'
    ? Bytes
    : Vec<__Expand<R[1]>>;

// fixed vec support
export type __VecFixed<R extends [string, string]> = __VecFixedInner<__Next<';', R[1]>>;
export type __VecFixedInner<R extends [string, string]> =
  R[1] extends 'u8'
    ? Raw
    : VecFixed<__Expand<R[1]>>;

export type __Unwrap<K extends string, T extends Codec> =
  K extends `Compact<${infer X}`
    ? __Compact<__Next<'>', X>>
    : K extends `Option<${infer X}`
      ? __Option<__Next<'>', X>>
      : K extends `Vec<${infer X}`
        ? __Vec<__Next<'>', X>>
        : K extends `[${infer X}`
          ? __VecFixed<__Next<']', X>>
          : K extends `(${infer X}`
            ? __Tuple<__Next<')', X>>
            : K extends `{${infer X}`
              ? __Struct<__Next<'}', X>>
              : T;
