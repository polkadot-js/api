// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import RpcRx from '@polkadot/rpc-rx/index';
import { RxRpcInterface$Events } from '@polkadot/rpc-rx/types';
import { Base } from '@polkadot/types/codec';
import { Hash, RuntimeVersion } from '@polkadot/types/index';
import RuntimeMetadata, { FunctionMetadata } from '@polkadot/types/Metadata';
import { ExtrinsicFunction } from '@polkadot/extrinsics/types';
import { StorageFunction } from '@polkadot/types/StorageKey';


export type ApiInterface$Events = RxRpcInterface$Events | 'ready';

export interface ApiBaseInterface <S, E> {
  readonly genesisHash: Hash;
  readonly runtimeMetadata: RuntimeMetadata;
  readonly runtimeVersion: RuntimeVersion;
  readonly rpc: RpcRx;
  readonly st: S;
  readonly tx: E

  on: (type: ApiInterface$Events, handler: (...args: Array<any>) => any) => void;
}
