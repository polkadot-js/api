// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV3, ContractMetadataV4 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

export function v3ToV4 (registry: Registry, v3: ContractMetadataV3): ContractMetadataV4 {
  return registry.createType('ContractMetadataV4', objectSpread({}, v3, {
    spec: objectSpread({}, v3.spec, {
      constructors: v3.spec.constructors.map((c) =>
        registry.createType('ContractConstructorSpecV4', objectSpread({}, c))
      ),
      messages: v3.spec.messages.map((m) =>
        registry.createType('ContractMessageSpecV3', objectSpread({}, m))
      )
    })
  }));
}
