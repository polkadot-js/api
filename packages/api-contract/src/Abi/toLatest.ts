// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataLatest, ContractMetadataV0 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { convertSiV0toV1 } from '@polkadot/types/generic/PortableRegistry';

export function toLatest (registry: Registry, v0: ContractMetadataV0): ContractMetadataLatest {
  return registry.createType('ContractMetadataLatest', {
    ...v0,
    types: convertSiV0toV1(registry, v0.types)
  });
}
