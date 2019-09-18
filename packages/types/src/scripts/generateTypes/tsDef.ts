// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';

import * as definitions from '../../interfaces/definitions';
import { createImportCode, createImports, FOOTER, HEADER } from '../util';

function generateTsDefFor (defName: string, { types }: { types: Record<string, any> }): void {
  const imports = createImports({ types });

  const sortedDefs = imports.interfaces.sort((a, b): number => a[0].localeCompare(b[0])).map(([, definition]): string => definition).join('\n\n');
  const header = createImportCode(HEADER, [
    {
      file: '../../types',
      types: Object.keys(imports.typesTypes)
    },
    {
      file: '../../codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '../../primitive',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `../${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    }))
  ]);

  Object.entries(imports.localTypes).forEach(([moduleName, typeMap]): void => {
    const types = Object.keys(typeMap).sort();

    if (types.length) {
      console.log(`\timport { ${types.join(', ')} } from '../${moduleName}'`);
    }
  });

  fs.writeFileSync(`packages/types/src/interfaces/${defName}/types.ts`, header.concat(sortedDefs).concat(FOOTER), { flag: 'w' });
  fs.writeFileSync(`packages/types/src/interfaces/${defName}/index.ts`, HEADER.concat('export * from \'./types\';').concat(FOOTER), { flag: 'w' });
}

export default function generateTsDef (): void {
  Object.entries(definitions).forEach(([defName, obj]): void => {
    console.log(`Extracting interfaces for ${defName}`);

    generateTsDefFor(defName, obj);
  });

  console.log('Writing interfaces/types.ts');

  fs.writeFileSync('packages/types/src/interfaces/types.ts', HEADER.concat(Object.keys(definitions).map((moduleName): string => `export * from './${moduleName}/types';`).join('\n')).concat(FOOTER), { flag: 'w' });
  fs.writeFileSync('packages/types/src/interfaces/index.ts', HEADER.concat('export * from \'./types\';').concat(FOOTER), { flag: 'w' });
}
