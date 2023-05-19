// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV4, ContractMetadataV5 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

export function v4ToV5 (registry: Registry, v4: ContractMetadataV4): ContractMetadataV5 {
  return registry.createType('ContractMetadataV5', objectSpread({}, v4));
}
