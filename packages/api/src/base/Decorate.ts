// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcInterface } from '@polkadot/rpc-core/jsonrpc.types';
import { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { AnyFunction, CallFunction, Codec, CodecArg as Arg, ModulesWithCalls } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiOptions, ApiTypes, DecorateMethodOptions, DecoratedRpc, DecoratedRpcSection, QueryableModuleStorage, QueryableStorage, QueryableStorageEntry, QueryableStorageMulti, QueryableStorageMultiArg, QueryableStorageMultiArgs, SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics } from '../types';

import BN from 'bn.js';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import decorateDerive from '@polkadot/api-derive';
import { Constants } from '@polkadot/api-metadata/consts/types';
import { Storage } from '@polkadot/api-metadata/storage/types';
import RpcCore from '@polkadot/rpc-core';
import { WsProvider } from '@polkadot/rpc-provider';
import { Metadata, Null, u64 } from '@polkadot/types';
import Linkage, { LinkageResult } from '@polkadot/types/codec/Linkage';
import { DEFAULT_VERSION as EXTRINSIC_DEFAULT_VERSION } from '@polkadot/types/primitive/Extrinsic/constants';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { compactStripLength, u8aToHex } from '@polkadot/util';

import createSubmittable, { SubmittableExtrinsic } from '../SubmittableExtrinsic';
import { decorateSections } from '../util/decorate';
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

  protected _isReady: boolean = false;

  protected readonly _options: ApiOptions;

  protected _query?: QueryableStorage<ApiType>;

  protected _queryMulti?: QueryableStorageMulti<ApiType>;

  protected _rpc?: DecoratedRpc<ApiType, RpcInterface>;

  protected _rpcCore: RpcCore;

  protected _runtimeMetadata?: Metadata;

  protected _runtimeVersion?: RuntimeVersion;

  protected _rx: Partial<ApiInterfaceRx> = {};

  protected _type: ApiTypes;

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
  public constructor (options: ApiOptions, type: ApiTypes) {
    super();

    const thisProvider = options.source
      ? options.source._rpcCore.provider.clone()
      : (options.provider || new WsProvider());

    this._options = options;
    this._type = type;
    this._rpcCore = new RpcCore(thisProvider);
    this._isConnected = new BehaviorSubject(this._rpcCore.provider.isConnected());
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
  protected abstract decorateMethod(method: (...args: any[]) => Observable<any>, options?: DecorateMethodOptions): any;

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

  protected decorateRpc<ApiType> (rpc: RpcCore, decorateMethod: Decorate<ApiType>['decorateMethod']): DecoratedRpc<ApiType, RpcInterface> {
    return ['author', 'chain', 'state', 'system'].reduce((out, _sectionName): DecoratedRpc<ApiType, RpcInterface> => {
      const sectionName = _sectionName as keyof DecoratedRpc<ApiType, RpcInterface>;

      // @ts-ignore Hard to type these correctly, I don't understand the TS errors
      out[sectionName] = Object.entries(rpc[sectionName]).reduce((section, [methodName, method]): DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]> => {
        // @ts-ignore
        section[methodName] = decorateMethod(method, { methodName });

        return section;
      }, {} as unknown as DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]>);

      return out;
    }, {} as unknown as DecoratedRpc<ApiType, RpcInterface>);
  }

  protected decorateMulti<ApiType> (decorateMethod: Decorate<ApiType>['decorateMethod']): QueryableStorageMulti<ApiType> {
    return decorateMethod((calls: QueryableStorageMultiArgs<ApiType>): Observable<Codec[]> =>
      this._rpcCore.state.subscribeStorage(
        calls.map((arg: QueryableStorageMultiArg<ApiType>): [QueryableStorageEntry<ApiType>, ...Arg[]] =>
          // the input is a QueryableStorageEntry, convert to StorageEntry
          Array.isArray(arg)
            ? [arg[0].creator, ...arg.slice(1)]
            : [arg.creator] as any)));
  }

  protected decorateExtrinsics<ApiType> (extrinsics: ModulesWithCalls, decorateMethod: Decorate<ApiType>['decorateMethod']): SubmittableExtrinsics<ApiType> {
    const creator = (value: Uint8Array | string): SubmittableExtrinsic<ApiType> =>
      createSubmittable(this._type, this._rx as ApiInterfaceRx, decorateMethod, value);

    return Object.entries(extrinsics).reduce((out, [name, section]): SubmittableExtrinsics<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): SubmittableModuleExtrinsics<ApiType> => {
        out[name] = this.decorateExtrinsicEntry(method, decorateMethod);

        return out;
      }, {} as unknown as SubmittableModuleExtrinsics<ApiType>);

      return out;
    }, creator as unknown as SubmittableExtrinsics<ApiType>);
  }

  private decorateExtrinsicEntry<ApiType> (method: CallFunction, decorateMethod: Decorate<ApiType>['decorateMethod']): SubmittableExtrinsicFunction<ApiType> {
    const decorated = (...params: Arg[]): SubmittableExtrinsic<ApiType> =>
      createSubmittable(this._type, this._rx as ApiInterfaceRx, decorateMethod, method(...params));

    return this.decorateFunctionMeta(method, decorated as any) as SubmittableExtrinsicFunction<ApiType>;
  }

  protected decorateStorage<ApiType> (storage: Storage, decorateMethod: Decorate<ApiType>['decorateMethod']): QueryableStorage<ApiType> {
    return Object.entries(storage).reduce((out, [name, section]): QueryableStorage<ApiType> => {
      out[name] = Object.entries(section).reduce((out, [name, method]): QueryableModuleStorage<ApiType> => {
        out[name] = this.decorateStorageEntry(method, decorateMethod);

        return out;
      }, {} as unknown as QueryableModuleStorage<ApiType>);

      return out;
    }, {} as unknown as QueryableStorage<ApiType>);
  }

  private decorateStorageEntry<ApiType> (creator: StorageEntry, decorateMethod: Decorate<ApiType>['decorateMethod']): QueryableStorageEntry<ApiType> {
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

  private decorateStorageEntryLinked<ApiType> (creator: StorageEntry, decorateMethod: Decorate<ApiType>['decorateMethod']): ReturnType<Decorate<ApiType>['decorateMethod']> {
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

  // FIXME Any better ideas? `any` doesn't work, needs a return but TS infers
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  protected decorateDerive (apiRx: ApiInterfaceRx, decorateMethod: Decorate<ApiType>['decorateMethod']) {
    // Pull in derive from api-derive
    const derive = decorateDerive(apiRx, this._options.derives);

    return decorateSections<ApiType, typeof derive>(derive, decorateMethod);
  }

  /**
   * Put the `this.onCall` function of ApiRx here, because it is needed by
   * `api._rx`.
   */
  protected rxDecorateMethod<Method extends AnyFunction> (method: Method): Method {
    return method;
  }
}
