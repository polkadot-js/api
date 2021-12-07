// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMessageParamSpecLatest, ContractMessageParamSpecV0, ContractMetadataLatest, ContractMetadataV0, ContractMetadataV1 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

import { v0ToV1 } from './toV1';

function convertArgs (registry: Registry, args: ContractMessageParamSpecV0[]): ContractMessageParamSpecLatest[] {
  return args.map((a) =>
    registry.createType('ContractMessageParamSpecLatest', objectSpread({}, a, {
      label: a.name
    }))
  );
}

export function v1ToLatest (registry: Registry, v1: ContractMetadataV1): ContractMetadataLatest {
  return registry.createType('ContractMetadataLatest', objectSpread({}, v1, {
    spec: objectSpread({}, v1.spec, {
      constructors: v1.spec.constructors.map((c) =>
        registry.createType('ContractConstructorSpecLatest', objectSpread({}, c, {
          args: convertArgs(registry, c.args),
          label: c.name
        }))
      ),
      events: v1.spec.events.map((e) =>
        registry.createType('ContractEventSpecLatest', objectSpread({}, e, {
          args: e.args.map((a) =>
            registry.createType('ContractEventParamSpecLatest', objectSpread({}, a, {
              label: a.name
            }))
          ),
          label: e.name
        }))
      ),
      messages: v1.spec.messages.map((c) =>
        registry.createType('ContractMessageSpecLatest', objectSpread({}, c, {
          args: convertArgs(registry, c.args),
          label: c.name
        }))
      )
    })
  }));
}

export function v0ToLatest (registry: Registry, v0: ContractMetadataV0): ContractMetadataLatest {
  return v1ToLatest(registry, v0ToV1(registry, v0));
}
