// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataLatest, ContractMetadataV0, ContractMetadataV1 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { v0ToV1 } from './toV1';
import { v1ToV2 } from './toV2';

export function v1ToLatest (registry: Registry, v1: ContractMetadataV1): ContractMetadataLatest {
  return v1ToV2(registry, v1);
}

export function v0ToLatest (registry: Registry, v0: ContractMetadataV0): ContractMetadataLatest {
  return v1ToLatest(registry, v0ToV1(registry, v0));
}
