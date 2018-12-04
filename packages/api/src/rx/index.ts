// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiRxInterface, QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './types';

import { EMPTY, Observable, from } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import WsProvider from '@polkadot/rpc-provider/ws';
import Rpc from '@polkadot/rpc-core/index';
import RpcRx from '@polkadot/rpc-rx/index';
import { Storage } from '@polkadot/storage/types';
import { Codec } from '@polkadot/types/types';
import { Extrinsics, ExtrinsicFunction } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { logger } from '@polkadot/util';

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
 * import moment from 'moment';
 *
 * import { combineLatest } from 'rxjs';
 * import { switchMap } from 'rxjs/operators';
 * import Api from '@polkadot/api/rx';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * // Last block timestamp
 * let last = 0;
 *
 * // Initialise a provider with a specific endpoint
 * const provider = new WsProvider('wss://example.com:9944')
 *
 * // Initialise via isReady & new with specific provider
 * new Api(provider)
 *   .isReady
 *   .pipe(
 *     switchMap((api) =>
 *       combineLatest([
 *         api.query.timestamp.blockPeriod(),
 *         api.query.timestamp.now()
 *       ])
 *   )
 *   .subscribe(([blockPeriod, timestamp]) => {
 *     // Convert the timestamps from type `Moment` into seconds
 *     const blockPeriodSeconds = moment(blockPeriod).unix();
 *     const timestampSeconds = moment(timestamp).unix();
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
 *
 * import Api from '@polkadot/api/rx';
 * import Keyring from '@polkadot/keyring';
 * import { stringToU8a } from '@polkadot/util';
 *
 * const ALICE_SEED = 'Alice'.padEnd(32, ' ');
 * const BOB_ADDR = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';
 *
 * async function main () {
 *   // Create an instance of the keyring
 *   const keyring = new Keyring();
 *
 *   // Add Alice to our keyring (with the known seed for the account)
 *   const alice = keyring.addFromSeed(stringToU8a(ALICE_SEED));
 *
 *   // Instantiate the API via Promise
 *   const api = await Api.create().toPromise();
 *
 *   // Retrieve the nonce for Alice, to be used to sign the transaction.
 *   api.query.system.accountNonce(alice.address())
 *     // Pipe nonce into transfer.
 *     .pipe(
 *       first(),
 *       switchMap((aliceNonce) =>
 *         api.tx.balances
 *           // Create an extrinsic, transferring 12345 units to Bob
 *           .transfer(BOB_ADDR, 12345)
 *           // Sign the transaction
 *           .sign(alice, aliceNonce)
 *           // Send the transaction (optional status callback)
 *           .send()
 *       )
 *     )
 *     // Subscribe to the result
 *     .subscribe((status) => {
 *       if (status && status.type.toString() === 'Finalised') {
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
   * @param wsProvider WebSocket provider that is passed to the class contructor
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
  static create (wsProvider?: WsProvider): Observable<ApiRx> {
    return new ApiRx(wsProvider).isReady;
  }

  /**
   * @description Create an instance of the ApiRx class
   *
   * @param wsProvider A WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port, i.e. `ws://127.0.0.1:9944`
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
  constructor (wsProvider?: WsProvider) {
    super(wsProvider);

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
