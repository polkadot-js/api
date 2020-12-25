// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction, CallBase, Codec } from '@polkadot/types/types';
import type { SubmittableExtrinsic } from '../submittable/types';
import type { ApiTypes } from './base';

type Tuples = Codec[];

// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedSubmittables<ApiType extends ApiTypes> { }

export type AugmentedSubmittable<T extends AnyFunction> = T & CallBase;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedIsSubmittable<ApiType extends ApiTypes, T extends Tuples> = (tx: SubmittableExtrinsic<ApiType>) => boolean;

export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes> extends CallBase {
  (...params: any[]): SubmittableExtrinsic<ApiType>;
}

export interface SubmittableModuleExtrinsics<ApiType extends ApiTypes> {
  // only with is<Type> augmentation
  [index: string]: SubmittableExtrinsicFunction<ApiType>; // | AugmentedIsSubmittable<ApiType, AnyTuple>;
}
