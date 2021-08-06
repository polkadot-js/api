// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option, Raw, Vec, VecFixed } from '../codec';
import type { CompactEncodable } from '../codec/types';
import type { Bytes } from '../primitive';
import type { Codec, Constructor } from './codec';
import type { ITuple } from './interfaces';
import type { InterfaceTypes } from './registry';

export type DetectCodec<T extends Codec, K extends string> = Expand<K, T>;

export type DetectConstructor<T extends Codec, K extends string> = Constructor<Expand<K, T>>;

export type Expand<K extends string, T extends Codec = Codec> =
  K extends keyof InterfaceTypes
    ? InterfaceTypes[K]
    // these are the ones we short-circuit in the wrap itself
    : T extends Compact<CompactEncodable> | Option<Codec> | ITuple<Codec[]> | Vec<Codec> | Raw
      ? T
      : // strip any leading spaces from the types...
      K extends ` ${infer I}`
        ? Expand<I, T>
        // ... and any trailing spaces
        : K extends `${infer I} `
          ? Expand<I, T>
          : ExpandWrap<K, T>;

export type ExpandCompact<T extends Codec> =
  T extends CompactEncodable
    ? Compact<T>
    : never;

// currently we only support 5 levels for auto-extract
export type ExpandTuple<K extends string, T extends Codec> =
  K extends `${infer A},${infer B},${infer C},${infer D},${infer E}`
    ? ITuple<[Expand<A>, Expand<B>, Expand<C>, Expand<D>, Expand<E>]>
    : K extends `${infer A},${infer B},${infer C},${infer D}`
      ? ITuple<[Expand<A>, Expand<B>, Expand<C>, Expand<D>]>
      : K extends `${infer A},${infer B},${infer C}`
        ? ITuple<[Expand<A>, Expand<B>, Expand<C>]>
        : K extends `${infer A},${infer B}`
          ? ITuple<[Expand<A>, Expand<B>]>
          : K extends `${infer A}`
            ? Expand<A>
            : T;

// vec support with short-circuit for u8
export type ExpandVec<K extends string, T extends Codec> =
  K extends 'u8'
    ? Bytes
    : Vec<Expand<K, T>>;

// fixed vec support
export type ExpandVecFixed<K extends string, T extends Codec> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  K extends `${infer I};${infer _}`
    ? I extends 'u8'
      ? Raw
      : VecFixed<Expand<I>>
    : T;

export type ExpandWrap<K extends string, T extends Codec> =
  K extends `Compact<${infer I}>`
    ? ExpandCompact<Expand<I>>
    : K extends `Option<${infer I}>`
      ? Option<Expand<I>>
      : K extends `Vec<${infer I}>`
        ? ExpandVec<I, T>
        : K extends `[${infer I}]`
          ? ExpandVecFixed<I, T>
          : K extends `(${infer I})`
            ? ExpandTuple<I, T>
            : T;
