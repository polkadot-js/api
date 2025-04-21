// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeprecationStatusV16, StorageEntryMetadataLatest } from '@polkadot/types/interfaces';
import type { Metadata, PortableRegistry } from '@polkadot/types/metadata';
import type { Definitions, Registry } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { ModuleTypes, TypeImports } from '../util/imports.js';
import type { ExtraTypes } from './types.js';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { unwrapStorageSi } from '@polkadot/types/util';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, getSimilarTypes, initMeta, readTemplate, setImports, writeFile } from '../util/index.js';
import { ignoreUnusedLookups } from './lookup.js';

const generateForMetaTemplate = Handlebars.compile(readTemplate('query'));

function getDeprecationNotice(deprecationStatus: DeprecationStatusV16, name: string): string {
  let deprecationNotice = "@deprecated"

  if (deprecationStatus.isDeprecated) {
      const { note, since } = deprecationStatus.asDeprecated;
      const sinceText = since.isSome ? ` Since ${since.unwrap()}.` : "";

      deprecationNotice += ` ${note}${sinceText}`;
  }else {
    deprecationNotice += ` Storage item ${name} has been deprecated`
  }

  return deprecationNotice
}

// From a storage entry metadata, we return [args, returnType]
/** @internal */
function entrySignature (lookup: PortableRegistry, allDefs: Record<string, ModuleTypes>, registry: Registry, section: string, storageEntry: StorageEntryMetadataLatest, imports: TypeImports): [boolean, string, string, string] {
  try {
    const outputType = lookup.getTypeDef(unwrapStorageSi(storageEntry.type));

    if (storageEntry.type.isPlain) {
      const typeDef = lookup.getTypeDef(storageEntry.type.asPlain);

      setImports(allDefs, imports, [
        typeDef.lookupName || typeDef.type,
        storageEntry.modifier.isOptional
          ? 'Option'
          : null
      ]);

      return [storageEntry.modifier.isOptional, '', '', formatType(registry, allDefs, outputType, imports)];
    } else if (storageEntry.type.isMap) {
      const { hashers, key, value } = storageEntry.type.asMap;
      const keyDefs = hashers.length === 1
        ? [lookup.getTypeDef(key)]
        : lookup.getSiType(key).def.asTuple.map((k) => lookup.getTypeDef(k));
      const similarTypes = keyDefs.map((k) => getSimilarTypes(registry, allDefs, k.lookupName || k.type, imports));
      const keyTypes = similarTypes.map((t) => t.join(' | '));
      const defValue = lookup.getTypeDef(value);

      setImports(allDefs, imports, [
        ...similarTypes.reduce<string[]>((all, t) => all.concat(t), []),
        storageEntry.modifier.isOptional
          ? 'Option'
          : null,
        defValue.lookupName || defValue.type
      ]);

      return [
        storageEntry.modifier.isOptional,
        keyDefs.map((k) => formatType(registry, allDefs, k.lookupName || k.type, imports)).join(', '),
        keyTypes.map((t, i) => `arg${keyTypes.length === 1 ? '' : (i + 1)}: ${t}`).join(', '),
        outputType.lookupName || formatType(registry, allDefs, outputType, imports)
      ];
    }

    throw new Error(`Expected Plain or Map type, found ${storageEntry.type.type}`);
  } catch (error) {
    throw new Error(`entrySignature: Cannot create signature for query ${section}.${storageEntry.name.toString()}:: ${(error as Error).message}`);
  }
}

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: ExtraTypes, isStrict: boolean, customLookupDefinitions?: Definitions): void {
  writeFile(dest, (): string => {
    const allTypes: ExtraTypes = {
      '@polkadot/types-augment': {
        lookup: {
          ...lookupDefinitions,
          ...customLookupDefinitions
        }
      },
      '@polkadot/types/interfaces': defaultDefs,
      ...extraTypes
    };

    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const { lookup, pallets } = meta.asLatest;
    const usedTypes = new Set<string>([]);
    const modules = pallets
      .filter(({ storage }) => storage.isSome)
      .map(({ name, storage }) => {
        const items = storage.unwrap().items
          .map((storageEntry) => {

            let {deprecationInfo, docs, name} = storageEntry;
            const [isOptional, args, params, _returnType] = entrySignature(lookup, allDefs, registry, name.toString(), storageEntry, imports);

            if (!deprecationInfo.isNotDeprecated){
              const deprecationNotice = getDeprecationNotice(deprecationInfo, stringCamelCase(name));
              const items = docs.length
                ? ["", deprecationNotice]
                : [deprecationNotice];

              docs.push(...items.map(text => registry.createType('Text', text)));
            }

            // Add the type and args to the list of used types
            if (!(imports.primitiveTypes[_returnType])) {
              usedTypes.add(_returnType);
            }

            if (!(imports.primitiveTypes[args])) {
              usedTypes.add(args);
            }

            const returnType = isOptional
              ? `Option<${_returnType}>`
              : _returnType;

            return {
              args,
              docs: docs,
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

    imports.typesTypes['Observable'] = true;

    // filter out the unused lookup types from imports
    ignoreUnusedLookups([...usedTypes], imports);

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types: [
        ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
          file: packagePath.replace('@polkadot/types-augment', '@polkadot/types'),
          types: Object.keys(imports.localTypes[packagePath])
        })),
        {
          file: '@polkadot/api-base/types',
          types: ['ApiTypes', 'AugmentedQuery', 'QueryableStorageEntry']
        }
      ]
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export function generateDefaultQuery (dest: string, data: HexString, extraTypes: ExtraTypes = {}, isStrict = false, customLookupDefinitions?: Definitions): void {
  const { metadata, registry } = initMeta(data, extraTypes);

  return generateForMeta(registry, metadata, dest, extraTypes, isStrict, customLookupDefinitions);
}
