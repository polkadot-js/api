// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { ApiOptions } from '../types';
import { ApiRxInterface, QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './types';

import { EMPTY, Observable, from } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import Rpc from '@polkadot/rpc-core/index';
import RpcRx from '@polkadot/rpc-rx/index';
import { Storage } from '@polkadot/storage/types';
import { Codec } from '@polkadot/types/types';
import { Extrinsics, ExtrinsicFunction } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { assert, logger } from '@polkadot/util';

import ApiBase from '../Base';
import SubmittableExtrinsic from './SubmittableExtrinsic';

const l = logger('api-rx');

/**
 * # @polkadot/api/rx
 *
 *  ## Overview
 *
 * @name ApiRx
 *
 * @description
 * ApiRx is a powerful RxJS Observable wrapper around the RPC and interfaces on the Polkadot network. As a full Observable API, all interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion and subscription-based methods return long-running Observables that update with the latest values.
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
 * import Api from '@polkadot/api/rx';
 *
 * async function main () {
 *   // Initialise via Promise & static create
 *   const api = await Api.create().toPromise();
 *
 *   // Make a call to retrieve the current network head
 *   api.rpc.chain.subscribeNewHead().subscribe((header) => {
 *     console.log(`Chain is at #${header.blockNumber}`);
 *   });
 * }
 *
 * main();
 * ```
 * <BR>
 *
 * Subscribing to chain state -
 * <BR>
 *
 * ```javascript
 * import { combineLatest } from 'rxjs';
 * import { switchMap } from 'rxjs/operators';
 * import Api from '@polkadot/api/rx';
 *
 * // Last block timestamp
 * let last = 0;
 *
 * // Initialise via isReady & new with specific provider
 * new Api()
 *   .isReady
 *   .pipe(
 *     switchMap((api) =>
 *       combineLatest([
 *         api.query.timestamp.blockPeriod(),
 *         api.query.timestamp.now()
 *       ])
 *   )
 *   .subscribe(([blockPeriod, timestamp]) => {
 *     // Convert the timestamp into seconds
 *     const blockPeriodSeconds = blockPeriod.getTime() / 1000;
 *     const timestampSeconds = timestamp.getTime() / 1000;
 *     const elapsed = last
 *       ? `, ${timestampSeconds - last}s since last`
 *       : '';
 *
 *     last = timestampSeconds;
 *     console.log(`Timestamp ${timestampSeconds}${elapsed} (${blockPeriodSeconds}s target)`);
 *   });
 * ```
 * <BR>
 *
 * Submitting a transaction -
 * <BR>
 *
 * ```javascript
 * import { first, switchMap } from 'rxjs/operators';
 * import ApiRx from '@polkadot/api/rx';
 * import testingPairs from '@polkadot/keyring/testingPairs';
 *
 * async function main () {
 *   // Instantiate the API via Promise
 *   const api = await ApiRx.create().toPromise();
 *
 *   // Create an instance of the test keyring that already includes test accounts
 *   const keyring = testingPairs();
 *
 *   // Retrieve the nonce for Alice to be used to sign the transaction
 *   api.query.system
 *     .accountNonce(keyring.alice.address())
 *     .pipe(
 *       first(),
 *       // Pipe nonce into transfer
 *       switchMap((nonce) =>
 *         api.tx.balances
 *           // Create an extrinsic, transferring 12345 units to Bob
 *           .transfer(keyring.bob.address(), 12345)
 *           // Sign the transcation
 *           .sign(keyring.alice, nonce)
 *           // Send the transaction
 *           .send()
 *       )
 *     )
 *     // Subscribe to the result
 *     .subscribe((status) => {
 *       if (status.type.toString() === 'Finalised') {
 *         console.log('Submitted transfer of 12345 to Bob');
 *       }
 *     });
 * }
 *
 * main();
 * ```
 */
export default class ApiRx extends ApiBase<RpcRx, QueryableStorage, SubmittableExtrinsics> implements ApiRxInterface {
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
   *   // Use the Storage chain state (runtime) Node Interface
   *   api.query.timestamp.now.subscribe((timestamp) => {
   *     console.log(`latest block timestamp ${timestamp}`);
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
   * // Note that `Api.create()` is equivalent to `new Api().isReady`
   * new Api().isReady.subscribe((api) => {
   *   // Use the RPC Node Interface
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
    return this.rpc.isConnected();
  }

  /**
   * @description Observable that returns the first time we are connected and loaded
   */
  get isReady (): Observable<ApiRx> {
    return this._isReady;
  }

  protected decorateRpc (rpc: Rpc): RpcRx {
    return new RpcRx(rpc);
  }

  protected decorateExtrinsics (extrinsics: Extrinsics): SubmittableExtrinsics {
    return Object.keys(extrinsics).reduce((result, sectionName) => {
      const section = extrinsics[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateExtrinsicEntry(section[methodName]);

        return result;
      }, {} as SubmittableModuleExtrinsics);

      return result;
    }, {} as SubmittableExtrinsics);
  }

  private decorateExtrinsicEntry (method: ExtrinsicFunction): SubmittableExtrinsicFunction {
    const decorated: any = (...args: Array<any>): SubmittableExtrinsic =>
      new SubmittableExtrinsic(this, method(...args));

    return this.decorateFunctionMeta(method, decorated) as SubmittableExtrinsicFunction;
  }

  protected decorateStorage (storage: Storage): QueryableStorage {
    return Object.keys(storage).reduce((result, sectionName) => {
      const section = storage[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateStorageEntry(section[methodName]);

        return result;
      }, {} as QueryableModuleStorage);

      return result;
    }, {} as QueryableStorage);
  }

  private decorateStorageEntry (method: StorageFunction): QueryableStorageFunction {
    const decorated: any = (arg: any): Observable<Codec | null | undefined> => {
      let observable;

      try {
        observable = this.rpc.state.subscribeStorage([[method, arg]]);
      } catch (error) {
        // in the case of an exception (upon creation of key), just return an empty
        observable = EMPTY;
        l.warn(`${method.section}.${method.method}: storage subscription:`, error);
      }

      // state_storage returns an array of values, since we have just subscribed to
      // a single entry, we pull that from the array and return it as-is
      return observable.pipe(
        defaultIfEmpty([]),
        map((result: Array<Codec | null | undefined> = []): Codec | null | undefined =>
          result[0]
        )
      );
    };

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction;
  }
}
