// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ModuleStorage, Storage } from './types';

import Metadata from '@polkadot/types/Metadata';
import { stringLowerFirst } from '@polkadot/util/string';

import createFunction from './utils/createFunction';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param storage - A storage object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata (storage: Storage, metadata: Metadata) {
  const result = Object.keys(storage).reduce((result, key) => {
    result[key] = storage[key];

    return result;
  }, {} as Storage);

  return metadata.modules.reduce((result, moduleMetadata) => {
    if (!moduleMetadata.storage) {
      return result;
    }

    const prefix = moduleMetadata.storage.prefix.toString();

    result[stringLowerFirst(prefix)] = moduleMetadata.storage.functions.reduce((newModule, func) => {
      // Lowercase the 'f' in storage.balances.freeBalance
      newModule[stringLowerFirst(func.name.toString())] = createFunction(prefix, func.name, func);

      return newModule;
    }, {} as ModuleStorage);

    return result;
  }, result);
}
