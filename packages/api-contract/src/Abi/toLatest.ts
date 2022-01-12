// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataLatest, ContractMetadataV0, ContractMetadataV1, ContractMetadataV2, ContractMetadataV3 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { v0ToV1 } from './toV1';
import { v1ToV2 } from './toV2';
import { v2ToV3 } from './toV3';

type Versions = 'V0' | 'V1' | 'V2' | 'V3';

type Converter = (registry: Registry, vx: any) => ContractMetadataLatest;

// The versions where an enum is used, aka V0 is missing
// (Order from newest, i.e. we expect more on newest vs oldest)
export const enumVersions = ['V3', 'V2', 'V1'];

// (Order from newest, i.e. we expect more on newest vs oldest)
export const convertVersions: [Versions, Converter][] = [
  ['V3', v3ToLatest],
  ['V2', v2ToLatest],
  ['V1', v1ToLatest],
  ['V0', v0ToLatest]
];

export function v0ToLatest (registry: Registry, v0: ContractMetadataV0): ContractMetadataLatest {
  return v1ToLatest(registry, v0ToV1(registry, v0));
}

export function v1ToLatest (registry: Registry, v1: ContractMetadataV1): ContractMetadataLatest {
  return v2ToLatest(registry, v1ToV2(registry, v1));
}

export function v2ToLatest (registry: Registry, v2: ContractMetadataV2): ContractMetadataLatest {
  return v2ToV3(registry, v2);
}

export function v3ToLatest (registry: Registry, v3: ContractMetadataV3): ContractMetadataLatest {
  return v3;
}
