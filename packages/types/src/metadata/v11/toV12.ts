// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataV11, MetadataV12, ModuleMetadataV12 } from '../../interfaces/metadata';

/**
 * @internal
 **/
export function toV12 (registry: Registry, { extrinsic, modules }: MetadataV11): MetadataV12 {
  return registry.createTypeUnsafe('MetadataV12', [{
    extrinsic,
    modules: modules.map((mod): ModuleMetadataV12 =>
      // ensure that we unwrap all options (conversion is problematic otherwise)
      registry.createTypeUnsafe('ModuleMetadataV12', [{
        ...mod,
        calls: mod.calls.unwrapOr(null),
        events: mod.events.unwrapOr(null),
        index: 255,
        storage: mod.storage.unwrapOr(null)
      }])
    )
  }]);
}
