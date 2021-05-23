// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction, Callback, Codec, CodecArg } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';

export type Push<T extends readonly unknown[], V> = [...T, V]

export type DropLast<T extends readonly unknown[]> = T extends readonly [...infer U, any?] ? U : [...T];

export type ApiTypes = 'promise' | 'rxjs';

// Returns the inner type of an Observable
export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

export type VoidFn = () => void;

export type UnsubscribePromise = Promise<VoidFn>;

// FIXME The day TS has higher-kinded types, we can remove this hardcoded stuff
export type PromiseOrObs<ApiType extends ApiTypes, T> = ApiType extends 'rxjs'
  ? Observable<T>
  : Promise<T>;

// Here are the return types of these parts of the api:
// - api.query.*.*: no exact typings
// - api.tx.*.*: SubmittableExtrinsic<ApiType extends ApiTypes>
// - api.derive.*.*: MethodResult<ApiType, F>
// - api.rpc.*.*: no exact typings (for now, FIXME: should be  MethodResult<ApiType, F>, like in derive)

// These are the types that don't lose type information (used for api.derive.*)
// Also use these for api.rpc.* https://github.com/polkadot-js/api/issues/1009
export interface RxResult<F extends AnyFunction> {
  (...args: Parameters<F>): Observable<ObsInnerType<ReturnType<F>>>;
  <T>(...args: Parameters<F>): Observable<T>;
}

export interface PromiseResult<F extends AnyFunction> {
  (...args: Parameters<F>): Promise<ObsInnerType<ReturnType<F>>>;
  (...args: Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>): UnsubscribePromise;
  <T extends Codec | Codec[]>(...args: Parameters<F>): Promise<T>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <T extends Codec | Codec[]>(...args: Push<Parameters<F>, Callback<T>>): UnsubscribePromise;
}

// FIXME The day TS has higher-kinded types, we can remove this hardcoded stuff
export type MethodResult<ApiType extends ApiTypes, F extends AnyFunction> = ApiType extends 'rxjs'
  ? RxResult<F>
  : PromiseResult<F>;

// In the abstract `decorateMethod` in Base.ts, we can also pass in some meta-
// information. This describes it.
export interface DecorateMethodOptions {
  methodName?: string;
  overrideNoSub?: (...args: unknown[]) => Observable<Codec>;
}

export type DecorateFn <T extends Codec> = (...args: any[]) => Observable<T>;

// FIXME We need a solution for NMap
export interface PaginationOptions<ArgType = CodecArg> {
  args: ArgType[];
  pageSize: number;
  startKey?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type DecorateMethod<ApiType extends ApiTypes> = <Method extends (...args: any[]) => Observable<any>>(method: Method, options?: DecorateMethodOptions) => any;
