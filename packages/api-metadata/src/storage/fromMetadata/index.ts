// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleStorage, Storage } from '../types';

import Metadata from '@polkadot/types/Metadata';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import createFunction from './createFunction';
import { storage } from './storage';

/**
 * Return an object with the modules and the functions to access their storage.
 *
 * @param metadata - The metadata
 */
export default function fromMetadata (metadata: Metadata): Storage {
  return metadata.asV6.modules.reduce((result, moduleMetadata) => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const { name, prefix } = moduleMetadata;

    // For access, we change the index names, i.e. Balances.FreeBalance -> balances.freeBalance
    result[stringCamelCase(name.toString())] = moduleMetadata.storage.unwrap().reduce((newModule, storageFnMeta) => {
      newModule[stringLowerFirst(storageFnMeta.name.toString())] = createFunction(prefix, storageFnMeta.name, storageFnMeta);

      return newModule;
    }, {} as ModuleStorage);

    return result;
  }, { ...storage });
}
