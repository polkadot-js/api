// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModulesWithMethods } from '@polkadot/types/primitive/Method';
import Metadata from '@polkadot/types/Metadata';

import fromV0 from './v0';
import fromV4 from './v4';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param extrinsics - An extrinsics object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata (metadata: Metadata): ModulesWithMethods {
  if (metadata.version === 4) {
    // For v4, we use fromV4 function
    return fromV4(metadata.asV4);
  }

  // For v0-v3 we convert to v0, and use the fromV0 function to parse
  return fromV0(metadata.asV0);
}
