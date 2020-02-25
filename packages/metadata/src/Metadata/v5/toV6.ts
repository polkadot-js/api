// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV5, MetadataV6, ModuleMetadataV6 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/** @internal */
export default function toV6 (registry: Registry, { modules }: MetadataV5): MetadataV6 {
  return registry.createType('MetadataV6', {
    modules: modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV6 =>
      registry.createType('ModuleMetadataV6', {
        calls,
        constants: [],
        events,
        name,
        prefix,
        storage
      })
    )
  });
}
