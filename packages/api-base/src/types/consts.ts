// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletConstantMetadataLatest } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface AugmentedConst<ApiType extends ApiTypes> {
  meta: PalletConstantMetadataLatest;
}

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedConsts<ApiType extends ApiTypes> {
  // augmented
}

export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleConsts & { $path?: string };
}

export interface QueryableModuleConsts {
  [key: string]: Codec;
}
