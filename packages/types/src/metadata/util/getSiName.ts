// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ILookup } from '@polkadot/types-create/types';
import type { SiLookupTypeId } from '../../interfaces';

export function getSiName (lookup: ILookup, type: SiLookupTypeId): string {
  const typeDef = lookup.getTypeDef(type);

  return typeDef.lookupName || typeDef.type;
}
