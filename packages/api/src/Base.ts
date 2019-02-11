// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { Storage } from '@polkadot/storage/types';
import { Codec, CodecArg, CodecCallback, RegistryTypes } from '@polkadot/types/types';
import { RxResult } from './rx/types';
import {
  ApiBaseInterface, ApiInterface$Rx, ApiInterface$Events, ApiOptions, ApiType,
  DecoratedRpc, DecoratedRpc$Method, DecoratedRpc$Section,
  Derive, DeriveSection,
  HashResult, U64Result,
  OnCallDefinition, OnCallFunction,
  QueryableModuleStorage, QueryableStorage, QueryableStorageFunction,
  SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics, Signer
} from './types';

import EventEmitter from 'eventemitter3';
import { map } from 'rxjs/operators';
import decorateDerive, { Derive as DeriveInterface } from '@polkadot/api-derive/index';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import RpcBase from '@polkadot/rpc-core/index';
import RpcRx from '@polkadot/rpc-rx/index';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import { Event, getTypeRegistry, Hash, Metadata, Method, RuntimeVersion } from '@polkadot/types/index';
import { MethodFunction, ModulesWithMethods } from '@polkadot/types/primitive/Method';
import { StorageFunction } from '@polkadot/types/primitive/StorageKey';
import { assert, compactStripLength, isFunction, isObject, isUndefined, logger, u8aToHex } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { createSubmittableExtrinsic, SubmittableExtrinsic } from './SubmittableExtrinsic';

type MetaDecoration = {
  callIndex?: Uint8Array,
  meta: any,
  method: string,
  section: string,
  toJSON: () => any
};

const INIT_ERROR = `Api needs to be initialised before using, listen on 'ready'`;

const l = logger('api/decorator');

let pkgJson: { name: string, version: string };

try {
  pkgJson = require('./package.json');
} catch (error) {
  // development environment
  pkgJson = { name: '@polkadot/api', version: '-' };
}

/**
 * Put the `this.onCall` function of ApiRx here, because it is needed by
 * `api._rx`.
 */
function rxOnCall (
  method: OnCallFunction<RxResult, RxResult>,
  params: Array<CodecArg> = [],
  _callback?: CodecCallback
): RxResult {
  return method(...params);
}

export default abstract class ApiBase<CodecResult, SubscriptionResult> implements ApiBaseInterface<CodecResult, SubscriptionResult> {
  private _eventemitter: EventEmitter;
  private _derive?: Derive<CodecResult, SubscriptionResult>;
  private _extrinsics?: SubmittableExtrinsics<CodecResult, SubscriptionResult>;
  private _genesisHash?: Hash;
  private _isReady: boolean = false;
  protected readonly _options: ApiOptions;
  private _query?: QueryableStorage<CodecResult, SubscriptionResult>;
  private _rpc: DecoratedRpc<CodecResult, SubscriptionResult>;
  protected _rpcBase: RpcBase; // FIXME These two could be merged
  protected _rpcRx: RpcRx; // FIXME These two could be merged
  private _runtimeMetadata?: Metadata;
  private _runtimeVersion?: RuntimeVersion;
  private _rx: Partial<ApiInterface$Rx> = {};
  private _type: ApiType;

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
  constructor (provider: ApiOptions | ProviderInterface = {}, type: ApiType) {
    const options = isObject(provider) && isFunction((provider as ProviderInterface).send)
      ? { provider } as ApiOptions
      : provider as ApiOptions;
    const thisProvider = options.source
      ? options.source._rpcBase._provider.clone()
      : options.provider;

    this._options = options;
    this._type = type;
    this._eventemitter = new EventEmitter();
    this._rpcBase = new RpcBase(thisProvider);

    assert(this.hasSubscriptions, 'Api can only be used with a provider supporting subscriptions');

    this._rpcRx = new RpcRx(thisProvider);
    this._rpc = this.decorateRpc(this._rpcRx, this.onCall);
    this._rx.rpc = this.decorateRpc(this._rpcRx, rxOnCall);
    this._rx.signer = options.signer;

    // we only re-register the types (global) if this is not a cloned instance
    if (!options.source) {
      this.registerTypes(options.types);
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
   * @description The library information name & version (from package.json)
   */
  get libraryInfo (): string {
    return `${pkgJson.name} v${pkgJson.version}`;
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
   * @description The type of this API instance, either 'rxjs' or 'promise'
   */
  get type (): ApiType {
    return this._type;
  }

  /**
   * @description Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  setSigner (signer: Signer) {
    this._rx.signer = signer;
  }

  /**
   * @description Derived results that are injected into the API, allowing for combinations of various query results.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.derive.chain.bestNumber((number) => {
   *   console.log('best number', number);
   * });
   * ```
   */
  get derive (): Derive<CodecResult, SubscriptionResult> {
    assert(!isUndefined(this._derive), INIT_ERROR);

    return this._derive as Derive<CodecResult, SubscriptionResult>;
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
  get query (): QueryableStorage<CodecResult, SubscriptionResult> {
    assert(!isUndefined(this._query), INIT_ERROR);

    return this._query as QueryableStorage<CodecResult, SubscriptionResult>;
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
  get rpc (): DecoratedRpc<CodecResult, SubscriptionResult> {
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
   *   .signAndSend(<keyPair>, ({status}) => {
   *     console.log('tx status', status.asFinalised.toHex());
   *   });
   * ```
   */
  get tx (): SubmittableExtrinsics<CodecResult, SubscriptionResult> {
    assert(!isUndefined(this._extrinsics), INIT_ERROR);

    return this._extrinsics as SubmittableExtrinsics<CodecResult, SubscriptionResult>;
  }

  /**
   * @description Disconnect from the underlying provider, halting all comms
   */
  disconnect (): void {
    this._rpcBase.disconnect();
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

  /**
   * @description Register additional user-defined of chain-specific types in the type registry
   */
  registerTypes (types?: RegistryTypes): void {
    if (types) {
      getTypeRegistry().register(types);
    }
  }

  protected abstract onCall (method: OnCallFunction<RxResult, RxResult>, params?: Array<CodecArg>, callback?: CodecCallback, needsCallback?: boolean): CodecResult | SubscriptionResult;

  private emit (type: ApiInterface$Events, ...args: Array<any>): void {
    this._eventemitter.emit(type, ...args);
  }

  private init (): void {
    this._rpcBase._provider.on('disconnected', () => {
      this.emit('disconnected');
    });

    this._rpcBase._provider.on('error', (error) => {
      this.emit('error', error);
    });

    this._rpcBase._provider.on('connected', async () => {
      this.emit('connected');

      const [hasMeta, cryptoReady] = await Promise.all([
        this.loadMeta(),
        cryptoWaitReady()
      ]);

      if (hasMeta && !this._isReady && cryptoReady) {
        this._isReady = true;

        this.emit('ready', this);
      }
    });
  }

  private async loadMeta (): Promise<boolean> {
    try {
      // only load from on-chain if we are not a clone (default path), alternatively
      // just use the values from the source instance provided
      if (!this._options.source || !this._options.source._isReady) {
        this._runtimeMetadata = await this._rpcBase.state.getMetadata();
        this._runtimeVersion = await this._rpcBase.chain.getRuntimeVersion();
        this._genesisHash = await this._rpcBase.chain.getBlockHash(0);

        // get unique types & validate
        this.runtimeMetadata.getUniqTypes(false);
      } else {
        this._runtimeMetadata = this._options.source.runtimeMetadata;
        this._runtimeVersion = this._options.source.runtimeVersion;
        this._genesisHash = this._options.source.genesisHash;
      }
      if (this.runtimeMetadata.version === 2) {
        getTypeRegistry().register(this.runtimeMetadata.asV2.typeRegistry);
      }

      const extrinsics = extrinsicsFromMeta(this.runtimeMetadata.asV0);
      const storage = storageFromMeta(this.runtimeMetadata.asV0);

      this._extrinsics = this.decorateExtrinsics(extrinsics, this.onCall);
      this._query = this.decorateStorage(storage, this.onCall);
      this._derive = this.decorateDerive(this._rx as ApiInterface$Rx, this.onCall);

      this._rx.genesisHash = this._genesisHash;
      this._rx.runtimeVersion = this._runtimeVersion;
      this._rx.tx = this.decorateExtrinsics(extrinsics, rxOnCall);
      this._rx.query = this.decorateStorage(storage, rxOnCall);
      this._rx.derive = this.decorateDerive(this._rx as ApiInterface$Rx, rxOnCall);

      // only inject if we are not a clone (global init)
      if (!this._options.source) {
        Event.injectMetadata(this.runtimeMetadata.asV0);
        Method.injectMethods(extrinsics);
      }

      return true;
    } catch (error) {
      l.error('loadMeta', error);

      return false;
    }
  }

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

  private decorateRpc<C, S> (rpc: RpcRx, onCall: OnCallDefinition<C, S>): DecoratedRpc<C, S> {
    return ['author', 'chain', 'state', 'system'].reduce((result, _sectionName) => {
      const sectionName = _sectionName as keyof DecoratedRpc<C, S>;

      result[sectionName] = Object.keys(rpc[sectionName]).reduce((section, methodName) => {
        // FIXME Find a better way to know if a particular method is a subscription or not
        const needsCallback = methodName.includes('subscribe');
        // These signatures are allowed and exposed here (bit or a stoopid way, but checked
        // RPCs and we have 3 max args, with subs max one arg... YMMV) -
        //   (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): CodecResult;
        //    (arg1: CodecArg, callback: CodecCallback): SubscriptionResult;
        //    (callback: CodecCallback): SubscriptionResult;
        const method = ((...args: Array<any>): C | S => {
          let callback: CodecCallback | undefined;
          let params = args;

          if (args.length && isFunction(args[args.length - 1])) {
            callback = args[args.length - 1];
            params = args.slice(0, args.length - 1);
          }

          return onCall(rpc[sectionName][methodName], params, callback, needsCallback);
        }) as DecoratedRpc$Method<C, S>;

        section[methodName] = method;

        return section;
      }, {} as DecoratedRpc$Section<C, S>);

      return result;
    }, {} as DecoratedRpc<C, S>);
  }

  private decorateExtrinsics<C, S> (extrinsics: ModulesWithMethods, onCall: OnCallDefinition<C, S>): SubmittableExtrinsics<C, S> {
    return Object.keys(extrinsics).reduce((result, sectionName) => {
      const section = extrinsics[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateExtrinsicEntry(section[methodName], onCall);

        return result;
      }, {} as SubmittableModuleExtrinsics<C, S>);

      return result;
    }, {} as SubmittableExtrinsics<C, S>);
  }

  private decorateExtrinsicEntry<C, S> (method: MethodFunction, onCall: OnCallDefinition<C, S>): SubmittableExtrinsicFunction<C, S> {
    const decorated: any = (...params: Array<CodecArg>): SubmittableExtrinsic<C, S> =>
      createSubmittableExtrinsic(this.type, this._rx as ApiInterface$Rx, onCall, method(...params));

    return this.decorateFunctionMeta(method, decorated) as SubmittableExtrinsicFunction<C, S>;
  }

  private decorateStorage<C, S> (storage: Storage, onCall: OnCallDefinition<C, S>): QueryableStorage<C, S> {
    return Object.keys(storage).reduce((result, sectionName) => {
      const section = storage[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName) => {
        result[methodName] = this.decorateStorageEntry(section[methodName], onCall);

        return result;
      }, {} as QueryableModuleStorage<C, S>);

      return result;
    }, {} as QueryableStorage<C, S>);
  }

  private decorateStorageEntry<C, S> (method: StorageFunction, onCall: OnCallDefinition<C, S>): QueryableStorageFunction<C, S> {
    // These signatures are allowed and exposed here -
    //   (arg?: CodecArg): CodecResult;
    //   (arg: CodecArg, callback: CodecCallback): SubscriptionResult;
    //   (callback: CodecCallback): SubscriptionResult;
    const decorated = ((...args: Array<any>): C | S => {
      let callback: CodecCallback | undefined;
      let params = args;

      if (args.length && isFunction(args[args.length - 1])) {
        callback = args[args.length - 1];
        params = args.slice(0, args.length - 1);
      }

      return onCall(
        (arg: CodecArg) => this._rpcRx.state
          .subscribeStorage([[method, arg]])
          .pipe(
            // state_storage returns an array of values, since we have just subscribed to
            // a single entry, we pull that from the array and return it as-is
            map((result: Array<Codec>): Codec =>
              result[0]
            )
          ),
        params,
        callback
      );
    }) as QueryableStorageFunction<C, S>;

    decorated.at = (hash: Hash | Uint8Array | string, arg?: CodecArg): C =>
      onCall(
        (arg: CodecArg) => this._rpcRx.state.getStorage([method, arg], hash),
        [arg]
      ) as C;

    // FIXME The unknown cast is needed since the onCall result, `C | S` cannot
    // be converted from C to the actual result required
    decorated.hash = (arg?: CodecArg): HashResult<C, S> =>
      onCall(
        (arg: CodecArg) => this._rpcRx.state.getStorageHash([method, arg]),
        [arg]
      ) as unknown as HashResult<C, S>;

    // FIXME as above...
    decorated.size = (arg?: CodecArg): U64Result<C, S> =>
      onCall(
        (arg: CodecArg) => this._rpcRx.state.getStorageSize([method, arg]),
        [arg]
      ) as unknown as U64Result<C, S>;

    decorated.key = (arg?: CodecArg): string =>
      u8aToHex(compactStripLength(method(arg))[1]);

    return this.decorateFunctionMeta(method, decorated) as QueryableStorageFunction<C, S>;
  }

  private decorateDerive<C, S> (apiRx: ApiInterface$Rx, onCall: OnCallDefinition<C, S>): Derive<C, S> {
    const derive = decorateDerive(apiRx, this._options.derives);

    return Object.keys(derive).reduce((result, _sectionName) => {
      const sectionName = _sectionName as keyof DeriveInterface;

      result[sectionName] = Object.keys(derive[sectionName]).reduce((section, methodName) => {
        // FIXME The callback extraction we do way too much - de-dupe
        const method = (...args: Array<any>): C | S => {
          let callback: CodecCallback | undefined;
          let params = args;

          if (args.length && isFunction(args[args.length - 1])) {
            callback = args[args.length - 1];
            params = args.slice(0, args.length - 1);
          }

          return onCall((derive[sectionName] as any)[methodName], params, callback, !!callback);
        };

        section[methodName] = method as any; // CodecCallback or CodecArg form

        return section;
      }, {} as DeriveSection<C, S>);

      return result;
    }, {} as Derive<C, S>);
  }
}
