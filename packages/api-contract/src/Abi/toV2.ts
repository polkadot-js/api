// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';
import type { ContractMetadataV1, ContractMetadataV2 } from '@polkadot/types/interfaces';
import type { InterfaceTypes, Registry } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

type WithArgs = 'ContractConstructorSpec' | 'ContractEventSpec' | 'ContractMessageSpec';

interface NamedEntry {
  name: Text | Text[];
}

interface ArgsEntry <T extends WithArgs> extends NamedEntry {
  args: InterfaceTypes[`${T}V0`]['args'][0][];
}

const ARG_TYPES = {
  ContractConstructorSpec: 'ContractMessageParamSpecV2',
  ContractEventSpec: 'ContractEventParamSpecV2',
  ContractMessageSpec: 'ContractMessageParamSpecV2'
};

function v2Label (entry: NamedEntry): { label: Text } {
  return objectSpread({}, entry, {
    label: Array.isArray(entry.name)
      ? entry.name[0]
      : entry.name
  });
}

function v2Labels <T extends WithArgs> (registry: Registry, outType: T, all: ArgsEntry<T>[]): unknown[] {
  return all.map((e) =>
    registry.createType(`${outType}V2`, objectSpread(v2Label(e), {
      args: e.args.map((a) =>
        registry.createType(ARG_TYPES[outType], v2Label(a))
      )
    }))
  );
}

export function v1ToV2 (registry: Registry, v1: ContractMetadataV1): ContractMetadataV2 {
  const { spec: { constructors, events, messages } } = v1;

  return registry.createType('ContractMetadataV2', objectSpread({}, v1, {
    spec: objectSpread({}, v1.spec, {
      constructors: v2Labels(registry, 'ContractConstructorSpec', constructors),
      events: v2Labels(registry, 'ContractEventSpec', events),
      messages: v2Labels(registry, 'ContractMessageSpec', messages)
    })
  }));
}
