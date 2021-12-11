// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';

import { map } from 'rxjs';

import { memo } from '@polkadot/rpc-core';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { ApiInterfaceRx } from '@polkadot/api/types';

export function firstObservable <T> (obs: Observable<T[]>): Observable<T> {
  return obs.pipe(map(([a]) => a));
}

export function firstMemo <T, A extends any[]> (fn: (api: ApiInterfaceRx) => (...args: A) => Observable<T[]>): (instanceId: string, api: ApiInterfaceRx) => (...args: A) => Observable<T> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    memo(instanceId, (...args: A) =>
      firstObservable<T>(fn(api)(...args))
    );
}
