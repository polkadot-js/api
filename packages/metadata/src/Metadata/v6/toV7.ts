// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV6, MetadataV7, ModuleMetadataV7 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types';

/**
 * Convert from MetadataV6 to MetadataV7
 */
export default function toV7 (registry: Registry, { modules }: MetadataV6): MetadataV7 {
  return createType(registry, 'MetadataV7', {
    modules: modules.map(({ calls, constants, events, name, prefix, storage }): ModuleMetadataV7 =>
      createType(registry, 'ModuleMetadataV7', {
        calls,
        constants,
        events,
        name,
        storage: storage.isSome
          ? createType(registry, 'StorageMetadataV7', { prefix, items: storage.unwrap() })
          : null
      })
    )
  });
}
