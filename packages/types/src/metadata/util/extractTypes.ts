// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '../../types';

// we are attempting to avoid circular refs, hence the path import
import { getTypeDef } from '../../create/getTypeDef';
import { TypeDefInfo } from '../../create/types';

type Extracted = string | Extracted[];

function extractSubSingle ({ lookupName, type }: TypeDef): Extracted[] {
  return extractTypes([lookupName || type]);
}

function extractSubArray (types: TypeDef[]): Extracted[] {
  return extractTypes(types.map(({ lookupName, type }) => lookupName || type));
}

/** @internal */
export function extractTypes (types: string[]): Extracted[] {
  return types.map((type): Extracted => {
    const decoded = getTypeDef(type);

    switch (decoded.info) {
      case TypeDefInfo.Plain:
        return decoded.lookupName || decoded.type;

      case TypeDefInfo.BTreeSet:
      case TypeDefInfo.Compact:
      case TypeDefInfo.Option:
      case TypeDefInfo.Vec:
      case TypeDefInfo.VecFixed:
      case TypeDefInfo.WrapperOpaque:
        return extractSubSingle(decoded.sub as TypeDef);

      case TypeDefInfo.BTreeMap:
      case TypeDefInfo.Enum:
      case TypeDefInfo.HashMap:
      case TypeDefInfo.Result:
      case TypeDefInfo.Set:
      case TypeDefInfo.Struct:
      case TypeDefInfo.Tuple:
        return extractSubArray(decoded.sub as TypeDef[]);

      default:
        throw new Error(`Unhandled: Unable to create and validate type from ${type} (info=${TypeDefInfo[decoded.info]})`);
    }
  });
}
