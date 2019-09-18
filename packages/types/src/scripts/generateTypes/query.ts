// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { stringLowerFirst } from '@polkadot/util';

import { Metadata } from '../..';
import { ModuleMetadataV7 } from '../../Metadata/v7/Metadata';
import { StorageEntryMetadata } from '../../Metadata/v7/Storage';
import staticData from '../../Metadata/v7/static';
import { createImportCode, createImports, FOOTER, HEADER, indent, setImports, TypeImports } from '../util';

// Generate types for one storage entry in a module
function generateEntry (storageEntry: StorageEntryMetadata, imports: TypeImports): string[] {
  if (storageEntry.type.isPlainType) {
    setImports(imports, [storageEntry.type.asType.toString()]);

    return [
      `${stringLowerFirst(storageEntry.name.toString())}(): ${storageEntry.type.asType}`
    ];
  }

  return [];
}

// Generate types for one module
function generateModule (modul: ModuleMetadataV7, imports: TypeImports): string[] {
  if (modul.storage.isNone) {
    return [];
  }

  return [indent(2)(`${stringLowerFirst(modul.name.toString())}: {`)]
    .concat(
      modul.storage.unwrap().items
        .reduce((acc, storageEntry): string[] => {
          return acc
            .concat(generateEntry(storageEntry, imports).map(indent(4)));
        }, [] as string[])
        .join(',\n')
    )
    .concat([indent(2)('}')]);
}

// Generate `packages/types-jsonrpc/src/jsonrpc.types.ts`
function generateForMeta (meta: Metadata): void {
  console.log('Writing packages/api/src/query.types.ts');

  // Inject all types so that metadata can use them
  require('../../injector');

  const imports = createImports(); // Will hold all needed imports

  const body = meta.asLatest.modules.reduce((acc, modul): string[] => {
    const storageEntries = generateModule(modul, imports);

    return acc.concat(storageEntries);
  }, [] as string[]);

  const header = createImportCode(HEADER, [
    {
      file: './types',
      types: ['QueryableStorage']
    },
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

  const interfaceStart = 'export interface QueryInterface<ApiType> extends QueryableStorage<ApiType> {\n';
  const interfaceEnd = '\n}';

  fs.writeFileSync(
    'packages/api/src/query.types.ts',
    header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER)
    , { flag: 'w' }
  );
}

// Call `generateForMeta()` with current static metadat
export default function generateQuery (): void {
  return generateForMeta(new Metadata(staticData));
}
