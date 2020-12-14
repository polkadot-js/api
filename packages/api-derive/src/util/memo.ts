// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Memoized } from '@polkadot/util/types';
import type { Observer, TeardownLogic } from '@polkadot/x-rxjs';

import { drr } from '@polkadot/rpc-core/util';
import { memoize } from '@polkadot/util';
import { Observable } from '@polkadot/x-rxjs';

type ObsFn <T> = (...params: any[]) => Observable<T>;

// Wraps a derive, doing 2 things to optimize calls -
//   1. creates a memo of the inner fn -> Observable, removing when unsubscribed
//   2. wraps the observable in a drr() (which includes an unsub delay)
/** @internal */
export function memo <T> (instanceId: string, inner: ObsFn<T>): Memoized<ObsFn<T>> {
  const cached = memoize(
    (...params: any[]): Observable<T> =>
      new Observable((observer: Observer<T>): TeardownLogic => {
        const subscription = inner(...params).subscribe(observer);

        return (): void => {
          cached.unmemoize(...params);
          subscription.unsubscribe();
        };
      }).pipe(drr()),
    { getInstanceId: () => instanceId }
  );

  return cached;
}
