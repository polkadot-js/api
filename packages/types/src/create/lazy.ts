// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SiLookupTypeId, SiVariant } from '../interfaces';
import type { PortableRegistry } from '../metadata';

import { lazyMethod } from '@polkadot/util';

interface TypeHolder {
  type: SiLookupTypeId
}

export function lazyVariants <T> (lookup: PortableRegistry, { type }: TypeHolder, getName: (v: SiVariant) => string, creator: (v: SiVariant) => T): Record<string, T> & { $path?: string } {
  const result: Record<string, T> & { $path?: string } = {};
  const siType = lookup.getSiType(type);
  const variants = siType.def.asVariant.variants;

  result.$path = siType.path.length
    ? siType.path.join('::')
    : undefined;

  for (let i = 0; i < variants.length; i++) {
    lazyMethod(result, variants[i], creator, getName);
  }

  return result;
}
