// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { AnyFunction, Callback, Codec } from '@polkadot/types/types';
import { ApiOptions, DecorateMethodOptions, ObsInnerType, StorageEntryPromiseOverloads, UnsubscribePromise } from '../types';

import { EMPTY } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { isFunction, assert } from '@polkadot/util';

import ApiBase from '../Base';
import Combinator, { CombinatorCallback, CombinatorFunction } from './Combinator';

/**
 * # @polkadot/api/promise
 *
 * ## Overview
 *
 * @name ApiPromise
 *
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
 * api.rpc.chain.subscribeNewHead((header) => {
 *   console.log(`Chain is at #${header.blockNumber}`);
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
 * const api = await new ApiPromise(provider).isReady;
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
 *   const nonce = await api.query.system.accountNonce(keyring.alice.address);
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
export default class ApiPromise extends ApiBase<'promise'> {
  private _isReadyPromise: Promise<ApiPromise>;

  /**
   * @description Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.
   *
   * @param options options that is passed to the class contructor. Can be either [[ApiOptions]] or a
   * provider (see the constructor arguments)
   *
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
  static create (options: ApiOptions | ProviderInterface = {}): Promise<ApiPromise> {
    return new ApiPromise(options).isReady;
  }

  /**
   * @description Creates an instance of the ApiPromise class
   *
   * @param options Options to create an instance. This can be either [[ApiOptions]] or
   * an [[WsProvider]].
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * new Api().isReady.then((api) => {
   *   api.rpc.subscribeNewHead((header) => {
   *     console.log(`new block #${header.blockNumber.toNumber()}`);
   *   });
   * });
   * ```
   */
  constructor (options?: ApiOptions | ProviderInterface) {
    super(options, 'promise');

    this._isReadyPromise = new Promise((resolveReady) =>
      super.once('ready', () =>
        resolveReady(this)
      )
    );
  }

  /**
   * @description Promise that returns the first time we are connected and loaded
   */
  get isReady (): Promise<ApiPromise> {
    return this._isReadyPromise;
  }

  /**
   * @description Returns a clone of this ApiPromise instance (new underlying provider connection)
   */
  clone (): ApiPromise {
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
   *   api.rpc.chain.subscribeNewHead,
   *   [api.query.balances.freeBalance, address],
   *   (cb) => api.query.system.accountNonce(address, cb)
   * ], ([head, balance, nonce]) => {
   *   console.log(`#${head.number}: You have ${balance} units, with ${nonce} transactions sent`);
   * });
   * ```
   */
  async combineLatest (fns: Array<CombinatorFunction | [CombinatorFunction, ...Array<any>]>, callback: CombinatorCallback): UnsubscribePromise {
    const combinator = new Combinator(fns, callback);

    return (): void => {
      combinator.unsubscribe();
    };
  }

  protected decorateMethod<Method extends AnyFunction> (method: Method, options?: DecorateMethodOptions): StorageEntryPromiseOverloads {
    const needsCallback = options && options.methodName && options.methodName.includes('subscribe');

    return function (...args: any[]) {
      let callback: Callback<Codec> | undefined;
      let actualArgs = args.slice();

      // If the last arg is a function, we pop it, put it into callback.
      // actualArgs will then hold the actual arguments to be passed to `method`
      if (args.length && isFunction(args[args.length - 1])) {
        callback = actualArgs.pop();
      }

      // When we need a subscription, ensure that a valid callback is actually passed
      assert(!needsCallback || isFunction(callback), 'Expected a callback to be passed with subscriptions');

      if (!callback) {
        return method(...actualArgs).pipe(first()).toPromise() as Promise<ObsInnerType<ReturnType<Method>>>;
      }

      // FIXME TSLint shouts that type assertion is unnecessary, but tsc shouts
      // when I remove it...
      // tslint:disable-next-line
      return new Promise((resolve, reject) => {
        let isCompleted = false;
        const subscription = method(...actualArgs)
          .pipe(
            // if we find an error (invalid params, etc), reject the promise
            catchError((error) => {
              if (!isCompleted) {
                isCompleted = true;

                reject(error);
              }

              // we don't want to continue, so empty observable it is
              return EMPTY;
            }),
            // upon the first result, resolve the with the unsub function
            tap(() => {
              if (!isCompleted) {
                isCompleted = true;

                resolve(() => subscription.unsubscribe());
              }
            })
          )
          .subscribe(callback);
      }) as UnsubscribePromise;
    } as StorageEntryPromiseOverloads;
  }
}
