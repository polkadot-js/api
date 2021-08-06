// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Struct, Vec, VecFixed } from '../codec';
import type { AbstractArray } from '../codec/AbstractArray';
import type { CompactEncodable } from '../codec/types';
import type { Bytes } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ITuple } from './interfaces';
import type { InterfaceTypes } from './registry';

// Vec & Tuple extends AbstractArray
export type KnownDetects = Compact<CompactEncodable> | Option<Codec> | AbstractArray<Codec> | Raw | Struct;

export type DetectCodec<T extends Codec, K extends string> = Expand<K, T>;

export type DetectConstructor<T extends Codec, K extends string> = Constructor<Expand<K, T>>;

export type Expand<K extends string, T extends Codec = Codec> = K extends keyof InterfaceTypes
  ? InterfaceTypes[K]
  // these are the ones we short-circuit in the wrap itself
  : T extends KnownDetects
    ? T
    : // strip any leading spaces from the types...
    K extends ` ${infer I}`
      ? Expand<I, T>
      // ... and any trailing spaces
      : K extends `${infer I} `
        ? Expand<I, T>
        : ExpandWrap<K, T>;

// ensure whatever we wrap is always Compact-capable
export type ExpandCompact<T extends Codec> = T extends CompactEncodable
  ? Compact<T>
  : never;

// currently we only support 5 levels for auto-extract
export type ExpandTuple<X extends string, T extends Codec> = X extends `${infer A},${infer B},${infer C},${infer D},${infer E}`
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
export type ExpandVec<X extends string, T extends Codec> = X extends 'u8'
  ? Bytes
  : Vec<Expand<X, T>>;

// fixed vec support
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ExpandVecFixed<X extends string> = X extends `${infer Y};${infer _}`
  ? Y extends 'u8'
    ? Raw
    : VecFixed<Expand<Y>>
  : never;

export type ExpandWrap<K extends string, T extends Codec> = K extends `Compact<${infer X}>`
  ? ExpandCompact<Expand<X>>
  : K extends `Option<${infer X}>`
    ? Option<Expand<X>>
    : K extends `Vec<${infer X}>`
      ? ExpandVec<X, T>
      : K extends `[${infer X}]`
        ? ExpandVecFixed<X>
        : K extends `(${infer X})`
          ? ExpandTuple<X, T>
          : T;
