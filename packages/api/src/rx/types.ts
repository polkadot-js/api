// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventRecord, ExtrinsicStatus, Hash } from '@polkadot/types/index';
import { Codec } from '@polkadot/types/types';
import { MethodFunction } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { ApiBaseInterface } from '../types';

import { Observable } from 'rxjs';
import RpcRx from '@polkadot/rpc-rx/index';

import SubmittableExtrinsic from './SubmittableExtrinsic';

export interface QueryableStorageFunction extends StorageFunction {
  (arg?: any): Observable<Codec | null | undefined>;
  at: (hash: Hash, arg?: any) => Observable<Codec | null | undefined>;
}

export interface QueryableModuleStorage {
  [index: string]: QueryableStorageFunction;
}

export interface QueryableStorage {
  [index: string]: QueryableModuleStorage;
}

export interface SubmittableExtrinsicFunction extends MethodFunction {
  (...args: any[]): SubmittableExtrinsic;
}

export interface SubmittableModuleExtrinsics {
  [index: string]: SubmittableExtrinsicFunction;
}

export interface SubmittableExtrinsics {
  [index: string]: SubmittableModuleExtrinsics;
}

export interface ApiRxInterface extends ApiBaseInterface<RpcRx, QueryableStorage, SubmittableExtrinsics> {
  readonly isConnected: Observable<boolean>;
  readonly isReady: Observable<ApiRxInterface>;
}

export type SubmittableSendResult = {
  events?: Array<EventRecord>,
  status: ExtrinsicStatus,
  type: string
};
