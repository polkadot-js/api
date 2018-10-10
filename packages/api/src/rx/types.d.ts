// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiBaseInterface } from '../types';

import { Observable } from 'rxjs';
import { ExtrinsicFunction } from '@polkadot/extrinsics/types';
import RpcRx from '@polkadot/rpc-rx/index';
import { Base } from '@polkadot/types/codec';
import { Hash, RuntimeVersion } from '@polkadot/types/index';
import RuntimeMetadata, { FunctionMetadata } from '@polkadot/types/Metadata';
import { StorageFunction } from '@polkadot/types/StorageKey';

import SubmittableExtrinsic from './SubmittableExtrinsic';

export interface QueryableStorageFunction extends StorageFunction {
  (arg?: any): Observable<Base | null | undefined>;
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

export interface RxApiInterface extends ApiBaseInterface<RpcRx, QueryableStorage, SubmittableExtrinsics>  {
  readonly isConnected: Observable<boolean>;
  readonly isReady: Observable<RxApiInterface>;
}
