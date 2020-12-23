// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { EventMetadataV12 } from '@polkadot/types/interfaces';

import { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedEvents<ApiType extends ApiTypes> { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface AugmentedEvent<ApiType extends ApiTypes> {
  // at: (hash: Hash | Uint8Array | string) => PromiseOrObs<ApiType, T>;
  meta: EventMetadataV12;
}
