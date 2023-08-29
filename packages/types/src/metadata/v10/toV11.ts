// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataV10, MetadataV11 } from '../../interfaces/metadata/index.js';

/** @internal */
export function toV11 (registry: Registry, { modules }: MetadataV10): MetadataV11 {
  return registry.createTypeUnsafe('MetadataV11', [{
    // This is new in V11, pass V0 here - something non-existing, telling the API to use
    // the fallback for this information (on-chain detection)
    extrinsic: {
      signedExtensions: [],
      version: 0
    },
    modules
  }]);
}
