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
function entrySignature (lookup: PortableRegistry, allDefs: Record<string, ModuleTypes>, registry: Registry, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): [boolean, string, string, string] {
  const outputType = lookup.getTypeDef(unwrapStorageSi(storageEntry.type));

  if (storageEntry.type.isPlain) {
    const typeDef = lookup.getTypeDef(storageEntry.type.asPlain);

    setImports(allDefs, imports, [typeDef.lookupName || typeDef.type]);

    return [storageEntry.modifier.isOptional, '', '', formatType(registry, allDefs, outputType, imports)];
  } else if (storageEntry.type.isMap) {
    const map = storageEntry.type.asMap;
    const keyDef = lookup.getTypeDef(map.key);
    const valDef = lookup.getTypeDef(map.value);

    // Find similar types of the `key` type
    const similarTypes = getSimilarTypes(registry, allDefs, keyDef.lookupName || keyDef.type, imports);

    setImports(allDefs, imports, [
      ...similarTypes,
      valDef.lookupName || valDef.type
    ]);

    return [
      storageEntry.modifier.isOptional,
      formatType(registry, allDefs, keyDef.lookupName || keyDef.type, imports),
      `arg: ${similarTypes.join(' | ')}`,
      formatType(registry, allDefs, outputType, imports)
    ];
  } else if (storageEntry.type.isDoubleMap) {
    const dm = storageEntry.type.asDoubleMap;
    const key1Def = lookup.getTypeDef(dm.key1);
    const key2Def = lookup.getTypeDef(dm.key2);
    const valDef = lookup.getTypeDef(dm.value);

    // Find similar types of `key1` and `key2` types
    const similarTypes1 = getSimilarTypes(registry, allDefs, key1Def.lookupName || key1Def.type, imports);
    const similarTypes2 = getSimilarTypes(registry, allDefs, key2Def.lookupName || key2Def.type, imports);

    setImports(allDefs, imports, [
      ...similarTypes1,
      ...similarTypes2,
      valDef.lookupName || valDef.type
    ]);

    const key1Types = similarTypes1.join(' | ');
    const key2Types = similarTypes2.join(' | ');

    return [
      storageEntry.modifier.isOptional,
      [
        formatType(registry, allDefs, key1Def.lookupName || key1Def.type, imports),
        formatType(registry, allDefs, key2Def.lookupName || key2Def.type, imports)
      ].join(', '),
      `arg1: ${key1Types}, arg2: ${key2Types}`,
      formatType(registry, allDefs, outputType, imports)
    ];
  } else if (storageEntry.type.isNMap) {
    const nmap = storageEntry.type.asNMap;
    const keyDefs = lookup.getSiType(nmap.key).def.asTuple.map((k) => lookup.getTypeDef(k));
    const similarTypes = keyDefs.map((k) => getSimilarTypes(registry, allDefs, k.lookupName || k.type, imports));
    const keyTypes = similarTypes.map((t) => t.join(' | '));

    setImports(allDefs, imports, [
      ...similarTypes.reduce<string[]>((all, t) => all.concat(t), []),
      lookup.getTypeDef(nmap.value).type
    ]);

    return [
      storageEntry.modifier.isOptional,
      keyDefs.map((k) => formatType(registry, allDefs, k.lookupName || k.type, imports)).join(', '),
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
            const [isOptional, args, params, _returnType] = entrySignature(lookup, allDefs, registry, storageEntry, imports);
            const returnType = isOptional
              ? `Option<${_returnType}>`
              : _returnType;

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
