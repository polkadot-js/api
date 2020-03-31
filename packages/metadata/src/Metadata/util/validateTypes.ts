// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry, TypeDef, TypeDefInfo } from '@polkadot/types/types';

import { getTypeDef } from '@polkadot/types/create';

import flattenUniq from './flattenUniq';

/** @internal */
function extractTypes (types: string[]): any[] {
  return types.map((type): any => {
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

/** @internal */
export default function validateTypes (registry: Registry, types: string[], throwError: boolean): void {
  const missing = flattenUniq(extractTypes(types)).filter((type): boolean =>
    !registry.hasType(type)
  );

  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing}`;

    if (throwError) {
      throw new Error(message);
    } else {
      console.warn(message);
    }
  }
}
