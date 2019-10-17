// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV7 from './Metadata';
import MetadataV8 from '../v8';
import { ModuleMetadataV8 } from '../v8/Metadata';

/**
 * Convert from MetadataV7 to MetadataV8
 */
export default function toV8 ({ modules }: MetadataV7): MetadataV8 {
  return new MetadataV8({
    modules: modules.map(({ calls, constants, events, name, storage }): ModuleMetadataV8 =>
      new ModuleMetadataV8({
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
