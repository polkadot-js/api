// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AnyFunction, Codec, DefinitionCallNamed } from '@polkadot/types/types';
import type { ApiTypes, ReturnCodec } from './base';

export type DecoratedCallBase<ApiType extends ApiTypes, F extends AnyFunction = (...args: any[]) => Observable<Codec>> =
  ApiType extends 'rxjs'
    ? <T extends Codec | any = ReturnCodec<F>> (...args: Parameters<F>) => Observable<T>
    : <T extends Codec | any = ReturnCodec<F>> (...args: Parameters<F>) => Promise<T>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedCall<ApiType extends ApiTypes, F extends AnyFunction = (...args: any[]) => Observable<Codec>> =
DecoratedCallBase<ApiType, F> & { meta: DefinitionCallNamed };

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedCalls<ApiType extends ApiTypes> {
  // augmented
}

export interface QueryableCalls<ApiType extends ApiTypes> extends AugmentedCalls<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleCalls<ApiType> & { $type?: string };
}

export interface QueryableModuleCalls<ApiType extends ApiTypes> {
  [key: string]: DecoratedCallBase<ApiType>;
}
