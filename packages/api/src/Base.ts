// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { ApiBaseInterface, ApiInterface$Events, ApiOptions, DecoratedRpc, DecoratedRpc$Section, DecoratedRpc$Method, QueryableModuleStorage, QueryableStorage, QueryableStorageFunction } from './types';
import { SubmittableExtrinsics, SubmittableModuleExtrinsics, SubmittableExtrinsicFunction } from './rx/types';

import EventEmitter from 'eventemitter3';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import RpcBase from '@polkadot/rpc-core/index';
import RpcRx from '@polkadot/rpc-rx/index';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import { Storage } from '@polkadot/storage/types';
import registry from '@polkadot/types/codec/typeRegistry';
import { Event, Hash, Metadata, Method, RuntimeVersion } from '@polkadot/types/index';
import { MethodFunction, ModulesWithMethods } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { Codec } from '@polkadot/types/types';
import { assert, isFunction, isObject, isUndefined, logger } from '@polkadot/util';

type MetaDecoration = {
  callIndex?: Uint8Array,
  meta: any,
  method: string,
  section: string,
  toJSON: () => any
};

const l = logger('api');

const INIT_ERROR = `Api needs to be initialised before using, listen on 'ready'`;

import SubmittableExtrinsic from './rx/SubmittableExtrinsic';

export default abstract class ApiBase<OnCall> implements ApiBaseInterface<OnCall> {
  private _eventemitter: EventEmitter;
  protected _extrinsics?: E;
  protected _genesisHash?: Hash;
  protected _query?: QueryableStorage<OnCall>;
  protected _rpc: DecoratedRpc<OnCall>;
  protected _rpcBase: RpcBase; // FIXME combine these two
  protected _rpcRx: RpcRx; // FIXME combine these two
  protected _runtimeMetadata?: Metadata;
  protected _runtimeVersion?: RuntimeVersion;

  /**
   * @description Create an instance of the class
   *
   * @param options Options object to create API instance or a Provider instance
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * const api = new Api().isReady();
   *
   * api.rpc.subscribeNewHead((header) => {
   *   console.log(`new block #${header.blockNumber.toNumber()}`);
   * });
   * ```
   */
  constructor (provider: ApiOptions | ProviderInterface = {}) {
    const options = isObject(provider) && isFunction((provider as ProviderInterface).send)
      ? { provider } as ApiOptions
      : provider as ApiOptions;

    this._eventemitter = new EventEmitter();
    this._rpcBase = new RpcBase(options.provider);
    this._rpcRx = new RpcRx(options.provider);
    this._rpc = this.decorateRpc(this._rpcRx);

    if (options.types) {
      registry.register(options.types);
    }

    this.init();
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  get genesisHash (): Hash {
    assert(!isUndefined(this._genesisHash), INIT_ERROR);

    return this._genesisHash as Hash;
  }

  /**
   * @description `true` when subscriptions are supported
   */
  get hasSubscriptions (): boolean {
    return this._rpcBase._provider.hasSubscriptions;
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

  /**
   * @description Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.
   *
   * All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.query.balances.freeBalance(<accountId>, (balance) => {
   *   console.log('new balance', balance);
   * });
   * ```
   */
  get query (): QueryableStorage<OnCall> {
    assert(!isUndefined(this._query), INIT_ERROR);

    return this._query as QueryableStorage<OnCall>;
  }

  /**
   * @description Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.
   *
   * RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.rpc.chain.subscribeNewHead((header) => {
   *   console.log('new header', header);
   * });
   * ```
   */
  get rpc (): DecoratedRpc<OnCall> {
    return this._rpc;
  }

  /**
   * @description Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.tx.balances
   *   .transfer(<recipientId>, <balance>)
   *   .sign(<keyPair>, <accountNonce>, <blockHash (optional)>)
   *   .send((status) => {
   *     console.log('tx status', status);
   *   });
   * ```
   */
  get tx (): E {
    assert(!isUndefined(this._extrinsics), INIT_ERROR);

    return this._extrinsics as E;
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

  protected abstract onCall (obs: Observable<any>, params: Array<any>): OnCall;

  protected emit (type: ApiInterface$Events, ...args: Array<any>): void {
    this._eventemitter.emit(type, ...args);
  }

  private init (): void {
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
      const storage = storageFromMeta(this.runtimeMetadata);

      this._extrinsics = this.decorateExtrinsics(extrinsics);
      this._query = this.decorateStorage(storage);

      Event.injectMetadata(this.runtimeMetadata);
      Method.injectMethods(extrinsics);

      return true;
    } catch (error) {
      l.error('loadMeta', error);

      return false;
    }
  }

  protected decorateFunctionMeta (input: MetaDecoration, output: MetaDecoration): MetaDecoration {
    output.meta = input.meta;
    output.method = input.method;
    output.section = input.section;
    output.toJSON = input.toJSON;

    if (input.callIndex) {
      output.callIndex = input.callIndex;
    }

    return output;
  }

  protected decorateRpc (rpc: RpcRx): DecoratedRpc<OnCall> {
    return ['author', 'chain', 'state', 'system'].reduce((result, _sectionName) => {
      const sectionName = _sectionName as keyof DecoratedRpc<OnCall>;

      result[sectionName] = Object.keys(rpc[sectionName]).reduce((section, methodName) => {
        const method = (...params: any[]) => this.onCall(rpc[sectionName][methodName](...params), params);
        section[methodName] = method;

        return section;
      }, {} as DecoratedRpc$Section<OnCall>);

      return result;
    }, {} as DecoratedRpc<OnCall>);
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

  protected decorateStorage (storage: Storage): QueryableStorage<OnCall> {
    return Object.keys(storage).reduce((result, sectionName) => {
      const section = storage[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateStorageEntry(section[methodName]);

        return result;
      }, {} as QueryableModuleStorage<OnCall>);

      return result;
    }, {} as QueryableStorage<OnCall>);
  }

  private decorateStorageEntry (method: StorageFunction): QueryableStorageFunction<OnCall> {
    const decorated: any = (arg?: any): OnCall => {

      return this.onCall(
        this._rpcRx.state
          .subscribeStorage([[method, arg]])
          .pipe(
            // errors can occur in the case of malformed methods + args
            catchError(() => of([])),
            // state_storage returns an array of values, since we have just subscribed to
            // a single entry, we pull that from the array and return it as-is
            map((result: Array<Codec | null | undefined> = []): Codec | null | undefined =>
              result[0]
            )
          ),
        [arg]
      );
    };

    decorated.at = (hash: Hash, arg?: any): OnCall =>
      this.onCall(
        this._rpcRx.state
          .getStorage([method, arg], hash)
          .pipe(
            // same as above (for single result), in the case of errors on creation, return `undefined`
            catchError(() => of())
          ),
        [arg]
      );

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction<OnCall>;
  }
}
