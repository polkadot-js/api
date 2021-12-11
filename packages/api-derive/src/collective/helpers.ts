// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Collective } from './types';

import { of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { ApiInterfaceRx } from '@polkadot/api/types';

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

export function callMethod <T> (method: 'members' | 'proposals' | 'proposalCount', empty: T): (_section: Collective) => (instanceId: string, api: ApiInterfaceRx) => () => Observable<T> {
  return (_section: Collective) =>
    withSection(_section, (section, instanceId, api) =>
      memo(instanceId, (): Observable<T> =>
        isFunction(api.query[section]?.[method])
          ? api.query[section as 'council'][method]() as unknown as Observable<T>
          : of(empty)
      )
    );
}
