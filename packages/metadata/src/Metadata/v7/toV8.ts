// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV7, MetadataV8, ModuleMetadataV8 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types';

/** @internal */
export default function toV8 (registry: Registry, { modules }: MetadataV7): MetadataV8 {
  return createType(registry, 'MetadataV8', {
    modules: modules.map(({ calls, constants, events, name, storage }): ModuleMetadataV8 =>
      createType(registry, 'ModuleMetadataV8', {
        calls,
        constants,
        errors: [],
        events,
        name,
        storage
      })
    )
  });
}
