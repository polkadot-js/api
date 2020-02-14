// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.v

import createMemo from 'memoizee';
import { Observable, Observer } from 'rxjs';
import { drr } from '@polkadot/rpc-core/rxjs';

type ObsFn <T> = (...params: any[]) => Observable<T>;

// Normalize via JSON.stringify, allow e.g. AccountId -> ss58
// eslint-disable-next-line @typescript-eslint/unbound-method
const normalizer = JSON.stringify;

// Wraps a derive, doing 2 things to optimize calls -
//   1. creates a memo of the inner fn -> Observable, removing when unsubscribed
//   2. wraps the observable in a drr() (which includes an unsub delay)
/** @internal */
export function memo <T> (inner: ObsFn<T>): ObsFn<T> {
  const cached = createMemo(
    (...params: any[]): Observable<T> =>
      Observable.create((observer: Observer<T>): VoidCallback => {
        const sub = inner(...params).subscribe(observer);

        return (): void => {
          cached.delete(...params);
          sub.unsubscribe();
        };
      }).pipe(drr()),
    { normalizer }
  );

  return cached;
}
