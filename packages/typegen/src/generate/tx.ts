// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types/types';

import Handlebars from 'handlebars';

import { Metadata } from '@polkadot/metadata/Metadata';
import staticData from '@polkadot/metadata/static';
import { TypeRegistry } from '@polkadot/types/create';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { Text } from '@polkadot/types/primitive';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, getSimilarTypes, readTemplate, registerDefinitions, setImports, writeFile } from '../util';

const MAPPED_NAMES: Record<string, string> = {
  new: 'updated'
};

function mapName (_name: Text): string {
  const name = stringCamelCase(_name);

  return MAPPED_NAMES[name] || name;
}

const template = readTemplate('tx');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, { types: Record<string, any> }>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, { types: Record<string, any> }>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});

    const modules = meta.asLatest.modules
      .sort(compareName)
      .filter(({ calls }) => calls.unwrapOr([]).length !== 0)
      .map(({ calls, name }) => {
        setImports(allDefs, imports, ['Call', 'Extrinsic', 'SubmittableExtrinsic']);

        const items = calls.unwrap()
          .sort(compareName)
          .map(({ args, documentation, name }) => {
            const params = args
              .map(({ name, type }) => {
                const typeStr = type.toString();
                const similarTypes = getSimilarTypes(registry, allDefs, typeStr, imports);

                setImports(allDefs, imports, [typeStr, ...similarTypes]);

                return `${mapName(name)}: ${similarTypes.join(' | ')}`;
              })
              .join(', ');

            return {
              docs: documentation,
              name: stringCamelCase(name),
              params
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
        types: ['ApiTypes', 'SubmittableExtrinsic']
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
export function generateDefaultTx (dest = 'packages/api/src/augment/tx.ts', data = staticData, extraTypes: Record<string, Record<string, { types: Record<string, any> }>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  const metadata = new Metadata(registry, data);

  registry.setMetadata(metadata);

  return generateForMeta(registry, metadata, dest, extraTypes, isStrict);
}
