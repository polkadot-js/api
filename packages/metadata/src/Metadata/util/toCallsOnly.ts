// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV8 } from '@polkadot/types/interfaces/metadata';
import { AnyJsonObject, Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types';

/**
 * @description Convert from MetadataV8 to a stripped representation of MetadataV8
 */
export default function toCallsOnly (registry: Registry, { modules }: MetadataV8): AnyJsonObject | string {
  return createType(registry, 'MetadataV8', {
    // FIXME, this needs typing, not any
    modules: modules.map(({ calls, name }): any => ({
      name,
      calls
    }))
  }).toJSON();
}
