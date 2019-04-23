// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleStorage, Storage } from './types';

import MetadataV0 from '@polkadot/types/Metadata/v0';
import MetadataV3 from '@polkadot/types/Metadata/v3/Metadata';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import createFunction from './utils/createFunction';
import storageFn from '.';
import { Metadata, TypeRegistry } from '@polkadot/types';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param storage - A storage object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata (metadata: Metadata): Storage {
  if (metadata.version <= 2) {
    return fromMetadataV0(metadata.asV0);
  }
  if (metadata.version === 3) {
    return fromMetadataV3(metadata.asV3);
  }

  throw new Error('metadata version not supported');
}

export function fromMetadataV0 (metadata: MetadataV0): Storage {
  return metadata.modules.reduce((result, moduleMetadata) => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const prefix = moduleMetadata.storage.unwrap().prefix.toString();

    // For access, we change the index names, i.e. Balances.FreeBalance -> balances.freeBalance
    result[stringLowerFirst(prefix)] = moduleMetadata.storage.unwrap().functions.reduce((newModule, func) => {
      newModule[stringLowerFirst(func.name.toString())] = createFunction(prefix, func.name, func.toInterface(prefix));

      return newModule;
    }, {} as ModuleStorage);

    return result;
  }, { ...storageFn(TypeRegistry.TYPE_REGISTRY) });
}

export function fromMetadataV3 (metadata: MetadataV3): Storage {
  return metadata.modules.reduce((result, moduleMetadata) => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const prefix = moduleMetadata.prefix.toString();

    // For access, we change the index names, i.e. Balances.FreeBalance -> balances.freeBalance
    result[stringLowerFirst(prefix)] = moduleMetadata.storage.unwrap().reduce((newModule, func) => {
      newModule[stringLowerFirst(func.name.toString())] = createFunction(prefix, func.name, func.toInterface(prefix));

      return newModule;
    }, {} as ModuleStorage);

    return result;
  }, { ...storageFn(TypeRegistry.TYPE_REGISTRY) });
}
