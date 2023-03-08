// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveApi } from '../types.js';
import type { Collective } from './types.js';

import { of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util/index.js';

export function getInstance (api: DeriveApi, section: string): DeriveApi['query']['council'] {
  const instances = api.registry.getModuleInstances(api.runtimeVersion.specName, section);
  const name = instances && instances.length
    ? instances[0]
    : section;

  return api.query[name as 'council'];
}

export function withSection <T, F extends (...args: any[]) => Observable<T>> (section: Collective, fn: (query: DeriveApi['query']['council'], api: DeriveApi, instanceId: string) => F): (instanceId: string, api: DeriveApi) => F {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, fn(getInstance(api, section), api, instanceId)) as unknown as F;
}

export function callMethod <T> (method: 'members' | 'proposals' | 'proposalCount', empty: T): (section: Collective) => (instanceId: string, api: DeriveApi) => () => Observable<T> {
  return (section: Collective) =>
    withSection(section, (query) =>
      (): Observable<T> =>
        isFunction(query?.[method])
          ? query[method]() as unknown as Observable<T>
          : of(empty)
    );
}
