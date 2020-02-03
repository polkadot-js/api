// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { asapScheduler, ConnectableObservable, MonoTypeOperatorFunction, Observable, Subscription } from 'rxjs';

const DELAY = 1750;

/** @internal */
function refCountDelayInner <T> (source: Observable<T>): Observable<T> {
  let connected = 0; // 0 = disconnected, 1 = disconnecting, 2 = connecting, 3 = connected
  let refCount = 0;
  let con = Subscription.EMPTY;
  let sched = Subscription.EMPTY;

  return new Observable((ob) => {
    source.subscribe(ob);

    if (refCount++ === 0) {
      if (connected === 1) {
        connected = 3;
        sched.unsubscribe();
      } else {
        con = (source as ConnectableObservable<T>).connect();
        connected = 3;
      }
    }

    return (): void => {
      if (--refCount === 0) {
        if (connected === 2) {
          connected = 0;
          sched.unsubscribe();
        } else {
          // connected === 3
          connected = 1;
          sched = asapScheduler.schedule((): void => {
            con.unsubscribe();
            connected = 0;
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
