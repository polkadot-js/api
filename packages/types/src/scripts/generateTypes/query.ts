// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { stringLowerFirst } from '@polkadot/util';

import { Metadata } from '../..';
import { ModuleMetadataV7 } from '../../Metadata/v7/Metadata';
import { StorageEntryMetadata } from '../../Metadata/v7/Storage';
import staticData from '../../Metadata/v7/static';
import { createImportCode, createImports, FOOTER, formatType, HEADER, indent, setImports, TypeImports } from '../util';

// From a storage entry metadata, we return [args, returnType]
function entrySignature (storageEntry: StorageEntryMetadata, imports: TypeImports): [string, string] {
  if (storageEntry.type.isPlainType) {
    setImports(imports, [storageEntry.type.asType.toString()]);

    return ['', formatType(storageEntry.type.asType.toString(), imports)];
  } else if (storageEntry.type.isMap) {
    setImports(imports, [storageEntry.type.asMap.key.toString(), storageEntry.type.asMap.value.toString()]);

    return [
      `arg: ${formatType(storageEntry.type.asMap.key.toString(), imports)}`,
      formatType(storageEntry.type.asMap.value.toString(), imports)
    ];
  } else if (storageEntry.type.isDoubleMap) {
    setImports(imports, [
      storageEntry.type.asDoubleMap.key1.toString(),
      storageEntry.type.asDoubleMap.key2.toString(),
      storageEntry.type.asDoubleMap.value.toString()
    ]);

    return [
      `key1: ${formatType(storageEntry.type.asDoubleMap.key1.toString(), imports)}, key2: ${formatType(storageEntry.type.asDoubleMap.key2.toString(), imports)}`,
      formatType(storageEntry.type.asDoubleMap.value.toString(), imports)
    ];
  }

  throw new Error(`entryArgs: Cannot parse args of entry ${storageEntry.name}`);
}

// Generate types for one storage entry in a module
function generateEntry (storageEntry: StorageEntryMetadata, imports: TypeImports): string[] {
  const [args, returnType] = entrySignature(storageEntry, imports);

  return [
    `${stringLowerFirst(storageEntry.name.toString())}: StorageEntryExact<ApiType, (${args}) => Observable<${returnType}>>;`
    // `${stringLowerFirst(storageEntry.name.toString())}: QueryableStorageEntry<ApiType>;`
  ];
}

// Generate types for one module
function generateModule (modul: ModuleMetadataV7, imports: TypeImports): string[] {
  if (modul.storage.isNone) {
    return [];
  }

  return [indent(4)(`${stringLowerFirst(modul.name.toString())}: {`)]
    .concat(
      modul.storage.unwrap().items
        .reduce((acc, storageEntry): string[] => {
          return acc.concat(generateEntry(storageEntry, imports).map(indent(6)));
        }, [] as string[])
        .join('\n')
    )
    .concat([indent(4)('};')]);
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
      file: 'rxjs',
      types: ['Observable']
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

  const interfaceStart =
    [
      "declare module './types' {",
      indent(2)('export interface QueryableStorageExact<ApiType> {\n')
    ].join('\n');
  const interfaceEnd = `\n${indent(2)('}')}\n}`;

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
