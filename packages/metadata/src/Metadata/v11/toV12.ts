// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV11, MetadataV12, ModuleMetadataV12 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

/**
 * @internal
 **/
export default function toV12 (registry: Registry, { extrinsic, modules }: MetadataV11): MetadataV12 {
  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map((mod): ModuleMetadataV12 =>
      registry.createType('ModuleMetadataV12', { ...mod })
    )
  });
}
