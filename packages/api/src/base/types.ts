// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/metadata';
import type { Constants } from '@polkadot/metadata/decorate/types';
import type { Registry } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';

export interface VersionedRegistry {
  isDefault: boolean;
  lastBlockHash: Uint8Array | null;
  metadata: Metadata;
  metadataConsts: Constants | null;
  registry: Registry;
  specVersion: BN;
}
