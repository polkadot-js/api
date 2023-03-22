// Copyright 2017-2023 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsError } from '@polkadot/types/metadata/decorate/types';
import type { ApiTypes, EmptyBase } from './base.js';

export type AugmentedError<_ extends ApiTypes> = IsError;

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedErrors<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleErrors<ApiType>;
}

export interface ModuleErrors<ApiType extends ApiTypes> {
  [key: string]: AugmentedError<ApiType>;
}
