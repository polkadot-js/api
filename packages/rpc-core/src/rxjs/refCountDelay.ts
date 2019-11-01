// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// From https://github.com/cartant/rxjs-etc/blob/7d7cd21233f67c364fd246ef72077bbe494dd5c2/source/operators/refCountDelay.ts

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-etc
 */

import { asapScheduler, ConnectableObservable, MonoTypeOperatorFunction, NEVER, Observable, Subject, Subscription, timer, using } from 'rxjs';
import { scan, switchMap, tap } from 'rxjs/operators';

export function refCountDelay <T> (duration = 2000): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>): Observable<T> => {
    // This implementation is based upon:
    // https://medium.com/@volkeron/rxjs-unsubscribe-delay-218a9ab2672e
    //
    // Which was based upon:
    // https://github.com/ReactiveX/rxjs/issues/171#issuecomment-131218605
    // https://github.com/ReactiveX/rxjs/issues/171#issuecomment-267881847

    const connectable: ConnectableObservable<T> = source as any;
    let connectableSubscription: Subscription | null = null;
    let connectorSubscription: Subscription | null = null;

    const notifier = new Subject<number>();
    const connector = notifier.pipe(
      scan((count, step) => count + step, 0),
      switchMap((count) => {
        if (count === 0) {
          return timer(duration, asapScheduler).pipe(
            tap(() => {
              if (connectableSubscription) {
                connectableSubscription.unsubscribe();
                connectableSubscription = null;
              }
              if (connectorSubscription) {
                connectorSubscription.unsubscribe();
                connectorSubscription = null;
              }
            })
          );
        } else if (!connectableSubscription && count > 0) {
          return timer(0, asapScheduler).pipe(
            tap(() => {
              if (!connectableSubscription) {
                connectableSubscription = connectable.connect();
              }
            })
          );
        }

        return NEVER;
      })
    );

    return using(
      () => {
        if (!connectorSubscription) {
          connectorSubscription = connector.subscribe();
        }
        notifier.next(1);

        return {
          unsubscribe: (): void =>
            notifier.next(-1)
        };
      },
      () => source
    );
  };
}
