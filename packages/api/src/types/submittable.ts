// Copyright 2017-2021 @polkadot/api-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes } from '@polkadot/api-base/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedSubmittables<ApiType extends ApiTypes> {
  // augmented
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
  // augmented
}

// augmented
export const __API_AUGMENT_TX = 'augmented';
