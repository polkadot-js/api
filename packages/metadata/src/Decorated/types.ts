// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

export interface ConstantCodec extends Codec {
  meta: ModuleConstantMetadataLatest;
}

export type ModuleConstants = Record<string, ConstantCodec>;

export type ModuleStorage = Record<string, StorageEntry>;

export interface Constants {
  [key: string]: ModuleConstants;
}

export interface Storage {
  [key: string]: ModuleStorage;
  substrate: ModuleStorage;
}
