// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as codecClasses from '@polkadot/types/codec';
import * as extrinsicClasses from '@polkadot/types/extrinsic';
import * as genericClasses from '@polkadot/types/generic';
import * as primitiveClasses from '@polkadot/types/primitive';
import { getTypeDef, TypeDefInfo } from '@polkadot/types-create';

export interface ModuleTypes {
  types: Record<string, unknown>;
}

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
  lookupTypes: TypeExistMap; // `import {} from '@polkadot/types/lookup`
  primitiveTypes: TypeExist; // `import {} from '@polkadot/types/primitive`
  metadataTypes: TypeExist; // `import {} from '@polkadot/types/metadata`
  typesTypes: TypeExist; // `import {} from '@polkadot/types/types`
  definitions: Record<string, ModuleTypes>; // all definitions
  typeToModule: Record<string, string>;
}

// returns the top-level types in the alternatives list, taking into account nested [], <> and () items
// E.g. for the string '[a<b,c>, d | e]' we return the array ['a<b,c>', 'd', 'e']
function splitAlternatives (type: string): string[] {
  const alternatives = [];
  let beginOfAlternative = 1;
  let level = 0;

  // we assume that the string starts with '['
  for (let i = 1; i < type.length; i++) {
    if (level === 0) {
      switch (type[i]) {
        case ']':
        case ',':
        case '|':
          alternatives.push(type.substring(beginOfAlternative, i).trim());
          beginOfAlternative = i + 1;
          break;
      }
    }

    switch (type[i]) {
      case '[':
      case '(':
      case '<':
        level++;
        break;
      case ']':
      case ')':
      case '>':
        level--;
        break;
    }
  }

  return alternatives;
}

// Maps the types as found to the source location. This is used to generate the
// imports in the output file, dep-duped and sorted
/** @internal */
export function setImports (allDefs: Record<string, ModuleTypes>, imports: TypeImports, types: (string | null | undefined)[]): void {
  const { codecTypes, extrinsicTypes, genericTypes, ignoredTypes, localTypes, metadataTypes, primitiveTypes, typesTypes } = imports;

  types.filter((t): t is string => !!t).forEach((type): void => {
    if (ignoredTypes.includes(type)) {
      // do nothing
    } else if (['AnyNumber', 'CallFunction', 'Codec', 'IExtrinsic', 'IMethod', 'ITuple'].includes(type)) {
      typesTypes[type] = true;
    } else if (['Metadata', 'PortableRegistry'].includes(type)) {
      metadataTypes[type] = true;
    } else if ((codecClasses as Record<string, unknown>)[type]) {
      codecTypes[type] = true;
    } else if ((extrinsicClasses as Record<string, unknown>)[type]) {
      extrinsicTypes[type] = true;
    } else if ((genericClasses as Record<string, unknown>)[type]) {
      genericTypes[type] = true;
    } else if ((primitiveClasses as Record<string, unknown>)[type]) {
      primitiveTypes[type] = true;
    } else if (type.startsWith('[') && type.includes('|')) {
      const splitTypes = splitAlternatives(type);

      setImports(allDefs, imports, splitTypes);
    } else if (type.includes('<') || type.includes('(') || type.includes('[')) {
      // If the type is a bit special (tuple, fixed u8, nested type...), then we
      // need to parse it with `getTypeDef`.
      const typeDef = getTypeDef(type);

      setImports(allDefs, imports, [TypeDefInfo[typeDef.info]]);

      // TypeDef.sub is a `TypeDef | TypeDef[]`
      if (Array.isArray(typeDef.sub)) {
        typeDef.sub.forEach((subType) => setImports(allDefs, imports, [subType.lookupName || subType.type]));
      } else if (typeDef.sub && (typeDef.info !== TypeDefInfo.VecFixed || typeDef.sub.type !== 'u8')) {
        // typeDef.sub is a TypeDef in this case
        setImports(allDefs, imports, [typeDef.sub.lookupName || typeDef.sub.type]);
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

// Create an Imports object, can be pre-filled with `ignoredTypes`
/** @internal */
export function createImports (importDefinitions: Record<string, Record<string, ModuleTypes>>, { types }: ModuleTypes = { types: {} }): TypeImports {
  const definitions = {} as Record<string, ModuleTypes>;
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
    lookupTypes: {},
    metadataTypes: {},
    primitiveTypes: {},
    typeToModule,
    typesTypes: {}
  };
}
