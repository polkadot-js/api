// Copyright 2017-2020 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0

import rxjs from 'rxjs';

// This is quite horrible - this was lifted from rxjs/_esm5/index.js
// The problem is that a simple `export * from 'rxjs'` has got named-export issues

const { ArgumentOutOfRangeError, AsyncSubject, BehaviorSubject, ConnectableObservable, EMPTY, EmptyError, GroupedObservable, NEVER, Notification, NotificationKind, ObjectUnsubscribedError, Observable, ReplaySubject, Scheduler, Subject, Subscriber, Subscription, TimeoutError, UnsubscriptionError, VirtualAction, VirtualTimeScheduler, animationFrame, animationFrameScheduler, asap, asapScheduler, async, asyncScheduler, bindCallback, bindNodeCallback, combineLatest, concat, config, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, identity, iif, interval, isObservable, merge, never, noop, observable, of, onErrorResumeNext, pairs, partition, pipe, queue, queueScheduler, race, range, scheduled, throwError, timer, using, zip } = rxjs;

export { ArgumentOutOfRangeError, AsyncSubject, BehaviorSubject, ConnectableObservable, EMPTY, EmptyError, GroupedObservable, NEVER, Notification, NotificationKind, ObjectUnsubscribedError, Observable, ReplaySubject, Scheduler, Subject, Subscriber, Subscription, TimeoutError, UnsubscriptionError, VirtualAction, VirtualTimeScheduler, animationFrame, animationFrameScheduler, asap, asapScheduler, async, asyncScheduler, bindCallback, bindNodeCallback, combineLatest, concat, config, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, identity, iif, interval, isObservable, merge, never, noop, observable, of, onErrorResumeNext, pairs, partition, pipe, queue, queueScheduler, race, range, scheduled, throwError, timer, using, zip };
