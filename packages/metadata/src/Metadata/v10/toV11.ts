// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV10, MetadataV11 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types';

/** @internal */
export default function toV11 (registry: Registry, { modules }: MetadataV10): MetadataV11 {
  return createType(registry, 'MetadataV11', {
    modules,
    // This is new in V11, pass V0 here - something non-existing, telling the API to use
    // the fallback for this information (on-chain detection)
    extrinsic: {
      version: 0,
      signedExtensions: []
    }
  });
}
