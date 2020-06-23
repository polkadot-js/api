// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constants, Storage } from '@polkadot/metadata/Decorated/types';
import { RpcInterface } from '@polkadot/rpc-core/types';
import { Call, Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { AnyFunction, CallFunction, Codec, CodecArg as Arg, ITuple, InterfaceTypes, ModulesWithCalls, Registry, RegistryTypes } from '@polkadot/types/types';
import { SubmittableExtrinsic } from '../submittable/types';
import { ApiInterfaceRx, ApiOptions, ApiTypes, DecorateMethod, DecoratedRpc, DecoratedRpcSection, PaginationOptions, QueryableModuleStorage, QueryableStorage, QueryableStorageEntry, QueryableStorageMulti, QueryableStorageMultiArg, SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics } from '../types';

import BN from 'bn.js';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, tap, toArray } from 'rxjs/operators';
import decorateDerive, { ExactDerive } from '@polkadot/api-derive';
import { memo } from '@polkadot/api-derive/util';
import DecoratedMeta from '@polkadot/metadata/Decorated';
import RpcCore from '@polkadot/rpc-core';
import { WsProvider } from '@polkadot/rpc-provider';
import { Metadata, Null, Option, Raw, Text, TypeRegistry, u64 } from '@polkadot/types';
import Linkage, { LinkageResult } from '@polkadot/types/codec/Linkage';
import { DEFAULT_VERSION as EXTRINSIC_DEFAULT_VERSION } from '@polkadot/types/extrinsic/constants';
import StorageKey, { StorageEntry, unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { assert, compactStripLength, logger, u8aToHex } from '@polkadot/util';

import { createSubmittable } from '../submittable';
import augmentObject from '../util/augmentObject';
import { decorateSections, DeriveAllSections } from '../util/decorate';
import { extractStorageArgs } from '../util/validate';
import Events from './Events';

interface MetaDecoration {
  callIndex?: Uint8Array;
  meta: Record<string, unknown>;
  method: string;
  section: string;
  toJSON: () => any;
}

type LinkageData = ITuple<[Codec, Linkage<Codec>]>;

const PAGE_SIZE_KEYS = 256;
const PAGE_SIZE_VALS = PAGE_SIZE_KEYS;

const l = logger('api/init');

export default abstract class Decorate<ApiType extends ApiTypes> extends Events {
  public readonly registry: Registry;

  // HACK Use BN import so decorateDerive works... yes, wtf.
  protected __phantom = new BN(0);

  protected _consts: Constants = {} as Constants;

  protected _derive?: ReturnType<Decorate<ApiType>['_decorateDerive']>;

  protected _extrinsics?: SubmittableExtrinsics<ApiType>;

  protected _extrinsicType: number = EXTRINSIC_DEFAULT_VERSION;

  protected _genesisHash?: Hash;

  protected _isConnected: BehaviorSubject<boolean>;

  protected _isReady = false;

  protected readonly _options: ApiOptions;

  protected _query: QueryableStorage<ApiType> = {} as QueryableStorage<ApiType>;

  protected _queryMulti?: QueryableStorageMulti<ApiType>;

  protected _rpc?: DecoratedRpc<ApiType, RpcInterface>;

  protected _rpcCore: RpcCore;

  protected _runtimeChain?: Text;

  protected _runtimeMetadata?: Metadata;

  protected _runtimeVersion?: RuntimeVersion;

  protected _rx: ApiInterfaceRx = {
    consts: {} as Constants,
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

    this.registry = options.registry || new TypeRegistry();

    const thisProvider = options.source
      ? options.source._rpcCore.provider.clone()
      : (options.provider || new WsProvider());

    this._decorateMethod = decorateMethod;
    this._options = options;
    this._type = type;
    this._rpcCore = new RpcCore(this.registry, thisProvider, this._options.rpc);
    this._isConnected = new BehaviorSubject(this._rpcCore.provider.isConnected());
    this._rx.hasSubscriptions = this._rpcCore.provider.hasSubscriptions;
    this._rx.registry = this.registry;
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createType <K extends keyof InterfaceTypes> (type: K, ...params: unknown[]): InterfaceTypes[K] {
    return this.registry.createType(type, ...params);
  }

  /**
   * @description Register additional user-defined of chain-specific types in the type registry
   */
  public registerTypes (types?: RegistryTypes): void {
    types && this.registry.register(types);
  }

  /**
   * @returns `true` if the API operates with subscriptions
   */
  get hasSubscriptions (): boolean {
    return this._rpcCore.provider.hasSubscriptions;
  }

  public injectMetadata (metadata: Metadata, fromEmpty?: boolean): void {
    const decoratedMeta = new DecoratedMeta(this.registry, metadata);

    if (fromEmpty || !this._extrinsics) {
      this._extrinsics = this._decorateExtrinsics(decoratedMeta.tx, this._decorateMethod);
      this._rx.tx = this._decorateExtrinsics(decoratedMeta.tx, this._rxDecorateMethod);
    } else {
      augmentObject('tx', this._decorateExtrinsics(decoratedMeta.tx, this._decorateMethod), this._extrinsics, false);
      augmentObject('', this._decorateExtrinsics(decoratedMeta.tx, this._rxDecorateMethod), this._rx.tx, false);
    }

    // this API
    augmentObject('query', this._decorateStorage(decoratedMeta.query, this._decorateMethod), this._query, fromEmpty);
    augmentObject('consts', decoratedMeta.consts, this._consts, fromEmpty);

    // rx
    augmentObject('', this._decorateStorage(decoratedMeta.query, this._rxDecorateMethod), this._rx.query, fromEmpty);
    augmentObject('', decoratedMeta.consts, this._rx.consts, fromEmpty);
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
  protected async _filterRpc (): Promise<void> {
    let methods: string[];

    try {
      // we ignore the version (adjust as versions change, for now only "1")
      methods = (await this._rpcCore.rpc.methods().toPromise()).methods.map((t) => t.toString());
    } catch (error) {
      // the method is not there, we adjust accordingly
      methods = [];
    }

    this._filterRpcMethods(methods);
  }

  protected _filterRpcMethods (exposed: string[]): void {
    const hasResults = exposed.length !== 0;
    const allKnown = [...this._rpcCore.mapping.entries()];
    const allKeys = allKnown.reduce((allKeys: string[], [, { alias, method, pubsub, section }]): string[] => {
      allKeys.push(`${section}_${method}`);

      if (pubsub) {
        allKeys.push(`${section}_${pubsub[1]}`);
        allKeys.push(`${section}_${pubsub[2]}`);
      }

      if (alias) {
        allKeys.push(...alias);
      }

      return allKeys;
    }, []);
    const unknown = exposed.filter((key) => !allKeys.includes(key));

    if (unknown.length) {
      l.warn(`RPC methods not decorated: ${unknown.join(', ')}`);
    }

    // loop through all entries we have (populated in decorate) and filter as required
    // only remove when we have results and method missing, or with no results if optional
    allKnown
      .filter(([key]): boolean => hasResults
        ? !exposed.includes(key) && key !== 'rpc_methods' // rpc_methods doesn't appear, v1
        : key === 'rpc_methods' // we didn't find this one, remove
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .forEach(([_, { method, section }]): void => {
        delete (this._rpc as Record<string, Record<string, unknown>>)[section][method];
        delete (this._rpcCore as unknown as Record<string, Record<string, unknown>>)[section][method];
        delete (this._rx.rpc as Record<string, Record<string, unknown>>)[section][method];
      });
  }

  protected _decorateRpc<ApiType extends ApiTypes> (rpc: RpcCore, decorateMethod: DecorateMethod<ApiType>): DecoratedRpc<ApiType, RpcInterface> {
    return rpc.sections.reduce((out, _sectionName): DecoratedRpc<ApiType, RpcInterface> => {
      const sectionName = _sectionName as keyof DecoratedRpc<ApiType, RpcInterface>;

      // out and section here are horrors to get right from a typing perspective :(
      (out as Record<string, unknown>)[sectionName] = Object.entries(rpc[sectionName]).reduce((section, [methodName, method]): DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]> => {
        //  skip subscriptions where we have a non-subscribe interface
        if (this.hasSubscriptions || !(methodName.startsWith('subscribe') || methodName.startsWith('unsubscribe'))) {
          (section as Record<string, unknown>)[methodName] = decorateMethod(method, { methodName }) as unknown;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (section as Record<string, { raw: unknown }>)[methodName].raw = decorateMethod(method.raw, { methodName }) as unknown;
        }

        return section;
      }, {} as DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]>);

      return out;
    }, {} as DecoratedRpc<ApiType, RpcInterface>);
  }

  protected _decorateMulti<ApiType extends ApiTypes> (decorateMethod: DecorateMethod<ApiType>): QueryableStorageMulti<ApiType> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return decorateMethod((calls: QueryableStorageMultiArg<ApiType>[]): Observable<Codec[]> =>
      this._rpcCore.state.subscribeStorage(
        calls.map((arg: QueryableStorageMultiArg<ApiType>): [QueryableStorageEntry<ApiType>, ...Arg[]] =>
          // the input is a QueryableStorageEntry, convert to StorageEntry
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          Array.isArray(arg)
            ? [arg[0].creator, ...arg.slice(1)]
            : [arg.creator] as any)));
  }

  protected _decorateExtrinsics<ApiType extends ApiTypes> (extrinsics: ModulesWithCalls, decorateMethod: DecorateMethod<ApiType>): SubmittableExtrinsics<ApiType> {
    const creator = createSubmittable(this._type, this._rx, decorateMethod);

    return Object.entries(extrinsics).reduce((out, [name, section]): SubmittableExtrinsics<ApiType> => {
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._decorateFunctionMeta(method as any, decorated as any) as unknown as SubmittableExtrinsicFunction<ApiType>;
  }

  protected _decorateStorage<ApiType extends ApiTypes> (storage: Storage, decorateMethod: DecorateMethod<ApiType>): QueryableStorage<ApiType> {
    return Object.entries(storage).reduce((out, [name, section]): QueryableStorage<ApiType> => {
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

    // FIXME We probably want to be able to query the full list with non-subs as well
    const decorated = this.hasSubscriptions && creator.iterKey && creator.meta.type.isMap && creator.meta.type.asMap.linked.isTrue
      ? this._decorateStorageLinked(creator, decorateMethod)
      : this._decorateStorageCall(creator, decorateMethod);

    decorated.creator = creator;

    decorated.at = decorateMethod((hash: Hash, arg1?: Arg, arg2?: Arg): Observable<Codec> =>
      this._rpcCore.state.getStorage(getArgs(arg1, arg2), hash));

    decorated.hash = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<Hash> =>
      this._rpcCore.state.getStorageHash(getArgs(arg1, arg2)));

    decorated.key = (arg1?: Arg, arg2?: Arg): string =>
      u8aToHex(compactStripLength(creator(creator.meta.type.isDoubleMap ? [arg1, arg2] : arg1))[1]);

    decorated.keyPrefix = (key1?: Arg): string =>
      u8aToHex(creator.keyPrefix(key1));

    decorated.range = decorateMethod((range: [Hash, Hash?], arg1?: Arg, arg2?: Arg): Observable<[Hash, Codec][]> =>
      this._decorateStorageRange(decorated, [arg1, arg2], range));

    decorated.size = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getArgs(arg1, arg2)));

    // .keys() & .entries() only available on map types
    if (creator.iterKey && (creator.meta.type.isMap || creator.meta.type.isDoubleMap)) {
      decorated.entries = decorateMethod(
        memo((doubleMapArg?: Arg): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntries(creator, doubleMapArg)));

      decorated.entriesPaged = decorateMethod(
        memo((opts: PaginationOptions): Observable<[StorageKey, Codec][]> =>
          this._retrieveMapEntriesPaged(creator, opts)));

      decorated.keys = decorateMethod(
        memo((doubleMapArg?: Arg): Observable<StorageKey[]> =>
          this._retrieveMapKeys(creator, doubleMapArg)));

      decorated.keysPaged = decorateMethod(
        memo((opts: PaginationOptions): Observable<StorageKey[]> =>
          this._retrieveMapKeysPaged(creator, opts)));
    }

    // only support multi where subs are available
    if (this.hasSubscriptions) {
      // When using double map storage function, user need to pass double map key as an array
      decorated.multi = decorateMethod((args: (Arg | Arg[])[]): Observable<Codec[]> =>
        this._rpcCore.state.subscribeStorage(
          args.map((arg: Arg[] | Arg): [StorageEntry, Arg | Arg[]] => [creator, arg])));
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

  // This is deprecated/removed on substrate - we still have some live chains, eg. Edgeware needing it, so it
  // has not been dropped yet. Slated for removal in API 2.0
  private _decorateStorageLinked<ApiType extends ApiTypes> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): ReturnType<DecorateMethod<ApiType>> {
    const result = new Map<Codec, ITuple<[Codec, Linkage<Codec>]> | null>();
    let subject: BehaviorSubject<LinkageResult>;
    let head: Codec | null = null;
    const iterKey = creator.iterKey;

    assert(iterKey, 'iterKey field is missing');

    // retrieve a value based on the key, iterating if it has a next entry. Since
    // entries can be re-linked in the middle of a list, we subscribe here to make
    // sure we catch any updates, no matter the list position
    const getNext = (key: Codec): Observable<LinkageResult> =>
      this._rpcCore.state.getStorage<LinkageData | Option<LinkageData>>([creator, key]).pipe(
        switchMap((_data: LinkageData | Option<LinkageData>): Observable<LinkageResult> => {
          const data = creator.meta.modifier.isOptional
            ? (_data as Option<LinkageData>).unwrapOr(null)
            : _data as LinkageData;

          result.set(key, data);

          // iterate from this key to the linkages, constructing entries for all
          // those found and available
          if (data && data[1].next.isSome) {
            return getNext(data[1].next.unwrap());
          }

          const [keys, vals]: [Codec[], Codec[]] = [[], []];
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
            vals.push(item);

            nextKey = linkage.next?.unwrapOr(null);
          }

          const nextResult = vals.length
            ? new LinkageResult(this.registry, [keys[0].constructor as any, keys], [vals[0].constructor as any, vals])
            : new LinkageResult(this.registry, [Null, []], [Null, []]);

          // we set our result into a subject so we have a single observable for
          // which the value changes over time. Initially create, follow-up next
          if (subject) {
            subject.next(nextResult);
          } else {
            subject = new BehaviorSubject(nextResult);
          }

          return subject;
        }));

    // this handles the case where the head changes effectively, i.e. a new entry
    // appears at the top of the list, the new getNext gets kicked off
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return decorateMethod((...args: unknown[]): Observable<LinkageResult | [Codec, Linkage<Codec>]> =>
      args.length
        ? this._rpcCore.state
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          .subscribeStorage<[[Codec, Linkage<Codec>]]>([[creator, ...args]])
          .pipe(map(([data]) => data))
        : this._rpcCore.state
          .subscribeStorage<[LinkageResult]>([iterKey()])
          .pipe(switchMap(([key]) => getNext(head = key)))
    );
  }

  private _retrieveMapKeys ({ iterKey, meta }: StorageEntry, arg?: Arg): Observable<StorageKey[]> {
    assert(iterKey && (meta.type.isMap || meta.type.isDoubleMap), 'keys can only be retrieved on maps, linked maps and double maps');

    const headKey = iterKey(arg).toHex();
    const startSubject = new BehaviorSubject<string>(headKey);

    return startSubject.pipe(
      switchMap((startKey) =>
        this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE_KEYS, startKey).pipe(
          map((keys) => keys.map((key) => key.setMeta(meta)))
        )
      ),
      tap((keys): void => {
        keys.length === PAGE_SIZE_KEYS
          ? startSubject.next(keys[PAGE_SIZE_KEYS - 1].toHex())
          : startSubject.complete();
      }),
      toArray(), // toArray since we want to startSubject to be completed
      map((keysArr: StorageKey[][]) => keysArr.reduce((result: StorageKey[], keys) => result.concat(keys), []))
    );
  }

  private _retrieveMapKeysPaged ({ iterKey, meta }: StorageEntry, opts: PaginationOptions): Observable<StorageKey[]> {
    assert(iterKey && (meta.type.isMap || meta.type.isDoubleMap), 'keys can only be retrieved on maps, linked maps and double maps');

    const headKey = iterKey(opts.arg).toHex();

    return this._rpcCore.state.getKeysPaged(headKey, opts.pageSize, opts.startKey || headKey).pipe(
      map((keys) => keys.map((key) => key.setMeta(meta)))
    );
  }

  private _retrieveMapEntries (entry: StorageEntry, arg?: Arg): Observable<[StorageKey, Codec][]> {
    return this._retrieveMapKeys(entry, arg).pipe(
      switchMap((keys) =>
        combineLatest<[StorageKey[], ...Codec[][]]>([
          of(keys),
          ...Array(Math.ceil(keys.length / PAGE_SIZE_VALS))
            .fill(0)
            .map((_, index): Observable<Codec[]> =>
              this._rpcCore.state.queryStorageAt<Codec[]>(
                keys.slice(index * PAGE_SIZE_VALS, (index * PAGE_SIZE_VALS) + PAGE_SIZE_VALS)
              )
            )
        ])
      ),
      map(([keys, ...valsArr]): [StorageKey, Codec][] =>
        valsArr
          .reduce((result: Codec[], vals) => result.concat(vals), [])
          .map((value, index) => [keys[index], value])
      )
    );
  }

  private _retrieveMapEntriesPaged (entry: StorageEntry, opts: PaginationOptions): Observable<[StorageKey, Codec][]> {
    return this._retrieveMapKeysPaged(entry, opts).pipe(
      switchMap((keys) =>
        combineLatest<[StorageKey[], ...Codec[][]]>([
          of(keys),
          this._rpcCore.state.queryStorageAt<Codec[]>(keys)
        ])
      ),
      map(([keys, ...valsArr]): [StorageKey, Codec][] =>
        valsArr
          .reduce((result: Codec[], vals) => result.concat(vals), [])
          .map((value, index) => [keys[index], value])
      )
    );
  }

  protected _decorateDeriveRx (decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<'rxjs', ExactDerive> {
    // Pull in derive from api-derive
    const derive = decorateDerive(this._rx, this._options.derives);

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
