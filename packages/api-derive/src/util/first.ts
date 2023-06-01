// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveApi } from '../types.js';

import { map } from 'rxjs';

import { memo } from '@polkadot/rpc-core';

export function firstObservable <T> (obs: Observable<T[]>): Observable<T> {
  return obs.pipe(map(([a]) => a));
}

export function firstMemo <T, F extends (...args: any[]) => Observable<T>> (fn: (api: DeriveApi, ...args: any[]) => Observable<T[]>): (instanceId: string, api: DeriveApi) => F {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (...args: any[]) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      firstObservable<T>(fn(api, ...args))
    ) as unknown as F;
}
