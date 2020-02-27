// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { asapScheduler, ConnectableObservable, MonoTypeOperatorFunction, Observable, Subscription } from 'rxjs';

const DELAY = 1750;

/** @internal */
function refCountDelayInner <T> (source: Observable<T>): Observable<T> {
  // 0 = disconnected, 1 = disconnecting, 2 = connecting, 3 = connected
  let [refCount, state, connection, scheduler] = [0, 0, Subscription.EMPTY, Subscription.EMPTY];

  return new Observable((ob) => {
    source.subscribe(ob);

    if (refCount++ === 0) {
      if (state === 1) {
        scheduler.unsubscribe();
      } else {
        connection = (source as ConnectableObservable<T>).connect();
      }

      state = 3;
    }

    return (): void => {
      if (--refCount === 0) {
        if (state === 2) {
          state = 0;
          scheduler.unsubscribe();
        } else {
          // connected === 3
          state = 1;
          scheduler = asapScheduler.schedule((): void => {
            connection.unsubscribe();
            state = 0;
          }, DELAY);
        }
      }
    };
  });
}

/** @internal */
export function refCountDelay <T> (): MonoTypeOperatorFunction<T> {
  return refCountDelayInner;
}
