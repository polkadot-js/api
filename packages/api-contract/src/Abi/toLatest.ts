// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataLatest, ContractMetadataV4 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { v0ToV1 } from './toV1';
import { v1ToV2 } from './toV2';
import { v2ToV3 } from './toV3';
import { v3ToV4 } from './toV4';

// The versions where an enum is used, aka V0 is missing
// (Order from newest, i.e. we expect more on newest vs oldest)
export const enumVersions = <const> ['V4', 'V3', 'V2', 'V1'];

type Versions = typeof enumVersions[number] | 'V0';

type Converter = (registry: Registry, vx: any) => ContractMetadataLatest;

// Helper to convert metadata from one step to the next
function createConverter <I, O> (next: (registry: Registry, input: O) => ContractMetadataLatest, step: (registry: Registry, input: I) => O): (registry: Registry, input: I) => ContractMetadataLatest {
  return (registry: Registry, input: I): ContractMetadataLatest =>
    next(registry, step(registry, input));
}

export function v4ToLatest (registry: Registry, v4: ContractMetadataV4): ContractMetadataLatest {
  return v4;
}

export const v3ToLatest = createConverter(v4ToLatest, v3ToV4);
export const v2ToLatest = createConverter(v3ToLatest, v2ToV3);
export const v1ToLatest = createConverter(v2ToLatest, v1ToV2);
export const v0ToLatest = createConverter(v1ToLatest, v0ToV1);

export const convertVersions: [Versions, Converter][] = [
  ['V4', v4ToLatest],
  ['V3', v3ToLatest],
  ['V2', v2ToLatest],
  ['V1', v1ToLatest],
  ['V0', v0ToLatest]
];
