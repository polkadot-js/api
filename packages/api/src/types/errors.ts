// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchError } from '@polkadot/types/interfaces';
import type { ApiTypes } from './base';

// In errors we don't need the ApiType, however add it for consistency
// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedErrors<ApiType extends ApiTypes> { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedIsError<ApiType extends ApiTypes> = (dispatchError: DispatchError) => boolean;

export interface QueryableModuleErrors<ApiType extends ApiTypes> {
  [index: string]: AugmentedIsError<ApiType>;
}
