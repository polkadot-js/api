// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { MetadataV11, MetadataV12, ModuleMetadataV12 } from '../../interfaces/metadata';

/**
 * @internal
 **/
export function toV12 (registry: CodecRegistry, { extrinsic, modules }: MetadataV11): MetadataV12 {
  return registry.createTypeUnsafe('MetadataV12', [{
    extrinsic,
    modules: modules.map((mod): ModuleMetadataV12 =>
      registry.createTypeUnsafe('ModuleMetadataV12', [{
        ...mod,
        index: 255
      }])
    )
  }]);
}
