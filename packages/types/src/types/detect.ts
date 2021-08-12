// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Vec, VecFixed } from '../codec';
import type { Bytes, Null } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ICompact, IEnum, INumber, IOption, ISet, IStruct, ITuple, IU8a, IVec } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec, K extends string> =
  // This is weird - it looks the wrong way around (i.e. T check should be done first), however
  // it does work (as evident with checkTypes) and is problematic the other way around
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : T extends ICompact | IEnum | INumber | IOption | ISet | IStruct | ITuple | IU8a | IVec
      ? T
      : __ExtractCodec<__ToCodecs<__Tokenize<__Sanitize<K>>[0]>>;

export type DetectConstructor<T extends Codec, K extends string> = Constructor<DetectCodec<T, K>>;

export type __ExtractCodec<V extends Codec[]> =
  V[0] extends Codec
    ? V[0]
    : Codec;

// trim leading and trailing spaces and unused portions, e.g `...;<length>]`
export type __Sanitize<K extends string> =
  K extends ` ${infer X}` | `${infer X} ` | ` ${infer X} `
    ? __Sanitize<X>
    : K extends `${infer A} ${infer B}`
      ? __Sanitize<`${A}${B}`>
      : K extends `${infer A};${string}]${infer B}`
        ? __Sanitize<`${A}${B}`>
        : K extends `${infer X};${string}]`
          ? __Sanitize<X>
          : K;

export type __Value = string | Record<string, unknown> | __Value[];

export type __ToCodec<K extends unknown, C extends Codec[], N extends unknown[]> =
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : K extends unknown[]
      ? __ToTuple<__ToCodecs<K>>
      : K extends Record<string, unknown>
        ? K['_enum'] extends Record<string, unknown>
          ? IEnum
          : K['_set'] extends Record<string, unknown>
            ? ISet
            : IStruct
        : K extends Set<unknown>
          ? ISet
          : K extends '['
            ? N[0] extends 'u8'
              ? Raw
              : VecFixed<C[0]>
            : K extends 'Vec<'
              ? N[0] extends 'u8'
                ? Bytes
                : Vec<C[0]>
              : K extends 'Option<'
                ? Option<C[0]>
                : K extends 'Compact<'
                  ? C[0] extends INumber
                    ? Compact<C[0]>
                    : Codec
                  : Codec;

export type __ToTuple<O extends Codec[]> =
  O[0] extends Codec
    ? O[1] extends Codec
      ? ITuple<O>
      : O[0]
    : Null;

export type __ToCodecsInner<K extends unknown, N extends unknown[], C extends Codec[]> =
  K extends '[' | 'Vec<' | 'Option<' | 'Compact<'
    ? C extends [Codec, ...infer X]
      ? [__ToCodec<K, C, N>, ...X]
      : never
    : [__ToCodec<K, C, N>, ...C];

export type __ToCodecs<T extends unknown[]> =
  T extends [infer K, ...infer O]
    ? __ToCodecsInner<K, O, __ToCodecs<O>>
    : [];

export type __RemoveEmpty<T extends string> =
  T extends ''
    ? []
    : [T];

export type __Combine<V extends __Value[], I extends string = '', T extends string = ''> =
  [...V, ...__RemoveEmpty<I>, ...__RemoveEmpty<T>];

export type __CombineInner<V extends __Value[], I extends string, X extends __Value> =
  [...__RemoveEmpty<I>, ...V, X];

// TODO At this point structs are fully empty, no field indicators
export type __TokenizeStruct<T extends [__Value[], string], V extends __Value[], I extends string, R extends string> =
  __Tokenize<T[1], __CombineInner<V, I,
  R extends `"_set"${string}`
    // eslint-disable-next-line @typescript-eslint/ban-types
    ? { _set: {} }
    : R extends `"_enum"${string}`
      // eslint-disable-next-line @typescript-eslint/ban-types
      ? { _enum: {} }
      // eslint-disable-next-line @typescript-eslint/ban-types
      : { data: R }
  >>;

export type __TokenizeTuple<T extends [__Value[], string], V extends __Value[], I extends string> =
  __Tokenize<T[1], __CombineInner<V, I, T[0]>>;

export type __TokenizeWrapper<K extends string, V extends __Value[], I extends string, R extends string> =
  K extends `${infer X}${R}`
    ? __Tokenize<R, __Combine<V, `${I}${X}`>>
    : never;

export type __TokenizeKnown<K extends string, V extends __Value[], I extends string, R extends string> =
  K extends `${infer X}${',' | '>'}${R}`
    ? __Tokenize<R, __Combine<V, `${I}${X}`>>
    : never;

// NOTE For recursion limits, it is more optimal to use __Sanitize with conjunction with __Tokenize
// below, even while we do more matching (Number of characters iterated through is the most problematic)
export type __Tokenize<K extends string, V extends __Value[] = [], I extends string = ''> =
  K extends '' | ')' | '>' | '}'
    ? [__Combine<V, I>, '']
    : K extends `${'Vec<' | 'Option<' | 'Compact<'}${infer R}`
      ? __TokenizeWrapper<K, V, I, R>
      : K extends `${',' | '>'}${infer R}`
        ? __Tokenize<R, __Combine<V, I>>
        : K extends `[${infer R}`
          ? __Tokenize<R, __Combine<V, I, '['>>
          : K extends `)${infer R}` | `}${infer R}`
            ? [__Combine<V, I>, R]
            : K extends `(${infer R}`
              ? __TokenizeTuple<__Tokenize<R>, V, I>
              : K extends `{${infer R}`
                ? __TokenizeStruct<__Tokenize<R>, V, I, R>
                : K extends `${keyof InterfaceTypes}${',' | '>'}${infer R}`
                  ? __TokenizeKnown<K, V, I, R>
                  : K extends `${infer C}${infer R}`
                    ? __Tokenize<R, V, `${I}${C}`>
                    : [__Combine<V, I>, ''];
