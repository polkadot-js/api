// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Handlebars from 'handlebars';

import { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import staticData from '@polkadot/metadata/Metadata/static';
import Metadata from '@polkadot/metadata/Metadata';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { TypeRegistry } from '@polkadot/types/create';
import { stringCamelCase } from '@polkadot/util';

import { TypeImports, createImports, compareName, formatType, getSimilarTypes, readTemplate, registerDefinitions, setImports, writeFile } from '../util';
import { ModuleTypes } from '../util/imports';

// From a storage entry metadata, we return [args, returnType]
/** @internal */
function entrySignature (allDefs: Record<string, ModuleTypes>, registry: Registry, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): [string, string] {
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

  throw new Error(`entryArgs: Cannot parse args of entry ${storageEntry.name.toString()}`);
}

const template = readTemplate('query');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, { types: Record<string, any> }>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, { types: Record<string, any> }>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});

    const modules = meta.asLatest.modules
      .sort(compareName)
      .filter((mod) => !mod.storage.isNone)
      .map(({ name, storage }) => {
        const items = storage.unwrap().items
          .sort(compareName)
          .map((storageEntry) => {
            const [args, returnType] = entrySignature(allDefs, registry, storageEntry, imports);
            let entryType = 'AugmentedQuery';

            if (storageEntry.type.isDoubleMap) {
              entryType = `${entryType}DoubleMap`;
            }

            return {
              args,
              docs: storageEntry.documentation,
              entryType,
              name: stringCamelCase(storageEntry.name.toString()),
              returnType
            };
          });

        return {
          items,
          name: stringCamelCase(name.toString())
        };
      });

    imports.typesTypes.Observable = true;

    const types = [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      })),
      {
        file: '@polkadot/api/types',
        types: ['ApiTypes']
      }
    ];

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateQuery (dest = 'packages/api/src/augment/query.ts', data = staticData, extraTypes: Record<string, Record<string, { types: Record<string, any> }>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  return generateForMeta(registry, new Metadata(registry, data), dest, extraTypes, isStrict);
}
