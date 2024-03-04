// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV4, ContractMetadataV5 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { ContractMetadataSupported } from './index.js';

import { v0ToV1 } from './toV1.js';
import { v1ToV2 } from './toV2.js';
import { v2ToV3 } from './toV3.js';
import { v3ToV4 } from './toV4.js';

// The versions where an enum is used, aka V0 is missing
// (Order from newest, i.e. we expect more on newest vs oldest)
export const enumVersions = ['V5', 'V4', 'V3', 'V2', 'V1'] as const;

type Versions = typeof enumVersions[number] | 'V0';

type Converter = (registry: Registry, vx: any) => ContractMetadataSupported;

// Helper to convert metadata from one step to the next
function createConverter <I, O> (next: (registry: Registry, input: O) => ContractMetadataSupported, step: (registry: Registry, input: I) => O): (registry: Registry, input: I) => ContractMetadataSupported {
  return (registry: Registry, input: I): ContractMetadataSupported =>
    next(registry, step(registry, input));
}

export function v5ToLatestCompatible (_registry: Registry, v5: ContractMetadataV5): ContractMetadataV5 {
  return v5;
}

export function v4ToLatestCompatible (_registry: Registry, v4: ContractMetadataV4): ContractMetadataV4 {
  return v4;
}

export const v3ToLatestCompatible = /*#__PURE__*/ createConverter(v4ToLatestCompatible, v3ToV4);
export const v2ToLatestCompatible = /*#__PURE__*/ createConverter(v3ToLatestCompatible, v2ToV3);
export const v1ToLatestCompatible = /*#__PURE__*/ createConverter(v2ToLatestCompatible, v1ToV2);
export const v0ToLatestCompatible = /*#__PURE__*/ createConverter(v1ToLatestCompatible, v0ToV1);

export const convertVersions: [Versions, Converter][] = [
  ['V5', v5ToLatestCompatible],
  ['V4', v4ToLatestCompatible],
  ['V3', v3ToLatestCompatible],
  ['V2', v2ToLatestCompatible],
  ['V1', v1ToLatestCompatible],
  ['V0', v0ToLatestCompatible]
];
