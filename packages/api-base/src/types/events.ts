// Copyright 2017-2024 @polkadot/api-base authors & contributors
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

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleEvents<ApiType>;
}

export type ModuleEvents<ApiType extends ApiTypes> = Record<string, AugmentedEvent<ApiType>>;
