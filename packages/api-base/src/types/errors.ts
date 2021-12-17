// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IsError } from '@polkadot/types/metadata/decorate/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedError<ApiType extends ApiTypes> = IsError;

export interface ModuleErrors<ApiType extends ApiTypes> {
  [key: string]: AugmentedError<ApiType>;
}
