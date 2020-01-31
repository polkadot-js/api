// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as codecClasses from '../../codec';
import { getTypeDef } from '../../codec/create';
import { TypeDefInfo } from '../../codec/types';
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
  definitions: object; // all definitions
  typeToModule: Record<string, string>;
  moduleToPackage: Record<string, string>;
}

// Maps the types as found to the source location. This is used to generate the
// imports in the output file, dep-duped and sorted
/** @internal */
export function setImports (allDefs: object, imports: TypeImports, types: string[]): void {
  const { codecTypes, localTypes, ignoredTypes, primitiveTypes, typesTypes } = imports;

  types.forEach((type): void => {
    if (ignoredTypes.includes(type)) {
      // do nothing
    } else if (['AnyNumber', 'CallFunction', 'Codec', 'IExtrinsic', 'ITuple'].includes(type)) {
      typesTypes[type] = true;
    } else if ((codecClasses as any)[type]) {
      codecTypes[type] = true;
    } else if ((primitiveClasses as any)[type] || type === 'Metadata') {
      primitiveTypes[type] = true;
    } else if (type.includes('<') || type.includes('(') || type.includes('[')) {
      // If the type is a bit special (tuple, fixed u8, nested type...), then we
      // need to parse it with `getTypeDef`.
      const typeDef = getTypeDef(type);

      setImports(allDefs, imports, [TypeDefInfo[typeDef.info]]);

      // TypeDef.sub is a `TypeDef | TypeDef[]`
      if (Array.isArray(typeDef.sub)) {
        typeDef.sub.forEach((subType): void => setImports(allDefs, imports, [subType.type]));
      } else if (typeDef.sub) {
        // typeDef.sub is a TypeDef in this case
        setImports(allDefs, imports, [typeDef.sub.type]);
      }
    } else {
      // find this module inside the exports from the rest
      const [moduleName] = Object.entries(allDefs).find(([, { types }]): boolean =>
        Object.keys(types).includes(type)
      ) || [null];

      if (moduleName) {
        localTypes[moduleName][type] = true;
      }
    }
  });
}

// Create an Imports object, can be prefilled with `ignoredTypes`
/** @internal */
export function createImports (importDefinitions: Record<string, object>, { types }: { types: Record<string, any> } = { types: {} }): TypeImports {
  const definitions = {} as Record<string, object>;
  const typeToModule = {} as Record<string, string>;
  const moduleToPackage = {} as Record<string, string>;

  Object.entries(importDefinitions).forEach(([packagePath, packageDef]): void => {
    Object.entries(packageDef).forEach(([name, moduleDef]): void => {
      if (definitions[name]) {
        throw new Error(`Duplicated module: ${name}. Packages: ${packagePath}, ${moduleToPackage[name]}`);
      }

      definitions[name] = moduleDef;
      moduleToPackage[name] = packagePath;

      Object.keys(moduleDef.types).forEach((type): void => {
        if (typeToModule[type]) {
          throw new Error(`Duplicated type: ${type}. Modules: ${name}, ${typeToModule[type]}`);
        }

        typeToModule[type] = name;
      });
    });
  });

  return {
    codecTypes: {},
    localTypes: Object.keys(definitions).reduce((local: Record<string, TypeExist>, mod): Record<string, TypeExist> => {
      local[mod] = {};

      return local;
    }, {}),
    ignoredTypes: Object.keys(types),
    primitiveTypes: {},
    typesTypes: {},
    definitions,
    typeToModule,
    moduleToPackage
  };
}
