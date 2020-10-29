// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataV11, MetadataV12, ModuleMetadataV12 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/**
 * @internal
 **/
export default function toV12 (registry: Registry, { extrinsic, modules }: MetadataV11): MetadataV12 {
  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map((mod): ModuleMetadataV12 =>
      registry.createType('ModuleMetadataV12', {
        ...mod,
        index: 255
      })
    )
  });
}
