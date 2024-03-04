// Copyright 2017-2024 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsError } from '@polkadot/types/metadata/decorate/types';
import type { ApiTypes, EmptyBase } from './base.js';

export type AugmentedError<_ extends ApiTypes> = IsError;

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedErrors<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleErrors<ApiType>;
}

export type ModuleErrors<ApiType extends ApiTypes> = Record<string, AugmentedError<ApiType>>;
