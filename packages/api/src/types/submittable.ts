// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CallFunction, CodecArg } from '@polkadot/types/types';

import { SubmittableExtrinsic } from '../submittable/types';
import { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedSubmittables<ApiType extends ApiTypes> { }

export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes> extends CallFunction {
  (...params: CodecArg[]): SubmittableExtrinsic<ApiType>;
}

export interface SubmittableModuleExtrinsics<ApiType extends ApiTypes> {
  [index: string]: SubmittableExtrinsicFunction<ApiType>;
}

export interface SubmittableExtrinsics<ApiType extends ApiTypes> {
  (extrinsic: Uint8Array | string): SubmittableExtrinsic<ApiType>;
  [index: string]: SubmittableModuleExtrinsics<ApiType>;
}
