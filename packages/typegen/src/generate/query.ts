// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableRegistry, StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { Registry } from '@polkadot/types/types';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, getSimilarTypes, initMeta, readTemplate, setImports, TypeImports, writeFile } from '../util';
import { ModuleTypes } from '../util/imports';

// From a storage entry metadata, we return [args, returnType]
/** @internal */
function entrySignature (types: PortableRegistry, allDefs: Record<string, ModuleTypes>, registry: Registry, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): [string, string, string] {
  const outputType = unwrapStorageType(registry, storageEntry.type, storageEntry.modifier.isOptional);

  if (storageEntry.type.isPlain) {
    setImports(allDefs, imports, [types.getTypeDef(storageEntry.type.asPlain).type]);

    return ['', '', formatType(allDefs, outputType, imports)];
  } else if (storageEntry.type.isMap) {
    const map = storageEntry.type.asMap;

    // Find similar types of the `key` type
    const similarTypes = getSimilarTypes(registry, allDefs, types.getTypeDef(map.key).type, imports);

    setImports(allDefs, imports, [
      ...similarTypes,
      types.getTypeDef(map.value).type
    ]);

    return [
      formatType(allDefs, types.getTypeDef(map.key).type, imports),
      `arg: ${similarTypes.join(' | ')}`,
      formatType(allDefs, outputType, imports)
    ];
  } else if (storageEntry.type.isDoubleMap) {
    const dm = storageEntry.type.asDoubleMap;

    // Find similar types of `key1` and `key2` types
    const similarTypes1 = getSimilarTypes(registry, allDefs, types.getTypeDef(dm.key1).type, imports);
    const similarTypes2 = getSimilarTypes(registry, allDefs, types.getTypeDef(dm.key2).type, imports);

    setImports(allDefs, imports, [
      ...similarTypes1,
      ...similarTypes2,
      types.getTypeDef(dm.value).type
    ]);

    const key1Types = similarTypes1.join(' | ');
    const key2Types = similarTypes2.join(' | ');

    return [
      [formatType(allDefs, types.getTypeDef(dm.key1).type, imports), formatType(allDefs, types.getTypeDef(dm.key2).type, imports)].join(', '),
      `arg1: ${key1Types}, arg2: ${key2Types}`,
      formatType(allDefs, outputType, imports)
    ];
  } else if (storageEntry.type.isNMap) {
    const nmap = storageEntry.type.asNMap;
    const keyVec = types.getSiType(nmap.key).def.asTuple.map((k) => types.getTypeDef(k));
    const similarTypes = keyVec.map((k) => getSimilarTypes(registry, allDefs, k.type, imports));
    const keyTypes = similarTypes.map((t) => t.join(' | '));

    setImports(allDefs, imports, [
      ...similarTypes.reduce<string[]>((all, t) => all.concat(t), []),
      types.getTypeDef(nmap.value).type
    ]);

    return [
      keyVec.map((k) => formatType(allDefs, k.type, imports)).join(', '),
      keyTypes.map((t, i) => `arg${i + 1}: ${t}`).join(', '),
      formatType(allDefs, outputType, imports)
    ];
  }

  throw new Error(`entryArgs: Cannot parse args of entry ${storageEntry.name.toString()}`);
}

const template = readTemplate('query');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: ExtraTypes, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: ExtraTypes = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const { pallets, types } = meta.asLatest;
    const modules = pallets
      .sort(compareName)
      .filter(({ storage }) => storage.isSome)
      .map(({ name, storage }) => {
        const items = storage.unwrap().items
          .sort(compareName)
          .map((storageEntry) => {
            const [args, params, returnType] = entrySignature(types, allDefs, registry, storageEntry, imports);

            return {
              args,
              docs: storageEntry.docs,
              entryType: 'AugmentedQuery',
              name: stringCamelCase(storageEntry.name),
              params,
              returnType
            };
          });

        return {
          items,
          name: stringCamelCase(name)
        };
      });

    imports.typesTypes.Observable = true;

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types: [
        ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
          file: packagePath,
          types: Object.keys(imports.localTypes[packagePath])
        })),
        {
          file: '@polkadot/api/types',
          types: ['ApiTypes']
        }
      ]
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export function generateDefaultQuery (dest = 'packages/api/src/augment/query.ts', data?: string, extraTypes: ExtraTypes = {}, isStrict = false): void {
  const { metadata, registry } = initMeta(data, extraTypes);

  return generateForMeta(registry, metadata, dest, extraTypes, isStrict);
}
