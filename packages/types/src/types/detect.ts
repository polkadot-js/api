// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Vec, VecFixed } from '../codec';
import type { Bytes, Null } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { INumber, IStruct, ITuple } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec | undefined, K extends string> =
  T extends Codec
    ? T
    : __Sanitize<K> extends `${infer S}`
      ? S extends keyof InterfaceTypes
        ? InterfaceTypes[S]
        : __ToCodecs<__Tokenize<S>[0]> extends [infer V]
          ? V extends Codec
            ? V
            : Codec
          : Codec
      : Codec;

export type DetectConstructor<T extends Codec | undefined, K extends string> = Constructor<DetectCodec<T, K>>;

// trim leading and trailing spaces and unused portions
type __Sanitize<K extends string> =
  K extends ` ${infer X}` | `${infer X} ` | ` ${infer X} `
    ? __Sanitize<X>
    : K extends `${infer A} ${infer B}`
      ? __Sanitize<`${A}${B}`>
      : K extends `${infer A};${string}]${infer B}`
        ? __Sanitize<`${A}${B}`>
        : K extends `${infer A};${string}]`
          ? __Sanitize<A>
          : K;

type __ValuesInner = (string | Record<string, unknown> | __Values);
type __Values = __ValuesInner[];

type __ToCodec<K extends unknown, N extends unknown = unknown, C extends Codec = Codec> =
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : K extends Record<string, unknown>
      ? IStruct
      : K extends unknown[]
        ? __ToTuple<__ToCodecs<K>>
        : K extends '['
          ? N extends 'u8'
            ? Raw
            : VecFixed<C>
          : K extends 'Vec<'
            ? N extends 'u8'
              ? Bytes
              : Vec<C>
            : K extends 'Option<'
              ? Option<C>
              : K extends 'Compact<'
                ? C extends INumber
                  ? Compact<C>
                  : Codec
                : Codec;

type __ToTuple<O extends Codec[]> =
  O[0] extends undefined
    ? Null
    : O[1] extends undefined
      ? O[0]
      : ITuple<O>;

type __ToCodecsInner<K extends unknown, O extends unknown[], C extends Codec[]> =
  K extends '[' | 'Vec<' | 'Option<' | 'Compact<'
    ? C extends [unknown, ...infer X]
      ? [__ToCodec<K, O[0], C[0]>, ...X]
      : never
    : [__ToCodec<K>, ...C];

type __ToCodecs<T extends unknown[]> =
  T extends [infer A, ...infer O]
    ? __ToCodecsInner<A, O, __ToCodecs<O>>
    : [];

type __RemoveEmpty<T extends string> =
  T extends ''
    ? []
    : [T];

type __Combine<V extends __Values, I extends string = '', T extends string = ''> =
  [...V, ...__RemoveEmpty<I>, ...__RemoveEmpty<T>];

type __CombineInner<V extends __Values, I extends string, X extends __ValuesInner> =
  [...__RemoveEmpty<I>, ...V, X];

// TODO At this point structs are fully empty, no field indicators
type __TokenizeStruct<T extends [__Values, string], V extends __Values, I extends string> =
  // eslint-disable-next-line @typescript-eslint/ban-types
  __Tokenize<T[1], __CombineInner<V, I, {}>>;

type __TokenizeTuple<T extends [__Values, string], V extends __Values, I extends string> =
  __Tokenize<T[1], __CombineInner<V, I, T[0]>>;

type __TokenizeWrapper<K extends string, V extends __Values, I extends string, R extends string> =
  K extends `${infer X}${R}`
    ? __Tokenize<R, __Combine<V, `${I}${X}`>>
    : never;

type __TokenizeKnown<K extends string, V extends __Values, I extends string, R extends string> =
  K extends `${infer X}${',' | '>'}${R}`
    ? __Tokenize<R, __Combine<V, `${I}${X}`>>
    : never;

// NOTE For recursion limits, it is more optimal to use __Sanitize with conjunction with __Tokenize
// below, even while we do more matching (Number of characters iterated through is the most problematic)
type __Tokenize<K extends string, V extends __Values = [], I extends string = ''> =
  K extends '' | ')' | '>' | '}'
    ? [__Combine<V, I>, '']
    : K extends `${'Vec<' | 'Option<' | 'Compact<'}${infer R}`
      ? __TokenizeWrapper<K, V, I, R>
      : K extends `${keyof InterfaceTypes}${',' | '>'}${infer R}`
        ? __TokenizeKnown<K, V, I, R>
        : K extends `${',' | '>'}${infer R}`
          ? __Tokenize<R, __Combine<V, I>>
          : K extends `[${infer R}`
            ? __Tokenize<R, __Combine<V, I, '['>>
            : K extends `)${infer R}` | `}${infer R}`
              ? [__Combine<V, I>, R]
              : K extends `(${infer R}`
                ? __TokenizeTuple<__Tokenize<R>, V, I>
                : K extends `{${infer R}`
                  ? __TokenizeStruct<__Tokenize<R>, V, I>
                  : K extends `${infer C}${infer R}`
                    ? __Tokenize<R, V, `${I}${C}`>
                    : [__Combine<V, I>, ''];
