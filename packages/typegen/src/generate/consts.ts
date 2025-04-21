// Copyright 2017-2025 @polkadot/typegen authors & contributors
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
import { ignoreUnusedLookups } from './lookup.js';
import type { DeprecationInfoV16 } from '@polkadot/types/interfaces';

const generateForMetaTemplate = Handlebars.compile(readTemplate('consts'));

//TODO: Figure out how to handle VariantsDeprecated
function getDeprecationNotice(deprecationInfo: DeprecationInfoV16): string | null {
  if (deprecationInfo.isNotDeprecated) return null;
 
  let deprecationNotice = "@deprecated"
  
  if (deprecationInfo.isItemDeprecated && deprecationInfo.asItemDeprecated.isDeprecated) {
      const { note, since } = deprecationInfo.asItemDeprecated.asDeprecated;
      const sinceText = since.isSome ? ` Since ${since.unwrap()}.` : "";

      deprecationNotice += ` ${note}${sinceText}`;
  }

  return deprecationNotice
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
      .filter(({ constants }) => constants.length > 0)
      .map(({ constants, name }) => {
        if (!isStrict) {
          setImports(allDefs, imports, ['Codec']);
        }

        const items = constants
          .map(({ deprecationInfo, docs, name, type }) => {
            const typeDef = lookup.getTypeDef(type);
            const returnType = typeDef.lookupName || formatType(registry, allDefs, typeDef, imports);
            const deprecationNotice = getDeprecationNotice(deprecationInfo);

            if (deprecationNotice) {
              const items = docs.length
                ? ["", deprecationNotice]
                : [deprecationNotice];

              docs.push(...items.map(text => registry.createType('Text', text)));
            }

            // Add the type to the list of used types
            if (!(imports.primitiveTypes[returnType])) {
              usedTypes.add(returnType);
            }

            setImports(allDefs, imports, [returnType]);

            return {
              docs,
              name: stringCamelCase(name),
              type: returnType
            };
          })
          .sort(compareName);

        return {
          items,
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
        ...Object.keys(imports.localTypes).sort().map<{ file: string; types: string[] }>((packagePath) => ({
          file: packagePath.replace('@polkadot/types-augment', '@polkadot/types'),
          types: Object.keys(imports.localTypes[packagePath])
        })),
        {
          file: '@polkadot/api-base/types',
          types: ['ApiTypes', 'AugmentedConst']
        }
      ]
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export function generateDefaultConsts (dest: string, data: HexString, extraTypes: ExtraTypes = {}, isStrict = false, customLookupDefinitions?: Definitions): void {
  const { metadata } = initMeta(data, extraTypes);

  return generateForMeta(metadata, dest, extraTypes, isStrict, customLookupDefinitions);
}
