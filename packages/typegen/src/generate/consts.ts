// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Handlebars from 'handlebars';

import { Metadata } from '@polkadot/metadata/Metadata';
import staticData from '@polkadot/metadata/static';
import { TypeRegistry } from '@polkadot/types/create';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, formatType, readTemplate, registerDefinitions, setImports, writeFile } from '../util';

const template = readTemplate('consts');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (meta: Metadata, dest: string, extraTypes: Record<string, Record<string, { types: Record<string, any> }>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, { types: Record<string, unknown> }>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});

    const modules = meta.asLatest.modules
      .sort(compareName)
      .filter((mod) => mod.constants.length > 0)
      .map(({ constants, name }) => {
        if (!isStrict) {
          setImports(allDefs, imports, ['Codec']);
        }

        const items = constants
          .sort(compareName)
          .map(({ documentation, name, type }) => {
            const returnType = formatType(allDefs, type.toString(), imports);

            setImports(allDefs, imports, [returnType]);

            return {
              docs: documentation,
              name: stringCamelCase(name),
              type: returnType
            };
          });

        return {
          items,
          name: stringCamelCase(name)
        };
      });

    const types = [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      })),
      {
        file: '@polkadot/api/types',
        types: ['ApiTypes']
      }
    ];

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export function generateDefaultConsts (dest = 'packages/api/src/augment/consts.ts', data = staticData, extraTypes: Record<string, Record<string, { types: Record<string, any> }>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  const metadata = new Metadata(registry, data);

  registry.setMetadata(metadata);

  return generateForMeta(metadata, dest, extraTypes, isStrict);
}
