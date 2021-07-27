// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata';
import type { DecoratedMeta } from '@polkadot/types/metadata/decorate/types';
import type { Registry } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { ApiDecoration, ApiTypes } from '../types';

export interface VersionedRegistry<ApiType extends ApiTypes> {
  decoratedApi?: ApiDecoration<ApiType>;
  decoratedMeta?: DecoratedMeta;
  isDefault?: boolean;
  lastBlockHash?: Uint8Array | null;
  metadata: Metadata;
  registry: Registry;
  specVersion: BN;
}
