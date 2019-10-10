// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV6 from './Metadata';
import MetadataV7 from '../v7';
import { ModuleMetadataV7 } from '../v7/Metadata';
import { StorageMetadata as StorageV7 } from '../v7/Storage';

/**
 * Convert from MetadataV6 to MetadataV7
 */
export default function toV7 ({ modules }: MetadataV6): MetadataV7 {
  return new MetadataV7({
    modules: modules.map(({ calls, constants, events, name, prefix, storage }): ModuleMetadataV7 =>
      new ModuleMetadataV7({
        calls,
        constants,
        events,
        name,
        storage: storage.isSome
          ? new StorageV7({ prefix, items: storage.unwrap() })
          : null
      })
    )
  });
}
