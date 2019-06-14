// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { DeriveCustom } from '@polkadot/api-derive';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface$Events } from '@polkadot/rpc-rx/types';
import { Hash, RuntimeVersion, u64 as U64 } from '@polkadot/types';
import { AnyFunction, Callback, Codec, CodecArg, IExtrinsic, RegistryTypes, SignatureOptions } from '@polkadot/types/types';
import { MethodFunction } from '@polkadot/types/primitive/Method';
import { StorageFunction } from '@polkadot/types/primitive/StorageKey';

import ApiBase from './Base';
import { SubmittableResult, SubmittableExtrinsic } from './SubmittableExtrinsic';

// Prepend an element V onto the beginning of a tuple T.
// Cons<1, [2,3,4]> is [1,2,3,4]
type Cons<V, T extends any[]> = ((v: V, ...t: T) => void) extends ((
  ...r: infer R
) => void)
  ? R
  : never;
// Append an element V onto the end of a tuple T
// Push<[1,2,3],4> is [1,2,3,4]
// note that this DOES NOT PRESERVE optionality/readonly in tuples.
// So unfortunately Push<[1, 2?, 3?], 4> is [1,2|undefined,3|undefined,4]

type Push<T extends any[], V> = (Cons<any, Required<T>> extends infer R
  ? { [K in keyof R]: K extends keyof T ? T[K] : V }
  : never) extends infer P
  ? P extends any[] ? P : never
  : never;

// Returns the inner type of an Observable
export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

export type UnsubscribePromise = Promise<() => void>;

// In the abstract `decorateMethod` in Base.ts, we can also pass in some meta-
// information. This describes it.
export type DecorateMethodOptions = {
  methodName?: string
};

// Here are the return types of these parts of the api:
// - api.query.*.*: no exact typings
// - api.tx.*.*: SubmittableExtrinsic<URI>
// - api.derive.*.*: MethodResult<URI, F>
// - api.rpc.*.*: no exact typings (for now, FIXME: should be  MethodResult<URI, F>, like in derive)

// These are the types that don't lose type information (used for api.derive.*)
// Also use these for api.rpc.* https://github.com/polkadot-js/api/issues/1009
export type RxResult<F extends AnyFunction> = (...args: Parameters<F>) => Observable<ObsInnerType<ReturnType<F>>>;
export type PromiseResult<F extends AnyFunction> = {
  (...args: Parameters<F>): Promise<ObsInnerType<ReturnType<F>>>,
  (...args: Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>): UnsubscribePromise
};
// FIXME The day TS has higher-kinded types, we can remove this hardcoded stuff
export type MethodResult<URI, F extends AnyFunction> = URI extends 'rxjs'
  ? RxResult<F>
  : PromiseResult<F>;

type DecoratedRpc$Method<URI> = URI extends 'rxjs'
  ? {
    (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Observable<Codec>
    <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Observable<T>
  }
  : {
    // These signatures are allowed and exposed here (bit or a stoopid way, but checked
    // RPCs and we have 3 max args, with subs max one arg... YMMV) -
    //  (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Promise<Codec>;
    //  (arg1: CodecArg, callback: Callback<Codec>): UnsubscribePromise;
    //  (callback: Callback<Codec>): UnsubscribePromise;
    (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Promise<Codec>;
    <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Promise<T>;
    <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
    <T extends Codec>(arg: CodecArg, callback: Callback<T>): UnsubscribePromise;
  };

// FIXME https://github.com/polkadot-js/api/issues/1009
export interface DecoratedRpc$Section<URI> {
  [index: string]: DecoratedRpc$Method<URI>;
}

// FIXME https://github.com/polkadot-js/api/issues/1009
export interface DecoratedRpc<URI> {
  author: DecoratedRpc$Section<URI>;
  chain: DecoratedRpc$Section<URI>;
  state: DecoratedRpc$Section<URI>;
  system: DecoratedRpc$Section<URI>;
}

interface StorageFunctionObservable {
  (arg1?: CodecArg, arg2?: CodecArg): Observable<Codec>;
  <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg): Observable<T>;
  at: (hash: Hash | Uint8Array | string, arg1?: CodecArg, arg2?: CodecArg) => Observable<Codec>;
  creator: StorageFunction;
  hash: (arg1?: CodecArg, arg2?: CodecArg) => Observable<Hash>;
  key: (arg1?: CodecArg, arg2?: CodecArg) => string;
  multi: (args: Array<CodecArg[] | CodecArg>) => Observable<Codec>;
  size: (arg1?: CodecArg, arg2?: CodecArg) => Observable<U64>;
}

export interface StorageFunctionPromiseOverloads {
  (arg1?: CodecArg, arg2?: CodecArg): Promise<Codec>;
  <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg): Promise<T>;
  <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg: CodecArg, callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg1: CodecArg, arg2: CodecArg, callback: Callback<T>): UnsubscribePromise;
}

interface StorageFunctionPromise extends StorageFunctionPromiseOverloads {
  at: (hash: Hash | Uint8Array | string, arg1?: CodecArg, arg2?: CodecArg) => Promise<Codec>;
  creator: StorageFunction;
  hash: (arg1?: CodecArg, arg2?: CodecArg) => Promise<Hash>;
  key: (arg1?: CodecArg, arg2?: CodecArg) => string;
  multi: <T extends Codec>(args: Array<CodecArg[] | CodecArg>, callback?: Callback<Array<T>>) => Promise<Array<T>>;
  size: (arg1?: CodecArg, arg2?: CodecArg) => Promise<U64>;
}

export type QueryableStorageFunction<URI> =
  URI extends 'rxjs'
  ? StorageFunctionObservable
  : StorageFunctionPromise;

export interface QueryableModuleStorage<URI> {
  [index: string]: QueryableStorageFunction<URI>;
}

export type QueryableStorageMultiArg<URI> =
  QueryableStorageFunction<URI> |
  [QueryableStorageFunction<URI>, ...Array<CodecArg>];

export type QueryableStorageMultiArgs<URI> = Array<QueryableStorageMultiArg<URI>>;

export interface QueryableStorageMultiBase<URI> {
  (calls: QueryableStorageMultiArgs<URI>): UnsubscribePromise;
}

export interface QueryableStorageMultiPromise<URI> {
  <T extends Codec>(calls: QueryableStorageMultiArgs<URI>, callback: Callback<Array<T>>): UnsubscribePromise;
}

export type QueryableStorageMulti<URI> =
  URI extends 'rxjs'
  ? QueryableStorageMultiBase<URI>
  : QueryableStorageMultiPromise<URI>;

export interface QueryableStorage<URI> {
  [index: string]: QueryableModuleStorage<URI>;
}

export interface SubmittableExtrinsicFunction<URI> extends MethodFunction {
  (...params: Array<CodecArg>): SubmittableExtrinsic<URI>;
}

export interface SubmittableModuleExtrinsics<URI> {
  [index: string]: SubmittableExtrinsicFunction<URI>;
}

export interface SubmittableExtrinsics<URI> {
  (extrinsic: Uint8Array | string): SubmittableExtrinsic<URI>;
  [index: string]: SubmittableModuleExtrinsics<URI>;
}

export interface ApiOptions {
  /**
   * @description Add custom derives to be injected
   */
  derives?: DeriveCustom;
  /**
   * @description prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string
   * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
   */
  metadata?: {
    [key: string]: string
  };
  /**
   * @description Transport Provider from rpc-provider. If not specified, it will default to
   * connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`
   */
  provider?: ProviderInterface;
  /**
   * @description An external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  signer?: Signer;
  /**
   * @description The source object to use for runtime information (only used when cloning)
   */
  source?: ApiBase<any>;
  /**
   * @description Additional types used by runtime modules. This is nessusary if the runtime modules
   * uses types not available in the base Substrate runtime.
   */
  types?: RegistryTypes;
}

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterface$Rx {
  genesisHash: Hash;
  hasSubscriptions: boolean;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs'>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer;
}

export type ApiInterface$Events = RpcRxInterface$Events | 'ready';

export type ApiType = 'promise' | 'rxjs';

export type SignerOptions = SignatureOptions & {
  genesisHash: Hash
};

export interface Signer {
  /**
   * @description Signs an extrinsic, returning an id (>0) that can be used to retrieve updates
   */
  sign (extrinsic: IExtrinsic, address: string, options: SignerOptions): Promise<number>;

  /**
   * @description Receives an update for the extrinsic signed by a `signer.sign`
   */
  update?: (id: number, status: Hash | SubmittableResult) => void;
}
