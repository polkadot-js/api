// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcInterface } from '@polkadot/rpc-core/jsonrpc.types';
import { Hash, RuntimeVersion, SignedBlock } from '@polkadot/types/interfaces';
import { AnyFunction, CallFunction, Codec, CodecArg, ModulesWithCalls, RegistryTypes } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiOptions, ApiTypes, DecorateMethodOptions, DecoratedRpc, DecoratedRpcSection, QueryableModuleStorage, QueryableStorage, QueryableStorageEntry, QueryableStorageMulti, QueryableStorageMultiArg, QueryableStorageMultiArgs, SubmittableExtrinsicFunction, SubmittableExtrinsics, SubmittableModuleExtrinsics } from '../types';

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
import { GenericCall, GenericEvent, Metadata, Null, u64 } from '@polkadot/types';
import Linkage, { LinkageResult } from '@polkadot/types/codec/Linkage';
import { DEFAULT_VERSION as EXTRINSIC_DEFAULT_VERSION, LATEST_VERSION as EXTRINSIC_LATEST_VERSION } from '@polkadot/types/primitive/Extrinsic/constants';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { assert, compactStripLength, u8aToHex } from '@polkadot/util';

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

// these are override types for polkadot chains
// NOTE The SessionKeys definition for Polkadot and Substrate (OpaqueKeys
// implementation) are different. Detect Polkadot and inject the `Keys`
// definition as applicable. (3 keys in substrate vs 4 in Polkadot).
const TYPES_FOR_POLKADOT = {
  Keys: 'SessionKeysPolkadot'
};

// these are the types that we are using when we detect a extrinsic V1 chain
// NOTE for older chains (e.g. Alex) the BlockNumber/Index is u64, for current
// these are now set to u32
const TYPES_FOR_V1 = {
  BlockNumber: 'u64',
  Index: 'u64',
  EventRecord: 'EventRecord0to76'
};

/**
 * Put the `this.onCall` function of ApiRx here, because it is needed by
 * `api._rx`.
 */
function rxDecorateMethod<Method extends AnyFunction> (method: Method): Method {
  return method;
}

function decorateFunctionMeta (input: MetaDecoration, output: MetaDecoration): MetaDecoration {
  output.meta = input.meta;
  output.method = input.method;
  output.section = input.section;
  output.toJSON = input.toJSON;

  if (input.callIndex) {
    output.callIndex = input.callIndex;
  }

  return output;
}

function decorateRpc<ApiType> (rpc: RpcCore, decorateMethod: ApiBase<ApiType>['decorateMethod']): DecoratedRpc<ApiType, RpcInterface> {
  return ['author', 'chain', 'state', 'system'].reduce((result, _sectionName): DecoratedRpc<ApiType, RpcInterface> => {
    const sectionName = _sectionName as keyof DecoratedRpc<ApiType, RpcInterface>;

    // @ts-ignore Hard to type these correctly, I don't understand the TS errors
    result[sectionName] = Object.entries(rpc[sectionName]).reduce((section, [methodName, method]): DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]> => {
      // @ts-ignore
      section[methodName] = decorateMethod(method, { methodName });

      return section;
    }, {} as unknown as DecoratedRpcSection<ApiType, RpcInterface[typeof sectionName]>);

    return result;
  }, {} as unknown as DecoratedRpc<ApiType, RpcInterface>);
}

export default abstract class ApiBase<ApiType> extends Events {
  protected _consts?: Constants;

  protected _derive?: ReturnType<ApiBase<ApiType>['decorateDerive']>;

  protected _extrinsics?: SubmittableExtrinsics<ApiType>;

  protected _extrinsicType: number = EXTRINSIC_DEFAULT_VERSION;

  protected _genesisHash?: Hash;

  protected _isConnected: BehaviorSubject<boolean>;

  protected _isReady: boolean = false;

  protected readonly _options: ApiOptions;

  protected _query?: QueryableStorage<ApiType>;

  protected _queryMulti: QueryableStorageMulti<ApiType>;

  protected _rpc: DecoratedRpc<ApiType, RpcInterface>;

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
   * api.rpc.subscribeNewHead((header) => {
   *   console.log(`new block #${header.number.toNumber()}`);
   * });
   * ```
   */
  public constructor (options: ApiOptions, type: ApiTypes) {
    super();

    const thisProvider = options.source
      ? options.source._rpcCore.provider.clone()
      : (options.provider || new WsProvider());

    // We only register the types (global) if this is not a cloned instance.
    // Do right up-front, so we get in the user types before we are actually
    // doing anything on-chain, this ensures we have the overrides in-place
    if (!options.source && options.types) {
      this.registerTypes(options.types);
    }

    this._options = options;
    this._type = type;
    this._rpcCore = new RpcCore(thisProvider);
    this._isConnected = new BehaviorSubject(this._rpcCore.provider.isConnected());

    assert(this._rpcCore.provider.hasSubscriptions, 'Api can only be used with a provider supporting subscriptions');

    this._rpc = decorateRpc(this._rpcCore, this.decorateMethod);
    this._rx.rpc = decorateRpc(this._rpcCore, rxDecorateMethod);
    this._queryMulti = this.decorateMulti(this.decorateMethod);
    this._rx.queryMulti = this.decorateMulti(rxDecorateMethod);
    this._rx.signer = options.signer;
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

  public abstract registerTypes (types?: RegistryTypes): void;

  protected async loadMeta (): Promise<boolean> {
    const { metadata = {} } = this._options;

    // only load from on-chain if we are not a clone (default path), alternatively
    // just use the values from the source instance provided
    if (!this._options.source || !this._options.source._isReady) {
      [this._genesisHash, this._runtimeVersion] = await Promise.all([
        this._rpcCore.chain.getBlockHash(0).toPromise(),
        this._rpcCore.chain.getRuntimeVersion().toPromise()
      ]);

      if (this._runtimeVersion.specName.eq('polkadot')) {
        this.registerTypes(TYPES_FOR_POLKADOT);
      }

      const metadataKey = `${this._genesisHash}-${(this._runtimeVersion as RuntimeVersion).specVersion}`;

      this._runtimeMetadata = metadataKey in metadata
        ? new Metadata(metadata[metadataKey])
        : await this._rpcCore.state.getMetadata().toPromise();

      // get unique types & validate
      this._runtimeMetadata.getUniqTypes(false);
    } else {
      this._extrinsicType = this._options.source.extrinsicVersion;
      this._runtimeMetadata = this._options.source.runtimeMetadata;
      this._runtimeVersion = this._options.source.runtimeVersion;
      this._genesisHash = this._options.source.genesisHash;
    }

    return this.initFromMeta(this._runtimeMetadata);
  }

  private async initFromMeta (metadata: Metadata): Promise<boolean> {
    const extrinsics = extrinsicsFromMeta(metadata);
    const storage = storageFromMeta(metadata);
    const constants = constantsFromMeta(metadata);

    // only inject if we are not a clone (global init)
    if (!this._options.source) {
      GenericEvent.injectMetadata(metadata);
      GenericCall.injectMethods(extrinsics);

      // detect the extrinsic version in-use based on the last block
      const { block: { extrinsics: [firstTx] } }: SignedBlock = await this._rpcCore.chain.getBlock().toPromise();

      // If we haven't sync-ed to 1 yes, this won't have any values
      this._extrinsicType = firstTx ? firstTx.type : EXTRINSIC_LATEST_VERSION;

      // HACK Assume that old versions, substrate 1.x is u64 BlockNumber/Nonce
      // and has the old EventRecord format. Remove this ASAP with support for
      // Alex dropped
      if (this._extrinsicType === 1) {
        this.registerTypes(TYPES_FOR_V1);
      }
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

    // derive is last, since it uses the decorated rx
    this._derive = this.decorateDerive(this._rx as ApiInterfaceRx, this.decorateMethod);

    return true;
  }

  private decorateMulti<ApiType> (decorateMethod: ApiBase<ApiType>['decorateMethod']): QueryableStorageMulti<ApiType> {
    return decorateMethod((calls: QueryableStorageMultiArgs<ApiType>): Observable<Codec[]> => {
      const mapped = calls.map((arg: QueryableStorageMultiArg<ApiType>): [QueryableStorageEntry<ApiType>, ...CodecArg[]] =>
        // the input is a QueryableStorageEntry, convert to StorageEntry
        Array.isArray(arg)
          ? [arg[0].creator, ...arg.slice(1)]
          : [arg.creator] as any
      );

      return this._rpcCore.state.subscribeStorage(mapped);
    });
  }

  private decorateExtrinsics<ApiType> (extrinsics: ModulesWithCalls, decorateMethod: ApiBase<ApiType>['decorateMethod']): SubmittableExtrinsics<ApiType> {
    const creator = (value: Uint8Array | string): SubmittableExtrinsic<ApiType> =>
      createSubmittable(this._type, this._rx as ApiInterfaceRx, decorateMethod, value);

    return Object.entries(extrinsics).reduce((result, [name, section]): SubmittableExtrinsics<ApiType> => {
      result[name] = Object.entries(section).reduce((result, [name, method]): SubmittableModuleExtrinsics<ApiType> => {
        result[name] = this.decorateExtrinsicEntry(method, decorateMethod);

        return result;
      }, {} as unknown as SubmittableModuleExtrinsics<ApiType>);

      return result;
    }, creator as unknown as SubmittableExtrinsics<ApiType>);
  }

  private decorateExtrinsicEntry<ApiType> (method: CallFunction, decorateMethod: ApiBase<ApiType>['decorateMethod']): SubmittableExtrinsicFunction<ApiType> {
    const decorated = (...params: CodecArg[]): SubmittableExtrinsic<ApiType> =>
      createSubmittable(this._type, this._rx as ApiInterfaceRx, decorateMethod, method(...params));

    return decorateFunctionMeta(method, decorated as any) as SubmittableExtrinsicFunction<ApiType>;
  }

  private decorateStorage<ApiType> (storage: Storage, decorateMethod: ApiBase<ApiType>['decorateMethod']): QueryableStorage<ApiType> {
    return Object.entries(storage).reduce((result, [name, section]): QueryableStorage<ApiType> => {
      result[name] = Object.entries(section).reduce((result, [name, method]): QueryableModuleStorage<ApiType> => {
        result[name] = this.decorateStorageEntry(method, decorateMethod);

        return result;
      }, {} as unknown as QueryableModuleStorage<ApiType>);

      return result;
    }, {} as unknown as QueryableStorage<ApiType>);
  }

  private decorateStorageEntry<ApiType> (creator: StorageEntry, decorateMethod: ApiBase<ApiType>['decorateMethod']): QueryableStorageEntry<ApiType> {
    const getStorageArgs = (...args: any[]): any[] =>
      creator.meta.type.isDoubleMap
        ? [creator, args]
        : [creator, ...args];
    const decorated = creator.headKey
      ? this.decorateStorageEntryLinked(creator, decorateMethod)
      : decorateMethod((...args: any[]): Observable<Codec> => {
        return this._rpcCore.state
          // Unfortunately for one-shot calls we also use .subscribeStorage here
          .subscribeStorage<[Codec]>([getStorageArgs(...args)])
          // state_storage returns an array of values, since we have just subscribed to
          // a single entry, we pull that from the array and return it as-is
          .pipe(map(([data]): Codec => data));
      }, { methodName: creator.method });

    decorated.creator = creator;

    decorated.at = decorateMethod((hash: Hash, arg1?: CodecArg, arg2?: CodecArg): Observable<Codec> =>
      this._rpcCore.state.getStorage(getStorageArgs(arg1, arg2), hash));

    decorated.hash = decorateMethod((arg1?: CodecArg, arg2?: CodecArg): Observable<Hash> =>
      this._rpcCore.state.getStorageHash(getStorageArgs(arg1, arg2)));

    decorated.key = (arg1?: CodecArg, arg2?: CodecArg): string =>
      u8aToHex(compactStripLength(creator(creator.meta.type.isDoubleMap ? [arg1, arg2] : arg1))[1]);

    // When using double map storage function, user need to path double map key as an array
    decorated.multi = decorateMethod((args: (CodecArg | CodecArg[])[]): Observable<Codec[]> =>
      this._rpcCore.state
        .subscribeStorage(
          args.map((arg: CodecArg[] | CodecArg): [StorageEntry, CodecArg | CodecArg[]] =>
            [creator, arg])));

    decorated.size = decorateMethod((arg1?: CodecArg, arg2?: CodecArg): Observable<u64> =>
      this._rpcCore.state.getStorageSize(getStorageArgs(arg1, arg2)));

    return decorateFunctionMeta(creator, decorated) as unknown as QueryableStorageEntry<ApiType>;
  }

  private decorateStorageEntryLinked<ApiType> (creator: StorageEntry, decorateMethod: ApiBase<ApiType>['decorateMethod']): ReturnType<ApiBase<ApiType>['decorateMethod']> {
    const result: Map<Codec, [Codec, Linkage<Codec>]> = new Map();
    let subject: BehaviorSubject<LinkageResult>;
    let head: Codec | null = null;

    // retrieve a value based on the key, iterating if it has a next entry. Since
    // entries can be re-linked in the middle of a list, we subscribe here to make
    // sure we catch any updates, no matter the list position
    const getNext = (key: Codec): Observable<LinkageResult> => {
      return this._rpcCore.state
        .subscribeStorage<[[Codec, Linkage<Codec>]]>([[creator, key]])
        .pipe(switchMap(([data]: [[Codec, Linkage<Codec>]]): Observable<LinkageResult> => {
          const linkage = data[1];

          result.set(key, data);

          // iterate from this key to the children, constructing
          // entries for all those found and available
          if (linkage.next.isSome) {
            return getNext(linkage.next.unwrap());
          }

          const keys = [];
          const vals = [];
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
    };

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

  // FIXME I have no idea how to get this done
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private decorateDerive <ApiType> (apiRx: ApiInterfaceRx, decorateMethod: ApiBase<ApiType>['decorateMethod']) {
    // Pull in derive from api-derive
    const derive = decorateDerive(apiRx, this._options.derives);

    return decorateSections<ApiType, typeof derive>(derive, decorateMethod);
  }
}
