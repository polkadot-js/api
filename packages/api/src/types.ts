// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface$Events } from '@polkadot/rpc-rx/types';
import { Hash, Metadata, RuntimeVersion } from '@polkadot/types/index';
import { CodecArg, CodecCallback, Constructor } from '@polkadot/types/types';
import { MethodFunction } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';

import { RxResult } from './rx/types';
import SubmittableExtrinsic from './SubmittableExtrinsic';

export type OnCallDefinition<CodecResult, SubscriptionResult> = (method: OnCallFunction<RxResult, RxResult>, params?: Array<CodecArg>, callback?: CodecCallback) => CodecResult | SubscriptionResult;

export type OnCallFunction<CodecResult, SubscriptionResult> = (...params: Array<CodecArg>) => CodecResult | SubscriptionResult;

export type DecoratedRpc$Method<CodecResult, SubscriptionResult> = (...params: Array<CodecArg>) => CodecResult | SubscriptionResult;

export interface DecoratedRpc$Section<CodecResult, SubscriptionResult> {
  [index: string]: DecoratedRpc$Method<CodecResult, SubscriptionResult>;
}

export interface DecoratedRpc<CodecResult, SubscriptionResult> {
  author: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
  chain: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
  state: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
  system: DecoratedRpc$Section<CodecResult, SubscriptionResult>;
}

export interface QueryableStorageFunctionBase<CodecResult, SubscriptionResult> extends StorageFunction {
  (arg?: CodecArg): CodecResult;
  (arg: CodecArg, callback: CodecCallback): SubscriptionResult;
  (callback: CodecCallback): SubscriptionResult;
  at: (hash: Hash | Uint8Array | string, arg?: CodecArg) => CodecResult;
  hash: (arg?: CodecArg) => CodecResult; // Observable<Hash>
  key: (arg?: CodecArg) => string;
  size: (arg?: CodecArg) => CodecResult; // Observable<U64>
}

interface QueryableStorageFunctionPromise<CodecResult, SubscriptionResult> extends QueryableStorageFunctionBase<CodecResult, SubscriptionResult> {
  (arg?: CodecArg, cb?: CodecCallback): CodecResult | SubscriptionResult;
}

export type QueryableStorageFunction<CodecResult, SubscriptionResult> =
  CodecResult extends Observable<any>
    ? QueryableStorageFunctionBase<CodecResult, SubscriptionResult>
    : QueryableStorageFunctionPromise<CodecResult, SubscriptionResult>;

export interface QueryableModuleStorage<CodecResult, SubscriptionResult> {
  [index: string]: QueryableStorageFunction<CodecResult, SubscriptionResult>;
}

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
  [index: string]: SubmittableModuleExtrinsics<CodecResult, SubscriptionResult>;
}

export type DeriveMethod<CodecResult, SubscriptionResult> = (...params: Array<CodecArg>) => CodecResult | SubscriptionResult;

export interface DeriveSection<CodecResult, SubscriptionResult> {
  [index: string]: DeriveMethod<CodecResult, SubscriptionResult>;
}

export interface Derive<CodecResult, SubscriptionResult> {
  [index: string]: DeriveSection<CodecResult, SubscriptionResult>;
}

export interface ApiOptions {
  /**
   * @description Transport Provider from rpc-provider. If not specified, it will default to
   * connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`
   */
  provider?: ProviderInterface;
  /**
   * @description Additional types used by runtime modules. This is nessusary if the runtime modules
   * uses types not available in the base Substrate runtime.
   */
  types?: { [name: string]: Constructor };
}

export interface ApiInterface$Decorated<CodecResult, SubscriptionResult> {
  genesisHash: Hash;
  hasSubscriptions: boolean;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  derive: Derive<CodecResult, SubscriptionResult>;
  query: QueryableStorage<CodecResult, SubscriptionResult>;
  rpc: DecoratedRpc<CodecResult, SubscriptionResult>;
  tx: SubmittableExtrinsics<CodecResult, SubscriptionResult>;
}

export type ApiInterface$Rx = ApiInterface$Decorated<RxResult, RxResult>;

export type ApiInterface$Events = RpcRxInterface$Events | 'ready';

export interface ApiBaseInterface<CodecResult, SubscriptionResult> extends Readonly<ApiInterface$Decorated<CodecResult, SubscriptionResult>> {
  on: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
  once: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
}
