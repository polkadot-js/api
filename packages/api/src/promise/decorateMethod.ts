// Copyright 2017-2022 @polkadot/api authors & contributors
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

type CodecReturnType<T extends (...args: unknown[]) => Observable<Codec>> =
  T extends (...args: any) => infer R
    ? R extends Observable<Codec>
      ? ObsInnerType<R>
      : never
    : never;

// a Promise completion tracker, wrapping an isComplete variable that ensures
// that the promise only resolves once
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
  const actualArgs = args.slice();

  // If the last arg is a function, we pop it, put it into callback.
  // actualArgs will then hold the actual arguments to be passed to `method`
  const callback = (args.length && isFunction(args[args.length - 1]))
    ? actualArgs.pop() as Callback<Codec>
    : undefined;

  // When we need a subscription, ensure that a valid callback is actually passed
  assert(!needsCallback || isFunction(callback), 'Expected a callback to be passed with subscriptions');

  return [actualArgs, callback];
}

// Decorate a call for a single-shot result - retrieve and then immediate unsubscribe
function decorateCall<M extends DecorateFn<CodecReturnType<M>>> (method: M, args: unknown[]): Promise<CodecReturnType<M>> {
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

        // slightly faster than setTimeout(..., 0)
        Promise
          .resolve()
          .then(() => subscription.unsubscribe())
          .catch(console.error);
      });
  });
}

// Decorate a subscription where we have a result callback specified
function decorateSubscribe<M extends DecorateFn<CodecReturnType<M>>> (method: M, args: unknown[], resultCb: Callback<Codec>): UnsubscribePromise {
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
        // slightly faster than setTimeout(..., 0)
        Promise
          .resolve()
          .then(() => resultCb(result))
          .catch(console.error);
      });
  });
}

/**
 * @description Decorate method for ApiPromise, where the results are converted to the Promise equivalent
 */
export function toPromiseMethod<M extends DecorateFn<CodecReturnType<M>>> (method: M, options?: DecorateMethodOptions): StorageEntryPromiseOverloads {
  const needsCallback = !!(options && options.methodName && options.methodName.includes('subscribe'));

  return function (...args: unknown[]): Promise<CodecReturnType<M>> | UnsubscribePromise {
    const [actualArgs, resultCb] = extractArgs(args, needsCallback);

    return resultCb
      ? decorateSubscribe(method, actualArgs, resultCb)
      : decorateCall((options?.overrideNoSub as M) || method, actualArgs);
  } as StorageEntryPromiseOverloads;
}
