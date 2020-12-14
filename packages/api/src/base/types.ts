// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import type { Metadata } from '@polkadot/metadata';
import type { Constants } from '@polkadot/metadata/decorate/types';
import type { Registry } from '@polkadot/types/types';

export interface VersionedRegistry {
  isDefault: boolean;
  lastBlockHash: Uint8Array | null;
  metadata: Metadata;
  metadataConsts: Constants | null;
  registry: Registry;
  specVersion: BN;
}
