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

export type __InnerConcat<X extends string, R extends [string, string]> = [R[0], `${R[1]}${X}`];

export type __InnerCall<X extends string, R extends [string, string]> = __Inner<X, R[0], R[1]>;

export type __Inner<X extends string, K extends string, I extends string = ''> =
  K extends `${X}${infer Z}`
    ? [Z, I]
    : K extends `Compact<${infer Z}`
      ? __InnerCall<X, __InnerConcat<'>', __Inner<'>', Z, `${I}Compact<`>>>
      : K extends `Option<${infer Z}`
        ? __InnerCall<X, __InnerConcat<'>', __Inner<'>', Z, `${I}Option<`>>>
        : K extends `Vec<${infer Z}`
          ? __InnerCall<X, __InnerConcat<'>', __Inner<'>', Z, `${I}Vec<`>>>
          : K extends `(${infer Z}`
            ? __InnerCall<X, __InnerConcat<')', __Inner<')', Z, `${I}(`>>>
            : K extends `[${infer Z}`
              ? __InnerCall<X, __InnerConcat<']', __Inner<']', Z, `${I}[`>>>
              : K extends `${infer C}${infer Z}`
                ? __Inner<X, Z, `${I}${C}`>
                : ['', I];

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

export type __Tuple<R extends [string, string]> =
  // This is not great, should parse and then check the length... not sure how
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  R[1] extends `${infer A},${infer B}`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore excessive comparison depth
    ? ITuple<__TupleParams<__Inner<',', R[1]>>>
    : __Expand<R[1]>;
export type __TupleParams<R extends [string, string]> =
  R[0] extends ''
    ? [__Expand<R[1]>]
    : R[1] extends ''
      ? __TupleParams<__Inner<',', R[0]>>
      : [__Expand<R[1]>, ...__TupleParams<__Inner<',', R[0]>>];

// vec support with short-circuit for u8
export type __Vec<R extends [string, string]> =
  R[1] extends 'u8'
    ? Bytes
    : Vec<__Expand<R[1]>>;

// fixed vec support
export type __VecFixed<R extends [string, string]> = __VecFixedInner<__Inner<';', R[1]>>;
export type __VecFixedInner<R extends [string, string]> =
  R[1] extends 'u8'
    ? Raw
    : VecFixed<__Expand<R[1]>>;

export type __Unwrap<K extends string, T extends Codec> =
  K extends `Compact<${infer X}`
    ? __Compact<__Inner<'>', X>>
    : K extends `Option<${infer X}`
      ? __Option<__Inner<'>', X>>
      : K extends `Vec<${infer X}`
        ? __Vec<__Inner<'>', X>>
        : K extends `[${infer X}`
          ? __VecFixed<__Inner<']', X>>
          : K extends `(${infer X}`
            ? __Tuple<__Inner<')', X>>
            : T;
