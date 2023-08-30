// Copyright 2017-2023 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletConstantMetadataLatest } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { ApiTypes, EmptyBase } from './base.js';

export interface AugmentedConst<_ extends ApiTypes> {
  meta: PalletConstantMetadataLatest;
}

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedConsts<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleConsts;
}

export type QueryableModuleConsts = Record<string, Codec>;
