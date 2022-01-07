// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataLatest, ContractMetadataV0, ContractMetadataV1,ContractMetadataV2 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { v0ToV1 } from './toV1';
import { v1ToV2 } from './toV2';
import { v2ToV3 } from './toV3';

export function v2ToLatest (registry: Registry, v2: ContractMetadataV2): ContractMetadataLatest {
  return v2ToV3(registry, v2);
}

export function v1ToLatest (registry: Registry, v1: ContractMetadataV1): ContractMetadataLatest {
  return v2ToLatest(registry, v1ToV2(registry, v1));
}

export function v0ToLatest (registry: Registry, v0: ContractMetadataV0): ContractMetadataLatest {
  return v1ToLatest(registry, v0ToV1(registry, v0));
}
