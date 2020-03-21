// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { AnyFunction, Callback, Codec } from '@polkadot/types/types';

// Prepend an element V onto the beginning of a tuple T.
// Cons<1, [2,3,4]> is [1,2,3,4]
export type Cons<V, T extends any[]> = ((v: V, ...t: T) => void) extends ((...r: infer R) => void)
  ? R
  : never;

// Append an element V onto the end of a tuple T
// Push<[1,2,3],4> is [1,2,3,4]
// note that this DOES NOT PRESERVE optionality/readonly in tuples.
// So unfortunately Push<[1, 2?, 3?], 4> is [1,2|undefined,3|undefined,4]
export type Push<T extends any[], V> = (
  (
    Cons<any, Required<T>> extends infer R
      ? { [K in keyof R]: K extends keyof T ? T[K] : V }
      : never
  ) extends infer P
    ? P extends any[] ? P : never
    : never
);

export type ApiTypes = 'promise' | 'rxjs';

// Returns the inner type of an Observable
export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

export type UnsubscribePromise = Promise<() => void>;

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
}

export type DecorateMethod<ApiType extends ApiTypes> = <Method extends (...args: any[]) => Observable<any>>(method: Method, options?: DecorateMethodOptions) => any;
