// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataLatest } from '@polkadot/types/interfaces/metadata';
import { AnyJson, Registry } from '@polkadot/types/types';

/** @internal */
export default function toCallsOnly (registry: Registry, { extrinsic, modules }: MetadataLatest): AnyJson {
  return registry.createType('MetadataLatest', {
    // FIXME, this needs typing, not any
    modules: modules.map(({ calls, name }): any => ({
      name,
      calls
    })),
    extrinsic
  }).toJSON();
}
