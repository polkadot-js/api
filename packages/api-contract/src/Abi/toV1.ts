// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV0, ContractMetadataV1 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { convertSiV0toV1 } from '@polkadot/types';
import { objectSpread } from '@polkadot/util';

export function v0ToV1 (registry: Registry, v0: ContractMetadataV0): ContractMetadataV1 {
  return registry.createType('ContractMetadataV1', objectSpread({}, v0, {
    types: convertSiV0toV1(registry, v0.types)
  }));
}
