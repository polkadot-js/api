// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction, AnyTuple, CallBase, IExtrinsic } from '@polkadot/types/types';
import type { SubmittableExtrinsic } from '../submittable/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedSubmittables<ApiType extends ApiTypes> { }

export type AugmentedSubmittable<T extends AnyFunction, A extends AnyTuple> = T & CallBase & AugmentedIsSubmittable<A>;

export interface AugmentedIsSubmittable<A extends AnyTuple> {
  is: (tx: IExtrinsic<AnyTuple>) => tx is IExtrinsic<A>;
}

export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes> extends CallBase {
  (...params: any[]): SubmittableExtrinsic<ApiType>;
}

export interface SubmittableModuleExtrinsics<ApiType extends ApiTypes> {
  // only with is<Type> augmentation
  [index: string]: SubmittableExtrinsicFunction<ApiType>; // | AugmentedIsSubmittable<ApiType, AnyTuple>;
}
