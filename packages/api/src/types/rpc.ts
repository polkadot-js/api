// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyFunction, Callback, Codec } from '@polkadot/types/types';

import { Observable } from 'rxjs';

import { ApiTypes, Push, PromiseResult, RxResult, UnsubscribePromise } from './base';

export interface RpcRxResult<F extends AnyFunction> extends RxResult<F> {
  raw (...args: Parameters<F>): Observable<Uint8Array & Codec>;
}

export interface RpcPromiseResult<F extends AnyFunction> extends PromiseResult<F> {
  raw (...args: Parameters<F>): Promise<Uint8Array & Codec>;
  raw (...args: Push<Parameters<F>, Callback<Uint8Array & Codec>>): UnsubscribePromise;
}

// FIXME The day TS has higher-kinded types, we can remove this hardcoded stuff
export type RpcMethodResult<ApiType extends ApiTypes, F extends AnyFunction> = ApiType extends 'rxjs'
  ? RpcRxResult<F>
  : RpcPromiseResult<F>;

export type DecoratedRpcSection<ApiType extends ApiTypes, Section> = {
  [Method in keyof Section]: Section[Method] extends AnyFunction
    ? RpcMethodResult<ApiType, Section[Method]>
    : never
}

export type DecoratedRpc<ApiType extends ApiTypes, AllSections> = {
  [Section in keyof AllSections]: DecoratedRpcSection<ApiType, AllSections[Section]>
}
