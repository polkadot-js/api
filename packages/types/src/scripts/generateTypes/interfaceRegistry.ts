// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';

import * as definitions from '../../interfaces/definitions';
import * as primitiveClasses from '../../primitive';
import {
  createImportCode, createImports,
  FOOTER,
  getDerivedTypes,
  HEADER,
  indent,
  setImports
} from '../util';

export function generateInterfaceRegistry (def: object, output: string): void {
  console.log(`Writing ${output}`);

  const imports = createImports();

  const primitives = Object
    .keys(primitiveClasses)
    .filter((name): boolean => !!name.indexOf('Generic'))
    .reduce((accumulator, primitiveName): string => {
      setImports(imports, [primitiveName]);

      return [
        accumulator,
        getDerivedTypes(primitiveName, primitiveName, imports).map(indent(2)).join('\n')
      ].join('\n');
    }, '');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const srml = Object.entries(def).reduce((accumulator, [_defName, { types }]): string => {
    setImports(imports, Object.keys(types));

    return [
      accumulator,
      ...Object.keys(types).map((type): string =>
        getDerivedTypes(type, types[type], imports).map(indent(2)).join('\n')
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
      file: `@polkadot/types/interfaces/${moduleName}`,
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
  generateInterfaceRegistry(definitions, 'packages/types/src/interfaceRegistry.ts');
}
