// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './types';

import { Observable } from 'rxjs';
import WsProvider from '@polkadot/api-provider/ws';
import defaults from '@polkadot/api-rx/defaults';
import RpcRx from '@polkadot/api-rx/index';
import { Extrinsics } from '@polkadot/extrinsics/types';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import { Storage } from '@polkadot/storage/types';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import { Method } from '@polkadot/types/index';
import logger from '@polkadot/util/logger';

import SubmittableExtrinsic from './SubmittableExtrinsic';

const l = logger('api-rx');

export default class ApiRx {
  // @ts-ignore Indirectly decorated inside the constructor
  private _extrinsics: SubmittableExtrinsics;
  // @ts-ignore Indirectly decorated inside the constructor
  private _state: QueryableStorage;
  private _rpc: RpcRx;

  constructor (wsProvider: WsProvider = new WsProvider(defaults.WS_URL)) {
    this._rpc = new RpcRx(wsProvider);

    // !#$%@ But yes, handling promises here
    this.initMetadata().then().catch();
  }

  get extrinsics (): SubmittableExtrinsics {
    return this._extrinsics;
  }

  get rpc (): RpcRx {
    return this._rpc;
  }

  get state (): QueryableStorage {
    return this._state;
  }

  private async initMetadata (): Promise<void> {
    try {
      const metadata = await this.rpc.state.getMetadata().toPromise();

      this._extrinsics = this.decorateExtrinsics(extrinsicsFromMeta(metadata));
      this._state = this.decorateStorage(storageFromMeta(metadata));

      Method.injectExtrinsics(this._extrinsics);
    } catch (error) {
      l.error('initMetadata', error);
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
