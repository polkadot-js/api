// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsError } from '@polkadot/metadata/decorate/types';
import type { ApiTypes } from './base';

// In errors we don't need the ApiType, however add it for consistency
// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedErrors<ApiType extends ApiTypes> { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedError<ApiType extends ApiTypes> = IsError;

export interface ModuleErrors<ApiType extends ApiTypes> {
  [key: string]: AugmentedError<ApiType>;
}
