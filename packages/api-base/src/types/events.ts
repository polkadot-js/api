// Copyright 2017-2023 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsEvent } from '@polkadot/types/metadata/decorate/types';
import type { AnyTuple } from '@polkadot/types/types';
import type { ApiTypes, EmptyBase } from './base.js';

export type AugmentedEvent<_ extends ApiTypes, T extends AnyTuple = AnyTuple, N = unknown> = IsEvent<T, N>;

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedEvents<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleEvents<ApiType>;
}

export interface ModuleEvents<ApiType extends ApiTypes> {
  [key: string]: AugmentedEvent<ApiType>;
}
