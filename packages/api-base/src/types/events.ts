// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsEvent } from '@polkadot/types/metadata/decorate/types';
import type { AnyTuple, Codec } from '@polkadot/types/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedEvents<ApiType extends ApiTypes> {
  // augmented
}

export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleEvents<ApiType>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedEvent<ApiType extends ApiTypes, T = any> =
  T extends AnyTuple
    ? IsEvent<T>
    : T extends Record<string, Codec>
      ? IsEvent<T>
      : IsEvent;

export interface ModuleEvents<ApiType extends ApiTypes> {
  [key: string]: AugmentedEvent<ApiType>;
}
