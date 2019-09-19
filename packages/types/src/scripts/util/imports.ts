// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as codecClasses from '../../codec';
import { getTypeDef } from '../../codec/create';
import { TypeDefInfo } from '../../codec/types';
import * as definitions from '../../interfaces/definitions';
import * as primitiveClasses from '../../primitive';

// these map all the codec and primitive types for import, see the TypeImports below. If
// we have an unseen type, it is `undefined`/`false`, if we need to import it, it is `true`
type TypeExist = Record<string, boolean>;

// local and absolute imports map to this format
// { [moduleName]: { [typeName]: true } }
type TypeExistMap = Record<string, TypeExist>;

export interface TypeImports {
  codecTypes: TypeExist; // `import {} from '@polkadot/types/codec`
  localTypes: TypeExistMap; // `import {} from '../something'`
  ignoredTypes: string[]; // No need to import these types
  primitiveTypes: TypeExist; // `import {} from '@polkadot/types/primitive`
  typesTypes: TypeExist; // `import {} from '@polkadot/types/types`
}

// Maps the types as found to the source location. This is used to generate the
// imports in the output file, dep-duped and sorted
export function setImports (imports: TypeImports, types: string[]): void {
  const { codecTypes, localTypes, ignoredTypes, primitiveTypes, typesTypes } = imports;

  types.forEach((type): void => {
    if (ignoredTypes.includes(type)) {
      // do nothing
    } else if (['Codec', 'IExtrinsic'].includes(type)) {
      typesTypes[type] = true;
    } else if ((codecClasses as any)[type]) {
      codecTypes[type] = true;
    } else if ((primitiveClasses as any)[type] || type === 'Metadata') {
      primitiveTypes[type] = true;
    } else if (type.includes('<')) {
      // If it contains a nested type ('<' sign), then we recursively call
      // setImports
      const typeDef = getTypeDef(type);
      setImports(imports, [TypeDefInfo[typeDef.info]]);

      // TypeDef.sub is a `TypeDef | TypeDef[]`
      if (Array.isArray(typeDef.sub)) {
        typeDef.sub.forEach((subType): void => setImports(imports, [subType.type]));
      } else if (typeDef.sub) {
        // typeDef.sub is a TypeDef in this case
        setImports(imports, [typeDef.sub.type]);
      }
    } else {
      // find this module inside the exports from the rest
      const [moduleName] = Object.entries(definitions).find(([, { types }]): boolean =>
        Object.keys(types).includes(type)
      ) || [null];

      if (moduleName) {
        localTypes[moduleName][type] = true;
      }
    }
  });
}

// Create an Imports object, can be prefilled with `ignoredTypes`
export function createImports ({ types }: { types: Record<string, any> } = { types: {} }): TypeImports {
  const codecTypes: TypeExist = {};
  const localTypes: TypeExistMap = Object.keys(definitions).reduce((localTypes: Record<string, TypeExist>, moduleName): Record<string, TypeExist> => {
    localTypes[moduleName] = {};

    return localTypes;
  }, {});
  const ignoredTypes = Object.keys(types);
  const primitiveTypes: TypeExist = {};
  const typesTypes: TypeExist = {};

  const imports = { codecTypes, localTypes, ignoredTypes, primitiveTypes, typesTypes };

  return imports;
}
