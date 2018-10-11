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
 * @description
 * ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Polkadot network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise standard JavaScript-convention `(error, value)` callbacks.
 *
 * The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of the subscription-based features of Polkadot (and Substrate) clients.
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
 * api.rpc.chain.newHead((error, header) => {
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
 * const blockPeriod = await api.st.timestamp.blockPeriod().toNumber();
 * let last = 0;
 *
 * // subscribe to the current block timestamp, updates automatically (callback provided)
 * api.st.timestamp.now((error, timestamp) => {
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
 *   const nonce = await api.st.system.accountNonce(keyring.alice.address());
 *
 *   api.tx.balances
 *     // create transfer
 *     transfer(keyring.bob.address(), 12345)
 *     // sign the transcation
 *     .sign(keyring.alice, nonce)
 *     // send the transaction
 *     .send()
 *     // retrieve the overall result
 *     .then((hash) => {
 *       console.log(`submitted with hash ${hash}`);
 *     });
 * });
 * ```
 */
export default class ApiPromise extends ApiBase<Rpc, QueryableStorage, SubmittableExtrinsics> implements ApiPromiseInterface {
  private _isReady: Promise<ApiPromise>;

  /**
   * @description Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.
   * @param wsProvider WebSocket provider that is passed to the class contructor
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * Api.create().then(async (api) => {
   *   const timestamp = await api.st.timestamp.now();
   *
   *   console.log(`lastest block timestamp ${timestamp}`);
   * });
   * ```
   */
  static create (wsProvider?: WsProvider): Promise<ApiPromise> {
    return new ApiPromise(wsProvider).isReady;
  }

  /**
   * @param wsProvider WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port, i.e. `ws://127.0.0.1:9944`
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * new Api().isReady.then((api) => {
   *   api.rpc.newHead((error, header) => {
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

      return this.rpc.state.storage(
        [[method, args.length === 1 ? undefined : args[0]]],
        args[args.length - 1]
      );
    };

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction;
  }
}
