// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AnyFunction, Callback, DefinitionRpc } from '@polkadot/types/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApiTypes, PromiseResult, Push, RxResult, UnsubscribePromise } from './base';

export interface RpcRxResult<F extends AnyFunction> extends RxResult<F> {
  raw <T> (...args: Parameters<F>): Observable<T>;
  meta: DefinitionRpc;
}

export interface RpcPromiseResult<F extends AnyFunction> extends PromiseResult<F> {
  raw <T> (...args: Parameters<F>): Promise<T>;
  raw <T> (...args: Push<Parameters<F>, Callback<T>>): UnsubscribePromise;
  meta: DefinitionRpc;
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
