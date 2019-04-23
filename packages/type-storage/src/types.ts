// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageFunctionMetadata as MetaV0 } from '@polkadot/types/Metadata/v0/Modules';
import { StorageFunctionMetadata as MetaV4 } from '@polkadot/types/Metadata/v4/Storage';
import { StorageFunction } from '@polkadot/types/primitive/StorageKey';

import * as substrate from './substrate';

type Substrate = keyof typeof substrate;

export interface ModuleStorage<Meta extends MetaV0 | MetaV4> {
  [key: string]: StorageFunction<Meta>;
}

export interface Storage<Meta extends MetaV0 | MetaV4> {
  [key: string]: ModuleStorage<Meta>; // Will hold modules returned by state_getMetadata
  substrate: { [key in Substrate]: StorageFunction<Meta> };
}
