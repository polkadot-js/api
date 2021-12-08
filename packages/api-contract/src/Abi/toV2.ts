// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';
import type { ContractConstructorSpecV2, ContractEventParamSpecV0, ContractEventSpecV2, ContractMessageParamSpecV0, ContractMessageSpecV2, ContractMetadataV1, ContractMetadataV2 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

function v1Label (entry: { name: Text | Text[] }): { label: Text } {
  return objectSpread({}, entry, {
    label: Array.isArray(entry.name)
      ? entry.name[0]
      : entry.name
  });
}

function v1Labels (registry: Registry, outType: 'ContractConstructorSpecV2' | 'ContractEventSpecV2' | 'ContractMessageSpecV2', argType: 'ContractEventParamSpecV2' | 'ContractMessageParamSpecV2', all: { args: (ContractEventParamSpecV0 | ContractMessageParamSpecV0)[], name: Text | Text[] }[]): (ContractConstructorSpecV2 | ContractEventSpecV2 | ContractMessageSpecV2)[] {
  return all.map((e) =>
    registry.createType(outType, objectSpread(v1Label(e), {
      args: e.args.map((a) =>
        registry.createType(argType, v1Label(a))
      )
    }))
  );
}

export function v1ToV2 (registry: Registry, v1: ContractMetadataV1): ContractMetadataV2 {
  return registry.createType('ContractMetadataV2', objectSpread({}, v1, {
    spec: objectSpread({}, v1.spec, {
      constructors: v1Labels(registry, 'ContractConstructorSpecV2', 'ContractMessageParamSpecV2', v1.spec.constructors),
      events: v1Labels(registry, 'ContractEventSpecV2', 'ContractEventParamSpecV2', v1.spec.events),
      messages: v1Labels(registry, 'ContractMessageSpecV2', 'ContractMessageParamSpecV2', v1.spec.messages)
    })
  }));
}
