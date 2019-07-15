// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV5 from './Metadata';
import MetadataV6 from '../v6';

/**
 * Convert from MetadataV5 to MetadataV6
 * See https://github.com/polkadot-js/api/issues/1043 for details
 */
export default function toV6 (metadataV5: MetadataV5): MetadataV6 {
  return new MetadataV6({
    // FIXME, this needs typing, not any
    modules: metadataV5.modules.map((modul): any => {
      return {
        name: modul.name,
        prefix: modul.prefix,
        storage: modul.storage,
        calls: modul.calls,
        events: modul.events,
        constants: []
      };
    })
  });
}
