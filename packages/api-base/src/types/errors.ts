// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsError } from '@polkadot/types/metadata/decorate/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedError<ApiType extends ApiTypes> = IsError;

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedErrors<ApiType extends ApiTypes> {
  // augmented
}

export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleErrors<ApiType>;
}

export interface ModuleErrors<ApiType extends ApiTypes> {
  [key: string]: AugmentedError<ApiType>;
}
