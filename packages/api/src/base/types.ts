// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Constants } from '@polkadot/metadata/decorate/types';
import { Metadata } from '@polkadot/types';
import { Registry } from '@polkadot/types/types';

import BN from 'bn.js';

export interface VersionedRegistry {
  isDefault: boolean;
  lastBlockHash: Uint8Array | null;
  metadata: Metadata;
  metadataConsts: Constants | null;
  registry: Registry;
  specVersion: BN;
}
