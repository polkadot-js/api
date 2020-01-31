// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { u64 } from '@polkadot/types';
import { Hash } from '@polkadot/types/interfaces';
import { AnyFunction, Callback, Codec, CodecArg } from '@polkadot/types/types';
import StorageKey, { StorageEntry } from '@polkadot/types/primitive/StorageKey';

import { ApiTypes, MethodResult, ObsInnerType, PromiseOrObs, UnsubscribePromise } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedQueries<ApiType extends ApiTypes> { }

export type AugmentedQuery<ApiType extends ApiTypes, F extends AnyFunction> = MethodResult<ApiType, F> & StorageEntryBase<ApiType, F>

// This is the most generic typings we can have for a storage entry function
type GenericStorageEntryFunction = (arg1?: CodecArg, arg2?: CodecArg) => Observable<Codec>

export type QueryableStorageEntry<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? AugmentedQuery<'rxjs', GenericStorageEntryFunction>
    : AugmentedQuery<'promise', GenericStorageEntryFunction> & StorageEntryPromiseOverloads;

export interface StorageEntryBase<ApiType extends ApiTypes, F extends AnyFunction> {
  at: (hash: Hash | Uint8Array | string, ...args: Parameters<F>) => PromiseOrObs<ApiType, ObsInnerType<ReturnType<F>>>;
  creator: StorageEntry;
  entries: () => PromiseOrObs<ApiType, [StorageKey, ObsInnerType<ReturnType<F>>][]>;
  hash: (...args: Parameters<F>) => PromiseOrObs<ApiType, Hash>;
  key: (...args: Parameters<F>) => string;
  size: (...args: Parameters<F>) => PromiseOrObs<ApiType, u64>;
  multi: ApiType extends 'rxjs' ? StorageEntryObservableMulti : StorageEntryPromiseMulti;
}

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

export interface QueryableModuleStorage<ApiType extends ApiTypes> {
  [index: string]: QueryableStorageEntry<ApiType>;
}

export type QueryableStorageMultiArg<ApiType extends ApiTypes> =
  QueryableStorageEntry<ApiType> |
  [QueryableStorageEntry<ApiType>, ...CodecArg[]];

export interface QueryableStorageMultiBase<ApiType extends ApiTypes> {
  <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[]): Observable<T>;
}

export interface QueryableStorageMultiPromise<ApiType extends ApiTypes> {
  <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[], callback: Callback<T>): UnsubscribePromise;
}

export type QueryableStorageMulti<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? QueryableStorageMultiBase<ApiType>
    : QueryableStorageMultiPromise<ApiType>;

export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  [index: string]: QueryableModuleStorage<ApiType>;
}
