// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observer, TeardownLogic } from 'rxjs';
import type { Memoized } from '@polkadot/util/types';

import { Observable } from 'rxjs';

import { memoize } from '@polkadot/util';

import { drr } from './drr.js';

type ObsFn <T> = (...params: unknown[]) => Observable<T>;

// Wraps a derive, doing 2 things to optimize calls -
//   1. creates a memo of the inner fn -> Observable, removing when unsubscribed
//   2. wraps the observable in a drr() (which includes an unsub delay)
/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-types
export function memo <T> (instanceId: string, inner: Function): Memoized<ObsFn<T>> {
  const options = { getInstanceId: () => instanceId };
  const cached = memoize(
    (...params: unknown[]): Observable<T> =>
      new Observable((observer: Observer<T>): TeardownLogic => {
        const subscription = (inner as ObsFn<T>)(...params).subscribe(observer);

        return (): void => {
          cached.unmemoize(...params);
          subscription.unsubscribe();
        };
      }).pipe(drr()),
    options
  );

  return cached;
}
