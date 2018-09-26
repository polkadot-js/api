// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { StorageFunctionMetadata } from '@polkadot/api-codec/Metadata';

import * as wellKnownKeys from './wellKnownKeys';

type WellKnownKeys = keyof typeof wellKnownKeys;

export interface StorageFunction extends StorageFunctionMetadata {
  (arg: any): Uint8Array;
}

export interface ModuleStorage {
  [key: string]: StorageFunction;
}

export interface Storage {
  [key: string]: ModuleStorage; // Will hold modules returned by state_getMetadata
  wellKnownKeys: { [key in WellKnownKeys]: StorageFunction };
}
