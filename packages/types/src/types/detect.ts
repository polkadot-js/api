// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Vec, VecFixed } from '../codec';
import type { Bytes } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ICompact, IEnum, INumber, IOption, IStruct, ITuple, IU8a, IVec } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec, K extends string> = __Expand<__Unspace<K>, T>;

export type DetectConstructor<T extends Codec, K extends string> = Constructor<DetectCodec<T, K>>;

// trim leading and trailing spaces
export type __Unspace<K extends string> =
  K extends ` ${infer X} ` | ` ${infer X}` | `${infer X} `
    ? __Unspace<X>
    : K extends `${infer A} ${infer B}`
      ? __Unspace<`${A}${B}`>
      : K;

export type __Expand<K extends string, T extends Codec = Codec> =
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : T extends ICompact | IEnum | INumber | IOption | IStruct | ITuple | IU8a | IVec
      ? T
      : __Unwrap<K, T>;

// ensure whatever we wrap is always Compact-capable
export type __Compact<X extends string> = __CompactImpl<__Expand<X>>;
export type __CompactImpl<T extends Codec> =
  T extends INumber
    ? Compact<T>
    : Codec;

// handle option types
export type __Option<X extends string> = __OptionImpl<__Expand<X>>;
export type __OptionImpl<T extends Codec> =
  T extends Codec
    ? Option<T>
    : Codec;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type __Struct<_ extends string> = Codec;

export type __TupleParams<X extends string> =
  X extends `Vec<${infer A}>,${infer B}`
    ? [__Vec<A>, ...__TupleParams<B>]
    : X extends `Vec<${infer A}>`
      ? [__Vec<A>]
      : X extends `Option<${infer A}>,${infer B}`
        ? [__Option<A>, ...__TupleParams<B>]
        : X extends `Option<${infer A}>`
          ? [__Option<A>]
          : X extends `Compact<${infer A}>,${infer B}`
            ? [__Compact<A>, ...__TupleParams<B>]
            : X extends `Compact<${infer A}>`
              ? [__Compact<A>]
              : X extends `[${infer A}],${infer B}`
                ? [__VecFixed<A>, ...__TupleParams<B>]
                : X extends `[${infer A}]`
                  ? [__VecFixed<A>]
                  : X extends `{${infer A}},${infer B}`
                    ? [__Struct<A>, ...__TupleParams<B>]
                    : X extends `{${infer A}}`
                      ? [__Struct<A>]
                      // FIXME This also matches ((x, y), ... as (x, y
                      : X extends `(${infer A}),${infer B}`
                        ? [__Tuple<A>, ...__TupleParams<B>]
                        : X extends `(${infer A})`
                          ? [__Tuple<A>]
                          : X extends `${infer A},${infer B}`
                            ? [__Expand<A>, ...__TupleParams<B>]
                            : [__Expand<X>];

export type __Tuple<X extends string> = __TupleWrap<__TupleParams<X>>;

export type __TupleWrap<X extends Codec[]> =
  X[1] extends Codec
    ? ITuple<X>
    : X[0];

// vec support with short-circuit for u8
export type __Vec<X extends string> =
  X extends 'u8'
    ? Bytes
    : Vec<__Expand<X>>;

// fixed vec support
export type __VecFixed<X extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  X extends `${infer T};${infer _}`
    ? T extends 'u8'
      ? Raw
      : VecFixed<__Expand<T>>
    : Codec;

export type __Unwrap<K extends string, T extends Codec> =
  K extends `Vec<${infer X}>`
    ? __Vec<X>
    : K extends `Option<${infer X}>`
      ? __Option<X>
      : K extends `Compact<${infer X}>`
        ? __Compact<X>
        : K extends `[${infer X}]`
          ? __VecFixed<X>
          : K extends `(${infer X})`
            ? __Tuple<X>
            : K extends `{${infer X}}`
              ? __Struct<X>
              : T;
