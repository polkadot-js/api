// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';
import type { ContractConstructorSpecV0, ContractEventSpecV0, ContractMessageSpecV0, ContractMetadataV1, ContractMetadataV2 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

type WithArgs = keyof typeof ARG_TYPES;

interface NamedEntry {
  name: Text | Text[];
}

type GetArgsType<T extends WithArgs> = T extends 'ContractConstructorSpec'
  ? ContractConstructorSpecV0
  : T extends ContractEventSpecV0
    ? ContractEventSpecV0
    : ContractMessageSpecV0;

interface ArgsEntry <T extends WithArgs> extends NamedEntry {
  args: GetArgsType<T>['args'][0][];
}

const ARG_TYPES = {
  ContractConstructorSpec: 'ContractMessageParamSpecV2',
  ContractEventSpec: 'ContractEventParamSpecV2',
  ContractMessageSpec: 'ContractMessageParamSpecV2'
};

function v1ToV2Label (entry: NamedEntry): { label: Text } {
  return objectSpread({}, entry, {
    label: Array.isArray(entry.name)
      ? entry.name[0]
      : entry.name
  });
}

function v1ToV2Labels <T extends WithArgs> (registry: Registry, outType: T, all: ArgsEntry<T>[]): unknown[] {
  return all.map((e) =>
    registry.createType(`${outType}V2`, objectSpread(v1ToV2Label(e), {
      args: e.args.map((a) =>
        registry.createType(ARG_TYPES[outType], v1ToV2Label(a))
      )
    }))
  );
}

export function v1ToV2 (registry: Registry, v1: ContractMetadataV1): ContractMetadataV2 {
  return registry.createType('ContractMetadataV2', objectSpread({}, v1, {
    spec: objectSpread({}, v1.spec, {
      constructors: v1ToV2Labels(registry, 'ContractConstructorSpec', v1.spec.constructors),
      events: v1ToV2Labels(registry, 'ContractEventSpec', v1.spec.events),
      messages: v1ToV2Labels(registry, 'ContractMessageSpec', v1.spec.messages)
    })
  }));
}
