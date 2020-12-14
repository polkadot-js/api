// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Callback, Codec } from '@polkadot/types/types';
import type { ApiOptions, DecorateFn, DecorateMethodOptions, ObsInnerType, StorageEntryPromiseOverloads, UnsubscribePromise, VoidFn } from '../types';

import { assert, isFunction } from '@polkadot/util';
import { EMPTY, Observable, Subscription } from '@polkadot/x-rxjs';
import { catchError, tap } from '@polkadot/x-rxjs/operators';

import { ApiBase } from '../base';
import { Combinator, CombinatorCallback, CombinatorFunction } from './Combinator';

interface Tracker<T> {
  reject: (value: Error) => Observable<never>;
  resolve: (value: T) => void;
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

// a Promise completion tracker, wrapping an isComplete variable that ensures the promise only resolves once
function promiseTracker<T> (resolve: (value: T) => void, reject: (value: Error) => void): Tracker<T> {
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

// Decorate a call for a single-shot result - retrieve and then immediate unsubscribe
function decorateCall<Method extends DecorateFn<ObsInnerType<ReturnType<Method>>>> (method: Method, actualArgs: unknown[]): Promise<ObsInnerType<ReturnType<Method>>> {
  return new Promise((resolve, reject): void => {
    // single result tracker - either reject with Error or resolve with Codec result
    const tracker = promiseTracker(resolve, reject);

    // encoding errors reject immediately, any result unsubscribes and resolves
    const subscription: Subscription = method(...actualArgs).pipe(
      catchError((error) => tracker.reject(error))
    ).subscribe((result): void => {
      tracker.resolve(result);
      setTimeout(() => subscription.unsubscribe(), 0);
    });
  });
}

// Decorate a subscription where we have a result callback specified
function decorateSubscribe<Method extends DecorateFn<ObsInnerType<ReturnType<Method>>>> (method: Method, actualArgs: unknown[], resultCb: Callback<Codec>): UnsubscribePromise {
  return new Promise<VoidFn>((resolve, reject): void => {
    // either reject with error or resolve with unsubscribe callback
    const tracker = promiseTracker(resolve, reject);

    // errors reject immediately, the first result resolves with an unsubscribe promise, all results via callback
    const subscription: Subscription = method(...actualArgs).pipe(
      catchError((error) => tracker.reject(error)),
      tap(() => tracker.resolve(() => subscription.unsubscribe()))
    ).subscribe((result): void => {
      // queue result (back of queue to clear current)
      setTimeout(() => resultCb(result) as void, 0);
    });
  });
}

/**
 * @description Decorate method for ApiPromise, where the results are converted to the Promise equivalent
 */
export function decorateMethod<Method extends DecorateFn<ObsInnerType<ReturnType<Method>>>> (method: Method, options?: DecorateMethodOptions): StorageEntryPromiseOverloads {
  const needsCallback = options && options.methodName && options.methodName.includes('subscribe');

  return function (...args: unknown[]): Promise<ObsInnerType<ReturnType<Method>>> | UnsubscribePromise {
    const [actualArgs, resultCb] = extractArgs(args, !!needsCallback);

    return resultCb
      ? decorateSubscribe(method, actualArgs, resultCb)
      : decorateCall((options?.overrideNoSub as Method) || method, actualArgs);
  } as StorageEntryPromiseOverloads;
}

/**
 * # @polkadot/api/promise
 *
 * ## Overview
 *
 * @name ApiPromise
 * @description
 * ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Polkadot network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise `(value) => {}` callbacks to pass through the latest values.
 *
 * The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of the subscription-based features of Polkadot (and Substrate) clients.
 *
 * @see [[ApiRx]]
 *
 * ## Usage
 *
 * Making rpc calls -
 * <BR>
 *
 * ```javascript
 * import ApiPromise from '@polkadot/api/promise';
 *
 * // initialise via static create
 * const api = await ApiPromise.create();
 *
 * // make a subscription to the network head
 * api.rpc.chain.subscribeNewHeads((header) => {
 *   console.log(`Chain is at #${header.number}`);
 * });
 * ```
 * <BR>
 *
 * Subscribing to chain state -
 * <BR>
 *
 * ```javascript
 * import { ApiPromise, WsProvider } from '@polkadot/api';
 *
 * // initialise a provider with a specific endpoint
 * const provider = new WsProvider('wss://example.com:9944')
 *
 * // initialise via isReady & new with specific provider
 * const api = await new ApiPromise({ provider }).isReady;
 *
 * // retrieve the block target time
 * const blockPeriod = await api.query.timestamp.blockPeriod().toNumber();
 * let last = 0;
 *
 * // subscribe to the current block timestamp, updates automatically (callback provided)
 * api.query.timestamp.now((timestamp) => {
 *   const elapsed = last
 *     ? `, ${timestamp.toNumber() - last}s since last`
 *     : '';
 *
 *   last = timestamp.toNumber();
 *   console.log(`timestamp ${timestamp}${elapsed} (${blockPeriod}s target)`);
 * });
 * ```
 * <BR>
 *
 * Submitting a transaction -
 * <BR>
 *
 * ```javascript
 * import ApiPromise from '@polkadot/api/promise';
 *
 * ApiPromise.create().then((api) => {
 *   const [nonce] = await api.query.system.account(keyring.alice.address);
 *
 *   api.tx.balances
 *     // create transfer
 *     transfer(keyring.bob.address, 12345)
 *     // sign the transcation
 *     .sign(keyring.alice, { nonce })
 *     // send the transaction (optional status callback)
 *     .send((status) => {
 *       console.log(`current status ${status.type}`);
 *     })
 *     // retrieve the submitted extrinsic hash
 *     .then((hash) => {
 *       console.log(`submitted with hash ${hash}`);
 *     });
 * });
 * ```
 */
export class ApiPromise extends ApiBase<'promise'> {
  #isReadyPromise: Promise<ApiPromise>;
  #isReadyOrErrorPromise: Promise<ApiPromise>;

  /**
   * @description Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.
   * @param options options that is passed to the class contructor. Can be either [[ApiOptions]] or a
   * provider (see the constructor arguments)
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * Api.create().then(async (api) => {
   *   const timestamp = await api.query.timestamp.now();
   *
   *   console.log(`lastest block timestamp ${timestamp}`);
   * });
   * ```
   */
  public static create (options?: ApiOptions): Promise<ApiPromise> {
    return new ApiPromise(options).isReady;
  }

  /**
   * @description Creates an instance of the ApiPromise class
   * @param options Options to create an instance. This can be either [[ApiOptions]] or
   * an [[WsProvider]].
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * new Api().isReady.then((api) => {
   *   api.rpc.subscribeNewHeads((header) => {
   *     console.log(`new block #${header.number.toNumber()}`);
   *   });
   * });
   * ```
   */
  constructor (options?: ApiOptions) {
    super(options, 'promise', decorateMethod);

    this.#isReadyPromise = new Promise((resolve): void => {
      super.once('ready', (): void => {
        resolve(this);
      });
    });

    this.#isReadyOrErrorPromise = new Promise((resolve, reject): void => {
      super.once('ready', (): void => {
        resolve(this);
      });
      super.once('error', (e): void => {
        reject(e);
      });
    });
  }

  /**
   * @description Promise that resolves the first time we are connected and loaded
   */
  public get isReady (): Promise<ApiPromise> {
    return this.#isReadyPromise;
  }

  /**
   * @description Promise that resolves if we can connect, or reject if there is an error
   */
  public get isReadyOrError (): Promise<ApiPromise> {
    return this.#isReadyOrErrorPromise;
  }

  /**
   * @description Returns a clone of this ApiPromise instance (new underlying provider connection)
   */
  public clone (): ApiPromise {
    return new ApiPromise({
      ...this._options,
      source: this
    });
  }

  /**
   * @description Creates a combinator that can be used to combine the latest results from multiple subscriptions
   * @param fns An array of function to combine, each in the form of `(cb: (value: void)) => void`
   * @param callback A callback that will return an Array of all the values this combinator has been applied to
   * @example
   * <BR>
   *
   * ```javascript
   * const address = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7';
   *
   * // combines values from balance & nonce as it updates
   * api.combineLatest([
   *   api.rpc.chain.subscribeNewHeads,
   *   (cb) => api.query.system.account(address, cb)
   * ], ([head, [balance, nonce]]) => {
   *   console.log(`#${head.number}: You have ${balance.free} units, with ${nonce} transactions sent`);
   * });
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async combineLatest <T extends any[] = any[]> (fns: (CombinatorFunction | [CombinatorFunction, ...any[]])[], callback: CombinatorCallback<T>): UnsubscribePromise {
    const combinator = new Combinator(fns, callback);

    return (): void => {
      combinator.unsubscribe();
    };
  }
}
