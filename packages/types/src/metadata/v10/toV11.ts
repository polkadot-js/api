// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataV10, MetadataV11 } from '../../interfaces/metadata';
import type { Registry } from '../../types';

/** @internal */
export function toV11 (registry: CodecRegistry, { modules }: MetadataV10): MetadataV11 {
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
