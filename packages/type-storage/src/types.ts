// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageFunction } from '@polkadot/types/StorageKey';

import * as substrate from './substrate';

type Substrate = keyof typeof substrate;

export interface ModuleStorage {
  [key: string]: StorageFunction;
}

export interface Storage {
  [key: string]: ModuleStorage; // Will hold modules returned by state_getMetadata
  substrate: { [key in Substrate]: StorageFunction };
}
