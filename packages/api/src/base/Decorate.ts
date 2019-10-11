// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constants, Storage } from '@polkadot/api-metadata/Decorated/types';
import { RpcMethod } from '@polkadot/jsonrpc/types';
import { RpcInterface } from '@polkadot/rpc-core/jsonrpc.types';
import { Call, Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { AnyFunction, CallFunction, Codec, CodecArg as Arg, ModulesWithCalls } from '@polkadot/types/types';
import { SubmittableExtrinsic } from '../submittable/types';
import {
  ApiInterfaceRx, ApiOptions, ApiTypes,
  DecorateMethod, DecoratedRpc, DecoratedRpcSection,
  QueryableModuleStorage, QueryableStorage, QueryableStorageEntry, QueryableStorageMulti, QueryableStorageMultiArg,
  SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics
} from '../types';

import BN from 'bn.js';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import decorateDerive, { ExactDerive } from '@polkadot/api-derive';
import jsonrpc from '@polkadot/jsonrpc';
import RpcCore from '@polkadot/rpc-core';
import { WsProvider } from '@polkadot/rpc-provider';
import { Metadata, Null, u64 } from '@polkadot/types';
import Linkage, { LinkageResult } from '@polkadot/types/codec/Linkage';
import { DEFAULT_VERSION as EXTRINSIC_DEFAULT_VERSION } from '@polkadot/types/primitive/Extrinsic/constants';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { compactStripLength, u8aToHex } from '@polkadot/util';

import { createSubmittable } from '../submittable';
import { decorateSections, DeriveAllSections } from '../util/decorate';
import Events from './Events';

interface MetaDecoration {
  callIndex?: Uint8Array;
  meta: any;
  method: string;
  section: string;
  toJSON: () => any;
}

export default abstract class Decorate<ApiType> extends Events {
  // HACK Use BN import so decorateDerive works... yes, wtf.
  protected __phantom = new BN(0);

  protected _consts?: Constants;

  protected _derive?: ReturnType<Decorate<ApiType>['decorateDerive']>;

  protected _extrinsics?: SubmittableExtrinsics<ApiType>;

  protected _extrinsicType: number = EXTRINSIC_DEFAULT_VERSION;

  protected _genesisHash?: Hash;

  protected _isConnected: BehaviorSubject<boolean>;

  protected _isReady = false;

  protected readonly _options: ApiOptions;

  protected _query?: QueryableStorage<ApiType>;

  protected _queryMulti?: QueryableStorageMulti<ApiType>;

  protected _rpc?: DecoratedRpc<ApiType, RpcInterface>;

  protected _rpcCore: RpcCore;

  private _rpcMap: Map<string, RpcMethod> = new Map();

  protected _runtimeMetadata?: Metadata;

  protected _runtimeVersion?: RuntimeVersion;

  protected _rx: Partial<ApiInterfaceRx> = {};

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
   * via `deocrateMethod`.
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
  public constructor (options: ApiOptions, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>) {
    super();

    const thisProvider = options.source
      ? options.source._rpcCore.provider.clone()
      : (options.provider || new WsProvider());

    this.decorateMethod = decorateMethod;
    this._options = options;
    this._type = type;
    this._rpcCore = new RpcCore(thisProvider);
    this._isConnected = new BehaviorSubject(this._rpcCore.provider.isConnected());
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
    [...this._rpcMap.entries()]
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

  protected decorateRpc<ApiType> (rpc: RpcCore, decorateMethod: DecorateMethod<ApiType>): DecoratedRpc<ApiType, RpcInterface> {
    return Object.keys(jsonrpc).reduce((out, _sectionName): DecoratedRpc<ApiType, RpcInterface> => {
      const sectionName = _sectionName as keyof DecoratedRpc<ApiType, RpcInterface>;

      // out and section here are horrors to get right from a typing perspective :()
      (out as any)[sectionName] = Object.entries(rpc[sectionName]).reduce((section, [methodName, method]): DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]> => {
        (section as any)[methodName] = decorateMethod(method, { methodName });

        // add this endpoint mapping to our internal map - we use this for filters
        this._rpcMap.set(`${sectionName}_${methodName}`, jsonrpc[sectionName].methods[methodName]);

        return section;
      }, {} as unknown as DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]>);

      return out;
    }, {} as unknown as DecoratedRpc<ApiType, RpcInterface>);
  }

  protected decorateMulti<ApiType> (decorateMethod: DecorateMethod<ApiType>): QueryableStorageMulti<ApiType> {
    return decorateMethod((calls: QueryableStorageMultiArg<ApiType>[]): Observable<Codec[]> =>
      this._rpcCore.state.subscribeStorage(
        calls.map((arg: QueryableStorageMultiArg<ApiType>): [QueryableStorageEntry<ApiType>, ...Arg[]] =>
          // the input is a QueryableStorageEntry, convert to StorageEntry
          Array.isArray(arg)
            ? [arg[0].creator, ...arg.slice(1)]
            : [arg.creator] as any)));
  }

  protected decorateExtrinsics<ApiType> (extrinsics: ModulesWithCalls, decorateMethod: DecorateMethod<ApiType>): SubmittableExtrinsics<ApiType> {
    const creator = createSubmittable(this._type, this._rx as ApiInterfaceRx, decorateMethod);

    return Object.entries(extrinsics).reduce((out, [name, section]): SubmittableExtrinsics<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): SubmittableModuleExtrinsics<ApiType> => {
        out[name] = this.decorateExtrinsicEntry(method, creator);

        return out;
      }, {} as unknown as SubmittableModuleExtrinsics<ApiType>);

      return out;
    }, creator as unknown as SubmittableExtrinsics<ApiType>);
  }

  private decorateExtrinsicEntry<ApiType> (method: CallFunction, creator: (value: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>): SubmittableExtrinsicFunction<ApiType> {
    const decorated = (...params: Arg[]): SubmittableExtrinsic<ApiType> =>
      creator(method(...params));

    return this.decorateFunctionMeta(method, decorated as any) as SubmittableExtrinsicFunction<ApiType>;
  }

  protected decorateStorage<ApiType> (storage: Storage, decorateMethod: DecorateMethod<ApiType>): QueryableStorage<ApiType> {
    return Object.entries(storage).reduce((out, [name, section]): QueryableStorage<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): QueryableModuleStorage<ApiType> => {
        out[name] = this.decorateStorageEntry(method, decorateMethod);

        return out;
      }, {} as unknown as QueryableModuleStorage<ApiType>);

      return out;
    }, {} as unknown as QueryableStorage<ApiType>);
  }

  private decorateStorageEntry<ApiType> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): QueryableStorageEntry<ApiType> {
    // get the storage arguments, with DoubleMap as an array entry, otherwise spread
    const getArgs = (...args: any[]): any[] => creator.meta.type.isDoubleMap
      ? [creator, args]
      : [creator, ...args];

    const decorated = creator.headKey
      ? this.decorateStorageEntryLinked(creator, decorateMethod)
      : decorateMethod((...args: any[]): Observable<Codec> =>
        this._rpcCore.state
          // Unfortunately for one-shot calls we also use .subscribeStorage here
          .subscribeStorage<[Codec]>([getArgs(...args)])
          // state_storage returns an array of values, since we have just subscribed to
          // a single entry, we pull that from the array and return it as-is
          .pipe(map(([data]): Codec => data)), { methodName: creator.method });

    decorated.creator = creator;

    decorated.at = decorateMethod((hash: Hash, arg1?: Arg, arg2?: Arg): Observable<Codec> =>
      this._rpcCore.state.getStorage(getArgs(arg1, arg2), hash));

    decorated.hash = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<Hash> =>
      this._rpcCore.state.getStorageHash(getArgs(arg1, arg2)));

    decorated.key = (arg1?: Arg, arg2?: Arg): string =>
      u8aToHex(compactStripLength(creator(creator.meta.type.isDoubleMap ? [arg1, arg2] : arg1))[1]);

    // When using double map storage function, user need to pass double map key as an array
    decorated.multi = decorateMethod((args: (Arg | Arg[])[]): Observable<Codec[]> =>
      this._rpcCore.state.subscribeStorage(
        args.map((arg: Arg[] | Arg): [StorageEntry, Arg | Arg[]] => [creator, arg])));

    decorated.size = decorateMethod((arg1?: Arg, arg2?: Arg): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getArgs(arg1, arg2)));

    return this.decorateFunctionMeta(creator, decorated) as unknown as QueryableStorageEntry<ApiType>;
  }

  private decorateStorageEntryLinked<ApiType> (creator: StorageEntry, decorateMethod: DecorateMethod<ApiType>): ReturnType<DecorateMethod<ApiType>> {
    const result: Map<Codec, [Codec, Linkage<Codec>]> = new Map();
    let subject: BehaviorSubject<LinkageResult>;
    let head: Codec | null = null;

    // retrieve a value based on the key, iterating if it has a next entry. Since
    // entries can be re-linked in the middle of a list, we subscribe here to make
    // sure we catch any updates, no matter the list position
    const getNext = (key: Codec): Observable<LinkageResult> =>
      this._rpcCore.state.subscribeStorage<[[Codec, Linkage<Codec>]]>([[creator, key]]).pipe(
        switchMap(([data]: [[Codec, Linkage<Codec>]]): Observable<LinkageResult> => {
          result.set(key, data);

          // iterate from this key to the linkages, constructing entries for all
          // those found and available
          if (data[1].next.isSome) {
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

            nextKey = linkage.next && linkage.next.unwrapOr(null);
          }

          const nextResult = vals.length
            ? new LinkageResult([keys[0].constructor as any, keys], [vals[0].constructor as any, vals])
            : new LinkageResult([Null, []], [Null, []]);

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
          .subscribeStorage<[LinkageResult]>([creator.headKey])
          .pipe(switchMap(([key]): Observable<LinkageResult> => getNext(head = key)))
    );
  }

  protected decorateDerive (apiRx: ApiInterfaceRx, decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<ApiType, ExactDerive> {
    // Pull in derive from api-derive
    const derive = decorateDerive(apiRx, this._options.derives);

    return decorateSections<ApiType, ExactDerive>(derive, decorateMethod);
  }

  /**
   * Put the `this.onCall` function of ApiRx here, because it is needed by
   * `api._rx`.
   */
  protected rxDecorateMethod = <Method extends AnyFunction>(method: Method): Method => {
    return method;
  }
}
