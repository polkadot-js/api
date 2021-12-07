// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';
import type { ContractMessageParamSpecLatest, ContractMessageParamSpecV0, ContractMetadataLatest, ContractMetadataV0, ContractMetadataV1 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

import { v0ToV1 } from './toV1';

function createLabel ({ name }: { name: Text | Text[] }): { label: Text } {
  return {
    label: Array.isArray(name)
      ? name[0]
      : name
  };
}

function createArgs (registry: Registry, args: ContractMessageParamSpecV0[]): { args: ContractMessageParamSpecLatest[] } {
  return {
    args: args.map((a) =>
      registry.createType('ContractMessageParamSpecLatest', objectSpread({}, a, createLabel(a)))
    )
  };
}

export function v1ToLatest (registry: Registry, v1: ContractMetadataV1): ContractMetadataLatest {
  return registry.createType('ContractMetadataLatest', objectSpread({}, v1, {
    spec: objectSpread({}, v1.spec, {
      constructors: v1.spec.constructors.map((c) => registry.createType(
        'ContractConstructorSpecLatest',
        objectSpread({}, c, createLabel(c), createArgs(registry, c.args))
      )),
      events: v1.spec.events.map((e) => registry.createType(
        'ContractEventSpecLatest',
        objectSpread({}, e, createLabel(e), {
          args: e.args.map((a) => registry.createType(
            'ContractEventParamSpecLatest',
            objectSpread({}, a, createLabel(a))
          ))
        })
      )),
      messages: v1.spec.messages.map((c) => registry.createType(
        'ContractMessageSpecLatest',
        objectSpread({}, c, createLabel(c), createArgs(registry, c.args))
      ))
    })
  }));
}

export function v0ToLatest (registry: Registry, v0: ContractMetadataV0): ContractMetadataLatest {
  return v1ToLatest(registry, v0ToV1(registry, v0));
}
