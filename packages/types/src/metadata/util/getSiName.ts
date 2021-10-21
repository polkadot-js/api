// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableRegistry, SiLookupTypeId } from '../../interfaces';

export function getSiName (lookup: PortableRegistry, type: SiLookupTypeId): [string, string?] {
  const typeDef = lookup.getTypeDef(type);

  return [typeDef.lookupName || typeDef.type, typeDef.typeName];
}
