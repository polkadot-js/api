// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { InterfaceTypes } from '@polkadot/types/types';
import type { BTreeMap, BTreeSet, Bytes, CodecSet, Compact, Enum, HashMap, Linkage, Null, Option, Range, RangeInclusive, Result, Struct, u8, U8aFixed, Vec, VecFixed } from '@polkadot/types-codec';
import type { Codec, ICompact, IEnum, IMap, IMethod, INumber, IOption, IResult, ISet, IStruct, ITuple, IU8a, IVec } from '@polkadot/types-codec/types';

export type DetectCodec<T extends Codec, K extends string> =
  // This is weird - it looks the wrong way around (i.e. T check should be done first), however
  // it does work (as evident with checkTypes) and is problematic the other way around
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : T extends ICompact | IEnum | IMap | IMethod | INumber | IOption | IResult | ISet | IStruct | ITuple | IU8a | IVec
      ? T
      : __Codec<__Codecs<__Tokenize<__Sanitize<K>>[0]>>;

export type __Codec<V extends Codec[]> =
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

export type __MapWrapOne<C extends Codec> = {
  'BTreeSet<': BTreeSet<C>;
  'Compact<': C extends INumber ? Compact<C> : Codec;
  'Linkage<': Linkage<C>;
  'Option<': Option<C>;
  'Range<': C extends INumber ? Range<C> : Codec;
  'RangeInclusive<': C extends INumber ? RangeInclusive<C> : Codec;
  'Vec<': C extends u8 ? Bytes : Vec<C>;
  '[': C extends u8 ? U8aFixed : VecFixed<C>;
};

// FIXME We don't cater for Int< & UInt< here. These could be problematic, since it has
// a variable number of inner arguments, better would be to just strip them inside the sanitize
export type __MapWrapTwo<K extends Codec, V extends Codec> = {
  'BTreeMap<': BTreeMap<K, V>;
  'HashMap<': HashMap<K, V>;
  'Result<': Result<K, V>;
};

export type __WrapOne = keyof __MapWrapOne<Codec>;

export type __WrapTwo = keyof __MapWrapTwo<Codec, Codec>;

export type __Wrap = __WrapOne | __WrapTwo;

export type __ToTuple<O extends Codec[]> =
  O[0] extends Codec
    ? O[1] extends Codec
      ? ITuple<O>
      : O[0]
    : Null;

export type __CodecsNext<K, C extends Codec[]> =
  K extends __WrapOne
    ? C extends [Codec, ...infer X]
      ? [__MapWrapOne<C[0]>[K], ...X]
      : Codec
    : K extends __WrapTwo
      ? C extends [Codec, Codec, ...infer X]
        ? [__MapWrapTwo<C[0], C[1]>[K], ...X]
        : Codec
      : [
        // __CodecFirst<K>
        K extends keyof InterfaceTypes
          ? InterfaceTypes[K]
          : K extends unknown[]
            ? __ToTuple<__Codecs<K>>
            : K extends Record<string, unknown>
              // __ToStruct<K extends Record<string, unknown>>
              ? K['_enum'] extends true
                ? Enum
                : K['_set'] extends true
                  ? CodecSet
                  : Struct
              : Codec,
        ...C
      ];

export type __Codecs<T extends unknown[]> =
  T extends [infer K, ...infer N]
    ? __CodecsNext<K, __Codecs<N>>
    : [];

export type __Combine<V extends __Value[], I extends string> =
  I extends ''
    ? V
    : [...V, I];

export type __CombineInner<V extends __Value[], I extends string, X extends __Value> =
  I extends ''
    ? [...V, X]
    : [I, ...V, X];

// FIXME At this point enum/set/struct are empty, no field indicators, just type indicators
export type __TokenizeStruct<T extends [__Value[], string], V extends __Value[], I extends string, R extends string> =
  __Tokenize<T[1], __CombineInner<V, I, R extends `"_set"${string}`
    ? { _set: true }
    : R extends `"_enum"${string}`
      ? { _enum: true }
      : { _fields: true }
  >>;

export type __TokenizeTuple<T extends [__Value[], string], V extends __Value[], I extends string> =
  __Tokenize<T[1], __CombineInner<V, I, T[0]>>;

// NOTE For recursion limits, it is more optimal to use __Sanitize with conjunction with __Tokenize
// below, even while we do more matching (Number of characters iterated through is the most problematic)
export type __Tokenize<K extends string, V extends __Value[] = [], I extends string = ''> =
  K extends '' | '>' | ')' | '}'
    ? [__Combine<V, I>, '']
    : K extends `${__Wrap}${infer R}`
      // __TokenizeWrapped<K extends string, V extends __Value[], I extends string, R extends string>
      ? K extends `${infer X}${R}`
        ? X extends '['
          ? __Tokenize<R, [...__Combine<V, I>, '[']>
          : __Tokenize<R, __Combine<V, `${I}${X}`>>
        : never
      : K extends `${',' | '>'}${infer R}`
        ? __Tokenize<R, __Combine<V, I>>
        : K extends `${')' | '}'}${infer R}`
          ? [__Combine<V, I>, R]
          : K extends `(${infer R}`
            ? __TokenizeTuple<__Tokenize<R>, V, I>
            : K extends `{${infer R}`
              ? __TokenizeStruct<__Tokenize<R>, V, I, R>
              : K extends `${keyof InterfaceTypes}${',' | '>'}${infer R}`
                // __TokenizeKnown<K extends string, V extends __Value[], I extends string, R extends string>
                ? K extends `${infer X}${',' | '>'}${R}`
                  ? __Tokenize<R, __Combine<V, `${I}${X}`>>
                  : never
                : K extends `${infer C}${infer R}`
                  ? __Tokenize<R, V, `${I}${C}`>
                  : [__Combine<V, I>, ''];
