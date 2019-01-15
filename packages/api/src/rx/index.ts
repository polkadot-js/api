// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { ApiRxInterface, OnCall } from './types';
import { ApiOptions, ApiInterface$Events } from '../types';

import EventEmitter from 'eventemitter3';
import { Observable, from } from 'rxjs';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import registry from '@polkadot/types/codec/typeRegistry';
import { Event, Hash, Metadata, Method, RuntimeVersion } from '@polkadot/types/index';
import { Codec } from '@polkadot/types/types';
import { assert, isFunction, isObject, isUndefined, logger } from '@polkadot/util';

import ApiBase, { INIT_ERROR } from '../Base';

const l = logger('api/rx');

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
export default class ApiRx extends ApiBase<OnCall> implements ApiRxInterface {
  protected _apiRx = this;
  private _eventemitter: EventEmitter;
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
  constructor (provider?: ApiOptions | ProviderInterface) {
    super(provider);

    const options = isObject(provider) && isFunction((provider as ProviderInterface).send)
      ? { provider } as ApiOptions
      : provider as ApiOptions;

    assert(this.hasSubscriptions, 'ApiRx can only be used with a provider supporting subscriptions');

    this._eventemitter = new EventEmitter();
    this._isReady = from(
      // convinced you can observable from an event, however my mind groks this form better
      new Promise((resolveReady) =>
        super.on('ready', () =>
          resolveReady(this)
        )
      )
    );

    if (options && options.types) {
      registry.register(options.types);
    }

    this.init();
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  get genesisHash (): Hash {
    assert(!isUndefined(this._genesisHash), INIT_ERROR);

    return this._apiRx._genesisHash as Hash;
  }

  /**
   * @description `true` when subscriptions are supported
   */
  get hasSubscriptions (): boolean {
    return this._rpcBase._provider.hasSubscriptions;
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

  /**
   * @description Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.
   */
  get runtimeMetadata (): Metadata {
    assert(!isUndefined(this._runtimeMetadata), INIT_ERROR);

    return this._runtimeMetadata as Metadata;
  }

  /**
   * @description Contains the version information for the current runtime.
   */
  get runtimeVersion (): RuntimeVersion {
    assert(!isUndefined(this._runtimeVersion), INIT_ERROR);

    return this._runtimeVersion as RuntimeVersion;
  }

  protected init (): void {
    let isReady: boolean = false;

    this._rpcBase._provider.on('disconnected', () => {
      this.emit('disconnected');
    });

    this._rpcBase._provider.on('error', (error) => {
      this.emit('error', error);
    });

    this._rpcBase._provider.on('connected', async () => {
      this.emit('connected');

      const hasMeta = await this.loadMeta();

      if (hasMeta && !isReady) {
        isReady = true;

        this.emit('ready', this);
      }
    });
  }

  private async loadMeta (): Promise<boolean> {
    try {
      this._runtimeMetadata = await this._rpcBase.state.getMetadata();
      this._runtimeVersion = await this._rpcBase.chain.getRuntimeVersion();
      this._genesisHash = await this._rpcBase.chain.getBlockHash(0);

      const extrinsics = extrinsicsFromMeta(this.runtimeMetadata);

      this._extrinsics = this.decorateExtrinsics();
      this._query = this.decorateStorage();
      this._derive = this.decorateDerive(this._apiRx);

      Event.injectMetadata(this.runtimeMetadata);
      Method.injectMethods(extrinsics);

      return true;
    } catch (error) {
      l.error('loadMeta', error);

      return false;
    }
  }

  emit (type: ApiInterface$Events, ...args: Array<any>): void {
    this._eventemitter.emit(type, ...args);
  }

  /**
   * @description Attach an eventemitter handler to listen to a specific event
   *
   * @param type The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.on('connected', () => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.on('disconnected', () => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  on (type: ApiInterface$Events, handler: (...args: Array<any>) => any): this {
    this._eventemitter.on(type, handler);

    return this;
  }

  /**
   * @description Attach an one-time eventemitter handler to listen to a specific event
   *
   * @param type The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.once('connected', () => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.once('disconnected', () => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  once (type: ApiInterface$Events, handler: (...args: Array<any>) => any): this {
    this._eventemitter.once(type, handler);

    return this;
  }

  protected onCall (method: (...params: Array<any>) => Observable<Codec | undefined | null>, params: Array<any>): OnCall {
    return method(...params);
  }
}
