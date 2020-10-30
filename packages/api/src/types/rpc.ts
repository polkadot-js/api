// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AnyFunction, Callback, Codec } from '@polkadot/types/types';

import { Observable } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApiTypes, Push, PromiseResult, RxResult, UnsubscribePromise } from './base';

export interface RpcRxResult<F extends AnyFunction> extends RxResult<F> {
  json (...args: Parameters<F>): Observable<Record<string, any> & Codec>;
  raw (...args: Parameters<F>): Observable<Uint8Array & Codec>;
}

export interface RpcPromiseResult<F extends AnyFunction> extends PromiseResult<F> {
  json (...args: Parameters<F>): Promise<Record<string, any> & Codec>;
  json (...args: Push<Parameters<F>, Callback<Record<string, any> & Codec>>): UnsubscribePromise;
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
