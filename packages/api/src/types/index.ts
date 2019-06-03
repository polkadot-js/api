// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { DeriveCustom } from '@polkadot/api-derive';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface$Events } from '@polkadot/rpc-rx/types';
import { Hash, Metadata, RuntimeVersion, u64 as U64 } from '@polkadot/types';
import { AnyFunction, CodecArg, CodecCallback, IExtrinsic, RegistryTypes, SignatureOptions } from '@polkadot/types/types';
import { MethodFunction } from '@polkadot/types/primitive/Method';
import { StorageFunction } from '@polkadot/types/primitive/StorageKey';

import ApiBase from '../Base';
import { RxResult } from '../rx/types';
import { SubmittableResult, SubmittableExtrinsic } from '../SubmittableExtrinsic';
import { ApiType, HKT } from './hkt';

// If a function returns `Observable<U>`, this type returns `U`.
export type ObsInnerType<F extends AnyFunction> = ReturnType<F> extends Observable<infer U> ? U : never;

export type Callback<T> = (arg: T) => any; // Could be void, but for async callbacks we put any

export type OnCallDefinition<URI> = (
  method: (...args: any) => Observable<any>,
  params?: Array<CodecArg>,
  callback?: Callback<ObsInnerType<typeof method>>,
  needsCallback?: boolean
) => HKT<URI, ObsInnerType<typeof method>>;

// checked against max. params in jsonrpc, 1 for subs, 3 without
export interface DecoratedRpc$Method<CodecResult, SubscriptionResult> {
  (callback: CodecCallback): SubscriptionResult;
  (arg1: CodecArg, callback: CodecCallback): SubscriptionResult;
  (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): CodecResult;
}

export interface DecoratedRpc$Section<CodecResult, SubscriptionResult> {
  [index: string]: DecoratedRpc$Method<CodecResult, SubscriptionResult>;
}

export interface DecoratedRpc<CodecResult, SubscriptionResult> {
  author: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
  chain: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
  state: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
  system: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
}

export type HashResult<CodecResult, SubscriptionResult> =
  CodecResult extends Observable<any>
  ? Observable<Hash>
  : Promise<Hash>;

export type U64Result<CodecResult, SubscriptionResult> =
  CodecResult extends Observable<any>
  ? Observable<U64>
  : Promise<U64>;

export interface QueryableStorageFunctionBase<CodecResult, SubscriptionResult> extends StorageFunction {
  (arg1?: CodecArg, arg2?: CodecArg): CodecResult;
  at: (hash: Hash | Uint8Array | string, arg1?: CodecArg, arg2?: CodecArg) => CodecResult;
  creator: StorageFunction;
  hash: (arg1?: CodecArg, arg2?: CodecArg) => HashResult<CodecResult, SubscriptionResult>;
  key: (arg1?: CodecArg, arg2?: CodecArg) => string;
  multi: (args: Array<CodecArg[] | CodecArg>, callback?: CodecCallback) => SubscriptionResult;
  size: (arg1?: CodecArg, arg2?: CodecArg) => U64Result<CodecResult, SubscriptionResult>;
}

interface QueryableStorageFunctionPromise<CodecResult, SubscriptionResult> extends QueryableStorageFunctionBase<CodecResult, SubscriptionResult> {
  (callback: CodecCallback): SubscriptionResult;
  (arg: CodecArg, callback: CodecCallback): SubscriptionResult;
  (arg1: CodecArg, arg2: CodecArg, callback: CodecCallback): SubscriptionResult;
}

export type QueryableStorageFunction<CodecResult, SubscriptionResult> =
  CodecResult extends Observable<any>
  ? QueryableStorageFunctionBase<CodecResult, SubscriptionResult>
  : QueryableStorageFunctionPromise<CodecResult, SubscriptionResult>;

export interface QueryableModuleStorage<CodecResult, SubscriptionResult> {
  [index: string]: QueryableStorageFunction<CodecResult, SubscriptionResult>;
}

export type QueryableStorageMultiArg<CodecResult, SubscriptionResult> =
  QueryableStorageFunction<CodecResult, SubscriptionResult> |
  [QueryableStorageFunction<CodecResult, SubscriptionResult>, ...Array<CodecArg>];

export type QueryableStorageMultiArgs<CodecResult, SubscriptionResult> = Array<QueryableStorageMultiArg<CodecResult, SubscriptionResult>>;

export interface QueryableStorageMultiBase<CodecResult, SubscriptionResult> {
  (calls: QueryableStorageMultiArgs<CodecResult, SubscriptionResult>): SubscriptionResult;
}

export interface QueryableStorageMultiPromise<CodecResult, SubscriptionResult> {
  (calls: QueryableStorageMultiArgs<CodecResult, SubscriptionResult>, callback: CodecCallback): SubscriptionResult;
}

export type QueryableStorageMulti<CodecResult, SubscriptionResult> =
  CodecResult extends Observable<any>
  ? QueryableStorageMultiBase<CodecResult, SubscriptionResult>
  : QueryableStorageMultiPromise<CodecResult, SubscriptionResult>;

export interface QueryableStorage<CodecResult, SubscriptionResult> {
  [index: string]: QueryableModuleStorage<CodecResult, SubscriptionResult>;
}

export interface SubmittableExtrinsicFunction<CodecResult, SubscriptionResult> extends MethodFunction {
  (...params: Array<CodecArg>): SubmittableExtrinsic<CodecResult, SubscriptionResult>;
}

export interface SubmittableModuleExtrinsics<CodecResult, SubscriptionResult> {
  [index: string]: SubmittableExtrinsicFunction<CodecResult, SubscriptionResult>;
}

export interface SubmittableExtrinsics<CodecResult, SubscriptionResult> {
  (extrinsic: Uint8Array | string): SubmittableExtrinsic<CodecResult, SubscriptionResult>;
  [index: string]: SubmittableModuleExtrinsics<CodecResult, SubscriptionResult>;
}

export interface DeriveMethodBase<CodecResult, SubscriptionResult> {
  (...params: Array<CodecArg>): CodecResult;
}

export type DeriveSection<URI, Section> = {
  [K in keyof Section]: OnCallFunction<URI, any, any>;
};

export type Derive<URI, AllSections> = {
  [K in keyof AllSections]: DeriveSection<URI, AllSections[K]>;
};

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

export interface ApiInterface$Decorated<URI, CodecResult, SubscriptionResult> {
  genesisHash: Hash;
  hasSubscriptions: boolean;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  derive: Derive<URI>;
  query: QueryableStorage<CodecResult, SubscriptionResult>;
  queryMulti: QueryableStorageMulti<CodecResult, SubscriptionResult>;
  rpc: DecoratedRpc<CodecResult, SubscriptionResult>;
  tx: SubmittableExtrinsics<CodecResult, SubscriptionResult>;
  signer?: Signer;
}

export type ApiInterface$Rx = ApiInterface$Decorated<'Observable', RxResult, RxResult>;

export type ApiInterface$Events = RpcRxInterface$Events | 'ready';

export interface ApiBaseInterface<CodecResult, SubscriptionResult> extends Readonly<ApiInterface$Decorated<URI>> {
  readonly type: ApiType;

  on: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
  once: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
}

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

export { ApiType, HKT } from './hkt';
