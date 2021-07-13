// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableRegistry } from '../interfaces/metadata';
import type { SiLookupTypeId, SiType } from '../interfaces/scaleInfo';

import { assert } from '@polkadot/util';

export function typeLookup ({ types }: PortableRegistry, typeIndex: SiLookupTypeId): SiType {
  const type = types[typeIndex.toNumber()];

  assert(type, () => `Unable to find lookupTypeId ${typeIndex.toNumber()} in registry`);

  return type;
}
