// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { Definitions } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types.js';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, initMeta, readTemplate, setImports, writeFile } from '../util/index.js';

const generateForMetaTemplate = Handlebars.compile(readTemplate('events'));

// For babel itself we need some extra aliasing
// Also avoid reserved words to prevent generating invalid TS
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words
const ALIAS = [
  'symbol',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'null',
  'return',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield'
];

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
          types: ['ApiTypes', 'AugmentedEvent']
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
