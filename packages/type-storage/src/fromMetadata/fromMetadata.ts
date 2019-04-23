// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Storage } from '../types';

import Metadata from '@polkadot/types/Metadata';
import { StorageFunctionMetadata as MetaV0 } from '@polkadot/types/Metadata/v0/Modules';
import { StorageFunctionMetadata as MetaV4 } from '@polkadot/types/Metadata/v4/Storage';

import fromV0 from './v0';
import fromV4 from './v4';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param storage - A storage object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata<Meta extends MetaV0 | MetaV4> (metadata: Metadata): Storage<Meta> {
  // For v0-v3 we convert to v0, and use the fromV0 function to parse
  if ([0, 1, 2, 3].includes(metadata.version)) {
    return fromV0(metadata.asV0);
  }

  // For v4, we use fromV4 function
  return fromV4(metadata.asV4);
}
