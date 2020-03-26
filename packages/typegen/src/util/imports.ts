// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDefInfo } from '@polkadot/types/create/types';

import * as codecClasses from '@polkadot/types/codec';
import { getTypeDef } from '@polkadot/types/create';
import * as extrinsicClasses from '@polkadot/types/extrinsic';
import * as genericClasses from '@polkadot/types/generic';
import * as primitiveClasses from '@polkadot/types/primitive';

// these map all the codec and primitive types for import, see the TypeImports below. If
// we have an unseen type, it is `undefined`/`false`, if we need to import it, it is `true`
type TypeExist = Record<string, boolean>;

// local and absolute imports map to this format
// { [moduleName]: { [typeName]: true } }
type TypeExistMap = Record<string, TypeExist>;

export interface TypeImports {
  codecTypes: TypeExist; // `import {} from '@polkadot/types/codec`
  extrinsicTypes: TypeExist; // `import {} from '@polkadot/types/extrinsic`
  genericTypes: TypeExist; // `import {} from '@polkadot/types/generic`
  ignoredTypes: string[]; // No need to import these types
  localTypes: TypeExistMap; // `import {} from '../something'`
  primitiveTypes: TypeExist; // `import {} from '@polkadot/types/primitive`
  typesTypes: TypeExist; // `import {} from '@polkadot/types/types`
  definitions: object; // all definitions
  typeToModule: Record<string, string>;
}

// Maps the types as found to the source location. This is used to generate the
// imports in the output file, dep-duped and sorted
/** @internal */
export function setImports (allDefs: object, imports: TypeImports, types: string[]): void {
  const { codecTypes, extrinsicTypes, genericTypes, ignoredTypes, localTypes, primitiveTypes, typesTypes } = imports;

  types.forEach((type): void => {
    if (ignoredTypes.includes(type)) {
      // do nothing
    } else if (['AnyNumber', 'CallFunction', 'Codec', 'IExtrinsic', 'ITuple'].includes(type)) {
      typesTypes[type] = true;
    } else if ((codecClasses as any)[type]) {
      codecTypes[type] = true;
    } else if ((extrinsicClasses as any)[type]) {
      extrinsicTypes[type] = true;
    } else if ((genericClasses as any)[type]) {
      genericTypes[type] = true;
    } else if ((primitiveClasses as any)[type] || type === 'Metadata') {
      primitiveTypes[type] = true;
    } else if (type.includes('<') || type.includes('(') || (type.includes('[') && !type.includes('|'))) {
      // If the type is a bit special (tuple, fixed u8, nested type...), then we
      // need to parse it with `getTypeDef`. We skip the case where type ~ [a | b | c ... , ... , ... w | y | z ]
      // since that represents a tuple's similar types, which are covered in the next block
      const typeDef = getTypeDef(type);

      setImports(allDefs, imports, [TypeDefInfo[typeDef.info]]);

      // TypeDef.sub is a `TypeDef | TypeDef[]`
      if (Array.isArray(typeDef.sub)) {
        typeDef.sub.forEach((subType): void => setImports(allDefs, imports, [subType.type]));
      } else if (typeDef.sub && (typeDef.info !== TypeDefInfo.VecFixed || typeDef.sub.type !== 'u8')) {
        // typeDef.sub is a TypeDef in this case
        setImports(allDefs, imports, [typeDef.sub.type]);
      }
    } else if (type.includes('[') && type.includes('|')) {
      // We split the types
      const splitTypes = /\[\s?(.+?)\s?\]/.exec(type)![1].split(/\s?\|\s?/);

      setImports(allDefs, imports, splitTypes);
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

// Create an Imports object, can be pre-filled with `ignoredTypes`
/** @internal */
export function createImports (importDefinitions: Record<string, object>, { types }: { types: Record<string, any> } = { types: {} }): TypeImports {
  const definitions = {} as Record<string, object>;
  const typeToModule = {} as Record<string, string>;

  Object.entries(importDefinitions).forEach(([packagePath, packageDef]): void => {
    Object.entries(packageDef).forEach(([name, moduleDef]): void => {
      const fullName = `${packagePath}/${name}`;

      definitions[fullName] = moduleDef;

      Object.keys(moduleDef.types).forEach((type): void => {
        if (typeToModule[type]) {
          console.warn(`\t\tWARN: Overwriting duplicated type '${type}' ${typeToModule[type]} -> ${fullName}`);
        }

        typeToModule[type] = fullName;
      });
    });
  });

  return {
    codecTypes: {},
    definitions,
    extrinsicTypes: {},
    genericTypes: {},
    ignoredTypes: Object.keys(types),
    localTypes: Object.keys(definitions).reduce((local: Record<string, TypeExist>, mod): Record<string, TypeExist> => {
      local[mod] = {};

      return local;
    }, {}),
    primitiveTypes: {},
    typesTypes: {},
    typeToModule
  };
}
