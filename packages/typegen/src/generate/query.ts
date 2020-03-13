// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest, StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';

import staticData from '@polkadot/metadata/Metadata/static';
import Metadata from '@polkadot/metadata/Metadata';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { TypeRegistry } from '@polkadot/types/create';
import { stringLowerFirst } from '@polkadot/util';

import { FOOTER, HEADER, TypeImports, createDocComments, createImportCode, createImports, formatType, getSimilarTypes, indent, registerDefinitions, setImports, writeFile } from '../util';

// From a storage entry metadata, we return [args, returnType]
/** @internal */
function entrySignature (allDefs: object, registry: Registry, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): [string, string] {
  const format = (type: string): string => formatType(allDefs, type, imports);
  const outputType = unwrapStorageType(storageEntry.type, storageEntry.modifier.isOptional);

  if (storageEntry.type.isPlain) {
    setImports(allDefs, imports, [storageEntry.type.asPlain.toString()]);

    return ['', formatType(allDefs, outputType, imports)];
  } else if (storageEntry.type.isMap) {
    // Find similar types of the `key` type
    const similarTypes = getSimilarTypes(allDefs, registry, storageEntry.type.asMap.key.toString(), imports);

    setImports(allDefs, imports, [
      ...similarTypes,
      storageEntry.type.asMap.value.toString()
    ]);

    return [
      `arg: ${similarTypes.map(format).join(' | ')}`,
      formatType(allDefs, outputType, imports)
    ];
  } else if (storageEntry.type.isDoubleMap) {
    // Find similar types of `key1` and `key2` types
    const similarTypes1 = getSimilarTypes(allDefs, registry, storageEntry.type.asDoubleMap.key1.toString(), imports);
    const similarTypes2 = getSimilarTypes(allDefs, registry, storageEntry.type.asDoubleMap.key2.toString(), imports);

    setImports(allDefs, imports, [
      ...similarTypes1,
      ...similarTypes2,
      storageEntry.type.asDoubleMap.value.toString()
    ]);

    const key1Types = similarTypes1.map(format).join(' | ');
    const key2Types = similarTypes2.map(format).join(' | ');

    return [
      `key1: ${key1Types}, key2: ${key2Types}`,
      formatType(allDefs, outputType, imports)
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
    .concat(storage.unwrap().items.sort((a, b) => a.name.localeCompare(b.name.toString())).map((storageEntry): string => {
      const [args, returnType] = entrySignature(allDefs, registry, storageEntry, imports);
      let entryType = 'AugmentedQuery';

      if (storageEntry.type.isDoubleMap) {
        entryType = `${entryType}DoubleMap`;
      }

      return createDocComments(6, storageEntry.documentation) +
      indent(6)(`${stringLowerFirst(storageEntry.name.toString())}: ${entryType}<ApiType, (${args}) => Observable<${returnType}>>${isStrict ? '' : ' & QueryableStorageEntry<ApiType>'};`);
    }))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, { types: Record<string, any> }>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, { types: Record<string, any> }>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const body = meta.asLatest.modules.sort((a, b) => a.name.localeCompare(b.name.toString())).reduce((acc: string[], mod): string[] => {
      return acc.concat(generateModule(allDefs, registry, mod, imports, isStrict));
    }, []);
    const header = createImportCode(HEADER('chain'), imports, [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      })),
      {
        file: 'rxjs',
        types: ['Observable']
      },
      {
        file: '@polkadot/api/types',
        types: ['ApiTypes']
      }
    ]);
    const interfaceStart = [
      "declare module '@polkadot/api/types/storage' {",
      indent(2)('export interface AugmentedQueries<ApiType> {\n')
    ].join('\n');
    const interfaceEnd = `\n${indent(2)('}')}\n\n`;
    const queryableStorageInterface = indent(2)('export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {')
      .concat('\n')
      .concat(isStrict ? '' : indent(4)('[index: string]: QueryableModuleStorage<ApiType>;\n'))
      .concat(indent(2)('}\n'));

    return header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(queryableStorageInterface)
      .concat('}')
      .concat(FOOTER);
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateQuery (dest = 'packages/api/src/augment/query.ts', data = staticData, extraTypes: Record<string, Record<string, { types: Record<string, any> }>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  return generateForMeta(registry, new Metadata(registry, data), dest, extraTypes, isStrict);
}
