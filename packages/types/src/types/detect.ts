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
  K extends ` ${infer X} ` | ` ${infer X}` | `${infer X} `
    ? Trim<X>
    : K;

export type __Wrappers = 'Compact' | 'Option' | 'Vec';

export type __Expand<K extends string, T extends Codec = Codec> = __ExpandImpl<Trim<K>, T>;
export type __ExpandImpl<K extends string, T extends Codec> =
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
    : never;

// handle option types
export type __Option<X extends string> = __OptionImpl<__Expand<X>>;
export type __OptionImpl<T extends Codec> =
  T extends Codec
    ? Option<T>
    : never;

export type __Params<X extends string> = __ParamsImpl<Trim<X>>;
export type __ParamsImpl<X extends string> =
  X extends `Vec<${infer A}>,${infer B}`
    ? [__Vec<A>, ...__Params<B>]
    : X extends `Option<${infer A}>,${infer B}`
      ? [__Option<A>, ...__Params<B>]
      : X extends `Vec<${infer A}>`
        ? [__Vec<A>]
        : X extends `Option<${infer A}>`
          ? [__Option<A>]
          : X extends `${infer A},${infer B}`
            ? __ParamsTuple<A, B>
            : [__ParamsExpand<X>];
export type __ParamsTuple<A extends string, B extends string> = __ParamsTupleImpl<Trim<A>, Trim<B>>;
export type __ParamsTupleImpl<A extends string, B extends string> =
  B extends `(${infer C}),${infer D}`
    ? [__ParamsExpand<A>, __Tuple<C>, ...__Params<D>]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    : B extends `[${infer C}]` | `(${infer C})`
      ? [__ParamsExpand<A>, __Expand<B>]
      : [__ParamsExpand<A>, ...__Params<B>];
export type __ParamsExpand<X extends string> = __ParamsExpandImpl<Trim<X>>;
export type __ParamsExpandImpl<X extends string> =
  // flatten nested tuples
  X extends `(${infer A})` | `(${infer A}` | `${infer A})`
    ? __ParamsExpand<A>
    : __Expand<X>;

export type __Tuple<X extends string> = __TupleImpl<Trim<X>>;
export type __TupleImpl<X extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  X extends `${infer A},${infer B}`
    ? ITuple<__Params<X>>
    : __Expand<X>;

// vec support with short-circuit for u8
export type __Vec<X extends string> = __VecImpl<Trim<X>>;
export type __VecImpl<X extends string> =
  X extends 'u8'
    ? Bytes
    : Vec<__Expand<X>>;

// fixed vec support
export type __VecFixed<X extends string, L extends string> = __VecFixedImpl<Trim<X>, L>;
export type __VecFixedImpl<X extends string, L extends string> =
  L extends string
    ? X extends 'u8'
      ? Raw
      : VecFixed<__Expand<X>>
    : never;

export type __Unwrap<K extends string, T extends Codec> =
  K extends `Compact<${infer X}>`
    ? __Compact<X>
    : K extends `Option<${infer X}>`
      ? __Option<X>
      : K extends `Vec<${infer X}>`
        ? __Vec<X>
        : K extends `[${infer X};${infer L}]`
          ? __VecFixed<X, L>
          : K extends `(${infer X})`
            ? __Tuple<X>
            : T;
