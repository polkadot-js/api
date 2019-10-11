// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';
import { ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';

export interface ConstantCodec extends Codec {
  meta: ModuleConstantMetadataLatest;
}

export type ModuleConstants = Record<string, Codec>;

export type Constants = Record<string, ModuleConstants>;

export interface ModuleStorage {
  [key: string]: StorageEntry;
}

export interface Storage {
  [key: string]: ModuleStorage; // Will hold modules returned by state_getMetadata
  substrate: { [key: string]: StorageEntry };
}
