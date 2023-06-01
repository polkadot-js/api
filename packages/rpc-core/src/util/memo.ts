// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observer, TeardownLogic } from 'rxjs';
import type { Memoized } from '@polkadot/util/types';

import { Observable } from 'rxjs';

import { memoize } from '@polkadot/util';

import { drr } from './drr.js';

/**
 * @internal
 *
 * Wraps a derive, doing 2 things to optimize calls -
 *
 *   1. creates a memo of the inner fn -> Observable, removing when unsubscribed
 *   2. wraps the observable in a drr() (which includes an unsub delay)
 **/
export function memo <T, F extends (...args: any[]) => Observable<T>> (instanceId: string, inner: F): Memoized<F> {
  const options = { getInstanceId: () => instanceId };
  const cached = memoize(
    (...args: Parameters<F>): Observable<T> =>
      new Observable((observer: Observer<T>): TeardownLogic => {
        const subscription = inner(...args).subscribe(observer);

        return (): void => {
          cached.unmemoize(...args);
          subscription.unsubscribe();
        };
      }).pipe(drr()),
    options
  );

  return cached as unknown as Memoized<F>;
}
