// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveCustom } from '@polkadot/api-base/types';
import type { RpcInterface } from '@polkadot/rpc-core/types';
import type { Option, Raw, StorageKey, Text, u64 } from '@polkadot/types';
import type { Call, Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import type { DecoratedMeta } from '@polkadot/types/metadata/decorate/types';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { AnyFunction, AnyTuple, CallFunction, Codec, DefinitionRpc, DefinitionRpcSub, DetectCodec, IMethod, IStorageKey, Registry, RegistryError, RegistryTypes } from '@polkadot/types/types';
import type { SubmittableExtrinsic } from '../submittable/types';
import type { ApiDecoration, ApiInterfaceRx, ApiOptions, ApiTypes, AugmentedQuery, DecoratedErrors, DecoratedEvents, DecoratedRpc, DecorateMethod, GenericStorageEntryFunction, PaginationOptions, QueryableConsts, QueryableStorage, QueryableStorageEntry, QueryableStorageEntryAt, QueryableStorageMulti, QueryableStorageMultiArg, SubmittableExtrinsicFunction, SubmittableExtrinsics } from '../types';
import type { VersionedRegistry } from './types';

import { BehaviorSubject, combineLatest, from, map, of, switchMap, tap, toArray } from 'rxjs';

import { getAvailableDerives } from '@polkadot/api-derive';
import { memo, RpcCore } from '@polkadot/rpc-core';
import { WsProvider } from '@polkadot/rpc-provider';
import { expandMetadata, Metadata, TypeRegistry, unwrapStorageType } from '@polkadot/types';
import { arrayChunk, arrayFlatten, assert, assertReturn, BN, BN_ZERO, compactStripLength, lazyMethod, lazyMethods, logger, objectSpread, u8aToHex } from '@polkadot/util';

import { createSubmittable } from '../submittable';
import { augmentObject } from '../util/augmentObject';
import { AllDerives, decorateDeriveSections } from '../util/decorate';
import { extractStorageArgs } from '../util/validate';
import { Events } from './Events';
import { findCall, findError } from './find';

interface MetaDecoration {
  callIndex?: Uint8Array;
  meta: Record<string, unknown>;
  method: string;
  section: string;
  toJSON: () => any;
}

interface FullDecoration<ApiType extends ApiTypes> {
  decoratedApi: ApiDecoration<ApiType>;
  decoratedMeta: DecoratedMeta;
}

// the max amount of keys/values that we will retrieve at once
const PAGE_SIZE_K = 1000; // limit aligned with the 1k on the node (trie lookups are heavy)
const PAGE_SIZE_V = 250; // limited since the data may be very large (e.g. misfiring elections)

const l = logger('api/init');

let instanceCounter = 0;

function getAtQueryFn<ApiType extends ApiTypes> (api: ApiDecoration<ApiType>, { method, section }: StorageEntry): AugmentedQuery<'rxjs', GenericStorageEntryFunction, AnyTuple> {
  return assertReturn(api.rx.query[section] && api.rx.query[section][method], () => `query.${section}.${method} is not available in this version of the metadata`);
}

export abstract class Decorate<ApiType extends ApiTypes> extends Events {
  readonly #instanceId: string;

  #registry: Registry;

  // HACK Use BN import so decorateDerive works... yes, wtf.
  protected __phantom = new BN(0);

  protected _consts: QueryableConsts<ApiType> = {} as QueryableConsts<ApiType>;

  protected _derive?: ReturnType<Decorate<ApiType>['_decorateDerive']>;

  protected _errors: DecoratedErrors<ApiType> = {} as DecoratedErrors<ApiType>;

  protected _events: DecoratedEvents<ApiType> = {} as DecoratedEvents<ApiType>;

  protected _extrinsics?: SubmittableExtrinsics<ApiType>;

  protected _extrinsicType = 4; // latest extrinsic version

  protected _genesisHash?: Hash;

  protected _isConnected: BehaviorSubject<boolean>;

  protected _isReady = false;

  protected readonly _options: ApiOptions;

  protected _query: QueryableStorage<ApiType> = {} as QueryableStorage<ApiType>;

  protected _queryMulti?: QueryableStorageMulti<ApiType>;

  protected _rpc?: DecoratedRpc<ApiType, RpcInterface>;

  protected _rpcCore: RpcCore & RpcInterface;

  protected _runtimeChain?: Text;

  protected _runtimeMetadata?: Metadata;

  protected _runtimeVersion?: RuntimeVersion;

  protected _rx: ApiInterfaceRx = {
    consts: {} as QueryableConsts<'rxjs'>,
    query: {} as QueryableStorage<'rxjs'>,
    tx: {} as SubmittableExtrinsics<'rxjs'>
  } as ApiInterfaceRx;

  protected _type: ApiTypes;

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
   * via `decorateMethod`.
   */
  protected _decorateMethod: DecorateMethod<ApiType>;

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
   * api.rpc.subscribeNewHeads((header) => {
   *   console.log(`new block #${header.number.toNumber()}`);
   * });
   * ```
   */
  constructor (options: ApiOptions, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>) {
    super();

    this.#instanceId = `${++instanceCounter}`;
    this.#registry = options.source?.registry || options.registry || new TypeRegistry();
    this._rx.queryAt = (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) =>
      from(this.at(blockHash, knownVersion)).pipe(map((a) => a.rx.query));
    this._rx.registry = this.#registry;

    const thisProvider = options.source
      ? options.source._rpcCore.provider.clone()
      : (options.provider || new WsProvider());

    this._decorateMethod = decorateMethod;
    this._options = options;
    this._type = type;

    // The RPC interface decorates the known interfaces on init
    this._rpcCore = new RpcCore(this.#instanceId, this.#registry, thisProvider, this._options.rpc) as (RpcCore & RpcInterface);
    this._isConnected = new BehaviorSubject(this._rpcCore.provider.isConnected);
    this._rx.hasSubscriptions = this._rpcCore.provider.hasSubscriptions;
  }

  public abstract at (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion): Promise<ApiDecoration<ApiType>>;

  /**
   * @description Return the current used registry
   */
  public get registry (): Registry {
    return this.#registry;
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): DetectCodec<T, K> {
    return this.#registry.createType(type, ...params);
  }

  /**
   * @description Register additional user-defined of chain-specific types in the type registry
   */
  public registerTypes (types?: RegistryTypes): void {
    types && this.#registry.register(types);
  }

  /**
   * @returns `true` if the API operates with subscriptions
   */
  get hasSubscriptions (): boolean {
    return this._rpcCore.provider.hasSubscriptions;
  }

  /**
   * @returns `true` if the API decorate multi-key queries
   */
  get supportMulti (): boolean {
    return this._rpcCore.provider.hasSubscriptions || !!this._rpcCore.state.queryStorageAt;
  }

  protected _emptyDecorated (registry: Registry, blockHash?: Uint8Array): ApiDecoration<ApiType> {
    return {
      consts: {},
      errors: {},
      events: {},
      query: {},
      registry,
      rx: {
        query: {}
      },
      tx: createSubmittable(this._type, this._rx, this._decorateMethod, registry, blockHash)
    } as ApiDecoration<ApiType>;
  }

  protected _createDecorated (registry: VersionedRegistry<ApiType>, fromEmpty: boolean, decoratedApi: ApiDecoration<ApiType> | null, blockHash?: Uint8Array): FullDecoration<ApiType> {
    if (!decoratedApi) {
      decoratedApi = this._emptyDecorated(registry.registry, blockHash);
    }

    if (fromEmpty || !registry.decoratedMeta) {
      registry.decoratedMeta = expandMetadata(registry.registry, registry.metadata);
    }

    const storage = this._decorateStorage(registry.decoratedMeta, this._decorateMethod, blockHash);
    const storageRx = this._decorateStorage(registry.decoratedMeta, this._rxDecorateMethod, blockHash);

    augmentObject('consts', registry.decoratedMeta.consts, decoratedApi.consts, fromEmpty);
    augmentObject('errors', registry.decoratedMeta.errors, decoratedApi.errors, fromEmpty);
    augmentObject('events', registry.decoratedMeta.events, decoratedApi.events, fromEmpty);
    augmentObject('query', storage, decoratedApi.query, fromEmpty);
    augmentObject('query', storageRx, decoratedApi.rx.query, fromEmpty);

    decoratedApi.findCall = (callIndex: Uint8Array | string): CallFunction =>
      findCall(registry.registry, callIndex);
    decoratedApi.findError = (errorIndex: Uint8Array | string): RegistryError =>
      findError(registry.registry, errorIndex);
    decoratedApi.queryMulti = blockHash
      ? this._decorateMultiAt(decoratedApi, this._decorateMethod, blockHash)
      : this._decorateMulti(this._decorateMethod);

    return {
      decoratedApi,
      decoratedMeta: registry.decoratedMeta
    };
  }

  protected _injectMetadata (registry: VersionedRegistry<ApiType>, fromEmpty = false): void {
    // clear the decoration, we are redoing it here
    if (fromEmpty || !registry.decoratedApi) {
      registry.decoratedApi = this._emptyDecorated(registry.registry);
    }

    const { decoratedApi, decoratedMeta } = this._createDecorated(registry, fromEmpty, registry.decoratedApi);

    this._consts = decoratedApi.consts;
    this._errors = decoratedApi.errors;
    this._events = decoratedApi.events;
    this._query = decoratedApi.query;
    this._rx.query = decoratedApi.rx.query;

    const tx = this._decorateExtrinsics(decoratedMeta, this._decorateMethod);
    const rxtx = this._decorateExtrinsics(decoratedMeta, this._rxDecorateMethod);

    if (fromEmpty || !this._extrinsics) {
      this._extrinsics = tx;
      this._rx.tx = rxtx;
    } else {
      augmentObject('tx', tx, this._extrinsics, false);
      augmentObject(null, rxtx, this._rx.tx, false);
    }

    augmentObject(null, decoratedMeta.consts, this._rx.consts, fromEmpty);

    this.emit('decorated');
  }

  /**
   * @deprecated
   * backwards compatible endpoint for metadata injection, may be removed in the future (However, it is still useful for testing injection)
   */
  public injectMetadata (metadata: Metadata, fromEmpty?: boolean, registry?: Registry): void {
    this._injectMetadata({ metadata, registry: registry || this.#registry, specName: this.#registry.createType('Text'), specVersion: BN_ZERO }, fromEmpty);
  }

  private _decorateFunctionMeta (input: MetaDecoration, output: MetaDecoration): MetaDecoration {
    output.meta = input.meta;
    output.method = input.method;
    output.section = input.section;
    output.toJSON = input.toJSON;

    if (input.callIndex) {
      output.callIndex = input.callIndex;
    }

    return output;
  }

  // Filter all RPC methods based on the results of the rpc_methods call. We do this in the following
  // manner to cater for both old and new:
  //   - when the number of entries are 0, only remove the ones with isOptional (account & contracts)
  //   - when non-zero, remove anything that is not in the array (we don't do this)
  protected _filterRpc (methods: string[], additional: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>): void {
    // add any specific user-base RPCs
    if (Object.keys(additional).length !== 0) {
      this._rpcCore.addUserInterfaces(additional);

      // re-decorate, only adding any new additional interfaces
      this._decorateRpc(this._rpcCore, this._decorateMethod, this._rpc);
      this._decorateRpc(this._rpcCore, this._rxDecorateMethod, this._rx.rpc);
    }

    this._filterRpcMethods(methods);
  }

  protected _filterRpcMethods (exposed: string[]): void {
    const hasResults = exposed.length !== 0;
    const allKnown = [...this._rpcCore.mapping.entries()];
    const allKeys: string[] = [];

    for (let i = 0; i < allKnown.length; i++) {
      const [, { alias, endpoint, method, pubsub, section }] = allKnown[i];

      allKeys.push(`${section}_${method}`);

      if (pubsub) {
        allKeys.push(`${section}_${pubsub[1]}`);
        allKeys.push(`${section}_${pubsub[2]}`);
      }

      if (alias) {
        allKeys.push(...alias);
      }

      if (endpoint) {
        allKeys.push(endpoint);
      }
    }

    const filterKey = (k: string) => !allKeys.includes(k);
    const unknown = exposed.filter(filterKey);

    if (unknown.length) {
      l.warn(`RPC methods not decorated: ${unknown.join(', ')}`);
    }

    // loop through all entries we have (populated in decorate) and filter as required
    // only remove when we have results and method missing, or with no results if optional
    for (let i = 0; i < allKnown.length; i++) {
      const [k, { method, section }] = allKnown[i];

      if (hasResults && !exposed.includes(k) && k !== 'rpc_methods') {
        if ((this._rpc as Record<string, Record<string, unknown>>)[section]) {
          delete (this._rpc as Record<string, Record<string, unknown>>)[section][method];
          delete (this._rx.rpc as Record<string, Record<string, unknown>>)[section][method];
        }
      }
    }
  }

  protected _decorateRpc<ApiType extends ApiTypes> (rpc: RpcCore & RpcInterface, decorateMethod: DecorateMethod<ApiType>, input: Partial<DecoratedRpc<ApiType, RpcInterface>> = {}): DecoratedRpc<ApiType, RpcInterface> {
    const out: Record<string, Record<string, unknown>> = input;

    const decorateFn = (section: string, method: string): unknown => {
      const source = rpc[section as 'chain'][method as 'getHeader'];
      const fn = decorateMethod(source, { methodName: method }) as Record<string, unknown>;

      fn.meta = source.meta;
      fn.raw = decorateMethod(source.raw, { methodName: method }) as unknown;

      return fn;
    };

    for (let s = 0; s < rpc.sections.length; s++) {
      const section = rpc.sections[s];

      if (!Object.prototype.hasOwnProperty.call(out, section)) {
        const methods = Object.keys(rpc[section as 'chain']);

        const decorateInternal = (method: string) =>
          decorateFn(section, method);

        for (let m = 0; m < methods.length; m++) {
          const method = methods[m];

          //  skip subscriptions where we have a non-subscribe interface
          if (this.hasSubscriptions || !(method.startsWith('subscribe') || method.startsWith('unsubscribe'))) {
            if (!Object.prototype.hasOwnProperty.call(out, section)) {
              out[section] = {};
            }

            lazyMethod(out[section], method, decorateInternal);
          }
        }
      }
    }

    return out as DecoratedRpc<ApiType, RpcInterface>;
  }

  // only be called if supportMulti is true
  protected _decorateMulti<ApiType extends ApiTypes> (decorateMethod: DecorateMethod<ApiType>): QueryableStorageMulti<ApiType> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return decorateMethod((calls: QueryableStorageMultiArg<ApiType>[]): Observable<Codec[]> =>
      (this.hasSubscriptions
        ? this._rpcCore.state.subscribeStorage
        : this._rpcCore.state.queryStorageAt)(
        calls.map((args: QueryableStorageMultiArg<ApiType>) =>
          Array.isArray(args)
            ? args[0].creator.meta.type.isPlain
              ? [args[0].creator]
              : args[0].creator.meta.type.asMap.hashers.length === 1
                ? [args[0].creator, args.slice(1)]
                : [args[0].creator, ...args.slice(1)]
            : [args.creator])));
  }

  protected _decorateMultiAt<ApiType extends ApiTypes> (atApi: ApiDecoration<ApiType>, decorateMethod: DecorateMethod<ApiType>, blockHash: Uint8Array | string): QueryableStorageMulti<ApiType> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return decorateMethod((calls: QueryableStorageMultiArg<ApiType>[]): Observable<Codec[]> =>
      this._rpcCore.state.queryStorageAt(
        calls.map((args: QueryableStorageMultiArg<ApiType>) => {
          if (Array.isArray(args)) {
            const { creator } = getAtQueryFn(atApi, args[0].creator);

            return creator.meta.type.isPlain
              ? [creator]
              : creator.meta.type.asMap.hashers.length === 1
                ? [creator, args.slice(1)]
                : [creator, ...args.slice(1)];
          }

          return [getAtQueryFn(atApi, args.creator).creator];
        }),
        blockHash));
  }

  protected _decorateExtrinsics<ApiType extends ApiTypes> ({ tx }: DecoratedMeta, decorateMethod: DecorateMethod<ApiType>): SubmittableExtrinsics<ApiType> {
    const result = createSubmittable(this._type, this._rx, decorateMethod) as SubmittableExtrinsics<ApiType>;

    const lazySection = (section: string) =>
      lazyMethods({}, Object.keys(tx[section]), (method: string) =>
        this._decorateExtrinsicEntry(tx[section][method], result)
      );

    const sections = Object.keys(tx);

    for (let i = 0; i < sections.length; i++) {
      lazyMethod(result, sections[i], lazySection);
    }

    return result;
  }

  private _decorateExtrinsicEntry<ApiType extends ApiTypes> (method: CallFunction, creator: (value: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>): SubmittableExtrinsicFunction<ApiType> {
    const decorated = (...params: unknown[]): SubmittableExtrinsic<ApiType> =>
      creator(method(...params));

    // pass through the `.is`
    decorated.is = (other: IMethod<AnyTuple>) =>
      method.is(other);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._decorateFunctionMeta(method as unknown as MetaDecoration, decorated as unknown as MetaDecoration) as unknown as SubmittableExtrinsicFunction<ApiType>;
  }

  protected _decorateStorage<ApiType extends ApiTypes> ({ query, registry }: DecoratedMeta, decorateMethod: DecorateMethod<ApiType>, blockHash?: Uint8Array): QueryableStorage<ApiType> {
    const result = {} as QueryableStorage<ApiType>;

    const lazySection = (section: string) =>
      lazyMethods({}, Object.keys(query[section]), (method: string) =>
        blockHash
          ? this._decorateStorageEntryAt(registry, query[section][method], decorateMethod, blockHash)
          : this._decorateStorageEntry(query[section][method], decorateMethod)
      );

    const sections = Object.keys(query);

    for (let i = 0; i < sections.length; i++) {
      lazyMethod(result, sections[i], lazySection);
    }

    return result;
  }

  private _decorateStorageEntry<ApiType extends ApiTypes> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): QueryableStorageEntry<ApiType> {
    const getArgs = (args: unknown[], registry?: Registry) =>
      extractStorageArgs(registry || this.#registry, creator, args);

    const getQueryAt = (blockHash: Hash | Uint8Array | string): Observable<AugmentedQuery<'rxjs', GenericStorageEntryFunction, AnyTuple>> =>
      from(this.at(blockHash)).pipe(
        map((api) => getAtQueryFn(api, creator)));

    // Disable this where it occurs for each field we are decorating
    /* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */

    const decorated: AugmentedQuery<'rxjs', GenericStorageEntryFunction, AnyTuple> & MetaDecoration = this._decorateStorageCall(creator, decorateMethod);

    decorated.creator = creator;

    decorated.at = decorateMethod((blockHash: Hash, ...args: unknown[]): Observable<Codec> =>
      getQueryAt(blockHash).pipe(
        switchMap((q) => q(...args))));

    decorated.hash = decorateMethod((...args: unknown[]): Observable<Hash> =>
      this._rpcCore.state.getStorageHash(getArgs(args)));

    decorated.is = <A extends AnyTuple> (key: IStorageKey<AnyTuple>): key is IStorageKey<A> =>
      key.section === creator.section &&
      key.method === creator.method;

    decorated.key = (...args: unknown[]): string =>
      u8aToHex(compactStripLength(creator(...args))[1]);

    decorated.keyPrefix = (...args: unknown[]): string =>
      u8aToHex(creator.keyPrefix(...args));

    decorated.range = decorateMethod((range: [Hash, Hash?], ...args: unknown[]): Observable<[Hash, Codec][]> =>
      this._decorateStorageRange(decorated, args, range));

    decorated.size = decorateMethod((...args: unknown[]): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getArgs(args)));

    decorated.sizeAt = decorateMethod((blockHash: Hash | Uint8Array | string, ...args: unknown[]): Observable<u64> =>
      getQueryAt(blockHash).pipe(
        switchMap((q) =>
          this._rpcCore.state.getStorageSize(getArgs(args, q.creator.meta.registry), blockHash))));

    // .keys() & .entries() only available on map types
    if (creator.iterKey && creator.meta.type.isMap) {
      decorated.entries = decorateMethod(
        memo(this.#instanceId, (...args: unknown[]): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntries(creator, null, args)));

      decorated.entriesAt = decorateMethod(
        memo(this.#instanceId, (blockHash: Hash | Uint8Array | string, ...args: unknown[]): Observable<[StorageKey, Codec][]> =>
          getQueryAt(blockHash).pipe(
            switchMap((q) => this._retrieveMapEntries(q.creator, blockHash, args)))));

      decorated.entriesPaged = decorateMethod(
        memo(this.#instanceId, (opts: PaginationOptions): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntriesPaged(creator, undefined, opts)));

      decorated.keys = decorateMethod(
        memo(this.#instanceId, (...args: unknown[]): Observable<StorageKey[]> =>
          this._retrieveMapKeys(creator, null, args)));

      decorated.keysAt = decorateMethod(
        memo(this.#instanceId, (blockHash: Hash | Uint8Array | string, ...args: unknown[]): Observable<StorageKey[]> =>
          getQueryAt(blockHash).pipe(
            switchMap((q) => this._retrieveMapKeys(q.creator, blockHash, args)))));

      decorated.keysPaged = decorateMethod(
        memo(this.#instanceId, (opts: PaginationOptions): Observable<StorageKey[]> =>
          this._retrieveMapKeysPaged(creator, undefined, opts)));
    }

    if (this.supportMulti && creator.meta.type.isMap) {
      // When using double map storage function, user need to pass double map key as an array
      decorated.multi = decorateMethod((args: unknown[]): Observable<Codec[]> =>
        creator.meta.type.asMap.hashers.length === 1
          ? this._retrieveMulti(args.map((a) => [creator, [a]]))
          : this._retrieveMulti(args.map((a) => [creator, a as unknown[]]))
      );
    }

    /* eslint-enable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */

    return this._decorateFunctionMeta(creator as unknown as MetaDecoration, decorated) as unknown as QueryableStorageEntry<ApiType>;
  }

  private _decorateStorageEntryAt<ApiType extends ApiTypes> (registry: Registry, creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>, blockHash: Uint8Array): QueryableStorageEntryAt<ApiType> {
    const getArgs = (args: unknown[]): unknown[] => extractStorageArgs(registry, creator, args);

    // Disable this where it occurs for each field we are decorating
    /* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */

    const decorated: AugmentedQuery<'rxjs', GenericStorageEntryFunction, AnyTuple> & MetaDecoration = decorateMethod((...args: unknown[]): Observable<Codec> =>
      this._rpcCore.state.getStorage(getArgs(args), blockHash));

    decorated.creator = creator;

    decorated.hash = decorateMethod((...args: unknown[]): Observable<Hash> =>
      this._rpcCore.state.getStorageHash(getArgs(args), blockHash));

    decorated.is = <A extends AnyTuple> (key: IStorageKey<AnyTuple>): key is IStorageKey<A> =>
      key.section === creator.section &&
      key.method === creator.method;

    decorated.key = (...args: unknown[]): string =>
      u8aToHex(compactStripLength(creator(
        creator.meta.type.isPlain
          ? undefined
          : args
      ))[1]);

    decorated.keyPrefix = (...keys: unknown[]): string =>
      u8aToHex(creator.keyPrefix(...keys));

    decorated.size = decorateMethod((...args: unknown[]): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getArgs(args), blockHash));

    // .keys() & .entries() only available on map types
    if (creator.iterKey && creator.meta.type.isMap) {
      decorated.entries = decorateMethod(
        memo(this.#instanceId, (...args: unknown[]): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntries(creator, blockHash, args)));

      decorated.entriesPaged = decorateMethod(
        memo(this.#instanceId, (opts: PaginationOptions): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntriesPaged(creator, blockHash, opts)));

      decorated.keys = decorateMethod(
        memo(this.#instanceId, (...args: unknown[]): Observable<StorageKey[]> =>
          this._retrieveMapKeys(creator, blockHash, args)));

      decorated.keysPaged = decorateMethod(
        memo(this.#instanceId, (opts: PaginationOptions): Observable<StorageKey[]> =>
          this._retrieveMapKeysPaged(creator, blockHash, opts)));
    }

    if (this.supportMulti && creator.meta.type.isMap) {
      // When using double map storage function, user need to pass double map key as an array
      decorated.multi = decorateMethod((args: unknown[]): Observable<Codec[]> =>
        creator.meta.type.asMap.hashers.length === 1
          ? this._retrieveMulti(args.map((a) => [creator, [a]]), blockHash)
          : this._retrieveMulti(args.map((a) => [creator, a as unknown[]]), blockHash)
      );
    }

    /* eslint-enable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */

    return this._decorateFunctionMeta(creator as unknown as MetaDecoration, decorated) as unknown as QueryableStorageEntry<ApiType>;
  }

  // Decorate the base storage call. In the case or rxjs or promise-without-callback (await)
  // we make a subscription, alternatively we push this through a single-shot query
  private _decorateStorageCall<ApiType extends ApiTypes> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): ReturnType<DecorateMethod<ApiType>> {
    return decorateMethod((...args: unknown[]): Observable<Codec> => {
      return this.hasSubscriptions
        ? this._rpcCore.state.subscribeStorage<[Codec]>([extractStorageArgs(this.#registry, creator, args)]).pipe(
          map(([data]) => data) // extract first/only result from list
        )
        : this._rpcCore.state.getStorage(extractStorageArgs(this.#registry, creator, args));
    }, {
      methodName: creator.method,
      overrideNoSub: (...args: unknown[]) => this._rpcCore.state.getStorage(extractStorageArgs(this.#registry, creator, args))
    });
  }

  private _decorateStorageRange<ApiType extends ApiTypes> (decorated: QueryableStorageEntry<ApiType>, args: unknown[], range: [Hash, Hash?]): Observable<[Hash, Codec][]> {
    const outputType = unwrapStorageType(this.#registry, decorated.creator.meta.type, decorated.creator.meta.modifier.isOptional);

    return this._rpcCore.state
      .queryStorage<[Option<Raw>]>([decorated.key(...args)], ...range)
      .pipe(map((result: [Hash, [Option<Raw>]][]): [Hash, Codec][] =>
        result.map(([blockHash, [value]]) => [
          blockHash,
          this.createType<Codec>(outputType, value.isSome ? value.unwrap().toHex() : undefined)
        ])
      ));
  }

  // retrieve a set of values for a specific set of keys - here we chunk the keys into PAGE_SIZE sizes
  private _retrieveMulti (keys: [StorageEntry, unknown[]][], blockHash?: Uint8Array): Observable<Codec[]> {
    if (!keys.length) {
      return of([]);
    }

    const queryCall = this.hasSubscriptions && !blockHash
      ? this._rpcCore.state.subscribeStorage
      : this._rpcCore.state.queryStorageAt;

    return combineLatest(
      arrayChunk(keys, PAGE_SIZE_V).map((k) =>
        blockHash
          ? queryCall(k, blockHash)
          : queryCall(k)
      )
    ).pipe(
      map(arrayFlatten)
    );
  }

  private _retrieveMapKeys ({ iterKey, meta, method, section }: StorageEntry, at: Hash | Uint8Array | string | null, args: unknown[]): Observable<StorageKey[]> {
    assert(iterKey && meta.type.isMap, 'keys can only be retrieved on maps');

    const headKey = iterKey(...args).toHex();
    const startSubject = new BehaviorSubject<string>(headKey);
    const queryCall = at
      ? (startKey: string) => this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE_K, startKey, at)
      : (startKey: string) => this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE_K, startKey);
    const setMeta = (key: StorageKey) => key.setMeta(meta, section, method);

    return startSubject.pipe(
      switchMap(queryCall),
      map((keys) => keys.map(setMeta)),
      tap((keys): void => {
        setTimeout((): void => {
          keys.length === PAGE_SIZE_K
            ? startSubject.next(keys[PAGE_SIZE_K - 1].toHex())
            : startSubject.complete();
        }, 0);
      }),
      toArray(), // toArray since we want to startSubject to be completed
      map(arrayFlatten)
    );
  }

  private _retrieveMapKeysPaged ({ iterKey, meta, method, section }: StorageEntry, at: Hash | Uint8Array | string | undefined, opts: PaginationOptions): Observable<StorageKey[]> {
    assert(iterKey && meta.type.isMap, 'keys can only be retrieved on maps');

    const headKey = iterKey(...opts.args).toHex();
    const setMeta = (key: StorageKey) => key.setMeta(meta, section, method);

    return this._rpcCore.state.getKeysPaged(headKey, opts.pageSize, opts.startKey || headKey, at).pipe(
      map((keys) => keys.map(setMeta))
    );
  }

  private _retrieveMapEntries (entry: StorageEntry, at: Hash | Uint8Array | string | null, args: unknown[]): Observable<[StorageKey, Codec][]> {
    const query = at
      ? (keyset: StorageKey[]) => this._rpcCore.state.queryStorageAt(keyset, at)
      : (keyset: StorageKey[]) => this._rpcCore.state.queryStorageAt(keyset);

    return this._retrieveMapKeys(entry, at, args).pipe(
      switchMap((keys) =>
        keys.length
          ? combineLatest(arrayChunk(keys, PAGE_SIZE_V).map(query)).pipe(
            map((valsArr) =>
              arrayFlatten(valsArr).map((value, index): [StorageKey, Codec] => [keys[index], value])
            )
          )
          : of([])
      )
    );
  }

  private _retrieveMapEntriesPaged (entry: StorageEntry, at: Hash | Uint8Array | string | undefined, opts: PaginationOptions): Observable<[StorageKey, Codec][]> {
    return this._retrieveMapKeysPaged(entry, at, opts).pipe(
      switchMap((keys) =>
        keys.length
          ? this._rpcCore.state.queryStorageAt(keys, at).pipe(
            map((valsArr) =>
              valsArr.map((value, index): [StorageKey, Codec] => [keys[index], value])
            )
          )
          : of([])
      )
    );
  }

  protected _decorateDeriveRx (decorateMethod: DecorateMethod<ApiType>): AllDerives<'rxjs'> {
    const specName = this._runtimeVersion?.specName.toString();

    // Pull in derive from api-derive
    const available = getAvailableDerives(this.#instanceId, this._rx, objectSpread<DeriveCustom>({}, this._options.derives, this._options.typesBundle?.spec?.[specName || '']?.derives));

    return decorateDeriveSections<'rxjs'>(decorateMethod, available);
  }

  protected _decorateDerive (decorateMethod: DecorateMethod<ApiType>): AllDerives<ApiType> {
    return decorateDeriveSections<ApiType>(decorateMethod, this._rx.derive);
  }

  /**
   * Put the `this.onCall` function of ApiRx here, because it is needed by
   * `api._rx`.
   */
  protected _rxDecorateMethod = <Method extends AnyFunction>(method: Method): Method => {
    return method;
  };
}
