// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeprecationStatusV16 } from '@polkadot/types/interfaces';
import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { Definitions } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types.js';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, initMeta, readTemplate, setImports, writeFile } from '../util/index.js';
import { ignoreUnusedLookups } from './lookup.js';

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

function getDeprecationNotice (deprecationStatus: DeprecationStatusV16, name: string): string {
  let deprecationNotice = '@deprecated';

  if (deprecationStatus.isDeprecated) {
    const { note, since } = deprecationStatus.asDeprecated;
    const sinceText = since.isSome ? ` Since ${since.unwrap().toString()}.` : '';

    deprecationNotice += ` ${note.toString()}${sinceText}`;
  } else {
    deprecationNotice += ` Event ${name} has been deprecated`;
  }

  return deprecationNotice;
}

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
    const usedTypes = new Set<string>([]);
    const modules = pallets
      .filter(({ events }) => events.isSome)
      .map((data) => {
        const name = data.name;
        const events = data.events.unwrap();

        return {
          items: lookup.getSiType(events.type).def.asVariant.variants
            .map(({ docs, fields, index, name }) => {
              if (events.deprecationInfo.isVariantsDeprecated) {
                const rawStatus = events.deprecationInfo.asVariantsDeprecated.toJSON()?.[index.toNumber()];

                if (rawStatus) {
                  const deprecationStatus: DeprecationStatusV16 = meta.registry.createTypeUnsafe('DeprecationStatusV16', [rawStatus]);

                  if (!deprecationStatus.isNotDeprecated) {
                    const deprecationNotice = getDeprecationNotice(deprecationStatus, name.toString());
                    const notice = docs.length ? ['', deprecationNotice] : [deprecationNotice];

                    docs.push(...notice.map((text) => meta.registry.createType('Text', text)));
                  }
                }
              }

              const args = fields
                .map(({ type }) => lookup.getTypeDef(type))
                .map((typeDef) => {
                  const arg = typeDef.lookupName || formatType(registry, allDefs, typeDef, imports);

                  // Add the type to the list of used types
                  if (!(imports.primitiveTypes[arg])) {
                    usedTypes.add(arg);
                  }

                  return arg;
                });

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
        };
      })
      .sort(compareName);

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
