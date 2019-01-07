// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcRxInterface$Method } from '@polkadot/rpc-rx/types';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { ApiOptions } from '../types';
import { ApiPromiseInterface, DecoratedRpc, DecoratedRpc$Method, DecoratedRpc$Section, QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction, UnsubFunction } from './types';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Rpc from '@polkadot/rpc-core/index';
import RpcRx from '@polkadot/rpc-rx/index';
import { Storage } from '@polkadot/storage/types';
import { Hash } from '@polkadot/types/index';
import { Codec } from '@polkadot/types/types';
import { MethodFunction, ModulesWithMethods } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { isFunction, logger, assert } from '@polkadot/util';

import ApiBase from '../Base';
import Combinator, { CombinatorCallback, CombinatorFunction } from './Combinator';
import SubmittableExtrinsic from './SubmittableExtrinsic';

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
export default class ApiPromise extends ApiBase<DecoratedRpc, QueryableStorage, SubmittableExtrinsics> implements ApiPromiseInterface {
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

    this._isReady = new Promise((resolveReady, rejectReady) =>
      super
        .once('ready', () =>
          resolveReady(this)
        )
        .once('error', () =>
          rejectReady(this)
        )
    );
  }

  /**
   * @description Promise that returns the first time we are connected and loaded
   */
  get isReady (): Promise<ApiPromise> {
    return this._isReady;
  }

  protected decorateRpc (rpc: Rpc): DecoratedRpc {
    const names = ['author', 'chain', 'state', 'system'] as Array<keyof DecoratedRpc>;
    const rpcrx = new RpcRx(rpc);

    return names.reduce((result, section) => {
      result[section] = Object.keys(rpcrx[section]).reduce((fns, method) => {
        fns[method] = this.decorateMethod(
          rpcrx[section][method],
          isFunction(rpc[section][method].unsubscribe)
        );

        return fns;
      }, {} as DecoratedRpc$Section);

      return result;
    }, {} as DecoratedRpc);
  }

  protected decorateMethod (rxfn: RpcRxInterface$Method, isSubscription: boolean): DecoratedRpc$Method {
    if (!isSubscription) {
      return (...params: Array<any>): Promise<any> =>
        rxfn(...params)
          .pipe(
            catchError(() => of())
          )
          .toPromise();
    }

    return (..._params: Array<any>): UnsubFunction => {
      const cb = _params[_params.length - 1];

      assert(isFunction(cb), 'Expected callback as last paramater for subscription');

      const params = _params.slice(0, _params.length - 1);
      const subscription = rxfn(...params)
        .pipe(
          catchError(() => of())
        )
        .subscribe(cb);

      return (): void => {
        subscription.unsubscribe();
      };
    };
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
  combineLatest (fns: Array<CombinatorFunction | [CombinatorFunction, ...Array<any>]>, callback: CombinatorCallback): UnsubFunction {
    const combinator = new Combinator(fns, callback);

    return (): void => {
      combinator.unsubscribe();
    };
  }

  protected decorateExtrinsics (extrinsics: ModulesWithMethods): SubmittableExtrinsics {
    return Object.keys(extrinsics).reduce((result, sectionName) => {
      const section = extrinsics[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateExtrinsicEntry(section[methodName]);

        return result;
      }, {} as SubmittableModuleExtrinsics);

      return result;
    }, {} as SubmittableExtrinsics);
  }

  private decorateExtrinsicEntry (method: MethodFunction): SubmittableExtrinsicFunction {
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
    const decorated: any = (...args: Array<any>): Promise<Codec | null | undefined> | UnsubFunction => {
      const cb = args[args.length - 1];

      if (args.length === 0 || !isFunction(cb)) {
        return this.rpc.state.getStorage([method, args[0]]);
      } else if (!this.hasSubscriptions && isFunction(cb)) {
        l.warn(`Storage subscription to ${method.section}.${method.name} ignored, provider does not support subscriptions`);

        return this.rpc.state.getStorage([method, args.length === 1 ? undefined : args[0]]);
      }

      return this.rpc.state.subscribeStorage(
        [[method, args.length === 1 ? undefined : args[0]]],
        (result: Array<Codec | null | undefined> = []) =>
          cb(result[0])
      ) as UnsubFunction;
    };

    decorated.at = (hash: Hash, arg?: any): Promise<Codec | null | undefined> =>
      this.rpc.state.getStorage([method, arg], hash) as Promise<Codec | null | undefined>;

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction;
  }
}
