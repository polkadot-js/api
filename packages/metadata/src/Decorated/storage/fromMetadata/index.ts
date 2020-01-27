// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';
import { ModuleStorage, Storage } from '../../types';

import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import Metadata from '../../../Metadata';
import createFunction from './createFunction';
import getStorage from './storage';

/** @internal */
export default function fromMetadata (registry: Registry, metadata: Metadata): Storage {
  return metadata.asLatest.modules.reduce((result, moduleMetadata): Storage => {
    if (moduleMetadata.storage.isNone) {
      return result;
    }

    const { name } = moduleMetadata;
    const section = stringCamelCase(name.toString());
    const unwrapped = moduleMetadata.storage.unwrap();
    const prefix = unwrapped.prefix.toString();

    // For access, we change the index names, i.e. Balances.FreeBalance -> balances.freeBalance
    result[section] = unwrapped.items.reduce((newModule, meta): ModuleStorage => {
      const method = meta.name.toString();

      newModule[stringLowerFirst(method)] = createFunction(registry, {
        meta,
        method,
        prefix,
        section
      }, { metaVersion: metadata.version });

      return newModule;
    }, {} as ModuleStorage);

    return result;
  }, { ...getStorage(registry, metadata.version) });
}
