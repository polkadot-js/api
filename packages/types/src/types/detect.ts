// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Vec, VecFixed } from '../codec';
import type { Bytes, Null } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ICompact, IEnum, INumber, IOption, IStruct, ITuple, IU8a, IVec } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec, K extends string> =
  T extends ICompact | IEnum | INumber | IOption | IStruct | ITuple | IU8a | IVec
    ? T
    : __ToCodecs<__Expand<__Sanitize<K>>[0]>[0];

export type DetectConstructor<T extends Codec, K extends string> = Constructor<DetectCodec<T, K>>;

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

type __RemoveEmpty<T extends string> =
  T extends ''
    ? []
    : [T];

type __Values = (string | Record<string, unknown> | __Values)[];

type __ExpandTuple<T extends [__Values, string], E extends __Values, I extends string> =
  __Expand<T[1], [...__RemoveEmpty<I>, ...E, T[0]]>;

// TODO At this point structs are fully empty, no field indicators
type __ExpandStruct<T extends [__Values, string], E extends __Values, I extends string> =
  // eslint-disable-next-line @typescript-eslint/ban-types
  __Expand<T[1], [...__RemoveEmpty<I>, ...E, {}]>;

type __Combine<E extends __Values, I extends string, X extends string[] = []> =
  [...E, ...__RemoveEmpty<I>, ...X];

// NOTE For recursion limits, it is more optimal to use __Sanitize with conjunction with the __Expand
// below, even while we do more matching (Number of characters iterated through is the most problematic)
type __Expand<K extends string, E extends __Values = [], I extends string = ''> =
  K extends `,${infer R}`
    ? __Expand<R, __Combine<E, I>>
    : K extends `(${infer R}`
      ? __ExpandTuple<__Expand<R>, E, I>
      : K extends `{${infer R}`
        ? __ExpandStruct<__Expand<R>, E, I>
        : K extends `${')' | '}'}${infer R}`
          ? [__Combine<E, I>, R]
          : K extends `<${infer R}`
            ? __Expand<R, __Combine<E, `${I}<`>>
            : K extends `>${infer R}`
              ? __Expand<R, __Combine<E, I>>
              : K extends `[${infer R}`
                ? __Expand<R, __Combine<E, I, ['[']>>
                : K extends `${infer C}${infer R}`
                  ? __Expand<R, E, `${I}${C}`>
                  : [__Combine<E, I>, K];

type __ToCodec<K extends unknown, N extends unknown = unknown, C extends Codec = Codec> =
  K extends Record<string, unknown>
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
              : K extends keyof InterfaceTypes
                ? InterfaceTypes[K]
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
