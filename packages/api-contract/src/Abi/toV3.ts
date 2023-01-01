// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV2, ContractMetadataV3 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

export function v2ToV3 (registry: Registry, v2: ContractMetadataV2): ContractMetadataV3 {
  return registry.createType('ContractMetadataV3', objectSpread({}, v2, {
    spec: objectSpread({}, v2.spec, {
      constructors: v2.spec.constructors.map((c) =>
        // V3 introduces the payable flag on constructors, for <V3, it is always true
        registry.createType('ContractConstructorSpecV3', objectSpread({}, c, { payable: true }))
      )
    })
  }));
}
