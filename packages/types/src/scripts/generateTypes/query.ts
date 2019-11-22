// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';

import fs from 'fs';
import { ModuleMetadataV8 } from '@polkadot/metadata/Metadata/v8/Metadata';
import { StorageEntryMetadata } from '@polkadot/metadata/Metadata/v8/Storage';
import staticData from '@polkadot/metadata/Metadata/static';
import { stringLowerFirst } from '@polkadot/util';

import { Metadata } from '../..';
import { createImportCode, createImports, FOOTER, formatType, getSimilarTypes, HEADER, indent, setImports, TypeImports } from '../util';
import { TypeRegistry } from '@polkadot/types/codec';

// From a storage entry metadata, we return [args, returnType]
function entrySignature (registry: Registry, storageEntry: StorageEntryMetadata, imports: TypeImports): [string, string] {
  if (storageEntry.type.isPlain) {
    setImports(imports, [storageEntry.type.asPlain.toString()]);

    return ['', formatType(storageEntry.type.asPlain.toString(), imports)];
  } else if (storageEntry.type.isMap) {
    // Find similar types of the `key` type
    const similarTypes = getSimilarTypes(registry, storageEntry.type.asMap.key.toString(), imports);

    setImports(imports, [
      ...similarTypes,
      storageEntry.type.asMap.value.toString()
    ]);

    return [
      `arg: ${similarTypes.map((type) => formatType(type, imports)).join(' | ')}`,
      formatType(storageEntry.type.asMap.value.toString(), imports)
    ];
  } else if (storageEntry.type.isDoubleMap) {
    // Find similartypes of `key1` and `key2` types
    const similarTypes1 = getSimilarTypes(registry, storageEntry.type.asDoubleMap.key1.toString(), imports);
    const similarTypes2 = getSimilarTypes(registry, storageEntry.type.asDoubleMap.key2.toString(), imports);

    setImports(imports, [
      ...similarTypes1,
      ...similarTypes2,
      storageEntry.type.asDoubleMap.value.toString()
    ]);

    const key1Types = similarTypes1.map((type) => formatType(type, imports)).join(' | ');
    const key2Types = similarTypes2.map((type) => formatType(type, imports)).join(' | ');

    return [
      `key1: ${key1Types}, key2: ${key2Types}`,
      formatType(storageEntry.type.asDoubleMap.value.toString(), imports)
    ];
  }

  throw new Error(`entryArgs: Cannot parse args of entry ${storageEntry.name}`);
}

// Generate types for one storage entry in a module
function generateEntry (registry: Registry, storageEntry: StorageEntryMetadata, imports: TypeImports): string[] {
  const [args, returnType] = entrySignature(registry, storageEntry, imports);

  return [
    `${stringLowerFirst(storageEntry.name.toString())}: StorageEntryExact<ApiType, (${args}) => Observable<${returnType}>> & QueryableStorageEntry<ApiType>;`
  ];
}

// Generate types for one module
function generateModule (registry: Registry, modul: ModuleMetadataV8, imports: TypeImports): string[] {
  if (modul.storage.isNone) {
    return [];
  }

  return [indent(4)(`${stringLowerFirst(modul.name.toString())}: {`)]
    .concat(indent(6)('[index: string]: QueryableStorageEntry<ApiType>;'))
    .concat(
      modul.storage.unwrap().items
        .reduce((acc, storageEntry): string[] => {
          return acc.concat(generateEntry(registry, storageEntry, imports).map(indent(6)));
        }, [] as string[])
        .join('\n')
    )
    .concat([indent(4)('};')]);
}

// Generate `packages/types-jsonrpc/src/jsonrpc.types.ts` for a particular
// metadata
function generateForMeta (registry: Registry, meta: Metadata): void {
  console.log('Writing packages/api/src/query.types.ts');

  const imports = createImports(); // Will hold all needed imports

  const body = meta.asLatest.modules.reduce((acc, modul): string[] => {
    const storageEntries = generateModule(registry, modul, imports);

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

// Call `generateForMeta()` with current static metadata
export default function generateQuery (): void {
  const registry = new TypeRegistry();

  return generateForMeta(registry, new Metadata(registry, staticData));
}
