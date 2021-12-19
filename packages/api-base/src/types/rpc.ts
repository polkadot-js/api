// Copyright 2017-2021 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AnyFunction, Callback, DefinitionRpc } from '@polkadot/types/types';

import { ApiTypes, PromiseResult, Push, RxResult, UnsubscribePromise } from './base';

export type { AugmentedRpc } from '@polkadot/rpc-core/types';

export interface RxRpcResult<F extends AnyFunction> extends RxResult<F> {
  raw <T> (...args: Parameters<F>): Observable<T>;
  meta: DefinitionRpc;
}

export interface PromiseRpcResult<F extends AnyFunction> extends PromiseResult<F> {
  raw <T> (...args: Parameters<F>): Promise<T>;
  raw <T> (...args: Push<Parameters<F>, Callback<T>>): UnsubscribePromise;
  meta: DefinitionRpc;
}

export type RpcMethodResult<ApiType extends ApiTypes, F extends AnyFunction> = ApiType extends 'rxjs'
  ? RxRpcResult<F>
  : PromiseRpcResult<F>;

export type DecoratedRpcSection<ApiType extends ApiTypes, Section> = {
  [M in keyof Section]: Section[M] extends AnyFunction
    ? RpcMethodResult<ApiType, Section[M]>
    : never
}

export type DecoratedRpc<ApiType extends ApiTypes, AllSections> = {
  [S in keyof AllSections]: DecoratedRpcSection<ApiType, AllSections[S]>
}
