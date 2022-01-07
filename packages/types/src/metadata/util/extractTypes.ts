// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '@polkadot/types-create/types';

import { getTypeDef, TypeDefInfo } from '@polkadot/types-create';

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
      case TypeDefInfo.WrapperKeepOpaque:
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
