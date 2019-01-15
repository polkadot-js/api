// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { ApiOptions } from '../types';
import { ApiPromiseInterface, OnCall, PromiseSubscription } from './types';

import { Observable } from 'rxjs';
import { isFunction } from 'util';
import { Codec } from '@polkadot/types/types';
import { logger } from '@polkadot/util';

import ApiBase from '../Base';
import ApiRx from '../rx';

const l = logger('api/promise');

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
 * import { ApiPromise } from '@polkadot/api';
 * import WsProvider from '@polkadot/rpc-provider/ws';
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
 *   const nonce = await api.query.system.accountNonce(keyring.alice.address());
 *
 *   api.tx.balances
 *     // create transfer
 *     transfer(keyring.bob.address(), 12345)
 *     // sign the transcation
 *     .sign(keyring.alice, nonce)
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
export default class ApiPromise extends ApiBase<Promise<Codec | null | undefined> | PromiseSubscription> implements ApiPromiseInterface {
  protected _apiRx: ApiRx;
  private _isReady: Promise<ApiPromise>;

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
   * an [[HttpProvider]] or [[WsProvider]]. In the case of [[HttpProvider]] subscriptions
   * are not supported, only latest values are returned.
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
    super(options);

    this._apiRx = new ApiRx(options);
    this._isReady = new Promise((resolveReady) =>
      super.once('ready', () =>
        resolveReady(this)
      )
    );
  }

  /**
   * @description Promise that returns the first time we are connected and loaded
   */
  get isReady (): Promise<ApiPromise> {
    return this._isReady;
  }

  protected onCall (method: (...params: Array<any>) => Observable<Codec | undefined | null>, params: Array<any>): OnCall {
    if (!params || params.length === 0) {
      return method(...params).toPromise();
    }

    const cb = params[params.length - 1];
    const remainingArgs = params.slice(0, -1);
    if (!isFunction(cb)) {
      return method(...params).toPromise();
    } else if (!this.hasSubscriptions && isFunction(cb)) {
      l.warn(`Storage subscription ignored, provider does not support subscriptions`);

      return method(...remainingArgs).toPromise();
    }

    const subscription = method(...remainingArgs).subscribe(cb);

    return Promise.resolve(subscription.unsubscribe);
  }
}
