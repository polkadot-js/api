// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// From https://medium.com/@volkeron/rxjs-unsubscribe-delay-218a9ab2672e (adapted for rxjs 6)
// Port inspiration from https://github.com/cartant/rxjs-etc/blob/7d7cd21233f67c364fd246ef72077bbe494dd5c2/source/operators/refCountDelay.ts

import { asapScheduler, ConnectableObservable, MonoTypeOperatorFunction, NEVER, Observable, Subject, Subscription, timer, using } from 'rxjs';
import { scan, switchMap, tap } from 'rxjs/operators';

export function refCountDelay <T> (delay = 1500): MonoTypeOperatorFunction<T> {
  return (_source: Observable<T>): Observable<T> => {
    // We are using connect, cast it
    const source = _source as ConnectableObservable<T>;
    const subscribeUpdates = new Subject<number>();
    let trackerConnection: Subscription;
    let subscriptionTracker = subscribeUpdates.pipe(
      // scan  for updates
      scan((total, change) => change + total, 0),
      switchMap((count) => {
        // when we have a zero count, schedule a unsubscribe
        return count === 0
          ? timer(delay, asapScheduler).pipe(
            tap((): void => {
              source.connect().unsubscribe();
              trackerConnection.unsubscribe();
            })
          )
          : NEVER;
      })
    );

    const onNewSubscriber = () => {
      source.connect();
      trackerConnection = subscriptionTracker.subscribe();
      subscribeUpdates.next(1);

      return {
        unsubscribe: (): void => {
          subscribeUpdates.next(-1);
        }
      };
    };

    return using(onNewSubscriber, (): Observable<T> => source);
  };
}
