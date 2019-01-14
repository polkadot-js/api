// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface$Events } from '@polkadot/rpc-rx/types';
import { EventRecord, ExtrinsicStatus, Hash, Metadata, RuntimeVersion } from '@polkadot/types/index';
import { Constructor } from '@polkadot/types/types';

export type ApiInterface$Events = RpcRxInterface$Events | 'ready';

export interface ApiBaseInterface<R, S, E, D> {
  readonly genesisHash: Hash;
  readonly hasSubscriptions: boolean;
  readonly runtimeMetadata: Metadata;
  readonly runtimeVersion: RuntimeVersion;
  readonly derive: D;
  readonly query: S;
  readonly rpc: R;
  readonly tx: E;

  on: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
  once: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => this;
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

export type SubmittableSendResult = {
  events?: Array<EventRecord>,
  status: ExtrinsicStatus,
  type: string
};
