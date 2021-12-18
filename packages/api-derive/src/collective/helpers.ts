// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveApi } from '../types';
import type { Collective } from './types';

import { of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util';

export function getInstance (api: DeriveApi, section: string): string {
  const instances = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), section);

  return instances && instances.length
    ? instances[0]
    : section;
}

export function withSection <T, F extends (...args: any[]) => Observable<T>> (_section: Collective, fn: (section: string, api: DeriveApi, instanceId: string) => F): (instanceId: string, api: DeriveApi) => F {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, fn(getInstance(api, _section), api, instanceId)) as unknown as F;
}

export function callMethod <T> (method: 'members' | 'proposals' | 'proposalCount', empty: T): (_section: Collective) => (instanceId: string, api: DeriveApi) => () => Observable<T> {
  return (_section: Collective) =>
    withSection(_section, (section, api) =>
      (): Observable<T> =>
        isFunction(api.query[section]?.[method])
          ? api.query[section as 'council'][method]() as unknown as Observable<T>
          : of(empty)
    );
}
