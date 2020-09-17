// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AugmentedConst, QueryableConsts, QueryableModuleConsts } from '@polkadot/api/types/consts';
import { Codec } from '@polkadot/types/types';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';

export interface ModuleStorage {
  [key: string]: StorageEntry;
}

export type Constants = QueryableConsts<'rxjs'>;

export type ConstantCodec = Codec & AugmentedConst<'rxjs'>;

export type ModuleConstants = QueryableModuleConsts;

export interface Storage {
  [key: string]: ModuleStorage;
  substrate: ModuleStorage;
}
