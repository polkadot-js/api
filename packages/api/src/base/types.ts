// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/metadata';
import type { Registry } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { ApiDecoration, ApiTypes } from '../types';

export interface VersionedRegistry<ApiType extends ApiTypes> {
  decoration?: ApiDecoration<ApiType> | null;
  isDefault?: boolean;
  lastBlockHash?: Uint8Array | null;
  metadata: Metadata;
  registry: Registry;
  specVersion: BN;
}
