// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeDef, TypeDefInfo } from '@polkadot/types/types';

import { getTypeDef } from '@polkadot/types/create';

type Extracted = string | Extracted[];

/** @internal */
export default function extractTypes (types: string[]): Extracted[] {
  return types.map((type): Extracted => {
    const decoded = getTypeDef(type);

    switch (decoded.info) {
      case TypeDefInfo.Plain:
        return decoded.type;

      case TypeDefInfo.BTreeSet:
      case TypeDefInfo.Compact:
      case TypeDefInfo.Option:
      case TypeDefInfo.Vec:
      case TypeDefInfo.VecFixed:
        return extractTypes([(decoded.sub as TypeDef).type]);

      case TypeDefInfo.BTreeMap:
      case TypeDefInfo.HashMap:
      case TypeDefInfo.Result:
      case TypeDefInfo.Tuple:
        return extractTypes((decoded.sub as TypeDef[]).map((sub): string => sub.type));

      default:
        throw new Error(`Unhandled: Unable to create and validate type from ${type}`);
    }
  });
}
