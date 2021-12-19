// Copyright 2017-2021 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsEvent } from '@polkadot/types/metadata/decorate/types';
import type { AnyTuple } from '@polkadot/types/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedEvent<ApiType extends ApiTypes, T extends AnyTuple = AnyTuple> = IsEvent<T>;

export interface ModuleEvents<ApiType extends ApiTypes> {
  [m: string]: AugmentedEvent<ApiType, AnyTuple>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedEvents<ApiType extends ApiTypes> {
  // augmented
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  // augmented
}
