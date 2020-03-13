// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constants, Storage } from '@polkadot/metadata/Decorated/types';
import { RpcInterface } from '@polkadot/rpc-core/types';
import { Call, Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { AnyFunction, CallFunction, Codec, CodecArg as Arg, ITuple, InterfaceTypes, ModulesWithCalls, Registry, RegistryTypes } from '@polkadot/types/types';
import { SubmittableExtrinsic } from '../submittable/types';
import { ApiInterfaceRx, ApiOptions, ApiTypes, DecorateMethod, DecoratedRpc, DecoratedRpcSection, QueryableModuleStorage, QueryableStorage, QueryableStorageEntry, QueryableStorageMulti, QueryableStorageMultiArg, SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics } from '../types';

import BN from 'bn.js';
import { BehaviorSubject, Observable, combineLatest, from, of } from 'rxjs';
import { concatMap, map, switchMap, take, tap, toArray } from 'rxjs/operators';
import decorateDerive, { ExactDerive } from '@polkadot/api-derive';
import { memo } from '@polkadot/api-derive/util';
import DecoratedMeta from '@polkadot/metadata/Decorated';
import getHasher from '@polkadot/metadata/Decorated/storage/fromMetadata/getHasher';
import RpcCore from '@polkadot/rpc-core';
import { WsProvider } from '@polkadot/rpc-provider';
import { Metadata, Null, Option, Raw, Text, TypeRegistry, u64 } from '@polkadot/types';
import Linkage, { LinkageResult } from '@polkadot/types/codec/Linkage';
import { DEFAULT_VERSION as EXTRINSIC_DEFAULT_VERSION } from '@polkadot/types/extrinsic/constants';
import StorageKey, { StorageEntry, unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { assert, compactStripLength, isNull, isUndefined, u8aConcat, u8aToHex } from '@polkadot/util';

import { createSubmittable } from '../submittable';
import augmentObject from '../util/augmentObject';
import { decorateSections, DeriveAllSections } from '../util/decorate';
import { extractStorageArgs } from '../util/validate';
import Events from './Events';

interface MetaDecoration {
  callIndex?: Uint8Array;
  meta: any;
  method: string;
  section: string;
  toJSON: () => any;
}

type LinkageData = ITuple<[Codec, Linkage<Codec>]>;

const PAGE_SIZE_KEYS = 256;
const PAGE_SIZE_VALS = PAGE_SIZE_KEYS / 2;

export default abstract class Decorate<ApiType extends ApiTypes> extends Events {
  public readonly registry: Registry;

  // HACK Use BN import so decorateDerive works... yes, wtf.
  protected __phantom = new BN(0);

  protected _consts: Constants = {} as Constants;

  protected _derive?: ReturnType<Decorate<ApiType>['decorateDerive']>;

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
  protected decorateMethod: DecorateMethod<ApiType>;

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

    this.decorateMethod = decorateMethod;
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
  public createType <K extends keyof InterfaceTypes> (type: K, ...params: any[]): InterfaceTypes[K] {
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
      this._extrinsics = this.decorateExtrinsics(decoratedMeta.tx, this.decorateMethod);
      this._rx.tx = this.decorateExtrinsics(decoratedMeta.tx, this.rxDecorateMethod);
    } else {
      augmentObject('tx', this.decorateExtrinsics(decoratedMeta.tx, this.decorateMethod), this._extrinsics, false);
      augmentObject('', this.decorateExtrinsics(decoratedMeta.tx, this.rxDecorateMethod), this._rx.tx, false);
    }

    // this API
    augmentObject('query', this.decorateStorage(decoratedMeta.query, this.decorateMethod), this._query, fromEmpty);
    augmentObject('consts', decoratedMeta.consts, this._consts, fromEmpty);

    // rx
    augmentObject('', this.decorateStorage(decoratedMeta.query, this.rxDecorateMethod), this._rx.query, fromEmpty);
    augmentObject('', decoratedMeta.consts, this._rx.consts, fromEmpty);
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

  // Filter all RPC methods based on the results of the rpc_methods call. We do this in the following
  // manner to cater for both old and new:
  //   - when the number of entries are 0, only remove the ones with isOptional (account & contracts)
  //   - when non-zero, remove anything that is not in the array (we don't do this)
  protected async filterRpc (): Promise<void> {
    let methods: string[];

    try {
      // we ignore the version (adjust as versions change, for now only "1")
      methods = (await this._rpcCore.rpc.methods().toPromise()).methods.map((t) => t.toString());
    } catch (error) {
      // the method is not there, we adjust accordingly
      methods = [];
    }

    this.filterRpcMethods(methods);
  }

  protected filterRpcMethods (methods: string[]): void {
    // this is true when the RPC has entries
    const hasResults = methods.length !== 0;

    // loop through all entries we have (populated in decorate) and filter as required
    [...this._rpcCore.mapping.entries()]
      .filter(([key, { isOptional }]): boolean =>
        // only remove when we have results and method missing, or with no results if optional
        hasResults
          ? !methods.includes(key) && key !== 'rpc_methods' // rpc_methods doesn't appear, v1
          : isOptional || key === 'rpc_methods' // we didn't find this one, remove
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .forEach(([_, { method, section }]): void => {
        delete (this._rpc as any)[section][method];
        delete (this._rx.rpc as any)[section][method];
      });
  }

  protected decorateRpc<ApiType extends ApiTypes> (rpc: RpcCore, decorateMethod: DecorateMethod<ApiType>): DecoratedRpc<ApiType, RpcInterface> {
    return rpc.sections.reduce((out, _sectionName): DecoratedRpc<ApiType, RpcInterface> => {
      const sectionName = _sectionName as keyof DecoratedRpc<ApiType, RpcInterface>;

      // out and section here are horrors to get right from a typing perspective :(
      (out as any)[sectionName] = Object.entries(rpc[sectionName]).reduce((section, [methodName, method]): DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]> => {
        //  skip subscriptions where we have a non-subscribe interface
        if (this.hasSubscriptions || !(methodName.startsWith('subscribe') || methodName.startsWith('unsubscribe'))) {
          (section as any)[methodName] = decorateMethod(method, { methodName });
          (section as any)[methodName].raw = decorateMethod(method.raw, { methodName });
        }

        return section;
      }, {} as DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]>);

      return out;
    }, {} as DecoratedRpc<ApiType, RpcInterface>);
  }

  protected decorateMulti<ApiType extends ApiTypes> (decorateMethod: DecorateMethod<ApiType>): QueryableStorageMulti<ApiType> {
    return decorateMethod((calls: QueryableStorageMultiArg<ApiType>[]): Observable<Codec[]> =>
      this._rpcCore.state.subscribeStorage(
        calls.map((arg: QueryableStorageMultiArg<ApiType>): [QueryableStorageEntry<ApiType>, ...Arg[]] =>
          // the input is a QueryableStorageEntry, convert to StorageEntry
          Array.isArray(arg)
            ? [arg[0].creator, ...arg.slice(1)]
            : [arg.creator] as any)));
  }

  protected decorateExtrinsics<ApiType extends ApiTypes> (extrinsics: ModulesWithCalls, decorateMethod: DecorateMethod<ApiType>): SubmittableExtrinsics<ApiType> {
    const creator = createSubmittable(this._type, this._rx, decorateMethod);

    return Object.entries(extrinsics).reduce((out, [name, section]): SubmittableExtrinsics<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): SubmittableModuleExtrinsics<ApiType> => {
        out[name] = this.decorateExtrinsicEntry(method, creator);

        return out;
      }, {} as SubmittableModuleExtrinsics<ApiType>);

      return out;
    }, creator as SubmittableExtrinsics<ApiType>);
  }

  private decorateExtrinsicEntry<ApiType extends ApiTypes> (method: CallFunction, creator: (value: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>): SubmittableExtrinsicFunction<ApiType> {
    const decorated = (...params: Arg[]): SubmittableExtrinsic<ApiType> =>
      creator(method(...params));

    return this.decorateFunctionMeta(method, decorated as any) as SubmittableExtrinsicFunction<ApiType>;
  }

  protected decorateStorage<ApiType extends ApiTypes> (storage: Storage, decorateMethod: DecorateMethod<ApiType>): QueryableStorage<ApiType> {
    return Object.entries(storage).reduce((out, [name, section]): QueryableStorage<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): QueryableModuleStorage<ApiType> => {
        out[name] = this.decorateStorageEntry(method, decorateMethod);

        return out;
      }, {} as QueryableModuleStorage<ApiType>);

      return out;
    }, {} as QueryableStorage<ApiType>);
  }

  private decorateStorageEntry<ApiType extends ApiTypes> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): QueryableStorageEntry<ApiType> {
    // get the storage arguments, with DoubleMap as an array entry, otherwise spread
    const getArgs = (...args: any[]): any[] => extractStorageArgs(creator, args);

    // FIXME We probably want to be able to query the full list with non-subs as well
    const decorated = this.hasSubscriptions && creator.iterKey && creator.meta.type.isMap && creator.meta.type.asMap.linked.isTrue
      ? this.decorateStorageLinked(creator, decorateMethod)
      : decorateMethod((...args: any[]): Observable<Codec> => (
        this.hasSubscriptions
          ? this._rpcCore.state
            // Unfortunately for one-shot calls we also use .subscribeStorage here
            .subscribeStorage<[Codec]>([getArgs(...args)])
            // state_storage returns an array of values, since we have just subscribed to
            // a single entry, we pull that from the array and return it as-is
            .pipe(map(([data]): Codec => data))
          : this._rpcCore.state.getStorage(getArgs(...args))
      ), { methodName: creator.method });

    decorated.creator = creator;

    decorated.at = decorateMethod((hash: Hash, arg1?: Arg, arg2?: Arg): Observable<Codec> =>
      this._rpcCore.state.getStorage(getArgs(arg1, arg2), hash));

    decorated.entries = decorateMethod(memo((doubleMapArg?: Arg): Observable<[StorageKey, Codec][]> =>
      this.retrieveMapEntries(creator, doubleMapArg)));

    decorated.hash = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<Hash> =>
      this._rpcCore.state.getStorageHash(getArgs(arg1, arg2)));

    decorated.key = (arg1?: Arg, arg2?: Arg): string =>
      u8aToHex(compactStripLength(creator(creator.meta.type.isDoubleMap ? [arg1, arg2] : arg1))[1]);

    decorated.keyPrefix = (): string =>
      u8aToHex(creator.keyPrefix);

    decorated.keys = decorateMethod(memo((doubleMapArg?: Arg): Observable<StorageKey[]> =>
      this.retrieveMapKeys(creator, doubleMapArg)));

    if (this.hasSubscriptions) {
      // When using double map storage function, user need to pass double map key as an array
      decorated.multi = decorateMethod((args: (Arg | Arg[])[]): Observable<Codec[]> =>
        this._rpcCore.state.subscribeStorage(
          args.map((arg: Arg[] | Arg): [StorageEntry, Arg | Arg[]] => [creator, arg])));
    }

    decorated.range = decorateMethod(memo((range: [Hash, Hash?], arg1?: Arg, arg2?: Arg): Observable<[Hash, Codec][]> =>
      this.decorateStorageRange(decorated, [arg1, arg2], range)));

    decorated.size = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getArgs(arg1, arg2)));

    return this.decorateFunctionMeta(creator, decorated) as unknown as QueryableStorageEntry<ApiType>;
  }

  private decorateStorageRange<ApiType extends ApiTypes> (decorated: QueryableStorageEntry<ApiType>, args: [Arg?, Arg?], range: [Hash, Hash?]): Observable<[Hash, Codec][]> {
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

  private decorateStorageLinked<ApiType extends ApiTypes> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): ReturnType<DecorateMethod<ApiType>> {
    const result: Map<Codec, ITuple<[Codec, Linkage<Codec>]> | null> = new Map();
    let subject: BehaviorSubject<LinkageResult>;
    let head: Codec | null = null;

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
    return decorateMethod((...args: any[]): Observable<LinkageResult | [Codec, Linkage<Codec>]> =>
      args.length
        ? this._rpcCore.state
          .subscribeStorage<[[Codec, Linkage<Codec>]]>([[creator, ...args]])
          .pipe(map(([data]): [Codec, Linkage<Codec>] => data))
        : this._rpcCore.state
          .subscribeStorage<[LinkageResult]>([creator.iterKey])
          .pipe(switchMap(([key]): Observable<LinkageResult> => getNext(head = key)))
    );
  }

  private retrieveMapKeys ({ iterKey, meta }: StorageEntry, arg?: Arg): Observable<StorageKey[]> {
    assert(iterKey && (meta.type.isMap || meta.type.isDoubleMap), 'keys can only be retrieved on maps, linked maps and double maps');

    const headKey = this.createType('Raw', u8aConcat(
      iterKey,
      meta.type.isDoubleMap && !isUndefined(arg) && !isNull(arg)
        ? getHasher(meta.type.asDoubleMap.hasher)(
          this.createType(meta.type.asDoubleMap.key1.toString() as 'Raw', arg).toU8a()
        )
        : new Uint8Array([])
    )).toHex();
    const startSubject = new BehaviorSubject<string>(headKey);

    return this._rpcCore.state.getKeysPaged
      ? startSubject.pipe(
        switchMap((startKey) =>
          this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE_KEYS, startKey).pipe(
            map((keys): StorageKey[] =>
              keys.map((key) => key.decodeArgsFromMeta(meta))
            )
          )
        ),
        tap((keys): void => {
          keys.length === PAGE_SIZE_KEYS
            ? startSubject.next(keys[PAGE_SIZE_KEYS - 1].toHex())
            : startSubject.complete();
        }),
        toArray(), // toArray since we want to startSubject to be completed
        map((keysArr: StorageKey[][]): StorageKey[] =>
          keysArr.reduce((result: StorageKey[], keys): StorageKey[] =>
            result.concat(keys), []
          )
        )
      )
      : this._rpcCore.state.getKeys(headKey).pipe(
        map((keys): StorageKey[] =>
          keys.map((key) => key.decodeArgsFromMeta(meta))
        )
      );
  }

  private retrieveMapEntries (entry: StorageEntry, arg?: Arg): Observable<[StorageKey, Codec][]> {
    const outputType = unwrapStorageType(entry.meta.type, entry.meta.modifier.isOptional);

    return this.retrieveMapKeys(entry, arg).pipe(
      switchMap((keys): Observable<[StorageKey[], Option<Raw>[]]> =>
        combineLatest([
          of(keys),
          from(Array(Math.ceil(keys.length / PAGE_SIZE_VALS)).fill(0)).pipe(
            // FIXME New RPC to take care of this in the works...
            concatMap((_, index): Observable<Option<Raw>[]> =>
              this._rpcCore.state.subscribeStorage<Option<Raw>[]>(
                keys.slice(index * PAGE_SIZE_VALS, (index * PAGE_SIZE_VALS) + PAGE_SIZE_VALS)
              ).pipe(take(1))
            ),
            toArray(),
            map((valsArr: Option<Raw>[][]): Option<Raw>[] =>
              valsArr.reduce((result: Option<Raw>[], vals): Option<Raw>[] =>
                result.concat(vals), []
              )
            )
          )
        ])
      ),
      map(([keys, vals]): [StorageKey, Codec][] =>
        keys.map((key, index): [StorageKey, Codec] => [
          key,
          this.createType(
            outputType,
            vals[index].isSome
              ? vals[index].unwrap().toHex()
              : undefined
          )
        ])
      )
    );
  }

  protected decorateDeriveRx (decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<'rxjs', ExactDerive> {
    // Pull in derive from api-derive
    const derive = decorateDerive(this._rx, this._options.derives);

    return decorateSections<'rxjs', ExactDerive>(derive, decorateMethod);
  }

  protected decorateDerive (decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<ApiType, ExactDerive> {
    return decorateSections<ApiType, ExactDerive>(this._rx.derive, decorateMethod);
  }

  /**
   * Put the `this.onCall` function of ApiRx here, because it is needed by
   * `api._rx`.
   */
  protected rxDecorateMethod = <Method extends AnyFunction>(method: Method): Method => {
    return method;
  }
}
