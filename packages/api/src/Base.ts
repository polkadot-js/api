// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { MethodFunction } from '@polkadot/types/Method';
import {
  ApiBaseInterface, ApiInterface$Events, ApiOptions,
  DecoratedRpc, DecoratedRpc$Section,
  Derive, DeriveSection,
  QueryableModuleStorage, QueryableStorage, QueryableStorageFunction,
  SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics
} from './types';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import decorateDerive, { Derive as DeriveInterface } from '@polkadot/api-derive/index';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import RpcRx from '@polkadot/rpc-rx/index';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import { Hash, Metadata, RuntimeVersion } from '@polkadot/types/index';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { Codec } from '@polkadot/types/types';
import { assert, isFunction, isObject, isUndefined } from '@polkadot/util';

import ApiRx from './rx';
import SubmittableExtrinsic from './SubmittableExtrinsic';

type MetaDecoration = {
  callIndex?: Uint8Array,
  meta: any,
  method: string,
  section: string,
  toJSON: () => any
};

export const INIT_ERROR = `Api needs to be initialised before using, listen on 'ready'`;

export default abstract class ApiBase<OnCall> implements ApiBaseInterface<OnCall> {
  protected abstract _apiRx: ApiRx;
  protected _derive?: Derive<OnCall>;
  protected _extrinsics?: SubmittableExtrinsics<OnCall>;
  protected _query?: QueryableStorage<OnCall>;
  protected _rpc: DecoratedRpc<OnCall>;
  protected _rpcRx: RpcRx;

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

    this._rpcRx = new RpcRx(options.provider);
    this._rpc = this.decorateRpc(this._rpcRx);
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  get genesisHash (): Hash {
    return this._apiRx.genesisHash;
  }

  /**
   * @description `true` when subscriptions are supported
   */
  get hasSubscriptions (): boolean {
    return this._apiRx.hasSubscriptions;
  }

  /**
   * @description Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.
   */
  get runtimeMetadata (): Metadata {
    return this._apiRx.runtimeMetadata;
  }

  /**
   * @description Contains the version information for the current runtime.
   */
  get runtimeVersion (): RuntimeVersion {
    return this._apiRx.runtimeVersion;
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  get derive (): Derive<OnCall> {
    assert(!isUndefined(this._derive), INIT_ERROR);

    return this._derive as Derive<OnCall>;
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

  emit (type: ApiInterface$Events, ...args: Array<any>): void {
    this._apiRx.emit(type, ...args);
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
  get tx (): SubmittableExtrinsics<OnCall> {
    assert(!isUndefined(this._extrinsics), INIT_ERROR);

    return this._extrinsics as SubmittableExtrinsics<OnCall>;
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
    this._apiRx.on(type, handler);

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
    this._apiRx.once(type, handler);

    return this;
  }

  protected abstract onCall (method: (...params: Array<any>) => Observable<Codec | undefined | null>, params: Array<any>, isSubscription?: boolean): OnCall;

  private decorateFunctionMeta (input: MetaDecoration, output: MetaDecoration): MetaDecoration {
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
        const method = (...params: any[]) => this.onCall(rpc[sectionName][methodName], params);
        section[methodName] = method;

        return section;
      }, {} as DecoratedRpc$Section<OnCall>);

      return result;
    }, {} as DecoratedRpc<OnCall>);
  }

  protected decorateExtrinsics (): SubmittableExtrinsics<OnCall> {
    const extrinsics = extrinsicsFromMeta(this.runtimeMetadata);

    return Object.keys(extrinsics).reduce((result, sectionName) => {
      const section = extrinsics[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateExtrinsicEntry(section[methodName]);

        return result;
      }, {} as SubmittableModuleExtrinsics<OnCall>);

      return result;
    }, {} as SubmittableExtrinsics<OnCall>);
  }

  private decorateExtrinsicEntry (method: MethodFunction): SubmittableExtrinsicFunction<OnCall> {
    const decorated: any = (...args: Array<any>): SubmittableExtrinsic<OnCall> =>
      new SubmittableExtrinsic(this._apiRx, this.onCall, method(...args));

    return this.decorateFunctionMeta(method, decorated) as SubmittableExtrinsicFunction<OnCall>;
  }

  protected decorateStorage (): QueryableStorage<OnCall> {
    const storage = storageFromMeta(this.runtimeMetadata);

    return Object.keys(storage).reduce((result, sectionName) => {
      const section = storage[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateStorageEntry(methodName, section[methodName]);

        return result;
      }, {} as QueryableModuleStorage<OnCall>);

      return result;
    }, {} as QueryableStorage<OnCall>);
  }

  private decorateStorageEntry (methodName: string, method: StorageFunction): QueryableStorageFunction<OnCall> {
    // FIXME Find a better way to know if a particular method is a subscription or not
    const isSubscription = methodName.includes('subscribe');

    const decorated: any = (...args: any): OnCall => {

      return this.onCall(
        (...args: any) => this._rpcRx.state
          .subscribeStorage([[method, args[0]]])
          .pipe(
            // errors can occur in the case of malformed methods + args
            catchError(() => of([])),
            // state_storage returns an array of values, since we have just subscribed to
            // a single entry, we pull that from the array and return it as-is
            map((result: Array<Codec | null | undefined> = []): Codec | null | undefined =>
              result[0]
            )
          ),
        args,
        isSubscription
      );
    };

    decorated.at = (hash: Hash, arg?: any): OnCall =>
      this.onCall(
        arg => this._rpcRx.state
          .getStorage([method, arg], hash)
          .pipe(
            // same as above (for single result), in the case of errors on creation, return `undefined`
            catchError(() => of())
          ),
        [arg]
      );

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction<OnCall>;
  }

  protected decorateDerive (apiRx: ApiRx): Derive<OnCall> {
    const derive = decorateDerive(apiRx);

    return Object.keys(derive).reduce((result, _sectionName) => {
      const sectionName = _sectionName as keyof DeriveInterface;

      result[sectionName] = Object.keys(derive[sectionName]).reduce((section, methodName) => {
        const method = (...params: any[]) => this.onCall((derive[sectionName] as any)[methodName], params);
        section[methodName] = method;

        return section;
      }, {} as DeriveSection<OnCall>);

      return result;
    }, {} as Derive<OnCall>);
  }
}
