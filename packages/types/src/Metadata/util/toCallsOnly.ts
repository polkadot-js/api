// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV7 from '../v7';

/**
 * @description Convert from MetadataV7 to a stripped representation of MetadataV7
 */
export default function toCallsOnly ({ modules }: MetadataV7): any {
  return new MetadataV7({
    // FIXME, this needs typing, not any
    modules: modules.map(({ calls, name }): any => ({
      name,
      calls
    }))
  }).toJSON();
}
