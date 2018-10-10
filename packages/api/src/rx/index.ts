// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RxApiInterface, QueryableStorageFunction, QueryableModuleStorage, QueryableStorage, SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './types';

import E3 from 'eventemitter3';
import { EMPTY, Observable, from } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import WsProvider from '@polkadot/rpc-provider/ws';
import RpcRx from '@polkadot/rpc-rx/index';
import { Extrinsics, ExtrinsicFunction } from '@polkadot/extrinsics/types';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import { Storage } from '@polkadot/storage/types';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import { Base } from '@polkadot/types/codec';
import { Hash, Method, RuntimeVersion } from '@polkadot/types/index';
import RuntimeMetadata from '@polkadot/types/Metadata';
import assert from '@polkadot/util/assert';
import isUndefined from '@polkadot/util/is/undefined';
import logger from '@polkadot/util/logger';

import SubmittableExtrinsic from './SubmittableExtrinsic';
import { StorageFunction } from '@polkadot/types/StorageKey';

const l = logger('api');

const INIT_ERROR = `Api needs to be initialised before using, listen on 'whenReady'`;

export default class ApiRx extends E3.EventEmitter implements RxApiInterface {
  private _extrinsics?: SubmittableExtrinsics;
  private _genesisHash?: Hash;
  private _storage?: QueryableStorage;
  private _rpc: RpcRx;
  private _runtimeMetadata?: RuntimeMetadata;
  private _runtimeVersion?: RuntimeVersion;

  // Observable that returns the first time we are connected and loaded
  readonly isReady: Observable<ApiRx>;

  /**
   * @description Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.
   * @param wsProvider Optional WebSocket provider that is passed to the class contructor
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/rx';
   *
   * Api.create().subscribe((api) => {
   *   api.st.timestamp.now((timestamp) => {
   *     console.log(`lastest block timestamp ${timestamp}`);
   *   });
   * });
   * ```
   */
  static create (wsProvider?: WsProvider): Observable<ApiRx> {
    return new ApiRx(wsProvider).isReady;
  }

  /**
   * @param wsProvider An optional WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/rx';
   *
   * new Api().isReady.subscribe((api) => {
   *   api.rpc.newHead().subscribe((header) => {
   *     console.log(`new block #${header.blockNumber.toNumber()}`);
   *   });
   * });
   * ```
   */
  constructor (wsProvider?: WsProvider) {
    super();

    this._rpc = new RpcRx(wsProvider);

    this.isReady = from(this.init());
  }

  /**
   * @description Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.
   */
  get isConnected (): Observable<boolean> {
    return this.rpc.isConnected();
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  get genesisHash (): Hash {
    assert(!isUndefined(this._genesisHash), INIT_ERROR);

    return this._genesisHash as Hash;
  }

  /**
   * @description Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions.
   * @example
   * <BR>
   *
   * ```javascript
   * api.rpc.chain
   *   .newHead()
   *   .subscribe((header) => {
   *     console.log('new header', header);
   *   });
   * ```
   */
  get rpc (): RpcRx {
    return this._rpc;
  }

  /**
   * @description Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.
   */
  get runtimeMetadata (): RuntimeMetadata {
    assert(!isUndefined(this._runtimeMetadata), INIT_ERROR);

    return this._runtimeMetadata as RuntimeMetadata;
  }

  /**
   * @description Contains the version information for the current runtime.
   */
  get runtimeVersion (): RuntimeVersion {
    assert(!isUndefined(this._runtimeVersion), INIT_ERROR);

    return this._runtimeVersion as RuntimeVersion;
  }

  /**
   * @description Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.
   * @example
   * <BR>
   *
   * ```javascript
   * api.st.balances
   *   .freeBalance(<accountId>)
   *   .subscribe((balance) => {
   *     console.log('new balance', balance);
   *   });
   * ```
   */
  get st (): QueryableStorage {
    assert(!isUndefined(this._storage), INIT_ERROR);

    return this._storage as QueryableStorage;
  }

  /**
   * @description Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.
   * @example
   * <BR>
   *
   * ```javascript
   * api.tx.balances
   *   .transfer(<recipientId>, <balance>)
   *   .sign(<keyPair>, <accountNonce>, <blockHash (optional)>)
   *   .send()
   *   .subscribe((status) => {
   *     console.log('tx status', status);
   *   });
   * ```
   */
  get tx (): SubmittableExtrinsics {
    assert(!isUndefined(this._extrinsics), INIT_ERROR);

    return this._extrinsics as SubmittableExtrinsics;
  }

  private init (): Promise<ApiRx> {
    let isReady: boolean = false;

    this.initEmitters();

    return new Promise((resolveReady) => {
      this.isConnected.subscribe(async (isConnected) => {
        // TODO When re-connected (i.e. disconnected and then connected), we want to do a couple of things
        //   - refresh metadata as needed, decorating again
        //   - re-create storage subscriptions for those we already have
        //   - re-watch extrinsics where we have subscriptions already
        //   - need to refresh genesisHash, extrinsic resub only when it matches
        if (isReady || !isConnected) {
          return;
        }

        try {
          this._runtimeMetadata = await this.rpc.state.getMetadata().toPromise();
          this._runtimeVersion = await this.rpc.chain.getRuntimeVersion().toPromise();
          this._genesisHash = await this.rpc.chain.getBlockHash(0).toPromise();

          const extrinsics = extrinsicsFromMeta(this.runtimeMetadata);
          const storage = storageFromMeta(this.runtimeMetadata);

          this._extrinsics = this.decorateExtrinsics(extrinsics);
          this._storage = this.decorateStorage(storage);

          Method.injectExtrinsics(extrinsics);

          if (!isReady) {
            isReady = true;
            resolveReady(this);

            this.emit('ready', this);
          }
        } catch (error) {
          l.error('init', error);
        }
      });
    });
  }

  private initEmitters (): void {
    this.rpc.on('connected', () => {
      this.emit('connected');
    });

    this.rpc.on('disconnected', () => {
      this.emit('disconnected');
    });
  }

  private decorateExtrinsics (extrinsics: Extrinsics): SubmittableExtrinsics {
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

    decorated.callIndex = method.callIndex;
    decorated.meta = method.meta;
    decorated.method = method.method;
    decorated.section = method.section;
    decorated.toJSON = method.toJSON;

    return decorated as SubmittableExtrinsicFunction;
  }

  private decorateStorage (storage: Storage): QueryableStorage {
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
    const decorated: any = (arg: any): Observable<Base | null | undefined> => {
      let observable;

      try {
        observable = this.rpc.state.storage([[method, arg]]);
      } catch (error) {
        // in the case of an exception (upon creation of key), just return an empty
        observable = EMPTY;
        l.warn(`${method.section}.${method.method}: storage subscription:`, error);
      }

      // state_storage returns an array of values, since we have just subscribed to
      // a single entry, we pull that from the array and return it as-is
      return observable.pipe(
        defaultIfEmpty([]),
        map((result: Array<Base | null | undefined> = []): Base | null | undefined =>
          result[0]
        )
      );
    };

    decorated.meta = method.meta;
    decorated.method = method.method;
    decorated.section = method.section;
    decorated.toJSON = method.toJSON;

    return decorated as QueryableStorageFunction;
  }
}
