// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { DeriveCustom } from '@polkadot/api-derive';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface$Events } from '@polkadot/rpc-rx/types';
import { Hash, u64 as U64 } from '@polkadot/types';
import { AnyFunction, Callback, Codec, CodecArg, IExtrinsic, RegistryTypes, SignatureOptions } from '@polkadot/types/types';
import { MethodFunction } from '@polkadot/types/primitive/Method';
import { StorageFunction } from '@polkadot/types/primitive/StorageKey';

import ApiBase from '../Base';
import { RxResult } from '../rx/types';
import { SubmittableResult, SubmittableExtrinsic } from '../SubmittableExtrinsic';
import { HKT, HktType, URIS } from './hkt';

// Returns the inner type of an Observable
export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

// FIXME DecorateMethod's Result should be generic, for now we're hardcoding
// export type DecorateMethod<Method extends AnyFunction> = (method: Method) => <Result>(...args: Parameters<Method>) => Result;
export type DecorateMethod<Method extends AnyFunction> = (method: Method) => <Result>(...args: Parameters<Method>) => Result;

// export type OnCallDefinition<URI, Result> = (
//   method: AnyFunction,
//   params?: Array<CodecArg>,
//   callback?: Callback<ObsInnerType<ReturnType<typeof method>>>,
//   needsCallback?: boolean
// ) => Result;

export type SubscriptionResult<URI> = URI extends 'Observable' ? Observable<Codec> : Callback<Codec>;

// checked against max. params in jsonrpc, 1 for subs, 3 without
export interface DecoratedRpc$Method<URI> {
  (callback: Callback<Codec>): SubscriptionResult<URI>;
  (arg1: CodecArg, callback: Callback<Codec>): SubscriptionResult<URI>;
  (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): HktType<URI, Codec>;
}

export interface DecoratedRpc$Section<URI> {
  [index: string]: DecoratedRpc$Method<URI>;
}

export interface DecoratedRpc<URI> {
  author: DecoratedRpc$Section<URI>;
  chain: DecoratedRpc$Section<URI>;
  state: DecoratedRpc$Section<URI>;
  system: DecoratedRpc$Section<URI>;
}

export type HashResult<URI> =
  URI extends 'Observable'
  ? Observable<Hash>
  : Promise<Hash>;

export type U64Result<URI> =
  URI extends 'Observable'
  ? Observable<U64>
  : Promise<U64>;

export interface QueryableStorageFunctionBase<URI> extends StorageFunction {
  (arg1?: CodecArg, arg2?: CodecArg): HktType<URI, Codec>;
  at: (hash: Hash | Uint8Array | string, arg1?: CodecArg, arg2?: CodecArg) => HktType<URI, Codec>;
  creator: StorageFunction;
  hash: (arg1?: CodecArg, arg2?: CodecArg) => HashResult<URI>;
  key: (arg1?: CodecArg, arg2?: CodecArg) => string;
  multi: (args: Array<CodecArg[] | CodecArg>, callback?: Callback<Codec>) => SubscriptionResult<URI>;
  size: (arg1?: CodecArg, arg2?: CodecArg) => U64Result<URI>;
}

interface QueryableStorageFunctionPromise<URI> extends QueryableStorageFunctionBase<URI> {
  (callback: Callback<Codec>): SubscriptionResult<URI>;
  (arg: CodecArg, callback: Callback<Codec>): SubscriptionResult<URI>;
  (arg1: CodecArg, arg2: CodecArg, callback: Callback<Codec>): SubscriptionResult<URI>;
}

export type QueryableStorageFunction<URI> =
  URI extends 'Observable'
  ? QueryableStorageFunctionBase<URI>
  : QueryableStorageFunctionPromise<URI>;

export interface QueryableModuleStorage<URI> {
  [index: string]: QueryableStorageFunction<URI>;
}

export type QueryableStorageMultiArg<URI> =
  QueryableStorageFunction<URI> |
  [QueryableStorageFunction<URI>, ...Array<CodecArg>];

export type QueryableStorageMultiArgs<URI> = Array<QueryableStorageMultiArg<URI>>;

export interface QueryableStorageMultiBase<URI> {
  (calls: QueryableStorageMultiArgs<URI>): SubscriptionResult<URI>;
}

export interface QueryableStorageMultiPromise<URI> {
  (calls: QueryableStorageMultiArgs<URI>, callback: Callback<Codec>): SubscriptionResult<URI>;
}

export type QueryableStorageMulti<URI> =
  URI extends 'Observable'
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

export type ApiInterface$Rx = ApiInterface$Decorated<'Observable', RxResult, RxResult>;

export type ApiInterface$Events = RpcRxInterface$Events | 'ready';

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

export * from './hkt';
