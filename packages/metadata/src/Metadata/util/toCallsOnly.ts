// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJsonObject, Registry } from '@polkadot/types/types';

import MetadataV8 from '../v8';

/**
 * @description Convert from MetadataV8 to a stripped representation of MetadataV8
 */
export default function toCallsOnly (registry: Registry, { modules }: MetadataV8): AnyJsonObject | string {
  return new MetadataV8(registry, {
    // FIXME, this needs typing, not any
    modules: modules.map(({ calls, name }): any => ({
      name,
      calls
    }))
  }).toJSON();
}
