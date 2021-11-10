// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Callback, Codec } from '@polkadot/types/types';
import type { DecorateFn, DecorateMethodOptions, ObsInnerType, StorageEntryPromiseOverloads, UnsubscribePromise, VoidFn } from '../types';

import { catchError, EMPTY, Subscription, tap } from 'rxjs';

import { assert, isFunction } from '@polkadot/util';

interface Tracker<T> {
  reject: (value: Error) => Observable<never>;
  resolve: (value: T) => void;
}

// a Promise completion tracker, wrapping an isComplete variable that ensures the promise only resolves once
export function promiseTracker<T> (resolve: (value: T) => void, reject: (value: Error) => void): Tracker<T> {
  let isCompleted = false;

  return {
    reject: (error: Error): Observable<never> => {
      if (!isCompleted) {
        isCompleted = true;

        reject(error);
      }

      return EMPTY;
    },
    resolve: (value: T): void => {
      if (!isCompleted) {
        isCompleted = true;

        resolve(value);
      }
    }
  };
}

// extract the arguments and callback params from a value array possibly containing a callback
function extractArgs (args: unknown[], needsCallback: boolean): [unknown[], Callback<Codec> | undefined] {
  let callback: Callback<Codec> | undefined;
  const actualArgs = args.slice();

  // If the last arg is a function, we pop it, put it into callback.
  // actualArgs will then hold the actual arguments to be passed to `method`
  if (args.length && isFunction(args[args.length - 1])) {
    callback = actualArgs.pop() as Callback<Codec>;
  }

  // When we need a subscription, ensure that a valid callback is actually passed
  assert(!needsCallback || isFunction(callback), 'Expected a callback to be passed with subscriptions');

  return [actualArgs, callback];
}

// Decorate a call for a single-shot result - retrieve and then immediate unsubscribe
function decorateCall<M extends DecorateFn<ObsInnerType<ReturnType<M>>>> (method: M, args: unknown[]): Promise<ObsInnerType<ReturnType<M>>> {
  return new Promise((resolve, reject): void => {
    // single result tracker - either reject with Error or resolve with Codec result
    const tracker = promiseTracker(resolve, reject);

    // encoding errors reject immediately, any result unsubscribes and resolves
    const subscription: Subscription = method(...args)
      .pipe(
        catchError((error: Error) => tracker.reject(error))
      )
      .subscribe((result): void => {
        tracker.resolve(result);
        setTimeout(() => subscription.unsubscribe(), 0);
      });
  });
}

// Decorate a subscription where we have a result callback specified
function decorateSubscribe<M extends DecorateFn<ObsInnerType<ReturnType<M>>>> (method: M, args: unknown[], resultCb: Callback<Codec>): UnsubscribePromise {
  return new Promise<VoidFn>((resolve, reject): void => {
    // either reject with error or resolve with unsubscribe callback
    const tracker = promiseTracker(resolve, reject);

    // errors reject immediately, the first result resolves with an unsubscribe promise, all results via callback
    const subscription: Subscription = method(...args)
      .pipe(
        catchError((error: Error) => tracker.reject(error)),
        tap(() => tracker.resolve(() => subscription.unsubscribe()))
      )
      .subscribe((result): void => {
        // queue result (back of queue to clear current)
        setTimeout(() => resultCb(result) as void, 0);
      });
  });
}

/**
 * @description Decorate method for ApiPromise, where the results are converted to the Promise equivalent
 */
export function toPromiseMethod<M extends DecorateFn<ObsInnerType<ReturnType<M>>>> (method: M, options?: DecorateMethodOptions): StorageEntryPromiseOverloads {
  const needsCallback = !!(options && options.methodName && options.methodName.includes('subscribe'));

  return function (...args: unknown[]): Promise<ObsInnerType<ReturnType<M>>> | UnsubscribePromise {
    const [actualArgs, resultCb] = extractArgs(args, needsCallback);

    return resultCb
      ? decorateSubscribe(method, actualArgs, resultCb)
      : decorateCall((options?.overrideNoSub as M) || method, actualArgs);
  } as StorageEntryPromiseOverloads;
}
