// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiOptions, UnsubscribePromise } from '../types/index.js';
import type { CombinatorCallback, CombinatorFunction } from './Combinator.js';

import { noop, objectSpread } from '@polkadot/util';

import { ApiBase } from '../base/index.js';
import { Combinator } from './Combinator.js';
import { promiseTracker, toPromiseMethod } from './decorateMethod.js';

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
    super(options, 'promise', toPromiseMethod);

    this.#isReadyPromise = new Promise((resolve): void => {
      super.once('ready', () => resolve(this));
    });

    this.#isReadyOrErrorPromise = new Promise((resolve, reject): void => {
      const tracker = promiseTracker(resolve, reject);

      super.once('ready', () => tracker.resolve(this));
      super.once('error', (error: Error) => tracker.reject(error));
    });
  }

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
    const instance = new ApiPromise(options);

    if (options && options.throwOnConnect) {
      return instance.isReadyOrError;
    }

    // Swallow any rejections on isReadyOrError
    // (in Node 15.x this creates issues, when not being looked at)
    instance.isReadyOrError.catch(noop);

    return instance.isReady;
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
    return new ApiPromise(
      objectSpread({}, this._options, { source: this })
    );
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
