// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction, AnyTuple, CallBase } from '@polkadot/types/types';
import type { SubmittableExtrinsic } from '../submittable/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedSubmittables<ApiType extends ApiTypes> { }

export type AugmentedSubmittable<T extends AnyFunction, A extends AnyTuple = AnyTuple> = T & CallBase<A>;

export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes, A extends AnyTuple = AnyTuple> extends CallBase<A> {
  (...params: any[]): SubmittableExtrinsic<ApiType>;
}

export interface SubmittableModuleExtrinsics<ApiType extends ApiTypes> {
  // only with is<Type> augmentation
  [index: string]: SubmittableExtrinsicFunction<ApiType>; // | AugmentedIsSubmittable<ApiType, AnyTuple>;
}
