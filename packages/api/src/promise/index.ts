// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiPromiseInterface, QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './types';

import WsProvider from '@polkadot/rpc-provider/ws';
import Rpc from '@polkadot/rpc-core/index';
import { Extrinsics, ExtrinsicFunction } from '@polkadot/extrinsics/types';
import { Storage } from '@polkadot/storage/types';
import { Base } from '@polkadot/types/codec';
import isFunction from '@polkadot/util/is/function';

import ApiBase from '../Base';
import SubmittableExtrinsic from './SubmittableExtrinsic';
import { StorageFunction } from '@polkadot/types/StorageKey';

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
 * // Initialise via static create
 * const api = await ApiPromise.create();
 *
 * // Make a subscription to the network head
 * // Use the RPC Node Interface.
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
 * // Initialise a provider with a specific endpoint
 * const provider = new WsProvider('wss://example.com:9944')
 *
 * // Initialise via isReady & new with specific provider
 * const api = await new ApiPromise(provider).isReady;
 *
 * // Retrieve the block target time
 * // Use the Storage chain state (runtime) Node Interface.
 * const blockPeriod = await api.query.timestamp.blockPeriod().toNumber();
 * let last = 0;
 *
 * // Subscribe to the current block timestamp, updates automatically (callback provided)
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
 * // Import the API, Keyring and some utility functions
 * import ApiPromise from '@polkadot/api/promise';
 * import testingPairs from '@polkadot/keyring/testingPairs';
 * import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
 *
 * // Create an instance of the keyring that includes test accounts
 * const keyring = testingPairs();
 *
 * const ALICE_SEED = 'Alice'.padEnd(32, ' ');
 * const addressBob = keyring.bob.address();
 *
 * // Add Alice to our keyring (with the known seed for the account)
 * const alice = keyring.addFromSeed(u8aFromUtf8(ALICE_SEED));
 *
 * // Instantiate the API via Promise
 * ApiPromise.create().then((api) => {
 *   // Retrieve nonce for Alice, to be used to sign the transaction.
 *   // Use the Storage chain state (runtime) Node Interface.
 *   const aliceNonce = await api.query.system.accountNonce(alice.address());
 *
 *   // Use the Extrinsics (runtime) Node Interface.
 *   api.tx.balances
 *     // Create an extrinsic, transferring 12345 units to Bob.
 *     transfer(addressBob, 12345)
 *     // Sign the transaction using our account keypair, nonce,
 *     // and optionally the block hash
 *     .sign(alice, aliceNonce)
 *     // Send the transaction (optional status callback)
 *     .send((status) => {
 *       console.log(`current status ${status.type}`);
 *     })
 *     // Retrieve the submitted extrinsic hash
 *     .then((hash) => {
 *       console.log(`submitted transfer 12345 to Bob with hash ${hash}`);
 *     });
 * });
 * ```
 */
export default class ApiPromise extends ApiBase<Rpc, QueryableStorage, SubmittableExtrinsics> implements ApiPromiseInterface {
  private _isReady: Promise<ApiPromise>;

  /**
   * @description Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.
   *
   * @param wsProvider WebSocket provider that is passed to the class contructor
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import ApiPromise from '@polkadot/api/promise';
   *
   * ApiPromise.create().then(async (api) => {
   *   const timestamp = await api.query.timestamp.now();
   *
   *   console.log(`lastest block timestamp ${timestamp}`);
   * });
   * ```
   */
  static create (wsProvider?: WsProvider): Promise<ApiPromise> {
    return new ApiPromise(wsProvider).isReady;
  }

  /**
   * @description Creates an instance of the ApiPromise class
   *
   * @param wsProvider WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port, i.e. `ws://127.0.0.1:9944`
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import ApiPromise from '@polkadot/api/promise';
   *
   * new ApiPromise().isReady.then((api) => {
   *   api.rpc.subscribeNewHead((header) => {
   *     console.log(`new block #${header.blockNumber.toNumber()}`);
   *   });
   * });
   * ```
   */
  constructor (wsProvider?: WsProvider) {
    super(wsProvider);

    this._isReady = new Promise((resolveReady) =>
      super.on('ready', () =>
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

  protected decorateRpc (rpc: Rpc): Rpc {
    return rpc;
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
    const decorated: any = (...args: Array<any>): Promise<Base | null | undefined> => {
      if (args.length === 0 || !isFunction(args[args.length - 1])) {
        return this.rpc.state.getStorage([method, args[0]]);
      }

      return this.rpc.state.subscribeStorage(
        [[method, args.length === 1 ? undefined : args[0]]],
        (result: Array<Base | null | undefined> = []) =>
          args[args.length - 1](result[0])
      );
    };

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction;
  }
}
