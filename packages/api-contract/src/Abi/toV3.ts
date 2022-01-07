// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Vec } from '@polkadot/types-codec/base';
import type { ContractConstructorSpecV2, ContractConstructorSpecV3, ContractEventSpecV2, ContractMessageSpecV2, ContractMetadataV2, ContractMetadataV3 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

type WithArgs = keyof typeof ARG_TYPES;

type GetArgsType<T extends WithArgs> = T extends 'ContractConstructorSpec'
  ? ContractConstructorSpecV3
  : T extends ContractEventSpecV2
    ? ContractEventSpecV2
    : ContractMessageSpecV2;

interface ArgsEntry <T extends WithArgs>  {
  args: GetArgsType<T>['args'][0][];
}

const ARG_TYPES = {
  ContractConstructorSpec: 'ContractMessageParamSpecV3',
  ContractEventSpec: 'ContractEventParamSpecV3',
  ContractMessageSpec: 'ContractMessageParamSpecV3'
};

function addPayable (constructors: Vec<ContractConstructorSpecV2>): Vec<ContractConstructorSpecV3> {
  return objectSpread({}, constructors, {
    payable: true
  });
}

function v2ToV3Labels <T extends WithArgs> (registry: Registry, outType: T, all: ArgsEntry<T>[]): unknown[] {
  return all.map((e) =>
    registry.createType(`${outType}V3`, objectSpread(e, {
      args: e.args.map((a) =>
        registry.createType(ARG_TYPES[outType], a)
      )
    }))
  );
}

export function v2ToV3 (registry: Registry, v2: ContractMetadataV2): ContractMetadataV3 {
  return registry.createType('ContractMetadataV3', objectSpread({}, v2, {
    spec: objectSpread({}, v2.spec, {
      constructors: v2ToV3Labels(registry, 'ContractConstructorSpec', addPayable(v2.spec.constructors)),
      events: v2ToV3Labels(registry, 'ContractEventSpec', v2.spec.events),
      messages: v2ToV3Labels(registry, 'ContractMessageSpec', v2.spec.messages),
    })
  }));
}
