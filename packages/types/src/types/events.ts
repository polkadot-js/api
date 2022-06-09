// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, Codec, ITuple } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { EventMetadataLatest } from '../interfaces/metadata';
import type { Hash } from '../interfaces/runtime';
import type { EventId, Phase } from '../interfaces/system';

// https://catchts.com/union-array
// https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type/50375286
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

// Converts union to overloaded function
type UnionToOvlds<U> = UnionToIntersection<
U extends any
  ? (f: U) => void
  : never
>;

type PopUnion<U> =
  UnionToOvlds<U> extends (a: infer A) => void
    ? A
    : never;

type IsUnion<T> =
  [T] extends [UnionToIntersection<T>]
    ? false
    : true;

type UnionToArray<T, A extends unknown[] = []> =
  IsUnion<T> extends true
    ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
    : [T, ...A];

type StructTypes<T extends Record<string, Codec>, A> =
  A extends [infer K, ...infer X]
    ? K extends keyof T
      ? T[K] extends Codec
        ? [T[K], ...StructTypes<T, X>]
        : never
      : never
    : [];

type ForceTuple<T> =
  T extends Codec[]
    ? T
    : never;

export interface IEventRecord<T extends Codec[] | Record<string, Codec>> {
  readonly phase: Phase;
  readonly event: IEvent<T>;
  readonly topics: Hash[];
}

export interface IEventData {
  readonly meta: EventMetadataLatest;
  readonly method: string;
  readonly section: string;
  readonly typeDef: TypeDef[];
}

export interface IEventLike {
  readonly index: unknown;
  readonly method: unknown;
  readonly section: unknown;
}

export interface IEvent<T extends AnyTuple | Record<string, Codec>> extends IEventLike {
  readonly data: (
    T extends Record<string, Codec>
      ? ForceTuple<StructTypes<T, UnionToArray<Extract<keyof T, any>>>> & T
      : T extends AnyTuple
        ? ITuple<T>
        : ITuple<[]>
  ) & IEventData;
  readonly index: EventId;
  readonly method: string;
  readonly section: string;
}
