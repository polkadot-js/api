// Copyright 2017-2026 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { StorageKey, u64 } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { AnyFunction, AnyTuple, Callback, Codec, IStorageKey } from '@polkadot/types/types';
import type { ApiTypes, DropLast, EmptyBase, MethodResult, PaginationOptions, PromiseOrObs, ReturnCodec, UnsubscribePromise } from './base.js';

declare const storageEntryResult: unique symbol;

interface StorageEntryResult<R extends Codec> {
  readonly [storageEntryResult]?: R;
}

type StorageEntryObservableMulti<R extends Codec = Codec> = <T extends Codec = R>(args: unknown[]) => Observable<T[]>;

interface StorageEntryPromiseMulti<R extends Codec = Codec> {
  <T extends Codec = R>(args: unknown[]): Promise<T[]>;
  <T extends Codec = R>(args: unknown[], callback: Callback<T[]>): UnsubscribePromise;
}

export interface StorageEntryPromiseOverloads {
  (arg1?: unknown, arg2?: unknown, arg3?: unknown): Promise<Codec>;
  <T extends Codec>(arg1?: unknown, arg2?: unknown, arg3?: unknown): Promise<T>;
  <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg: unknown, callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg1: unknown, arg2: unknown, callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg1: unknown, arg2: unknown, arg3: unknown, callback: Callback<T>): UnsubscribePromise;
}

export interface StorageEntryPromiseOverloadsAt {
  (arg1?: unknown, arg2?: unknown, arg3?: unknown): Promise<Codec>;
  <T extends Codec>(arg1?: unknown, arg2?: unknown, arg3?: unknown): Promise<T>;
}

// This is the most generic typings we can have for a storage entry function
export type GenericStorageEntryFunction = (...args: unknown[]) => Observable<Codec>

export type QueryableStorageEntry<ApiType extends ApiTypes, A extends AnyTuple = AnyTuple> =
  ApiType extends 'rxjs'
    ? AugmentedQuery<'rxjs', GenericStorageEntryFunction, A>
    : AugmentedQuery<'promise', GenericStorageEntryFunction, A> & StorageEntryPromiseOverloads;

export type QueryableStorageEntryAt<ApiType extends ApiTypes, A extends AnyTuple = AnyTuple> =
  ApiType extends 'rxjs'
    ? AugmentedQueryAt<'rxjs', GenericStorageEntryFunction, A>
    : AugmentedQueryAt<'promise', GenericStorageEntryFunction, A> & StorageEntryPromiseOverloadsAt;

export interface StorageEntryBase<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> extends StorageEntryBaseAt<ApiType, F, A> {
  /**
   * @deprecated Use api.at(<blockHash>)
   */
  at: <T = ReturnCodec<F>>(hash: Hash | Uint8Array | string, ...args: Parameters<F>) => PromiseOrObs<ApiType, T>;
  creator: StorageEntry;
  /**
   * @deprecated Use api.at(<blockHash>)
   */
  entriesAt: <T = ReturnCodec<F>, K extends AnyTuple = A>(hash: Hash | Uint8Array | string, ...args: DropLast<Parameters<F>>) => PromiseOrObs<ApiType, [StorageKey<K>, T][]>;
  /**
   * @deprecated Use api.at(<blockHash>)
   */
  keysAt: <K extends AnyTuple = A> (hash: Hash | Uint8Array | string, ...args: DropLast<Parameters<F>>) => PromiseOrObs<ApiType, StorageKey<K>[]>;
  /**
   * @deprecated Use api.at(<blockHash>)
   */
  sizeAt: (hash: Hash | Uint8Array | string, ...args: Parameters<F>) => PromiseOrObs<ApiType, u64>;
  multi: ApiType extends 'rxjs'
    ? StorageEntryObservableMulti<ReturnCodec<F>>
    : StorageEntryPromiseMulti<ReturnCodec<F>>;
}

export interface StorageEntryBaseAt<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> {
  entries: <T = ReturnCodec<F>, K extends AnyTuple = A>(...args: DropLast<Parameters<F>>) => PromiseOrObs<ApiType, [StorageKey<K>, T][]>;
  entriesPaged: <T = ReturnCodec<F>, K extends AnyTuple = A>(opts: PaginationOptions<Parameters<F>[0]>) => PromiseOrObs<ApiType, [StorageKey<K>, T][]>;
  hash: (...args: Parameters<F>) => PromiseOrObs<ApiType, Hash>;
  is: (key: IStorageKey<AnyTuple>) => key is IStorageKey<A>;
  key: (...args: Parameters<F>) => string;
  keyPrefix: (...args: DropLast<Parameters<F>>) => string;
  keys: <K extends AnyTuple = A> (...args: DropLast<Parameters<F>>) => PromiseOrObs<ApiType, StorageKey<K>[]>;
  keysPaged: <K extends AnyTuple = A> (opts: PaginationOptions<Parameters<F>[0]>) => PromiseOrObs<ApiType, StorageKey<K>[]>;
  size: (...args: Parameters<F>) => PromiseOrObs<ApiType, u64>;
}

export type QueryableModuleStorage<ApiType extends ApiTypes> = Record<string, QueryableStorageEntry<ApiType, AnyTuple>>;

export type QueryableModuleStorageAt<ApiType extends ApiTypes> = Record<string, QueryableStorageEntryAt<ApiType, AnyTuple>>;

export type QueryableStorageMultiArg<ApiType extends ApiTypes> =
  QueryableStorageEntry<ApiType> |
  [QueryableStorageEntry<ApiType>, ...unknown[]];

type QueryableStorageMultiInput<ApiType extends ApiTypes> =
  QueryableStorageEntry<ApiType> |
  readonly [QueryableStorageEntry<ApiType>, ...unknown[]];

type QueryableStorageMultiCallResult<Call> =
  Call extends readonly [infer Entry, ...unknown[]]
    ? Entry extends StorageEntryResult<infer R>
      ? R
      : Codec
    : Call extends StorageEntryResult<infer R>
      ? R
      : Codec;

type QueryableStorageMultiResult<ApiType extends ApiTypes, Calls extends readonly QueryableStorageMultiInput<ApiType>[]> = {
  -readonly [Index in keyof Calls]: QueryableStorageMultiCallResult<Calls[Index]>;
};

type QueryableStorageMultiReturn<ApiType extends ApiTypes, T extends Codec[], Calls extends readonly QueryableStorageMultiInput<ApiType>[]> =
  [T] extends [never]
    ? QueryableStorageMultiResult<ApiType, Calls>
    : T;

export interface QueryableStorageMultiBase<ApiType extends ApiTypes> {
  <
    T extends Codec[] = never,
    Calls extends readonly QueryableStorageMultiInput<ApiType>[] = readonly QueryableStorageMultiInput<ApiType>[]
  >(calls: readonly [...Calls]): Observable<QueryableStorageMultiReturn<ApiType, T, Calls>>;
  <T extends Codec[] = Codec[]>(calls: readonly QueryableStorageMultiInput<ApiType>[]): Observable<T>;
}

export interface QueryableStorageMultiPromise<ApiType extends ApiTypes> {
  <
    T extends Codec[] = never,
    Calls extends readonly QueryableStorageMultiInput<ApiType>[] = readonly QueryableStorageMultiInput<ApiType>[]
  >(calls: readonly [...Calls], callback: Callback<QueryableStorageMultiReturn<ApiType, T, Calls>>): UnsubscribePromise;
  <T extends Codec[] = Codec[]>(calls: readonly QueryableStorageMultiInput<ApiType>[], callback: Callback<T>): UnsubscribePromise;
  <
    T extends Codec[] = never,
    Calls extends readonly QueryableStorageMultiInput<ApiType>[] = readonly QueryableStorageMultiInput<ApiType>[]
  >(calls: readonly [...Calls]): Promise<QueryableStorageMultiReturn<ApiType, T, Calls>>;
  <T extends Codec[] = Codec[]>(calls: readonly QueryableStorageMultiInput<ApiType>[]): Promise<T>;
}

export type QueryableStorageMulti<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? QueryableStorageMultiBase<ApiType>
    : QueryableStorageMultiPromise<ApiType>;

export type AugmentedQuery<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> = MethodResult<ApiType, F> & StorageEntryBase<ApiType, F, A> & StorageEntryResult<ReturnCodec<F>>;

export type AugmentedQueryAt<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> = MethodResult<ApiType, F> & StorageEntryBaseAt<ApiType, F, A> & StorageEntryResult<ReturnCodec<F>>;

// backwards compatibility-only
export type AugmentedQueryDoubleMap<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> = AugmentedQuery<ApiType, F, A>;

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedQueries<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleStorage<ApiType>;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface QueryableStorageAt<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  [key: string]: QueryableModuleStorageAt<ApiType>;
}
