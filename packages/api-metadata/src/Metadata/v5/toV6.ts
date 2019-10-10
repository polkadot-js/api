// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV5 from './Metadata';
import MetadataV6 from '../v6';
import { ModuleMetadataV6 } from '../v6/Metadata';

/**
 * Convert from MetadataV5 to MetadataV6
 * See https://github.com/polkadot-js/api/issues/1043 for details
 */
export default function toV6 ({ modules }: MetadataV5): MetadataV6 {
  return new MetadataV6({
    modules: modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV6 =>
      new ModuleMetadataV6({
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
