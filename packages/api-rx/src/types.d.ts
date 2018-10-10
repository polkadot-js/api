// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { ExtrinsicFunction } from '@polkadot/extrinsics/types';
import RpcRx from '@polkadot/rpc-rx/index';
import { Hash } from '@polkadot/types/index';
import { FunctionMetadata } from '@polkadot/types/Metadata';
import { StorageFunction } from '@polkadot/types/StorageKey';

import SubmittableExtrinsic from './SubmittableExtrinsic';
import on from '@polkadot/rpc-provider/mock/on';

export interface QueryableStorageFunction extends StorageFunction {
  (arg?: any): Observable<any>;
}

export interface QueryableModuleStorage {
  [index: string]: QueryableStorageFunction;
}

export interface QueryableStorage {
  [index: string]: QueryableModuleStorage;
}

export interface SubmittableExtrinsicFunction extends ExtrinsicFunction {
  (...args: any[]): SubmittableExtrinsic;
}

export interface SubmittableModuleExtrinsics {
  [index: string]: SubmittableExtrinsicFunction;
}

export interface SubmittableExtrinsics {
  [index: string]: SubmittableModuleExtrinsics;
}

export interface RxApiInterface {
  readonly genesisHash: Hash;
  readonly rpc: RpcRx;
  readonly st: QueryableStorage;
  readonly tx: SubmittableExtrinsics
}
