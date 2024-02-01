// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV4, ContractMetadataV5 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

export function v4ToV5 (registry: Registry, v4: ContractMetadataV4): ContractMetadataV5 {
  return registry.createType('ContractMetadataV5', objectSpread({}, v4, {
    spec: objectSpread({}, v4.spec, {
      events: v4.spec.events.map((e) =>
        registry.createType('ContractEventSpecV3', objectSpread({
          module_path: 'todo::todo',
          signature_topic: "0xDEADBEEF"
        }, e))
      )
    })
  }));
}
