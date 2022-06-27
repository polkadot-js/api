// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SetId } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { ApiTypes } from './base';

export type ModuleCallName = string;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ModuleCallsResult<ApiType extends ApiTypes> {
  '__TestApi_current_set_id': SetId,
  [key: string]: Codec;
}

export type CallResultType<ApiType extends ApiTypes, M, T> =
  T extends Codec
    ? T
    : M extends keyof ModuleCallsResult<ApiType>
      ? ModuleCallsResult<ApiType>[M]
      : Codec;

export type DecoratedCalls<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? <T extends Codec | null = null, M extends string = string> (method: M, ...args: unknown[]) => Observable<CallResultType<ApiType, M, T>>
    : <T extends Codec | null = null, M extends string = string> (method: M, ...args: unknown[]) => Promise<CallResultType<ApiType, M, T>>;

export interface DefinitionCall {
  params: string[];
  type: string;
}
