// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, initMeta, readTemplate, setImports, writeFile } from '../util';

const template = readTemplate('consts');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (meta: Metadata, dest: string, extraTypes: ExtraTypes, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const { lookup, pallets, registry } = meta.asLatest;

    const modules = pallets
      .sort(compareName)
      .filter(({ constants }) => constants.length > 0)
      .map(({ constants, name }) => {
        if (!isStrict) {
          setImports(allDefs, imports, ['Codec']);
        }

        const items = constants
          .sort(compareName)
          .map(({ docs, name, type }) => {
            const returnType = formatType(registry, allDefs, lookup.getTypeDef(type), imports);

            setImports(allDefs, imports, [returnType]);

            return {
              docs,
              name: stringCamelCase(name),
              type: returnType
            };
          });

        return {
          items,
          name: stringCamelCase(name)
        };
      });

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types: [
        ...Object.keys(imports.localTypes).sort().map<{ file: string; types: string[] }>((packagePath) => ({
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
export function generateDefaultConsts (dest = 'packages/api/src/augment/consts.ts', data?: string, extraTypes: ExtraTypes = {}, isStrict = false): void {
  const { metadata } = initMeta(data, extraTypes);

  return generateForMeta(metadata, dest, extraTypes, isStrict);
}
