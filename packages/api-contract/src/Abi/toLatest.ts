// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMessageParamSpecLatest, ContractMessageParamSpecV0, ContractMetadataLatest, ContractMetadataV1 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

function convertArgs (registry: Registry, args: ContractMessageParamSpecV0[]): ContractMessageParamSpecLatest[] {
  return args.map((a) =>
    registry.createType('ContractMessageParamSpecLatest', {
      ...a,
      label: a.name
    })
  );
}

export function toLatest (registry: Registry, v1: ContractMetadataV1): ContractMetadataLatest {
  return registry.createType('ContractMetadataLatest', {
    ...v1,
    spec: {
      constructors: v1.spec.constructors.map((c) =>
        registry.createType('ContractConstructorSpecLatest', {
          ...c,
          args: convertArgs(registry, c.args),
          label: c.name
        })
      ),
      docs: v1.spec.docs,
      events: v1.spec.events.map((e) =>
        registry.createType('ContractEventSpecLatest', {
          ...e,
          args: e.args.map((a) => registry.createType('ContractEventParamSpecLatest', {
            ...a,
            label: a.name
          })),
          label: e.name
        })
      ),
      messages: v1.spec.messages.map((c) =>
        registry.createType('ContractMessageSpecLatest', {
          ...c,
          args: convertArgs(registry, c.args),
          label: c.name
        })
      )
    }
  });
}
