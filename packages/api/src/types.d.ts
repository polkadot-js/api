// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import RpcRx from '@polkadot/rpc-rx/index';
import { RpcRxInterface$Events } from '@polkadot/rpc-rx/types';
import { Hash, RuntimeVersion } from '@polkadot/types/index';
import RuntimeMetadata, { FunctionMetadata } from '@polkadot/types/Metadata';
import { ExtrinsicFunction } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';

export type ApiInterface$Events = RpcRxInterface$Events | 'ready';

export interface ApiBaseInterface<R, S, E> {
  readonly genesisHash: Hash;
  readonly runtimeMetadata: RuntimeMetadata;
  readonly runtimeVersion: RuntimeVersion;
  readonly query: S;
  readonly rpc: R;
  readonly tx: E

  on: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => void;
}
