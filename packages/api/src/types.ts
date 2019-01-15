// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface$Events } from '@polkadot/rpc-rx/types';
import { EventRecord, ExtrinsicStatus, Hash, Metadata, RuntimeVersion } from '@polkadot/types/index';
import { MethodFunction } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { Constructor } from '@polkadot/types/types';

import SubmittableExtrinsic from './SubmittableExtrinsic';

export type ApiInterface$Events = RpcRxInterface$Events | 'ready';

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

export type DecoratedRpc$Method<OnCall> = (...params: Array<any>) => OnCall;

export interface DecoratedRpc$Section<OnCall> {
  [index: string]: DecoratedRpc$Method<OnCall>;
}

export interface DecoratedRpc<OnCall> {
  author: DecoratedRpc$Section<OnCall>;
  chain: DecoratedRpc$Section<OnCall>;
  state: DecoratedRpc$Section<OnCall>;
  system: DecoratedRpc$Section<OnCall>;
}

export interface QueryableStorageFunction<OnCall> extends StorageFunction {
  (arg?: any): OnCall;
  at: (hash: Hash, arg?: any) => OnCall;
}

export interface QueryableModuleStorage<OnCall> {
  [index: string]: QueryableStorageFunction<OnCall>;
}

export interface QueryableStorage<OnCall> {
  [index: string]: QueryableModuleStorage<OnCall>;
}

export interface SubmittableExtrinsicFunction<OnCall> extends MethodFunction {
  (...args: any[]): SubmittableExtrinsic<OnCall>;
}

export interface SubmittableModuleExtrinsics<OnCall> {
  [index: string]: SubmittableExtrinsicFunction<OnCall>;
}

export interface SubmittableExtrinsics<OnCall> {
  [index: string]: SubmittableModuleExtrinsics<OnCall>;
}

export type SubmittableSendResult = {
  events?: Array<EventRecord>,
  status: ExtrinsicStatus,
  type: string
};

export type DeriveMethod<OnCall> = (...params: Array<any>) => OnCall;

export interface DeriveSection<OnCall> {
  [index: string]: DeriveMethod<OnCall>;
}

export interface Derive<OnCall> {
  [index: string]: DeriveSection<OnCall>;
}

export interface ApiBaseInterface<OnCall> {
  readonly genesisHash: Hash;
  readonly hasSubscriptions: boolean;
  readonly runtimeMetadata: Metadata;
  readonly runtimeVersion: RuntimeVersion;
  readonly query: QueryableStorage<OnCall>;
  readonly rpc: DecoratedRpc<OnCall>;
  readonly tx: SubmittableExtrinsics<OnCall>;

  on: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
  once: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
}
