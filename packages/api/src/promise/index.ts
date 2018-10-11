// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiPromiseInterface, QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './types';

import WsProvider from '@polkadot/rpc-provider/ws';
import Rpc from '@polkadot/rpc-core/index';
import { Extrinsics, ExtrinsicFunction } from '@polkadot/extrinsics/types';
import { Storage } from '@polkadot/storage/types';
import { Base } from '@polkadot/types/codec';

import ApiBase from '../Base';
import SubmittableExtrinsic from './SubmittableExtrinsic';
import { StorageFunction } from '@polkadot/types/StorageKey';

export default class ApiPromise extends ApiBase<Rpc, QueryableStorage, SubmittableExtrinsics> implements ApiPromiseInterface {
  private _isReady: Promise<ApiPromise>;

  /**
   * @description Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.
   * @param wsProvider Optional WebSocket provider that is passed to the class contructor
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
   * @param wsProvider An optional WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port
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
    const decorated: any = (arg: any): Promise<Base | null | undefined> =>
      this.rpc.state.getStorage([method, arg]);

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction;
  }
}
