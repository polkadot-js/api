// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { Definitions } from '@polkadot/types/types';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, initMeta, readTemplate, setImports, writeFile } from '../util';

const generateForMetaTemplate = Handlebars.compile(readTemplate('events'));

// For babel itself we need some extra aliasing
const ALIAS = ['symbol'];

/** @internal */
function generateForMeta (meta: Metadata, dest: string, extraTypes: ExtraTypes, isStrict: boolean, customLookupDefinitions?: Definitions): void {
  writeFile(dest, (): string => {
    const allTypes = {
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
    const { lookup, pallets, registry } = meta.asLatest;
    const modules = pallets
      .filter(({ events }) => events.isSome)
      .map(({ events, name }) => ({
        items: lookup.getSiType(events.unwrap().type).def.asVariant.variants
          .map(({ docs, fields, name }) => {
            const args = fields
              .map(({ type }) => lookup.getTypeDef(type))
              .map((typeDef) => typeDef.lookupName || formatType(registry, allDefs, typeDef, imports));
            const names = fields
              .map(({ name }) => registry.lookup.sanitizeField(name)[0])
              .filter((n): n is string => !!n);

            setImports(allDefs, imports, args);

            return {
              docs,
              name: name.toString(),
              type: names.length !== 0 && names.length === args.length
                ? `[${names.map((n, i) => `${ALIAS.includes(n) ? `${n}_` : n}: ${args[i]}`).join(', ')}], { ${names.map((n, i) => `${n}: ${args[i]}`).join(', ')} }`
                : `[${args.join(', ')}]`
            };
          })
          .sort(compareName),
        name: stringCamelCase(name)
      }))
      .sort(compareName);

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
          types: ['ApiTypes']
        }
      ]
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export function generateDefaultEvents (dest: string, data: HexString, extraTypes: ExtraTypes = {}, isStrict = false, customLookupDefinitions?: Definitions): void {
  const { metadata } = initMeta(data, extraTypes);

  return generateForMeta(metadata, dest, extraTypes, isStrict, customLookupDefinitions);
}
