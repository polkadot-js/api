// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataV10, MetadataV11 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/** @internal */
export default function toV11 (registry: Registry, { modules }: MetadataV10): MetadataV11 {
  return registry.createType('MetadataV11', {
    // This is new in V11, pass V0 here - something non-existing, telling the API to use
    // the fallback for this information (on-chain detection)
    extrinsic: {
      signedExtensions: [],
      version: 0
    },
    modules
  });
}
