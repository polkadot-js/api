// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isUndefined } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo } from '../../codec/createType';
import flattenUniq from './flattenUniq';
import { getTypeRegistry } from '../../codec';

export default function validateTypes (types: Array<string>, throwError: boolean): void {
  const extractTypes = (types: Array<string>): Array<any> => {
    return types.map((type) => {
      const decoded = getTypeDef(type);

      switch (decoded.info) {
        case TypeDefInfo.Plain:
          return decoded.type;

        case TypeDefInfo.Compact:
        case TypeDefInfo.Option:
        case TypeDefInfo.Vector:
          return extractTypes([(decoded.sub as TypeDef).type]);

        case TypeDefInfo.Tuple:
          return extractTypes(
            (decoded.sub as Array<TypeDef>).map((sub) => sub.type)
          );

        default:
          throw new Error('Unreachable');
      }
    });
  };

  const typeRegistry = getTypeRegistry();
  const missing = flattenUniq(extractTypes(types)).filter((type) =>
    isUndefined(typeRegistry.get(type))
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
