// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { ApiRxInterface, OnCall } from './types';
import { ApiOptions } from '../types';

import { Observable, from } from 'rxjs';
import { Codec } from '@polkadot/types/types';
import { assert } from '@polkadot/util';

import ApiBase from '../Base';

/**
 * # @polkadot/api/rx
 *
 *  ## Overview
 *
 * @name ApiRx
 *
 * @description
 * ApiRx is a powerfull RxJS Observable wrapper around the RPC and interfaces on the Polkadot network. As a full Observable API, all interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion and subscription-based methods return long-running Observables that update with the latest values.
 *
 * The API is well suited to real-time applications where the latest state is needed, unlocking the subscription-based features of Polkadot (and Substrate) clients. Some familiarity with RxJS is a requirement to use the API, however just understanding `.subscribe` and `.pipe` on Observables will unlock full-scale use thereof.
 *
 * @see [[ApiPromise]]
 *
 * ## Usage
 *
 * Making rpc calls -
 * <BR>
 *
 * ```javascript
 * import ApiRx from '@polkadot/api/rx';
 *
 * // initialise via Promise & static create
 * const api = await ApiRx.create().toPromise();
 *
 * // make a call to retrieve the current network head
 * api.rpc.chain.subscribeNewHead().subscribe((header) => {
 *   console.log(`Chain is at #${header.blockNumber}`);
 * });
 * ```
 * <BR>
 *
 * Subscribing to chain state -
 * <BR>
 *
 * ```javascript
 * import { combineLatest } from 'rxjs';
 * import { ApiRx } from '@polkadot/api';
 * import { WsProvider } from '@polkadot/rpc-provider';
 *
 * // last block timestamp
 * let last = 0;
 *
 * // initialise a provider with a specific endpoint
 * const provider = new WsProvider('wss://example.com:9944')
 *
 * // initialise via isReady & new with specific provider
 * new ApiRx(provider)
 *   .isReady
 *   .pipe(
 *     switchMap((api) =>
 *       combineLatest([
 *         api.query.timestamp.blockPeriod(),
 *         api.query.timestamp.now()
 *       ])
 *   )
 *   .subscribe(([blockPeriod, timestamp]) => {
 *     const elapsed = last
 *       ? `, ${timestamp.toNumber() - last}s since last`
 *       : '';
 *
 *     last = timestamp.toNumber();
 *     console.log(`timestamp ${timestamp}${elapsed} (${blockPeriod}s target)`);
 *   });
 * ```
 * <BR>
 *
 * Submitting a transaction -
 * <BR>
 *
 * ```javascript
 * import ApiRx from '@polkadot/api/rx';
 *
 * // get api via Promise
 * const api = await ApiRx.create().toPromise();
 *
 * // retrieve nonce for the account
 * api.query.system
 *   .accountNonce(keyring.alice.address())
 *   .pipe(
 *      // pipe nonce into transfer
 *      switchMap((nonce) =>
 *        api.tx.balances
 *          // create transfer
 *          .transfer(keyring.bob.address(), 12345)
 *          // sign the transcation
 *          .sign(keyring.alice, nonce)
 *          // send the transaction
 *          .send()
 *      )
 *   )
 *   // subscribe to overall result
 *   .subscribe((hash) => {
 *     console.log(`submitted with hash ${hash}`);
 *   });
 * ```
 */
export default class ApiRx extends ApiBase<Observable<Codec | null | undefined>> implements ApiRxInterface {
  protected _apiRx = this;
  private _isReady: Observable<ApiRx>;

  /**
   * @description Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.
   *
   * @param options options that is passed to the class contructor. Can be either [[ApiOptions]] or [[WsProvider]]
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/rx';
   *
   * Api.create().subscribe((api) => {
   *   api.query.timestamp.now.subscribe((timestamp) => {
   *     console.log(`lastest block timestamp ${timestamp}`);
   *   });
   * });
   * ```
   */
  static create (options?: ApiOptions | ProviderInterface): Observable<ApiRx> {
    return new ApiRx(options).isReady;
  }

  /**
   * @description Create an instance of the ApiRx class
   *
   * @param options Options to create an instance. Can be either [[ApiOptions]] or [[WsProvider]]
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/rx';
   *
   * new Api().isReady.subscribe((api) => {
   *   api.rpc.subscribeNewHead().subscribe((header) => {
   *     console.log(`new block #${header.blockNumber.toNumber()}`);
   *   });
   * });
   * ```
   */
  constructor (options?: ApiOptions | ProviderInterface) {
    super(options);

    assert(this.hasSubscriptions, 'ApiRx can only be used with a provider supporting subscriptions');

    this._isReady = from(
      // convinced you can observable from an event, however my mind groks this form better
      new Promise((resolveReady) =>
        super.on('ready', () =>
          resolveReady(this)
        )
      )
    );
  }

  /**
   * @description Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.
   */
  get isConnected (): Observable<boolean> {
    return this._rpcRx.isConnected();
  }

  /**
   * @description Observable that returns the first time we are connected and loaded
   */
  get isReady (): Observable<ApiRx> {
    return this._isReady;
  }

  protected onCall (method: (...params: Array<any>) => Observable<Codec | undefined | null>, params: Array<any>): OnCall {
    return method(...params);
  }
}
