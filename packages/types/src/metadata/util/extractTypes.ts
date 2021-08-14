// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '../../types';

// we are attempting to avoid circular refs, hence the path import
import { getTypeDef } from '../../create/getTypeDef';

type Extracted = string | Extracted[];

/** @internal */
export function extractTypes (types: string[]): Extracted[] {
  return types.map((type): Extracted => {
    const decoded = getTypeDef(type);

    switch (decoded.info) {
      case 'Plain':
        return decoded.type;

      case 'BTreeSet':
      case 'Compact':
      case 'Option':
      case 'Range':
      case 'Vec':
      case 'VecFixed':
        return extractTypes([(decoded.sub as TypeDef).type]);

      case 'BTreeMap':
      case 'HashMap':
      case 'Result':
      case 'Tuple':
        return extractTypes((decoded.sub as TypeDef[]).map(({ type }) => type));

      default:
        throw new Error(`Unhandled: Unable to create and validate type from ${type}`);
    }
  });
}
