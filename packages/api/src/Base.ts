// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { AnyFunction, Codec, CodecArg, RegistryTypes } from '@polkadot/types/types';
import {
  ApiInterfaceRx, ApiInterfaceEvents, ApiOptions, ApiTypes, DecorateMethodOptions,
  DecoratedRpc, DecoratedRpcSection,
  QueryableModuleStorage, QueryableStorage, QueryableStorageEntry, QueryableStorageMulti, QueryableStorageMultiArg, QueryableStorageMultiArgs,
  SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics, Signer
} from './types';

import EventEmitter from 'eventemitter3';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import decorateDerive from '@polkadot/api-derive';
import constantsFromMeta from '@polkadot/api-metadata/consts/fromMetadata';
import { Constants } from '@polkadot/api-metadata/consts/types';
import extrinsicsFromMeta from '@polkadot/api-metadata/extrinsics/fromMetadata';
import { Storage } from '@polkadot/api-metadata/storage/types';
import storageFromMeta from '@polkadot/api-metadata/storage/fromMetadata';
import RpcCore from '@polkadot/rpc-core';
import { WsProvider } from '@polkadot/rpc-provider';
import { Event, getTypeRegistry, Hash, Metadata, Method, RuntimeVersion, SignedBlock, Null, U64 } from '@polkadot/types';
import Linkage, { LinkageResult } from '@polkadot/types/codec/Linkage';
import { DEFAULT_VERSION as EXTRINSIC_DEFAULT_VERSION } from '@polkadot/types/primitive/Extrinsic/constants';
import { MethodFunction, ModulesWithMethods } from '@polkadot/types/primitive/Method';
import * as srmlTypes from '@polkadot/types/srml/definitions';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { assert, compactStripLength, isFunction, isObject, isUndefined, logger, u8aToHex } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import createSubmittable, { SubmittableExtrinsic } from './SubmittableExtrinsic';
import { decorateSections } from './util/decorate';

interface MetaDecoration {
  callIndex?: Uint8Array;
  meta: any;
  method: string;
  section: string;
  toJSON: () => any;
}

const INIT_ERROR = `Api needs to be initialised before using, listen on 'ready'`;
const KEEPALIVE_INTERVAL = 15000;

const l = logger('api/decorator');

let pkgJson: { name: string; version: string };

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
function rxDecorateMethod<Method extends AnyFunction> (method: Method): Method {
  return method;
}

export default abstract class ApiBase<ApiType> {
  private _consts?: Constants;

  private _derive?: ReturnType<ApiBase<ApiType>['decorateDerive']>;

  private _eventemitter: EventEmitter;

  private _extrinsics?: SubmittableExtrinsics<ApiType>;

  private _extrinsicType: number = EXTRINSIC_DEFAULT_VERSION;

  private _genesisHash?: Hash;

  protected _isConnected: BehaviorSubject<boolean>;

  private _isReady: boolean = false;

  protected readonly _options: ApiOptions;

  private _query?: QueryableStorage<ApiType>;

  private _queryMulti: QueryableStorageMulti<ApiType>;

  private _rpc: DecoratedRpc<ApiType>;

  protected _rpcCore: RpcCore;

  private _runtimeMetadata?: Metadata;

  private _runtimeVersion?: RuntimeVersion;

  private _rx: Partial<ApiInterfaceRx> = {};

  private _type: ApiTypes;

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
  public constructor (provider: ApiOptions | ProviderInterface = {}, type: ApiTypes) {
    const options = isObject(provider) && isFunction((provider as ProviderInterface).send)
      ? { provider } as unknown as ApiOptions
      : provider as ApiOptions;
    const thisProvider = options.source
      ? options.source._rpcCore.provider.clone()
      : (options.provider || new WsProvider());

    this._options = options;
    this._type = type;
    this._eventemitter = new EventEmitter();
    this._rpcCore = new RpcCore(thisProvider);
    this._isConnected = new BehaviorSubject(this._rpcCore.provider.isConnected());

    assert(this.hasSubscriptions, 'Api can only be used with a provider supporting subscriptions');

    this._rpc = this.decorateRpc(this._rpcCore, this.decorateMethod);
    this._rx.rpc = this.decorateRpc(this._rpcCore, rxDecorateMethod);
    this._queryMulti = this.decorateMulti(this.decorateMethod);
    this._rx.queryMulti = this.decorateMulti(rxDecorateMethod);
    this._rx.signer = options.signer;

    // we only re-register the types (global) if this is not a cloned instance
    if (!options.source) {
      // first register the definitions we have, i.e. those where there are no type classes
      Object.values(srmlTypes).forEach(({ types }): void =>
        this.registerTypes(types)
      );

      // next register all the user types
      this.registerTypes(options.types);
    }

    this.init();
  }

  /**
   * @description  Returns th version of extrinsics in-use on this chain
   */
  public get extrinsicVersion (): number {
    return this._extrinsicType;
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  public get genesisHash (): Hash {
    assert(!isUndefined(this._genesisHash), INIT_ERROR);

    return this._genesisHash as Hash;
  }

  /**
   * @description `true` when subscriptions are supported
   */
  public get hasSubscriptions (): boolean {
    return this._rpcCore.provider.hasSubscriptions;
  }

  /**
   * @description The library information name & version (from package.json)
   */
  public get libraryInfo (): string {
    return `${pkgJson.name} v${pkgJson.version}`;
  }

  /**
   * @description Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.
   */
  public get runtimeMetadata (): Metadata {
    assert(!isUndefined(this._runtimeMetadata), INIT_ERROR);

    return this._runtimeMetadata as Metadata;
  }

  /**
   * @description Contains the version information for the current runtime.
   */
  public get runtimeVersion (): RuntimeVersion {
    assert(!isUndefined(this._runtimeVersion), INIT_ERROR);

    return this._runtimeVersion as RuntimeVersion;
  }

  /**
   * @description The type of this API instance, either 'rxjs' or 'promise'
   */
  public get type (): ApiTypes {
    return this._type;
  }

  /**
   * @description Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  public setSigner (signer: Signer): void {
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
  public get derive (): ReturnType<ApiBase<ApiType>['decorateDerive']> {
    assert(!isUndefined(this._derive), INIT_ERROR);

    return this._derive as ReturnType<ApiBase<ApiType>['decorateDerive']>;
  }

  /**
   * @description Contains the parameter types (constants) of all modules.
   *
   * The values are instances of the appropriate type and are accessible using `section`.`constantName`,
   *
   * @example
   * <BR>
   *
   * ```javascript
   * console.log(api.consts.democracy.enactmentPeriod.toString())
   * ```
   */
  public get consts (): Constants {
    assert(!isUndefined(this._consts), INIT_ERROR);

    return this._consts as Constants;
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
  public get query (): QueryableStorage<ApiType> {
    assert(!isUndefined(this._query), INIT_ERROR);

    return this._query as QueryableStorage<ApiType>;
  }

  /**
   * @description Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const unsub = await api.queryMulti(
   *   [
   *     // you can include the storage without any parameters
   *     api.query.balances.totalIssuance,
   *     // or you can pass parameters to the storage query
   *     [api.query.balances.freeBalance, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
   *   ],
   *   ([existential, balance]) => {
   *     console.log(`You have ${balance.sub(existential)} more than the existential deposit`);
   *
   *     unsub();
   *   }
   * );
   * ```
   */
  public get queryMulti (): QueryableStorageMulti<ApiType> {
    return this._queryMulti;
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
  public get rpc (): DecoratedRpc<ApiType> {
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
   *     console.log('tx status', status.asFinalized.toHex());
   *   });
   * ```
   */
  public get tx (): SubmittableExtrinsics<ApiType> {
    assert(!isUndefined(this._extrinsics), INIT_ERROR);

    return this._extrinsics as SubmittableExtrinsics<ApiType>;
  }

  /**
   * @description Disconnect from the underlying provider, halting all comms
   */
  public disconnect (): void {
    this._rpcCore.disconnect();
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
   * api.on('connected', (): void => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.on('disconnected', (): void => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  public on (type: ApiInterfaceEvents, handler: (...args: any[]) => any): this {
    this._eventemitter.on(type, handler);

    return this;
  }

  /**
   * @description Remove the given eventemitter handler
   *
   * @param type The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to unregister.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const handler = (): void => {
   *  console.log('Connected !);
   * };
   *
   * // Start listening
   * api.on('connected', handler);
   *
   * // Stop listening
   * api.off('connected', handler);
   * ```
   */
  public off (type: ApiInterfaceEvents, handler: (...args: any[]) => any): this {
    this._eventemitter.removeListener(type, handler);

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
   * api.once('connected', (): void => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.once('disconnected', (): void => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  public once (type: ApiInterfaceEvents, handler: (...args: any[]) => any): this {
    this._eventemitter.once(type, handler);

    return this;
  }

  /**
   * @description Register additional user-defined of chain-specific types in the type registry
   */
  public registerTypes (types?: RegistryTypes): void {
    if (types) {
      getTypeRegistry().register(types);
    }
  }

  /**
   * This is the one and only method concrete children classes need to implement.
   * It's a higher-order function, which takes one argument
   * `method: Method extends (...args: any[]) => Observable<any>`
   * (and one optional `options`), and should return the user facing method.
   * For example:
   * - For ApiRx, `decorateMethod` should just be identity, because the input
   * function is already an Observable
   * - For ApiPromise, `decorateMethod` should return a function that takes all
   * the parameters from `method`, adds an optional `callback` argument, and
   * returns a Promise.
   *
   * We could easily imagine other user-facing interfaces, which are simply
   * implemented by transforming the Observable to Stream/Iterator/Kefir/Bacon
   * via `deocrateMethod`.
   */
  protected abstract decorateMethod (method: (...args: any[]) => Observable<any>, options?: DecorateMethodOptions): any;

  private emit (type: ApiInterfaceEvents, ...args: any[]): void {
    this._eventemitter.emit(type, ...args);
  }

  private init (): void {
    let healthTimer: NodeJS.Timeout | null = null;

    this._rpcCore.provider.on('disconnected', (): void => {
      this.emit('disconnected');
      this._isConnected.next(false);

      if (healthTimer) {
        clearInterval(healthTimer);
        healthTimer = null;
      }
    });

    this._rpcCore.provider.on('error', (error): void => {
      this.emit('error', error);
    });

    this._rpcCore.provider.on('connected', async (): Promise<void> => {
      this.emit('connected');
      this._isConnected.next(true);

      try {
        const [hasMeta, cryptoReady] = await Promise.all([
          this.loadMeta(),
          cryptoWaitReady()
        ]);

        if (hasMeta && !this._isReady && cryptoReady) {
          this._isReady = true;

          this.emit('ready', this);
        }

        healthTimer = setInterval((): void => {
          this._rpcCore.system.health().toPromise().catch((): void => {
            // ignore
          });
        }, KEEPALIVE_INTERVAL);
      } catch (_error) {
        const error = new Error(`FATAL: Unable to initialize the API: ${_error.message}`);

        l.error(error);

        this.emit('error', error);
      }
    });
  }

  private async loadMeta (): Promise<boolean> {
    const { metadata = {} } = this._options;

    // only load from on-chain if we are not a clone (default path), alternatively
    // just use the values from the source instance provided
    if (!this._options.source || !this._options.source._isReady) {
      [this._genesisHash, this._runtimeVersion] = await Promise.all([
        this._rpcCore.chain.getBlockHash(0).toPromise(),
        this._rpcCore.chain.getRuntimeVersion().toPromise()
      ]);

      const metadataKey = `${this._genesisHash}-${(this._runtimeVersion as RuntimeVersion).specVersion}`;

      if (metadataKey in metadata) {
        this._runtimeMetadata = new Metadata(metadata[metadataKey]);
      } else {
        this._runtimeMetadata = await this._rpcCore.state.getMetadata().toPromise();
      }

      // get unique types & validate
      this.runtimeMetadata.getUniqTypes(false);
    } else {
      this._extrinsicType = this._options.source.extrinsicVersion;
      this._runtimeMetadata = this._options.source.runtimeMetadata;
      this._runtimeVersion = this._options.source.runtimeVersion;
      this._genesisHash = this._options.source.genesisHash;
    }

    const extrinsics = extrinsicsFromMeta(this.runtimeMetadata);
    const storage = storageFromMeta(this.runtimeMetadata);
    const constants = constantsFromMeta(this.runtimeMetadata);

    // only inject if we are not a clone (global init)
    if (!this._options.source) {
      Event.injectMetadata(this.runtimeMetadata);
      Method.injectMethods(extrinsics);

      // detect the extrinsic version in-use based on the last block
      const lastBlock: SignedBlock = await this._rpcCore.chain.getBlock().toPromise();

      this._extrinsicType = lastBlock.block.extrinsics[0].type;
    }

    this._extrinsics = this.decorateExtrinsics(extrinsics, this.decorateMethod);
    this._query = this.decorateStorage(storage, this.decorateMethod);
    this._consts = constants;

    this._rx.extrinsicType = this._extrinsicType;
    this._rx.genesisHash = this._genesisHash;
    this._rx.runtimeVersion = this._runtimeVersion;
    this._rx.tx = this.decorateExtrinsics(extrinsics, rxDecorateMethod);
    this._rx.query = this.decorateStorage(storage, rxDecorateMethod);
    this._rx.consts = constants;

    this._derive = this.decorateDerive(this._rx as ApiInterfaceRx, this.decorateMethod);

    return true;
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

  private decorateRpc<ApiType> (rpc: RpcCore, decorateMethod: ApiBase<ApiType>['decorateMethod']): DecoratedRpc<ApiType> {
    return ['author', 'chain', 'state', 'system'].reduce((result, _sectionName): DecoratedRpc<ApiType> => {
      const sectionName = _sectionName as keyof DecoratedRpc<ApiType>;

      result[sectionName] = Object.keys(rpc[sectionName]).reduce((section, methodName): DecoratedRpcSection<ApiType> => {
        const method = rpc[sectionName][methodName];
        section[methodName] = decorateMethod(method, { methodName });

        return section;
      }, {} as unknown as DecoratedRpcSection<ApiType>);

      return result;
    }, {} as unknown as DecoratedRpc<ApiType>);
  }

  private decorateMulti<ApiType> (decorateMethod: ApiBase<ApiType>['decorateMethod']): QueryableStorageMulti<ApiType> {
    return decorateMethod(
      (calls: QueryableStorageMultiArgs<ApiType>): Observable<Codec[]> => {
        const mapped = calls.map((arg: QueryableStorageMultiArg<ApiType>): [QueryableStorageEntry<ApiType>, ...CodecArg[]] =>
          // the input is a QueryableStorageEntry, convert to StorageEntry
          Array.isArray(arg)
            ? [arg[0].creator, ...arg.slice(1)]
            : [arg.creator] as any
        );

        return this._rpcCore.state.subscribeStorage(mapped);
      });
  }

  private decorateExtrinsics<ApiType> (extrinsics: ModulesWithMethods, decorateMethod: ApiBase<ApiType>['decorateMethod']): SubmittableExtrinsics<ApiType> {
    const creator = (value: Uint8Array | string): SubmittableExtrinsic<ApiType> =>
      createSubmittable(this.type, this._rx as ApiInterfaceRx, decorateMethod, value);

    return Object.keys(extrinsics).reduce((result, sectionName): SubmittableExtrinsics<ApiType> => {
      const section = extrinsics[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName): SubmittableModuleExtrinsics<ApiType> => {
        result[methodName] = this.decorateExtrinsicEntry(section[methodName], decorateMethod);

        return result;
      }, {} as unknown as SubmittableModuleExtrinsics<ApiType>);

      return result;
    }, creator as unknown as SubmittableExtrinsics<ApiType>);
  }

  private decorateExtrinsicEntry<ApiType> (method: MethodFunction, decorateMethod: ApiBase<ApiType>['decorateMethod']): SubmittableExtrinsicFunction<ApiType> {
    const decorated =
      (...params: CodecArg[]): SubmittableExtrinsic<ApiType> =>
        createSubmittable(this.type, this._rx as ApiInterfaceRx, decorateMethod, method(...params));

    return this.decorateFunctionMeta(method, decorated as any) as SubmittableExtrinsicFunction<ApiType>;
  }

  private decorateStorage<ApiType> (storage: Storage, decorateMethod: ApiBase<ApiType>['decorateMethod']): QueryableStorage<ApiType> {
    return Object.keys(storage).reduce((result, sectionName): QueryableStorage<ApiType> => {
      const section = storage[sectionName];

      result[sectionName] = Object.keys(section).reduce((result, methodName): QueryableModuleStorage<ApiType> => {
        result[methodName] = this.decorateStorageEntry(section[methodName], decorateMethod);

        return result;
      }, {} as unknown as QueryableModuleStorage<ApiType>);

      return result;
    }, {} as unknown as QueryableStorage<ApiType>);
  }

  private decorateStorageEntry<ApiType> (creator: StorageEntry, decorateMethod: ApiBase<ApiType>['decorateMethod']): QueryableStorageEntry<ApiType> {
    const decorated = creator.headKey
      ? this.decorateStorageEntryLinked(creator, decorateMethod)
      : decorateMethod(
        (...args: any[]): Observable<Codec> => {
          return this._rpcCore.state
            // Unfortunately for one-shot calls we also use .subscribeStorage here
            .subscribeStorage([
              creator.meta.type.isDoubleMap
                ? [creator, args]
                : [creator, ...args]])
            .pipe(
              // state_storage returns an array of values, since we have just subscribed to
              // a single entry, we pull that from the array and return it as-is
              map((result: Codec[]): Codec =>
                result[0]
              )
            );
        }, {
          methodName: creator.method
        });

    decorated.creator = creator;

    decorated.at = decorateMethod(
      (hash: Hash, arg1?: CodecArg, arg2?: CodecArg): Observable<Codec> =>
        this._rpcCore.state.getStorage(
          creator.meta.type.isDoubleMap
            ? [creator, [arg1, arg2]]
            : [creator, arg1],
          hash
        )
    );

    decorated.hash = decorateMethod(
      (arg1?: CodecArg, arg2?: CodecArg): Observable<Hash> =>
        this._rpcCore.state.getStorageHash(
          creator.meta.type.isDoubleMap
            ? [creator, [arg1, arg2]]
            : [creator, arg1]
        )
    );

    decorated.key = (arg1?: CodecArg, arg2?: CodecArg): string =>
      u8aToHex(compactStripLength(creator(creator.meta.type.isDoubleMap ? [arg1, arg2] : arg1))[1]);

    // When using double map storage function, user need to path double map key as an array
    decorated.multi = decorateMethod(
      (args: (CodecArg | CodecArg[])[]): Observable<Codec[]> =>
        this._rpcCore.state
          .subscribeStorage(
            args.map((arg: CodecArg[] | CodecArg): [StorageEntry, CodecArg | CodecArg[]] =>
              [creator, arg]
            )
          )
    );

    decorated.size = decorateMethod(
      (arg1?: CodecArg, arg2?: CodecArg): Observable<U64> =>
        this._rpcCore.state.getStorageSize(
          creator.meta.type.isDoubleMap
            ? [creator, [arg1, arg2]]
            : [creator, arg1])
    );

    return this.decorateFunctionMeta(creator, decorated) as unknown as QueryableStorageEntry<ApiType>;
  }

  private decorateStorageEntryLinked<ApiType> (method: StorageEntry, decorateMethod: ApiBase<ApiType>['decorateMethod']): ReturnType<ApiBase<ApiType>['decorateMethod']> {
    const result: Map<Codec, [Codec, Linkage<Codec>]> = new Map();
    let subject: BehaviorSubject<LinkageResult>;
    let head: Codec | null = null;

    // retrieve a value based on the key, iterating if it has a next entry. Since
    // entries can be re-linked in the middle of a list, we subscribe here to make
    // sure we catch any updates, no matter the list position
    const getNext = (key: Codec): Observable<LinkageResult> => {
      return this._rpcCore.state.subscribeStorage([[method, key]])
        .pipe(
          switchMap(([data]: [[Codec, Linkage<Codec>]]): Observable<LinkageResult> => {
            const linkage = data[1];

            result.set(key, data);

            // iterate from this key to the children, constructing
            // entries for all those found and available
            if (linkage.next.isSome) {
              return getNext(linkage.next.unwrap());
            }

            const keys = [];
            const values = [];
            let nextKey = head;

            // loop through the results collected, starting at the head an re-creating
            // the list. Our map may have old entries, based on the linking these will
            // not be returned in the final result
            while (nextKey) {
              const entry = result.get(nextKey);

              if (!entry) {
                break;
              }

              const [item, linkage] = entry;

              keys.push(nextKey);
              values.push(item);

              nextKey = linkage.next && linkage.next.unwrapOr(null);
            }

            const nextResult = values.length
              ? new LinkageResult(
                [keys[0].constructor as any, keys],
                [values[0].constructor as any, values]
              )
              : new LinkageResult(
                [Null, []],
                [Null, []]
              );

            // we set our result into a subject so we have a single observable for
            // which the value changes over time. Initially create, follow-up next
            if (subject) {
              subject.next(nextResult);
            } else {
              subject = new BehaviorSubject(nextResult);
            }

            return subject;
          })
        );
    };

    // this handles the case where the head changes effectively, i.e. a new entry
    // appears at the top of the list, the new getNext gets kicked off
    return decorateMethod(
      (): Observable<LinkageResult> =>
        this._rpcCore.state
          .subscribeStorage([method.headKey])
          .pipe(
            switchMap(([key]: Codec[]): Observable<LinkageResult> => {
              head = key;

              return getNext(key);
            })
          )
    );
  }

  // FIXME I have no idea how to get this done
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private decorateDerive (apiRx: ApiInterfaceRx, decorateMethod: ApiBase<ApiType>['decorateMethod']) {
    // Pull in derive from api-derive
    const derive = decorateDerive(apiRx, this._options.derives);

    return decorateSections<ApiType, typeof derive>(derive, decorateMethod);
  }
}
