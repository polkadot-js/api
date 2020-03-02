// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// FIXME, this whole file needs to move to API

import { Observable } from 'rxjs';
import { AnyFunction, Codec, CodecArg } from '@polkadot/types/types';
import { ApiTypes, MethodResult, PromiseOrObs } from '@polkadot/api/types/base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RpcInterface<ApiType extends ApiTypes> {}

export type AugmentedRpc<ApiType extends ApiTypes, F extends AnyFunction> = MethodResult<ApiType, F> & RpcEntryBase<ApiType, F>

export type RpcEntry<ApiType extends ApiTypes> = AugmentedRpc<ApiType, (...args: CodecArg[]) => Observable<Codec>>;

export interface RpcEntryBase<ApiType extends ApiTypes, F extends AnyFunction> {
  (...args: Parameters<F>): MethodResult<ApiType, F>;
  raw (...args: Parameters<F>): PromiseOrObs<ApiType, Uint8Array & Codec>;
}
