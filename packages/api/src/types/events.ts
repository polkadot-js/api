// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes } from '@polkadot/api-base/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedEvents<ApiType extends ApiTypes> {
  // augmented
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  // augmented
}

// augmented
export const __API_AUGMENT_EVENTS = 'augmented';
