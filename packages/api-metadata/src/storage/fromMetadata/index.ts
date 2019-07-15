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
  return metadata.asV6.modules.reduce((result, moduleMetadata): Storage => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const { name, prefix } = moduleMetadata;
    const section = stringCamelCase(name.toString());

    // For access, we change the index names, i.e. Balances.FreeBalance -> balances.freeBalance
    result[section] = moduleMetadata.storage.unwrap().reduce((newModule, meta): ModuleStorage => {
      const method = meta.name.toString();

      newModule[stringLowerFirst(method)] = createFunction({
        meta,
        method,
        prefix: prefix.toString(),
        section
      });

      return newModule;
    }, {} as unknown as ModuleStorage);

    return result;
  }, { ...storage });
}
