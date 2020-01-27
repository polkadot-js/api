// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';

import Raw from '../../codec/Raw';
import * as defaultDefinitions from '../../interfaces/definitions';
import * as defaultPrimitives from '../../primitive';
import {
  createImportCode, createImports,
  FOOTER,
  getDerivedTypes,
  HEADER,
  indent,
  setImports
} from '../util';

const primitiveClasses = {
  ...defaultPrimitives,
  Raw
};

/** @internal */
export function generateInterfaceRegistry (importDefinitions: { [importPath: string]: object }, output: string): void {
  console.log(`Writing ${output}`);

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
        getDerivedTypes(definitions, primitiveName, primitiveName, imports).map(indent(2)).join('\n')
      ].join('\n');
    }, '');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const srml = Object.entries(definitions).reduce((accumulator, [_defName, { types }]): string => {
    setImports(definitions, imports, Object.keys(types));

    return [
      accumulator,
      ...Object.keys(types).map((type): string =>
        getDerivedTypes(definitions, type, types[type], imports).map(indent(2)).join('\n')
      )
    ].join('\n');
  }, '');

  const header = createImportCode(HEADER, [
    {
      file: '@polkadot/types/codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '@polkadot/types/primitive',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `${imports.moduleToPackage[moduleName]}/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    }))
  ]);

  const interfaceStart = 'export interface InterfaceRegistry {';
  const interfaceEnd = '\n}';

  fs.writeFileSync(
    output,
    header.concat(interfaceStart).concat(primitives).concat(srml).concat(interfaceEnd).concat(FOOTER)
    , { flag: 'w' }
  );
}

// Generate `packages/types/src/interfaceRegistry.ts`, the registry of all interfaces
export default function generateDefaultInterfaceRegistry (): void {
  generateInterfaceRegistry(
    {
      '@polkadot/types/interfaces': defaultDefinitions
    },
    'packages/types/src/interfaceRegistry.ts'
  );
}
