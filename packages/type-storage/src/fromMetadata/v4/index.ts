// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleStorage, Storage } from '../../types';

import MetadataV4 from '@polkadot/types/Metadata/v4';
import { stringLowerFirst } from '@polkadot/util';

import createFunction from './createFunction';
import { storage } from './storage';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param storage - A storage object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromV4 (metadata: MetadataV4): Storage {
  return metadata.modules.reduce((result, moduleMetadata) => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const prefix = moduleMetadata.prefix;

    // For access, we change the index names, i.e. Balances.FreeBalance -> balances.freeBalance
    result[stringLowerFirst(prefix.toString())] = moduleMetadata.storage.unwrap().reduce((newModule, storageFnMeta) => {
      newModule[stringLowerFirst(storageFnMeta.name.toString())] = createFunction(prefix, storageFnMeta.name, storageFnMeta);

      return newModule;
    }, {} as ModuleStorage);

    return result;
  }, { ...storage });
}
