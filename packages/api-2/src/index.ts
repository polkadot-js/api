// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './types';

import { Observable } from 'rxjs';
import WsProvider from '@polkadot/rpc-provider/ws';
import defaults from '@polkadot/rpc-rx/defaults';
import RpcRx from '@polkadot/rpc-rx/index';
import { Extrinsics } from '@polkadot/extrinsics/types';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import { Storage } from '@polkadot/storage/types';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import { Method, Hash } from '@polkadot/types/index';
import assert from '@polkadot/util/assert';
import isUndefined from '@polkadot/util/is/undefined';
import logger from '@polkadot/util/logger';

import SubmittableExtrinsic from './SubmittableExtrinsic';

const l = logger('api-rx');

const INIT_ERROR = 'Api needs to be initialised before using';

export default class ApiRx {
  private _extrinsics?: SubmittableExtrinsics;
  private _genesisHash?: Hash;
  private _state?: QueryableStorage;
  private _rpc: RpcRx;

  constructor (wsProvider: WsProvider = new WsProvider(defaults.WS_URL)) {
    this._rpc = new RpcRx(wsProvider);

    // !#$%@ But yes, handling promises here
    this.init().then().catch();
  }

  get genesisHash (): Hash {
    assert(!isUndefined(this._genesisHash), INIT_ERROR);

    return this._genesisHash as Hash;
  }

  /**
   * @example
   * ```javascript
   * api.rpx.chain
   *   .newHead()
   *   .subscribe((header) => console.log('new header', header));
   * ```
   */
  get rpc (): RpcRx {
    return this._rpc;
  }

  /**
   * @example
   * ```javascript
   * api.st.balances
   *   .freeBalance(<accountId>)
   *   .subscribe((balance) => console.log('new balance', balance));
   * ```
   */
  get st (): QueryableStorage {
    assert(!isUndefined(this._state), INIT_ERROR);

    return this._state as QueryableStorage;
  }

  /**
   * @example
   * ```javascript
   * api.tx.balances
   *   .transfer(<recipientId>, <balance>)
   *   .sign(<keyPair>, <genesisHash>)
   *   .send()
   *   .subscribe((status) => console.log('tx status', status));
   * ```
   */
  get tx (): SubmittableExtrinsics {
    assert(!isUndefined(this._extrinsics), INIT_ERROR);

    return this._extrinsics as SubmittableExtrinsics;
  }

  private async init (): Promise<void> {
    // TODO We should really have a whenReady in rpc-core (or onMetadata event) and pass
    // up the metadata on that.
    try {
      const metadata = await this.rpc.state.getMetadata().toPromise();

      this._genesisHash = await this.rpc.chain.getBlockHash(0).toPromise();
      this._extrinsics = this.decorateExtrinsics(extrinsicsFromMeta(metadata));
      this._state = this.decorateStorage(storageFromMeta(metadata));

      Method.injectExtrinsics(this._extrinsics);
    } catch (error) {
      l.error('init', error);
    }
  }

  private decorateExtrinsics (extrinsics: Extrinsics): SubmittableExtrinsics {
    return Object
      .keys(extrinsics)
      .reduce((result, sectionName) => {
        const section = extrinsics[sectionName];

        result[sectionName] = Object
          .keys(section)
          .reduce((result, methodName) => {
            const method = section[methodName];
            const decorated: any = (...args: Array<any>): SubmittableExtrinsic =>
              new SubmittableExtrinsic(this.rpc, method(...args));

            decorated.callIndex = method.callIndex;
            decorated.meta = method.meta;
            decorated.method = method.method;
            decorated.section = method.section;
            decorated.toJSON = method.toJSON;

            result[methodName] = decorated as SubmittableExtrinsicFunction;

            return result;
          }, {} as SubmittableModuleExtrinsics);

        return result;
      }, {} as SubmittableExtrinsics);
  }

  private decorateStorage (storage: Storage): QueryableStorage {
    return Object
      .keys(storage)
      .reduce((result, sectionName) => {
        const section = storage[sectionName];

        result[sectionName] = Object
          .keys(section)
          .reduce((result, methodName) => {
            const method = section[methodName];
            const decorated: any = (...args: Array<any>): Observable<any> =>
              this.rpc.state.storage([method, ...args]);

            decorated.meta = method.meta;
            decorated.method = method.method;
            decorated.section = method.section;
            decorated.toJSON = method.toJSON;

            result[methodName] = decorated as QueryableStorageFunction;

            return result;
          }, {} as QueryableModuleStorage);

        return result;
      }, {} as QueryableStorage);
  }
}
