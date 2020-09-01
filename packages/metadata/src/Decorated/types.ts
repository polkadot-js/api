// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Constants {}

export type ModuleConstants = Record<string, Codec>;

export interface ConstantCodec extends Codec {
  meta: ModuleConstantMetadataLatest;
}

export type ModuleStorage = Record<string, StorageEntry>;

export interface Storage {
  [key: string]: ModuleStorage; // Will hold modules returned by state_getMetadata
  substrate: ModuleStorage;
}
