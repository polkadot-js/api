// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Metadata, { RuntimeModuleMetadata } from '@polkadot/api-codec/Metadata';

import { createFunction } from './utils/createFunction';
import { ModuleStorage, Storage } from './types';

/**
 * Sets the 1st letter of a string to lowercase.
 *
 * @param s - The string to lower first letter.
 * TODO Move to @polkadot/util
 */
function lowerFirstLetter (s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param storage - A storage object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export const fromMetadata = (storage: Storage, metadata: Metadata) => {
  metadata.modules.forEach((moduleMetadata: RuntimeModuleMetadata) => {
    if (!moduleMetadata.storage) {
      return;
    }

    const newModule: ModuleStorage = {
    };

    moduleMetadata.storage.functions.forEach(func => {
      // Lowercase the 'f' in storage.balances.freeBalance
      newModule[lowerFirstLetter(func.name.toString())] = createFunction(moduleMetadata.prefix, func);
    });
    storage[moduleMetadata.prefix.toString()] = newModule;
  });
  return storage;
};
