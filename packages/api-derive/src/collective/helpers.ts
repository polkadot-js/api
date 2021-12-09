// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Collective } from './types';

export function getInstance (api: ApiInterfaceRx, section: string): string {
  const instances = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), section);

  return instances && instances.length
    ? instances[0]
    : section;
}

export function withSection <T> (_section: Collective, fn: (section: string, instanceId: string, api: ApiInterfaceRx) => T): (instanceId: string, api: ApiInterfaceRx) => T {
  return (instanceId: string, api: ApiInterfaceRx) =>
    fn(getInstance(api, _section), instanceId, api);
}
