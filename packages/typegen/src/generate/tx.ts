// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { Text } from '@polkadot/types/primitive';
import type { Definitions, Registry } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types.js';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, getSimilarTypes, initMeta, readTemplate, setImports, writeFile } from '../util/index.js';

const MAPPED_NAMES: Record<string, string> = {
  class: 'clazz',
  new: 'updated'
};

const generateForMetaTemplate = Handlebars.compile(readTemplate('tx'));

function mapName (_name: Text): string {
  const name = stringCamelCase(_name);

  return MAPPED_NAMES[name] || name;
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
    const modules = pallets
      .sort(compareName)
      .filter(({ calls }) => calls.isSome)
      .map(({ calls, name }) => {
        setImports(allDefs, imports, ['SubmittableExtrinsic']);

        const sectionName = stringCamelCase(name);
        const items = lookup.getSiType(calls.unwrap().type).def.asVariant.variants
          .map(({ docs, fields, name }) => {
            const typesInfo = fields.map(({ name, type, typeName }, index): [string, string, string] => {
              const typeDef = registry.lookup.getTypeDef(type);

              return [
                name.isSome
                  ? mapName(name.unwrap())
                  : `param${index}`,
                typeName.isSome
                  ? typeName.toString()
                  : typeDef.type,
                typeDef.isFromSi
                  ? typeDef.type
                  : typeDef.lookupName || typeDef.type
              ];
            });
            const params = typesInfo
              .map(([name,, typeStr]) => {
                const similarTypes = getSimilarTypes(registry, allDefs, typeStr, imports);

                setImports(allDefs, imports, [typeStr, ...similarTypes]);

                return `${name}: ${similarTypes.join(' | ')}`;
              })
              .join(', ');

            return {
              args: typesInfo.map(([,, typeStr]) =>
                formatType(registry, allDefs, typeStr, imports)
              ).join(', '),
              docs,
              name: stringCamelCase(name),
              params
            };
          })
          .sort(compareName);

        return {
          items,
          name: sectionName
        };
      })
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
          types: ['ApiTypes', 'AugmentedSubmittable', 'SubmittableExtrinsic', 'SubmittableExtrinsicFunction']
        }
      ]
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export function generateDefaultTx (dest: string, data: HexString, extraTypes: ExtraTypes = {}, isStrict = false, customLookupDefinitions?: Definitions): void {
  const { metadata, registry } = initMeta(data, extraTypes);

  return generateForMeta(registry, metadata, dest, extraTypes, isStrict, customLookupDefinitions);
}
