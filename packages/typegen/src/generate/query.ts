// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableRegistry, StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { Registry } from '@polkadot/types/types';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import lookupDefinitions from '@polkadot/types/augment/lookup/definitions';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { unwrapStorageSi } from '@polkadot/types/primitive/StorageKey';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, getSimilarTypes, initMeta, readTemplate, setImports, TypeImports, writeFile } from '../util';
import { ModuleTypes } from '../util/imports';

// From a storage entry metadata, we return [args, returnType]
/** @internal */
function entrySignature (lookup: PortableRegistry, allDefs: Record<string, ModuleTypes>, registry: Registry, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): [string, string, string] {
  const outputType = lookup.getTypeDef(unwrapStorageSi(storageEntry.type));

  if (storageEntry.type.isPlain) {
    setImports(allDefs, imports, [lookup.getTypeDef(storageEntry.type.asPlain).type]);

    return ['', '', formatType(registry, allDefs, outputType, imports)];
  } else if (storageEntry.type.isMap) {
    const map = storageEntry.type.asMap;

    // Find similar types of the `key` type
    const similarTypes = getSimilarTypes(registry, allDefs, lookup.getTypeDef(map.key).type, imports);

    setImports(allDefs, imports, [
      ...similarTypes,
      lookup.getTypeDef(map.value).type
    ]);

    return [
      formatType(registry, allDefs, lookup.getTypeDef(map.key).type, imports),
      `arg: ${similarTypes.join(' | ')}`,
      formatType(registry, allDefs, outputType, imports)
    ];
  } else if (storageEntry.type.isDoubleMap) {
    const dm = storageEntry.type.asDoubleMap;

    // Find similar types of `key1` and `key2` types
    const similarTypes1 = getSimilarTypes(registry, allDefs, lookup.getTypeDef(dm.key1).type, imports);
    const similarTypes2 = getSimilarTypes(registry, allDefs, lookup.getTypeDef(dm.key2).type, imports);

    setImports(allDefs, imports, [
      ...similarTypes1,
      ...similarTypes2,
      lookup.getTypeDef(dm.value).type
    ]);

    const key1Types = similarTypes1.join(' | ');
    const key2Types = similarTypes2.join(' | ');

    return [
      [
        formatType(registry, allDefs, lookup.getTypeDef(dm.key1).type, imports),
        formatType(registry, allDefs, lookup.getTypeDef(dm.key2).type, imports)
      ].join(', '),
      `arg1: ${key1Types}, arg2: ${key2Types}`,
      formatType(registry, allDefs, outputType, imports)
    ];
  } else if (storageEntry.type.isNMap) {
    const nmap = storageEntry.type.asNMap;
    const keyVec = lookup.getSiType(nmap.key).def.asTuple.map((k) => lookup.getTypeDef(k));
    const similarTypes = keyVec.map((k) => getSimilarTypes(registry, allDefs, k.type, imports));
    const keyTypes = similarTypes.map((t) => t.join(' | '));

    setImports(allDefs, imports, [
      ...similarTypes.reduce<string[]>((all, t) => all.concat(t), []),
      lookup.getTypeDef(nmap.value).type
    ]);

    return [
      keyVec.map((k) => formatType(registry, allDefs, k.type, imports)).join(', '),
      keyTypes.map((t, i) => `arg${i + 1}: ${t}`).join(', '),
      formatType(registry, allDefs, outputType, imports)
    ];
  }

  throw new Error(`entryArgs: Cannot parse args of entry ${storageEntry.name.toString()}`);
}

const template = readTemplate('query');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: ExtraTypes, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: ExtraTypes = {
      '@polkadot/types/augment': { lookup: lookupDefinitions },
      '@polkadot/types/interfaces': defaultDefs,
      ...extraTypes
    };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const { lookup, pallets } = meta.asLatest;
    const modules = pallets
      .filter(({ storage }) => storage.isSome)
      .map(({ name, storage }) => {
        const items = storage.unwrap().items
          .map((storageEntry) => {
            const [args, params, returnType] = entrySignature(lookup, allDefs, registry, storageEntry, imports);

            return {
              args,
              docs: storageEntry.docs,
              entryType: 'AugmentedQuery',
              name: stringCamelCase(storageEntry.name),
              params,
              returnType
            };
          })
          .sort(compareName);

        return {
          items,
          name: stringCamelCase(name)
        };
      })
      .sort(compareName);

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
