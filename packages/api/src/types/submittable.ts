// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyFunction, CallBase } from '@polkadot/types/types';

import { SubmittableExtrinsic } from '../submittable/types';
import { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedSubmittables<ApiType extends ApiTypes> { }

export type AugmentedSubmittable<T extends AnyFunction> = T & CallBase;

export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes> extends CallBase {
  (...params: any[]): SubmittableExtrinsic<ApiType>;
}

export interface SubmittableModuleExtrinsics<ApiType extends ApiTypes> {
  [index: string]: SubmittableExtrinsicFunction<ApiType>;
}
