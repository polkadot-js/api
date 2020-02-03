// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest, StorageEntryMetadataLatest } from '../../interfaces/metadata';
import { Registry } from '../../types';
import * as defaultDefs from '../../interfaces/definitions';

import staticData from '@polkadot/metadata/Metadata/static';
import { stringLowerFirst } from '@polkadot/util';

import { Metadata } from '../..';
import { TypeRegistry } from '../../codec';
import { FOOTER, HEADER, TypeImports, createDocComments, createImportCode, createImports, formatType, getSimilarTypes, indent, setImports, writeFile } from '../util';

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

// Generate types for one module
/** @internal */
function generateModule (allDefs: object, registry: Registry, { name, storage }: ModuleMetadataLatest, imports: TypeImports, isStrict: boolean): string[] {
  if (storage.isNone) {
    return [];
  }

  return [indent(4)(`${stringLowerFirst(name.toString())}: {`)]
    .concat(isStrict ? '' : indent(6)('[index: string]: QueryableStorageEntry<ApiType>;'))
    .concat(storage.unwrap().items.map((storageEntry): string => {
      const [args, returnType] = entrySignature(allDefs, registry, storageEntry, imports);

      return createDocComments(6, storageEntry.documentation) +
      indent(6)(`${stringLowerFirst(storageEntry.name.toString())}: AugmentedQuery<ApiType, (${args}) => Observable<${returnType}>> & QueryableStorageEntry<ApiType>;`);
    }))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, object>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, object>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [key]: value }), defs);
    }, {});
    const body = meta.asLatest.modules.reduce((acc, mod): string[] => {
      return acc.concat(generateModule(allDefs, registry, mod, imports, isStrict));
    }, [] as string[]);
    const header = createImportCode(HEADER, imports, [
      ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
        file: `${imports.moduleToPackage[moduleName]}/${moduleName}`,
        types: Object.keys(imports.localTypes[moduleName])
      })),
      {
        file: 'rxjs',
        types: ['Observable']
      }
    ]);
    const interfaceStart = [
      "declare module '@polkadot/api/types/storage' {",
      indent(2)('export interface AugmentedQueries<ApiType> {\n')
    ].join('\n');
    const interfaceEnd = `\n${indent(2)('}')}\n}`;

    return header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER);
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateQuery (dest = 'packages/api/src/types/augment/query.ts', data = staticData, extraTypes: Record<string, Record<string, object>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  return generateForMeta(registry, new Metadata(registry, data), dest, extraTypes, isStrict);
}
