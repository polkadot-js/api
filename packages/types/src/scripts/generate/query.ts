// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest, StorageEntryMetadataLatest } from '../../interfaces/metadata';
import { Registry } from '../../types';
import * as defaultDefs from '../../interfaces/definitions';

import fs from 'fs';
import staticData from '@polkadot/metadata/Metadata/static';
import { stringLowerFirst } from '@polkadot/util';

import { Metadata } from '../..';
import { TypeRegistry } from '../../codec';
import { FOOTER, HEADER, TypeImports, createImportCode, createImports, formatType, getSimilarTypes, indent, setImports } from '../util';

// If the StorageEntry returns T, output `Option<T>` if the modifier is optional
/** @internal */
function addModifier (storageEntry: StorageEntryMetadataLatest, returnType: string): string {
  if (storageEntry.modifier.isOptional) {
    return `Option<${returnType}>`;
  }

  return returnType;
}

// From a storage entry metadata, we return [args, returnType]
/** @internal */
function entrySignature (allDefs: object, registry: Registry, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): [string, string] {
  if (storageEntry.type.isPlain) {
    setImports(allDefs, imports, [storageEntry.type.asPlain.toString()]);

    return ['', formatType(allDefs, addModifier(storageEntry, storageEntry.type.asPlain.toString()), imports)];
  } else if (storageEntry.type.isMap) {
    // Find similar types of the `key` type
    const similarTypes = getSimilarTypes(allDefs, registry, storageEntry.type.asMap.key.toString(), imports);

    setImports(allDefs, imports, [
      ...similarTypes,
      storageEntry.type.asMap.value.toString()
    ]);

    return [
      `arg: ${similarTypes.map((type) => formatType(allDefs, type, imports)).join(' | ')}`,
      formatType(allDefs, addModifier(storageEntry, storageEntry.type.asMap.value.toString()), imports)
    ];
  } else if (storageEntry.type.isDoubleMap) {
    // Find similartypes of `key1` and `key2` types
    const similarTypes1 = getSimilarTypes(allDefs, registry, storageEntry.type.asDoubleMap.key1.toString(), imports);
    const similarTypes2 = getSimilarTypes(allDefs, registry, storageEntry.type.asDoubleMap.key2.toString(), imports);

    setImports(allDefs, imports, [
      ...similarTypes1,
      ...similarTypes2,
      storageEntry.type.asDoubleMap.value.toString()
    ]);

    const key1Types = similarTypes1.map((type) => formatType(allDefs, type, imports)).join(' | ');
    const key2Types = similarTypes2.map((type) => formatType(allDefs, type, imports)).join(' | ');

    return [
      `key1: ${key1Types}, key2: ${key2Types}`,
      formatType(allDefs, addModifier(storageEntry, storageEntry.type.asDoubleMap.value.toString()), imports)
    ];
  }

  throw new Error(`entryArgs: Cannot parse args of entry ${storageEntry.name}`);
}

// Generate types for one storage entry in a module
/** @internal */
function generateEntry (allDefs: object, registry: Registry, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): string[] {
  const [args, returnType] = entrySignature(allDefs, registry, storageEntry, imports);

  return [
    `${stringLowerFirst(storageEntry.name.toString())}: AugmentedQuery<ApiType, (${args}) => Observable<${returnType}>> & QueryableStorageEntry<ApiType>;`
  ];
}

// Generate types for one module
/** @internal */
function generateModule (allDefs: object, registry: Registry, { name, storage }: ModuleMetadataLatest, imports: TypeImports): string[] {
  if (storage.isNone) {
    return [];
  }

  return [indent(4)(`${stringLowerFirst(name.toString())}: {`)]
    // .concat(indent(6)('[index: string]: QueryableStorageEntry<ApiType>;'))
    .concat(storage.unwrap()
      .items
      .reduce((acc, storageEntry): string[] => {
        return acc.concat(generateEntry(allDefs, registry, storageEntry, imports).map(indent(6)));
      }, [] as string[])
      .join('\n'))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, object>>): void {
  console.log(`${dest}\n\tGenerating`);

  const allTypes: Record<string, Record<string, object>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
  const imports = createImports(allTypes);
  const allDefs = Object.entries(allTypes).reduce((defs, [, obj]) => {
    return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [key]: value }), defs);
  }, {});
  const body = meta.asLatest.modules.reduce((acc, mod): string[] => {
    return acc.concat(generateModule(allDefs, registry, mod, imports));
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
      file: `${imports.moduleToPackage[moduleName]}/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    })),
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    }
  ]);
  const interfaceStart = [
    "declare module '@polkadot/api/types/storage' {",
    indent(2)('export interface AugmentedQueries<ApiType> {\n')
  ].join('\n');
  const interfaceEnd = `\n${indent(2)('}')}\n}`;

  console.log('\tWriting');

  fs.writeFileSync(
    dest,
    header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER)
    , { flag: 'w' }
  );

  console.log('');
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateQuery (dest = 'packages/api/src/types/augment/query.ts', data = staticData, extraTypes: Record<string, Record<string, object>> = {}): void {
  const registry = new TypeRegistry();

  return generateForMeta(registry, new Metadata(registry, data), dest, extraTypes);
}
