// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletConstantMetadataLatest } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface AugmentedConst<ApiType extends ApiTypes> {
  meta: PalletConstantMetadataLatest;
}

export interface QueryableModuleConsts {
  [key: string]: Codec;
}
