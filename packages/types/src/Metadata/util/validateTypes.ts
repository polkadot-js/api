// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../../codec/types';

import { getTypeDef } from '../../codec/create';
import flattenUniq from './flattenUniq';
import { getTypeRegistry } from '../../codec';

function extractTypes (types: string[]): any[] {
  return types.map((type): any => {
    const decoded = getTypeDef(type);

    switch (decoded.info) {
      case TypeDefInfo.Plain:
        return decoded.type;

      case TypeDefInfo.Compact:
      case TypeDefInfo.Option:
      case TypeDefInfo.Vec:
        return extractTypes([(decoded.sub as TypeDef).type]);

      case TypeDefInfo.VecFixed:
        return extractTypes([(decoded.ext as TypeDefExtVecFixed).type]);

      case TypeDefInfo.Tuple:
        return extractTypes(
          (decoded.sub as TypeDef[]).map((sub): string => sub.type)
        );

      default:
        throw new Error(`Uhandled: Unnable to create and validate type from ${type}`);
    }
  });
}

export default function validateTypes (types: string[], throwError: boolean): void {
  const typeRegistry = getTypeRegistry();
  const missing = flattenUniq(extractTypes(types)).filter((type): boolean =>
    !typeRegistry.hasType(type)
  );

  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing}`;

    if (throwError) {
      throw new Error(message);
    } else {
      console.error(message);
    }
  }
}
