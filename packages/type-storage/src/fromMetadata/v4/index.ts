// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleStorage, Storage } from '../../types';

import MetadataV0 from '@polkadot/types/Metadata/v0';
import { StorageFunctionMetadata } from '@polkadot/types/Metadata/v4/Storage';
import { stringLowerFirst } from '@polkadot/util';

import createFunction from './createFunction';
import storage from '../..';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param storage - A storage object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromV0 (metadata: MetadataV0): Storage<StorageFunctionMetadata> {
  return metadata.modules.reduce((result, moduleMetadata) => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const prefix = moduleMetadata.storage.unwrap().prefix;

    // For access, we change the index names, i.e. Balances.FreeBalance -> balances.freeBalance
    result[stringLowerFirst(prefix.toString())] = moduleMetadata.storage.unwrap().functions.reduce((newModule, func) => {
      newModule[stringLowerFirst(func.name.toString())] = createFunction(prefix, func.name, func);

      return newModule;
    }, {} as ModuleStorage<StorageFunctionMetadata>);

    return result;
  }, { ...storage });
}
