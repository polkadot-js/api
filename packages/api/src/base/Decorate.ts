// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DecoratedMeta } from '@polkadot/metadata/decorate/types';
import type { RpcInterface } from '@polkadot/rpc-core/types';
import type { Option, Raw, StorageKey, Text, u64 } from '@polkadot/types';
import type { Call, Hash, RpcMethods, RuntimeVersion } from '@polkadot/types/interfaces';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { AnyFunction, AnyTuple, CallFunction, Codec, CodecArg as Arg, DefinitionRpc, DefinitionRpcSub, IMethod, InterfaceTypes, IStorageKey, Registry, RegistryTypes } from '@polkadot/types/types';
import type { SubmittableExtrinsic } from '../submittable/types';
import type { ApiInterfaceRx, ApiOptions, ApiTypes, DecoratedErrors, DecoratedEvents, DecoratedRpc, DecoratedRpcSection, DecorateMethod, PaginationOptions, QueryableConsts, QueryableModuleStorage, QueryableStorage, QueryableStorageEntry, QueryableStorageMulti, QueryableStorageMultiArg, SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics } from '../types';

import BN from 'bn.js';

import { decorateDerive, ExactDerive } from '@polkadot/api-derive';
import { memo } from '@polkadot/api-derive/util';
import { expandMetadata, Metadata } from '@polkadot/metadata';
import { RpcCore } from '@polkadot/rpc-core';
import { WsProvider } from '@polkadot/rpc-provider';
import { TypeRegistry } from '@polkadot/types/create';
import { DEFAULT_VERSION as EXTRINSIC_DEFAULT_VERSION } from '@polkadot/types/extrinsic/constants';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { arrayChunk, arrayFlatten, assert, compactStripLength, logger, u8aToHex } from '@polkadot/util';
import { BehaviorSubject, combineLatest, Observable, of } from '@polkadot/x-rxjs';
import { map, switchMap, tap, toArray } from '@polkadot/x-rxjs/operators';

import { createSubmittable } from '../submittable';
import { augmentObject } from '../util/augmentObject';
import { decorateSections, DeriveAllSections } from '../util/decorate';
import { extractStorageArgs } from '../util/validate';
import { Events } from './Events';

interface MetaDecoration {
  callIndex?: Uint8Array;
  meta: Record<string, unknown>;
  method: string;
  section: string;
  toJSON: () => any;
}

// the max amount of keys/values that we will retrieve at once
const PAGE_SIZE = 384;

const l = logger('api/init');

let instanceCounter = 0;

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

  protected _extrinsicType: number = EXTRINSIC_DEFAULT_VERSION;

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

  /**
   * @description Return the current used registry
   */
  public get registry (): Registry {
    return this.#registry;
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createType <K extends keyof InterfaceTypes> (type: K, ...params: unknown[]): InterfaceTypes[K] {
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

  public injectMetadata (metadata: Metadata, fromEmpty?: boolean, registry?: Registry): void {
    const decoratedMeta = expandMetadata(registry || this.#registry, metadata);

    if (fromEmpty || !this._extrinsics) {
      this._extrinsics = this._decorateExtrinsics(decoratedMeta, this._decorateMethod);
      this._rx.tx = this._decorateExtrinsics(decoratedMeta, this._rxDecorateMethod);
    } else {
      augmentObject('tx', this._decorateExtrinsics(decoratedMeta, this._decorateMethod), this._extrinsics, false);
      augmentObject(null, this._decorateExtrinsics(decoratedMeta, this._rxDecorateMethod), this._rx.tx, false);
    }

    // this API
    augmentObject('query', this._decorateStorage(decoratedMeta, this._decorateMethod), this._query, fromEmpty);
    augmentObject('consts', decoratedMeta.consts, this._consts, fromEmpty);
    augmentObject('errors', decoratedMeta.errors, this._errors, fromEmpty);
    augmentObject('events', decoratedMeta.events, this._events, fromEmpty);

    // rx
    augmentObject(null, this._decorateStorage(decoratedMeta, this._rxDecorateMethod), this._rx.query, fromEmpty);
    augmentObject(null, decoratedMeta.consts, this._rx.consts, fromEmpty);
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
  protected _filterRpc (rpcMethods: RpcMethods, additional: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>): void {
    const methods = rpcMethods.methods.map((t) => t.toString());

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
    const allKeys = allKnown.reduce((allKeys: string[], [, { alias, endpoint, method, pubsub, section }]): string[] => {
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

      return allKeys;
    }, []);
    const unknown = exposed.filter((k) => !allKeys.includes(k));
    const deletion = allKnown.filter(([k]) => hasResults && !exposed.includes(k) && k !== 'rpc_methods');

    if (unknown.length) {
      l.warn(`RPC methods not decorated: ${unknown.join(', ')}`);
    }

    // loop through all entries we have (populated in decorate) and filter as required
    // only remove when we have results and method missing, or with no results if optional
    deletion.forEach(([, { method, section }]): void => {
      delete (this._rpc as Record<string, Record<string, unknown>>)[section][method];
      delete (this._rx.rpc as Record<string, Record<string, unknown>>)[section][method];
    });
  }

  protected _decorateRpc<ApiType extends ApiTypes> (rpc: RpcCore & RpcInterface, decorateMethod: DecorateMethod<ApiType>, input: Partial<DecoratedRpc<ApiType, RpcInterface>> = {}): DecoratedRpc<ApiType, RpcInterface> {
    return rpc.sections.reduce((out, _sectionName): DecoratedRpc<ApiType, RpcInterface> => {
      const sectionName = _sectionName as keyof DecoratedRpc<ApiType, RpcInterface>;

      if (!(out as Record<string, unknown>)[sectionName]) {
        // out and section here are horrors to get right from a typing perspective :(
        (out as Record<string, unknown>)[sectionName] = Object.entries(rpc[sectionName]).reduce((section, [methodName, method]): DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]> => {
          //  skip subscriptions where we have a non-subscribe interface
          if (this.hasSubscriptions || !(methodName.startsWith('subscribe') || methodName.startsWith('unsubscribe'))) {
            (section as Record<string, unknown>)[methodName] = decorateMethod(method, { methodName }) as unknown;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (section as Record<string, { json: unknown }>)[methodName].json = decorateMethod(method.json, { methodName }) as unknown;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (section as Record<string, { raw: unknown }>)[methodName].raw = decorateMethod(method.raw, { methodName }) as unknown;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (section as Record<string, { meta: unknown }>)[methodName].meta = method.meta;
          }

          return section;
        }, {} as DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]>);
      }

      return out;
    }, input as DecoratedRpc<ApiType, RpcInterface>);
  }

  // only be called if supportMulti is true
  protected _decorateMulti<ApiType extends ApiTypes> (decorateMethod: DecorateMethod<ApiType>): QueryableStorageMulti<ApiType> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return decorateMethod((calls: QueryableStorageMultiArg<ApiType>[]): Observable<Codec[]> =>
      (this.hasSubscriptions
        ? this._rpcCore.state.subscribeStorage
        : this._rpcCore.state.queryStorageAt)(
        calls.map((arg: QueryableStorageMultiArg<ApiType>) =>
          Array.isArray(arg)
            ? [arg[0].creator, ...arg.slice(1)]
            : [arg.creator])));
  }

  protected _decorateExtrinsics<ApiType extends ApiTypes> ({ tx }: DecoratedMeta, decorateMethod: DecorateMethod<ApiType>): SubmittableExtrinsics<ApiType> {
    const creator = createSubmittable(this._type, this._rx, decorateMethod);

    return Object.entries(tx).reduce((out, [name, section]): SubmittableExtrinsics<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): SubmittableModuleExtrinsics<ApiType> => {
        out[name] = this._decorateExtrinsicEntry(method, creator);

        return out;
      }, {} as SubmittableModuleExtrinsics<ApiType>);

      return out;
    }, creator as SubmittableExtrinsics<ApiType>);
  }

  private _decorateExtrinsicEntry<ApiType extends ApiTypes> (method: CallFunction, creator: (value: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>): SubmittableExtrinsicFunction<ApiType> {
    const decorated = (...params: Arg[]): SubmittableExtrinsic<ApiType> =>
      creator(method(...params));

    // pass through the `.is`
    decorated.is = (other: IMethod<AnyTuple>) =>
      method.is(other);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._decorateFunctionMeta(method as any, decorated as any) as unknown as SubmittableExtrinsicFunction<ApiType>;
  }

  protected _decorateStorage<ApiType extends ApiTypes> ({ query }: DecoratedMeta, decorateMethod: DecorateMethod<ApiType>): QueryableStorage<ApiType> {
    return Object.entries(query).reduce((out, [name, section]): QueryableStorage<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): QueryableModuleStorage<ApiType> => {
        out[name] = this._decorateStorageEntry(method, decorateMethod);

        return out;
      }, {} as QueryableModuleStorage<ApiType>);

      return out;
    }, {} as QueryableStorage<ApiType>);
  }

  private _decorateStorageEntry<ApiType extends ApiTypes> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): QueryableStorageEntry<ApiType> {
    // get the storage arguments, with DoubleMap as an array entry, otherwise spread
    const getArgs = (...args: unknown[]): unknown[] => extractStorageArgs(creator, args);

    // Disable this where it occurs for each field we are decorating
    /* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */

    const decorated = this._decorateStorageCall(creator, decorateMethod);

    decorated.creator = creator;

    decorated.at = decorateMethod((hash: Hash, arg1?: Arg, arg2?: Arg): Observable<Codec> =>
      this._rpcCore.state.getStorage(getArgs(arg1, arg2), hash));

    decorated.hash = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<Hash> =>
      this._rpcCore.state.getStorageHash(getArgs(arg1, arg2)));

    decorated.is = <A extends AnyTuple> (key: IStorageKey<AnyTuple>): key is IStorageKey<A> =>
      key.section === creator.section && key.method === creator.method;

    decorated.key = (...args: Arg[]): string =>
      u8aToHex(compactStripLength(creator(
        creator.meta.type.isPlain
          ? undefined
          : creator.meta.type.isMap
            ? args[0]
            : creator.meta.type.isDoubleMap
              ? [args[0], args[1]]
              : args
      ))[1]);

    decorated.keyPrefix = (key1?: Arg): string =>
      u8aToHex(creator.keyPrefix(key1));

    decorated.range = decorateMethod((range: [Hash, Hash?], arg1?: Arg, arg2?: Arg): Observable<[Hash, Codec][]> =>
      this._decorateStorageRange(decorated, [arg1, arg2], range));

    decorated.size = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getArgs(arg1, arg2)));

    decorated.sizeAt = decorateMethod((hash: Hash | Uint8Array | string, arg1?: Arg, arg2?: Arg): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getArgs(arg1, arg2), hash));

    // FIXME NMap support
    // .keys() & .entries() only available on map types
    if (creator.iterKey && (creator.meta.type.isMap || creator.meta.type.isDoubleMap)) {
      decorated.entries = decorateMethod(
        memo(this.#instanceId, (doubleMapArg?: Arg): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntries(creator, null, doubleMapArg)));

      decorated.entriesAt = decorateMethod(
        memo(this.#instanceId, (hash: Hash | Uint8Array | string, doubleMapArg?: Arg): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntries(creator, hash, doubleMapArg)));

      decorated.entriesPaged = decorateMethod(
        memo(this.#instanceId, (opts: PaginationOptions): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntriesPaged(creator, opts)));

      decorated.keys = decorateMethod(
        memo(this.#instanceId, (doubleMapArg?: Arg): Observable<StorageKey[]> =>
          this._retrieveMapKeys(creator, null, doubleMapArg)));

      decorated.keysAt = decorateMethod(
        memo(this.#instanceId, (hash: Hash | Uint8Array | string, doubleMapArg?: Arg): Observable<StorageKey[]> =>
          this._retrieveMapKeys(creator, hash, doubleMapArg)));

      decorated.keysPaged = decorateMethod(
        memo(this.#instanceId, (opts: PaginationOptions): Observable<StorageKey[]> =>
          this._retrieveMapKeysPaged(creator, opts)));
    }

    if (this.supportMulti) {
      // When using double map storage function, user need to pass double map key as an array
      decorated.multi = decorateMethod((args: (Arg | Arg[])[]): Observable<Codec[]> =>
        this._retrieveMulti(args.map((arg) => [creator, arg])));
    }

    /* eslint-enable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */

    return this._decorateFunctionMeta(creator as any, decorated) as unknown as QueryableStorageEntry<ApiType>;
  }

  // Decorate the base storage call. In the case or rxjs or promise-without-callback (await)
  // we make a subscription, alternatively we push this through a single-shot query
  private _decorateStorageCall<ApiType extends ApiTypes> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): ReturnType<DecorateMethod<ApiType>> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return decorateMethod((...args: unknown[]): Observable<Codec> => {
      return this.hasSubscriptions
        ? this._rpcCore.state.subscribeStorage<[Codec]>([extractStorageArgs(creator, args)]).pipe(
          map(([data]) => data) // extract first/only result from list
        )
        : this._rpcCore.state.getStorage(extractStorageArgs(creator, args));
    }, {
      methodName: creator.method,
      overrideNoSub: (...args: unknown[]) => this._rpcCore.state.getStorage(extractStorageArgs(creator, args))
    });
  }

  private _decorateStorageRange<ApiType extends ApiTypes> (decorated: QueryableStorageEntry<ApiType>, args: [Arg?, Arg?], range: [Hash, Hash?]): Observable<[Hash, Codec][]> {
    const outputType = unwrapStorageType(decorated.creator.meta.type, decorated.creator.meta.modifier.isOptional);

    return this._rpcCore.state
      .queryStorage<[Option<Raw>]>([decorated.key(...args)], ...range)
      .pipe(map((result: [Hash, [Option<Raw>]][]): [Hash, Codec][] =>
        result.map(([blockHash, [value]]): [Hash, Codec] => [
          blockHash,
          this.createType(outputType, value.isSome ? value.unwrap().toHex() : undefined)
        ])
      ));
  }

  // retrieve a set of values for a specific set of keys - here we chunk the keys into PAGE_SIZE sizes
  private _retrieveMulti (keys: [StorageEntry, Arg | Arg[]][]): Observable<Codec[]> {
    if (!keys.length) {
      return of([]);
    }

    return combineLatest(
      arrayChunk(keys, PAGE_SIZE).map((keys) =>
        (this.hasSubscriptions
          ? this._rpcCore.state.subscribeStorage
          : this._rpcCore.state.queryStorageAt
        )(keys)
      )
    ).pipe(
      map((valsArr): Codec[] => arrayFlatten(valsArr))
    );
  }

  private _retrieveMapKeys ({ iterKey, meta, method, section }: StorageEntry, at: Hash | Uint8Array | string | null, arg?: Arg): Observable<StorageKey[]> {
    assert(iterKey && (meta.type.isMap || meta.type.isDoubleMap), 'keys can only be retrieved on maps, linked maps and double maps');

    const headKey = iterKey(arg).toHex();
    const startSubject = new BehaviorSubject<string>(headKey);
    const query = at
      ? (startKey: string) => this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE, startKey, at)
      : (startKey: string) => this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE, startKey);

    return startSubject.pipe(
      switchMap((startKey) =>
        query(startKey).pipe(
          map((keys) => keys.map((key) => key.setMeta(meta, section, method)))
        )
      ),
      tap((keys): void => {
        setTimeout((): void => {
          keys.length === PAGE_SIZE
            ? startSubject.next(keys[PAGE_SIZE - 1].toHex())
            : startSubject.complete();
        }, 0);
      }),
      toArray(), // toArray since we want to startSubject to be completed
      map((keysArr: StorageKey[][]) => arrayFlatten(keysArr))
    );
  }

  private _retrieveMapKeysPaged ({ iterKey, meta, method, section }: StorageEntry, opts: PaginationOptions): Observable<StorageKey[]> {
    assert(iterKey && (meta.type.isMap || meta.type.isDoubleMap), 'keys can only be retrieved on maps, linked maps and double maps');

    const headKey = iterKey(opts.arg).toHex();

    return this._rpcCore.state.getKeysPaged(headKey, opts.pageSize, opts.startKey || headKey).pipe(
      map((keys) => keys.map((key) => key.setMeta(meta, section, method)))
    );
  }

  private _retrieveMapEntries (entry: StorageEntry, at: Hash | Uint8Array | string | null, arg?: Arg): Observable<[StorageKey, Codec][]> {
    const query = at
      ? (keyset: StorageKey[]) => this._rpcCore.state.queryStorageAt(keyset, at)
      : (keyset: StorageKey[]) => this._rpcCore.state.queryStorageAt(keyset);

    return this._retrieveMapKeys(entry, at, arg).pipe(
      switchMap((keys) =>
        keys.length
          ? combineLatest(arrayChunk(keys, PAGE_SIZE).map(query)).pipe(
            map((valsArr) =>
              arrayFlatten(valsArr).map((value, index): [StorageKey, Codec] => [keys[index], value])
            )
          )
          : of([])
      )
    );
  }

  private _retrieveMapEntriesPaged (entry: StorageEntry, opts: PaginationOptions): Observable<[StorageKey, Codec][]> {
    return this._retrieveMapKeysPaged(entry, opts).pipe(
      switchMap((keys) =>
        keys.length
          ? this._rpcCore.state.queryStorageAt(keys).pipe(
            map((valsArr) =>
              valsArr.map((value, index): [StorageKey, Codec] => [keys[index], value])
            )
          )
          : of([])
      )
    );
  }

  protected _decorateDeriveRx (decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<'rxjs', ExactDerive> {
    const specName = this._runtimeVersion?.specName.toString();
    const derives = {
      ...this._options.derives,
      ...(this._options.typesBundle?.spec?.[specName ?? '']?.derives || {})
    };

    // Pull in derive from api-derive
    const derive = decorateDerive(this.#instanceId, this._rx, derives);

    return decorateSections<'rxjs', ExactDerive>(derive, decorateMethod);
  }

  protected _decorateDerive (decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<ApiType, ExactDerive> {
    return decorateSections<ApiType, ExactDerive>(this._rx.derive, decorateMethod);
  }

  /**
   * Put the `this.onCall` function of ApiRx here, because it is needed by
   * `api._rx`.
   */
  protected _rxDecorateMethod = <Method extends AnyFunction>(method: Method): Method => {
    return method;
  }
}
