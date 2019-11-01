// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// From https://medium.com/@volkeron/rxjs-unsubscribe-delay-218a9ab2672e (adapted for rxjs 6)
// v6 inspiration from https://github.com/cartant/rxjs-etc/blob/7d7cd21233f67c364fd246ef72077bbe494dd5c2/source/operators/refCountDelay.ts

import { asapScheduler, ConnectableObservable, MonoTypeOperatorFunction, NEVER, Observable, Subject, Subscription, timer, using } from 'rxjs';
import { scan, switchMap, tap } from 'rxjs/operators';

const DELAY = 1750;

// subscribe to a source, tracker and increment the counter
function subscribe <T> (source: Observable<T>, counter: Subject<number>, tracker: Observable<number>): [Subscription, Subscription] {
  const sourceConn = (source as ConnectableObservable<T>).connect();
  const trackerConn = tracker.subscribe();

  counter.next(1);

  return [sourceConn, trackerConn];
}

// unsubscribe from both the tracker and the source
function unsubscribe (sourceConn: Subscription | undefined, trackerConn: Subscription | undefined): void {
  sourceConn && sourceConn.unsubscribe();
  trackerConn && trackerConn.unsubscribe();
}

// keep track of references, but only unsubscribe after the configured delay
export function refCountDelay <T> (): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>): Observable<T> => {
    let sourceConn: Subscription | undefined;
    let trackerConn: Subscription | undefined;
    const counter = new Subject<number>();
    const tracker = counter.pipe(
      scan((total, change) => change + total, 0),
      switchMap((count) =>
        count === 0 // when we have a zero count, schedule a unsubscribe
          ? timer(DELAY, asapScheduler).pipe(tap((): void => unsubscribe(sourceConn, trackerConn)))
          : NEVER
      )
    );

    return using(
      () => {
        [sourceConn, trackerConn] = subscribe(source, counter, tracker);

        return {
          unsubscribe: (): void => counter.next(-1)
        };
      },
      (): Observable<T> => source
    );
  };
}
