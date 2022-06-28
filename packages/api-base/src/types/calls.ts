// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Codec } from '@polkadot/types/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ModuleCallsResult<ApiType extends ApiTypes> {
  [key: string]: Codec;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedCalls<ApiType extends ApiTypes> {
  // augmented
}

export interface QueryableCalls<ApiType extends ApiTypes> extends AugmentedCalls<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleCalls<ApiType>;
}

export interface QueryableModuleCalls<ApiType extends ApiTypes> {
  [key: string]: DecoratedCall<ApiType>;
}

export type CallResultType<ApiType extends ApiTypes, M, T> =
  T extends Codec
    ? T
    : M extends keyof ModuleCallsResult<ApiType>
      ? ModuleCallsResult<ApiType>[M]
      : Codec;

export type DecoratedCall<ApiType extends ApiTypes, M extends string = string> =
  ApiType extends 'rxjs'
    ? <T extends Codec | null = null> (...args: readonly unknown[]) => Observable<CallResultType<ApiType, M, T>>
    : <T extends Codec | null = null> (...args: readonly unknown[]) => Promise<CallResultType<ApiType, M, T>>;

export interface DefinitionCall {
  params: string[];
  type: string;
}

export interface DefinitionCallNamed extends DefinitionCall {
  name: string;
}
