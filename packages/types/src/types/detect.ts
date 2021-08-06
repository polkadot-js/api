// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Struct, Vec, VecFixed } from '../codec';
import type { CompactEncodable } from '../codec/types';
import type { Bytes } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ICompact, IOption, ITuple, IU8a, IVec } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec, K extends string> = Expand<K, T>;

export type DetectConstructor<T extends Codec, K extends string> = Constructor<Expand<K, T>>;

export type Expand<K extends string, T extends Codec = Codec> = __Internal<Trim<K>, T>;

// trim leading and trailing spaces
export type Trim<K extends string> =
  K extends ` ${infer X}`
    ? Trim<X>
    : K extends `${infer X} `
      ? Trim<X>
      : K;

export type __DetectableTypes = CompactEncodable | ICompact<CompactEncodable> | IOption<Codec> | ITuple<Codec[]> | IU8a | IVec<Codec> | Struct;

export type __Internal<K extends string, T extends Codec> =
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    : T extends __DetectableTypes
      ? T
      : __Unwrap<K, T>;

// ensure whatever we wrap is always Compact-capable
export type __Compact<T extends Codec> =
  T extends CompactEncodable
    ? Compact<T>
    : never;

// currently we only support 5 levels for auto-extract
export type __Tuple<X extends string, T extends Codec> =
  X extends `${infer A},${infer B},${infer C},${infer D},${infer E}`
    ? ITuple<[Expand<A>, Expand<B>, Expand<C>, Expand<D>, Expand<E>]>
    : X extends `${infer A},${infer B},${infer C},${infer D}`
      ? ITuple<[Expand<A>, Expand<B>, Expand<C>, Expand<D>]>
      : X extends `${infer A},${infer B},${infer C}`
        ? ITuple<[Expand<A>, Expand<B>, Expand<C>]>
        : X extends `${infer A},${infer B}`
          ? ITuple<[Expand<A>, Expand<B>]>
          : X extends `${infer A}`
            ? Expand<A>
            : T;

// vec support with short-circuit for u8
export type __Vec<X extends string, T extends Codec> =
  Trim<X> extends 'u8'
    ? Bytes
    : Vec<Expand<X, T>>;

// fixed vec support
export type __VecFixed<X extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  X extends `${infer Y};${infer _}`
    ? Trim<Y> extends 'u8'
      ? Raw
      : VecFixed<Expand<Y>>
    : never;

export type __Unwrap<K extends string, T extends Codec> =
  K extends `Compact<${infer X}>`
    ? __Compact<Expand<X>>
    : K extends `Option<${infer X}>`
      ? Option<Expand<X>>
      : K extends `Vec<${infer X}>`
        ? __Vec<X, T>
        : K extends `[${infer X}]`
          ? __VecFixed<X>
          : K extends `(${infer X})`
            ? __Tuple<X, T>
            : T;
