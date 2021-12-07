// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';
import type { ContractMessageParamSpecLatest, ContractMessageParamSpecV0, ContractMetadataV1, ContractMetadataV2 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

function v1Label (orig: { name: Text | Text[] }): { label: Text } {
  return objectSpread({}, orig, {
    label: Array.isArray(orig.name)
      ? orig.name[0]
      : orig.name
  });
}

function v1LabelArgs (registry: Registry, orig: { args: ContractMessageParamSpecV0[], name: Text | Text[] }): { args: ContractMessageParamSpecLatest[], label: Text } {
  return objectSpread(v1Label(orig), {
    args: orig.args.map((a) =>
      registry.createType('ContractMessageParamSpecLatest', v1Label(a))
    )
  });
}

export function v1ToV2 (registry: Registry, v1: ContractMetadataV1): ContractMetadataV2 {
  return registry.createType('ContractMetadataLatest', objectSpread({}, v1, {
    spec: objectSpread({}, v1.spec, {
      constructors: v1.spec.constructors.map((c) =>
        registry.createType('ContractConstructorSpecLatest', v1LabelArgs(registry, c))
      ),
      events: v1.spec.events.map((e) =>
        registry.createType('ContractEventSpecLatest', objectSpread(v1Label(e), {
          args: e.args.map((a) =>
            registry.createType('ContractEventParamSpecLatest', v1Label(a))
          )
        }))
      ),
      messages: v1.spec.messages.map((c) =>
        registry.createType('ContractMessageSpecLatest', v1LabelArgs(registry, c))
      )
    })
  }));
}
