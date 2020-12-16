// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ConnectableObservable, MonoTypeOperatorFunction, TeardownLogic } from 'rxjs';

import rxjs from 'rxjs';

/** @internal */
export function refCountDelay <T> (delay = 1750): MonoTypeOperatorFunction<T> {
  return (source: rxjs.Observable<T>): rxjs.Observable<T> => {
    // state: 0 = disconnected, 1 = disconnecting, 2 = connecting, 3 = connected
    let [state, refCount, connection, scheduler] = [0, 0, rxjs.Subscription.EMPTY, rxjs.Subscription.EMPTY];

    return new rxjs.Observable((ob): TeardownLogic => {
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
            // state === 3
            state = 1;
            scheduler = rxjs.asapScheduler.schedule((): void => {
              state = 0;
              connection.unsubscribe();
            }, delay);
          }
        }
      };
    });
  };
}
