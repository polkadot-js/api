// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataLatest, ContractMetadataV3 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { v0ToV1 } from './toV1';
import { v1ToV2 } from './toV2';
import { v2ToV3 } from './toV3';

type Versions = 'V0' | 'V1' | 'V2' | 'V3';

type Converter = (registry: Registry, vx: any) => ContractMetadataLatest;

function createConverter <I, O> (next: (registry: Registry, input: O) => ContractMetadataLatest, step: (registry: Registry, input: I) => O): (registry: Registry, input: I) => ContractMetadataLatest {
  return (registry: Registry, input: I): ContractMetadataLatest =>
    next(registry, step(registry, input));
}

export function v3ToLatest (registry: Registry, v3: ContractMetadataV3): ContractMetadataLatest {
  return v3;
}

export const v2ToLatest = createConverter(v3ToLatest, v2ToV3);
export const v1ToLatest = createConverter(v2ToLatest, v1ToV2);
export const v0ToLatest = createConverter(v1ToLatest, v0ToV1);

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
