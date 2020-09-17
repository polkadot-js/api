// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataV6, MetadataV7, ModuleMetadataV7 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/** @internal */
export default function toV7 (registry: Registry, { modules }: MetadataV6): MetadataV7 {
  return registry.createType('MetadataV7', {
    modules: modules.map(({ calls, constants, events, name, prefix, storage }): ModuleMetadataV7 =>
      registry.createType('ModuleMetadataV7', {
        calls,
        constants,
        events,
        name,
        storage: storage.isSome
          ? registry.createType('StorageMetadataV7', { items: storage.unwrap(), prefix })
          : null
      })
    )
  });
}
