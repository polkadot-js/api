// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV3, ContractMetadataV4 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

export function v3ToV4 (registry: Registry, v3: ContractMetadataV3): ContractMetadataV4 {
  return v3;
}
