// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ExtrinsicFunction } from '@polkadot/extrinsics/types';
import { FunctionMetadata } from '@polkadot/types/Metadata';
import { StorageFunction } from '@polkadot/types/StorageKey';

import { Observable } from 'rxjs';

import SubmittableExtrinsic from './SubmittableExtrinsic';

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
