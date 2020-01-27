// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest } from '../../interfaces/metadata';
import * as definitions from '../../interfaces/definitions';

import fs from 'fs';
import staticData from '@polkadot/metadata/Metadata/static';
import { stringCamelCase } from '@polkadot/util';

import { Metadata, TypeRegistry } from '../..';
import { createImportCode, createImports, FOOTER, HEADER, indent, setImports, TypeImports } from '../util';

// Generate types for one module
/** @internal */
function generateModule (modul: ModuleMetadataLatest, imports: TypeImports): string[] {
  if (!modul.constants.length) {
    return [];
  }

  setImports(definitions, imports, ['Codec']);

  return [indent(4)(`${stringCamelCase(modul.name.toString())}: {`)]
    .concat(indent(6)('[index: string]: Codec;'))
    .concat(
      modul.constants
        .map((constant): string => {
          setImports(definitions, imports, [constant.type.toString()]);

          return indent(6)(`${stringCamelCase(constant.name.toString())}: ${constant.type} & ConstantCodec;`);
        })
    )
    .concat([indent(4)('};')]);
}

// Generate `packages/api/src/consts.types.ts` for a particular
// metadata
/** @internal */
function generateForMeta (meta: Metadata): void {
  console.log('Writing packages/api/src/consts.types.ts');

  const imports = createImports({ '@polkadot/types/interfaces': definitions }); // Will hold all needed imports

  const body = meta.asLatest.modules.reduce((acc, modul): string[] => {
    const storageEntries = generateModule(modul, imports);

    return acc.concat(storageEntries);
  }, [] as string[]);

  const header = createImportCode(HEADER, [
    {
      file: '@polkadot/types/codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '@polkadot/types',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `@polkadot/types/interfaces/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    })),
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    }
  ]);

  const interfaceStart =
    [
      "declare module '@polkadot/metadata/Decorated/types' {",
      indent(2)('export interface Constants {\n')
    ].join('\n');
  const interfaceEnd = `\n${indent(2)('}')}\n}`;

  fs.writeFileSync(
    'packages/api/src/consts.types.ts',
    header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER)
    , { flag: 'w' }
  );
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateConsts (): void {
  const registry = new TypeRegistry();

  return generateForMeta(new Metadata(registry, staticData));
}
