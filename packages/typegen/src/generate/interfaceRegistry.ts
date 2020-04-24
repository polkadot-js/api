// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Raw from '@polkadot/types/codec/Raw';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import * as defaultPrimitives from '@polkadot/types/primitive';

import { FOOTER, HEADER, createImportCode, createImports, getDerivedTypes, indent, setImports, writeFile } from '../util';

const primitiveClasses = {
  ...defaultPrimitives,
  Raw
};

/** @internal */
export function generateInterfaceTypes (importDefinitions: { [importPath: string]: object }, dest: string): void {
  writeFile(dest, (): string => {
    Object.entries(importDefinitions).reduce((acc, def) => Object.assign(acc, def), {} as object);

    const imports = createImports(importDefinitions);
    const definitions = imports.definitions;

    const primitives = Object
      .keys(primitiveClasses)
      .filter((name): boolean => !!name.indexOf('Generic'))
      .reduce((accumulator, primitiveName): string => {
        setImports(definitions, imports, [primitiveName]);

        return [
          accumulator,
          getDerivedTypes(definitions, primitiveName, primitiveName, imports).map(indent(4)).join('\n')
        ].join('\n');
      }, '');

    const existingTypes: Record<string, boolean> = {};

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const srml = Object.entries(definitions).reduce((accumulator, [_defName, { types }]): string => {
      setImports(definitions, imports, Object.keys(types));

      const uniqueTypes = Object.keys(types).filter((type) => !existingTypes[type]);

      uniqueTypes.forEach((type) => { existingTypes[type] = true; });

      return [
        accumulator,
        ...uniqueTypes.map((type): string =>
          getDerivedTypes(definitions, type, types[type], imports).map(indent(4)).join('\n')
        )
      ].join('\n');
    }, '');

    const header = createImportCode(HEADER('defs'), imports, [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ]);

    const interfaceStart = "declare module '@polkadot/types/types/registry' {\n  export interface InterfaceTypes {";
    const interfaceEnd = '\n  }\n}';

    return header
      .concat(interfaceStart)
      .concat(primitives)
      .concat(srml)
      .concat(interfaceEnd)
      .concat(FOOTER);
  });
}

// Generate `packages/types/src/interfaceRegistry.ts`, the registry of all interfaces
export default function generateDefaultInterfaceTypes (): void {
  generateInterfaceTypes(
    { '@polkadot/types/interfaces': defaultDefinitions },
    'packages/types/src/augment/registry.ts'
  );
}
