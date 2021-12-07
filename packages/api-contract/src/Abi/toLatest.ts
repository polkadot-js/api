// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataLatest, ContractMetadataV1 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

// TODO convert all name to label (messages, constructors, events)....

export function toLatest (registry: Registry, v1: ContractMetadataV1): ContractMetadataLatest {
  return registry.createType('ContractMetadataLatest', {
    ...v1,
    types: v1.types
  });
}
