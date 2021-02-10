// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageKey, u64 } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { AnyFunction, AnyTuple, Callback, Codec, CodecArg, IStorageKey } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { ApiTypes, MethodResult, ObsInnerType, PaginationOptions, PromiseOrObs, UnsubscribePromise } from './base';

interface StorageEntryObservableMulti {
  <T extends Codec>(args: (CodecArg[] | CodecArg)[]): Observable<T[]>;
}

interface StorageEntryPromiseMulti {
  <T extends Codec>(args: (CodecArg[] | CodecArg)[]): Promise<T[]>;
  <T extends Codec>(args: (CodecArg[] | CodecArg)[], callback: Callback<T[]>): UnsubscribePromise;
}

export interface StorageEntryPromiseOverloads {
  (arg1?: CodecArg, arg2?: CodecArg): Promise<Codec>;
  <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg): Promise<T>;
  <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg: CodecArg, callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg1: CodecArg, arg2: CodecArg, callback: Callback<T>): UnsubscribePromise;
}

// This is the most generic typings we can have for a storage entry function
type GenericStorageEntryFunction = (arg1?: CodecArg, arg2?: CodecArg) => Observable<Codec>

export type QueryableStorageEntry<ApiType extends ApiTypes, A extends AnyTuple = AnyTuple> =
  ApiType extends 'rxjs'
    // eslint-disable-next-line no-use-before-define
    ? AugmentedQuery<'rxjs', GenericStorageEntryFunction, A>
    // eslint-disable-next-line no-use-before-define
    : AugmentedQuery<'promise', GenericStorageEntryFunction, A> & StorageEntryPromiseOverloads;

export interface StorageEntryBase<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> {
  at: <T extends Codec | any = ObsInnerType<ReturnType<F>>>(hash: Hash | Uint8Array | string, ...args: Parameters<F>) => PromiseOrObs<ApiType, T>;
  creator: StorageEntry;
  entries: <T extends Codec | any = ObsInnerType<ReturnType<F>>, K extends AnyTuple = A>(arg?: Parameters<F>[0]) => PromiseOrObs<ApiType, [StorageKey<K>, T][]>;
  entriesAt: <T extends Codec | any = ObsInnerType<ReturnType<F>>, K extends AnyTuple = A>(hash: Hash | Uint8Array | string, arg?: Parameters<F>[0]) => PromiseOrObs<ApiType, [StorageKey<K>, T][]>;
  entriesPaged: <T extends Codec | any = ObsInnerType<ReturnType<F>>, K extends AnyTuple = A>(opts: PaginationOptions<Parameters<F>[0]>) => PromiseOrObs<ApiType, [StorageKey<K>, T][]>;
  hash: (...args: Parameters<F>) => PromiseOrObs<ApiType, Hash>;
  is: (key: IStorageKey<AnyTuple>) => key is IStorageKey<A>;
  key: (...args: Parameters<F>) => string;
  keyPrefix: () => string;
  keys: <K extends AnyTuple = A> (arg?: any) => PromiseOrObs<ApiType, StorageKey<K>[]>;
  keysAt: <K extends AnyTuple = A> (hash: Hash | Uint8Array | string, arg?: any) => PromiseOrObs<ApiType, StorageKey<K>[]>;
  keysPaged: <K extends AnyTuple = A> (opts: PaginationOptions<Parameters<F>[0]>) => PromiseOrObs<ApiType, StorageKey<K>[]>;
  // @deprecated The underlying RPC this been marked unsafe and is generally not exposed
  range: <T extends Codec | any = ObsInnerType<ReturnType<F>>>([from, to]: [Hash | Uint8Array | string, Hash | Uint8Array | string | undefined] | [Hash | Uint8Array | string], ...args: Parameters<F>) => PromiseOrObs<ApiType, [Hash, T][]>;
  size: (...args: Parameters<F>) => PromiseOrObs<ApiType, u64>;
  sizeAt: (hash: Hash | Uint8Array | string, ...args: Parameters<F>) => PromiseOrObs<ApiType, u64>;
  multi: ApiType extends 'rxjs' ? StorageEntryObservableMulti : StorageEntryPromiseMulti;
}

export interface QueryableModuleStorage<ApiType extends ApiTypes> {
  [index: string]: QueryableStorageEntry<ApiType, AnyTuple>;
}

export type QueryableStorageMultiArg<ApiType extends ApiTypes> =
  QueryableStorageEntry<ApiType> |
  [QueryableStorageEntry<ApiType>, ...CodecArg[]];

export interface QueryableStorageMultiBase<ApiType extends ApiTypes> {
  <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[]): Observable<T>;
}

export interface QueryableStorageMultiPromise<ApiType extends ApiTypes> {
  <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[], callback: Callback<T>): UnsubscribePromise;
  <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[]): Promise<T>;
}

export type QueryableStorageMulti<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? QueryableStorageMultiBase<ApiType>
    : QueryableStorageMultiPromise<ApiType>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedQueries<ApiType extends ApiTypes> { }

export interface StorageEntryDoubleMap<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple> extends StorageEntryBase<ApiType, F, A> {
  keyPrefix: (key1?: Parameters<F>[0]) => string;
}

export type AugmentedQuery<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> = MethodResult<ApiType, F> & StorageEntryBase<ApiType, F, A>;

export type AugmentedQueryDoubleMap<ApiType extends ApiTypes, F extends AnyFunction, A extends AnyTuple = AnyTuple> = MethodResult<ApiType, F> & StorageEntryDoubleMap<ApiType, F, A>;
