// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableRegistry, SiLookupTypeId, SiVariant } from '../../interfaces';
import type { Text } from '../../primitive';

import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import { lazyMethods } from '../../create/lazy';

type VariantHolder = {
  unwrap (): {
    type: SiLookupTypeId
  }
}

export function objectNameFirstLower ({ name }: { name: string | Text }): string {
  return stringLowerFirst(name);
}

export function objectNameToCamel ({ name }: { name: string | Text }): string {
  return stringCamelCase(name);
}

export function objectNameToString ({ name }: { name: string | Text }): string {
  return name.toString();
}

export function lazyVariant <T> (lookup: PortableRegistry, source: VariantHolder, getName: (v: SiVariant) => string, creator: (v: SiVariant) => T): Record<string, T> {
  return lazyMethods({}, lookup.getSiType(source.unwrap().type).def.asVariant.variants, creator, getName);
}
