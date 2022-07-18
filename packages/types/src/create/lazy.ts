// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SiLookupTypeId, SiVariant } from '../interfaces';
import type { PortableRegistry } from '../metadata';

import { lazyMethod } from '@polkadot/util';

interface TypeHolder {
  type: SiLookupTypeId
}

export function lazyVariants <T> (lookup: PortableRegistry, { type }: TypeHolder, getName: (v: SiVariant) => string, creator: (v: SiVariant) => T): Record<string, T> & { $type?: string } {
  const result: Record<string, T> & { $type?: string } = {};
  const variants = lookup.getSiType(type).def.asVariant.variants;

  result.$type = lookup.getTypeDef(type).lookupName;

  for (let i = 0; i < variants.length; i++) {
    lazyMethod(result, variants[i], creator, getName);
  }

  return result;
}
