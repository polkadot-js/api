// Copyright 2017-2023 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AnyFunction, Callback, Codec } from '@polkadot/types/types';

export type Push<T extends readonly unknown[], V> = [...T, V]

export type DropLast<T extends readonly unknown[]> = T extends readonly [...infer U, any?] ? U : [...T];

export type ApiTypes = 'promise' | 'rxjs';

// Returns the inner type of an Observable
export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

export type VoidFn = () => void;

export type UnsubscribePromise = Promise<VoidFn>;

export type PromiseOrObs<ApiType extends ApiTypes, T> =
  ApiType extends 'rxjs'
    ? Observable<T>
    : Promise<T>;

export type MethodResult<ApiType extends ApiTypes, F extends AnyFunction> =
  ApiType extends 'rxjs'
    ? RxResult<F>
    : PromiseResult<F>;

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
  <T extends Codec | Codec[]>(...args: Push<Parameters<F>, Callback<T>>): UnsubscribePromise;
}

// In the abstract `decorateMethod` in Base.ts, we can also pass in some meta-
// information. This describes it.
export interface DecorateMethodOptions {
  methodName?: string;
  overrideNoSub?: (...args: unknown[]) => Observable<Codec>;
}

export type DecorateFn <T extends Codec> = (...args: any[]) => Observable<T>;

// FIXME This is _certainly_ better than the previous (very long-running) attempt at typing
// this, https://github.com/polkadot-js/api/blob/cf1fabaecf3b5424ab472e1253928c9be88c0f28/packages/api-base/src/types/base.ts#L65-L66
// but it is not close to being "perfect". We do lose the method arguments along the way.
//
// The issue here really is the method arguments/returns and how that relates to the
// arguments and return of the T function that is passed through. We should have -
//
// - method arguments (should?) relate to the same arguments as T
// - method returntype (should?) relate to the unwrapped return T
//
// (And doing so, or fixing it, has some adverse effects on api/base/Decorate.ts where
// we are employing a bit of casting to get things in the right shape)
export type DecorateMethod<_ApiType extends ApiTypes> =
  <T = <R> (...args: any[]) => R>(method: (...args: any[]) => Observable<any>, options?: DecorateMethodOptions) => T;

export interface PaginationOptions<A = unknown> {
  args: A[];
  pageSize: number;
  startKey?: string;
}

type AsCodec<R extends Codec | any> = R extends Codec
  ? R
  : Codec;

export type ReturnCodec<F extends AnyFunction> = AsCodec<ObsInnerType<ReturnType<F>>>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EmptyBase<_> {
  // this is use to allow use to have unused vars in augmented interfaces,
  // so intentionally left empty
}
