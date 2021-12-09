// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';

import { map } from 'rxjs';

export { drr, memo } from '@polkadot/rpc-core';

export * from './approvalFlagsToBools';
export * from './cache';
export * from './cacheImpl';

export function firstObservable <T> (obs: Observable<T[]>): Observable<T> {
  return obs.pipe(map(([a]) => a));
}
