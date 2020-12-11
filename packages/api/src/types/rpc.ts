// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Json, Raw } from '@polkadot/types/codec';
import type { AnyFunction, Callback } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApiTypes, PromiseResult, Push, RxResult, UnsubscribePromise } from './base';

export interface RpcRxResult<F extends AnyFunction> extends RxResult<F> {
  json (...args: Parameters<F>): Observable<Json>;
  raw (...args: Parameters<F>): Observable<Raw>;
}

export interface RpcPromiseResult<F extends AnyFunction> extends PromiseResult<F> {
  json (...args: Parameters<F>): Promise<Json>;
  json (...args: Push<Parameters<F>, Callback<Json>>): UnsubscribePromise;
  raw (...args: Parameters<F>): Promise<Raw>;
  raw (...args: Push<Parameters<F>, Callback<Raw>>): UnsubscribePromise;
}

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
