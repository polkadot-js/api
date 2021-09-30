// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataV11, MetadataV12, ModuleMetadataV12 } from '../../interfaces/metadata';
import type { Registry } from '../../types';

/**
 * @internal
 **/
export function toV12 (registry: Registry, { extrinsic, modules }: MetadataV11): MetadataV12 {
  return registry.createType('MetadataV12', {
    extrinsic,
    modules: modules.map((mod): ModuleMetadataV12 =>
      registry.createType('ModuleMetadataV12', {
        ...mod,
        index: 255
      })
    )
  });
}
