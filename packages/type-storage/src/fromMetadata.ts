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

function upperFirstLetter (s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param storage - A storage object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export function fromMetadata (storage: Storage, metadata: Metadata) {
  // Dont' clobber the input, create new
  const result = Object.keys(storage).reduce((result, key) => {
    result[key] = storage[key];

    return result;
  }, {} as Storage);

  return metadata.modules.reduce((result, moduleMetadata: RuntimeModuleMetadata) => {
    if (!moduleMetadata.storage) {
      return result;
    }

    console.error(moduleMetadata, moduleMetadata.prefix);

    const modname = moduleMetadata.prefix.toString().toLowerCase();
    const prefix = upperFirstLetter(modname);

    result[moduleMetadata.prefix.toString()] = moduleMetadata.storage.functions.reduce((newModule, func) => {
      // Lowercase the 'f' in storage.balances.freeBalance
      newModule[lowerFirstLetter(func.name.toString())] = createFunction(prefix, func.name, func);

      return newModule;
    }, {} as ModuleStorage);

    return result;
  }, result);
}
