// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntry } from '@polkadot/types/primitive/StorageKey';

export * from './consts/types';

export interface ModuleStorage {
  [key: string]: StorageEntry;
}

export interface Storage {
  [key: string]: ModuleStorage; // Will hold modules returned by state_getMetadata
  substrate: { [key: string]: StorageEntry };
}
