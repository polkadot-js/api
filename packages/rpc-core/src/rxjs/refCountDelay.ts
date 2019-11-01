// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// From https://medium.com/@volkeron/rxjs-unsubscribe-delay-218a9ab2672e (adapted for rxjs 6)
// v6 inspiration from https://github.com/cartant/rxjs-etc/blob/7d7cd21233f67c364fd246ef72077bbe494dd5c2/source/operators/refCountDelay.ts

import { asapScheduler, ConnectableObservable, MonoTypeOperatorFunction, NEVER, Observable, Subject, Subscription, timer, using } from 'rxjs';
import { scan, switchMap, tap } from 'rxjs/operators';

export function refCountDelay <T> (delay = 1750): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>): Observable<T> => {
    let sourceConnection: Subscription | undefined;
    let trackerConnection: Subscription | undefined;
    const subscribeUpdates = new Subject<number>();
    const subscriptionTracker = subscribeUpdates.pipe(
      scan((total, change) => change + total, 0),
      switchMap((count) =>
        count === 0 // when we have a zero count, schedule a unsubscribe
          ? timer(delay, asapScheduler).pipe(
            tap((): void => {
              sourceConnection && sourceConnection.unsubscribe();
              trackerConnection && trackerConnection.unsubscribe();
            })
          )
          : NEVER
      )
    );

    return using(
      () => {
        sourceConnection = (source as ConnectableObservable<T>).connect();
        trackerConnection = subscriptionTracker.subscribe();
        subscribeUpdates.next(1);

        return {
          unsubscribe: (): void => subscribeUpdates.next(-1)
        };
      },
      (): Observable<T> => source
    );
  };
}
