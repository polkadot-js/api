// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constants } from '@polkadot/metadata/Decorated/types';
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
