// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveApi } from '../types';

import { map } from 'rxjs';

import { memo } from '@polkadot/rpc-core';

export function firstObservable <T> (obs: Observable<T[]>): Observable<T> {
  return obs.pipe(map(([a]) => a));
}

export function firstMemo <T, A extends any[]> (fn: (api: DeriveApi, ...args: A) => Observable<T[]>): (instanceId: string, api: DeriveApi) => (...args: A) => Observable<T> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (...args: A) =>
      firstObservable<T>(fn(api, ...args))
    );
}
