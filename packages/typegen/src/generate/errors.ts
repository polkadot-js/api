// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Handlebars from 'handlebars';

import { Metadata } from '@polkadot/metadata/Metadata';
import staticData from '@polkadot/metadata/static';
import { TypeRegistry } from '@polkadot/types/create';
import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, readTemplate, writeFile } from '../util';

const template = readTemplate('errors');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (meta: Metadata, dest: string, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const imports = createImports({});

    const modules = meta.asLatest.modules
      .sort(compareName)
      .filter((mod) => mod.errors.length > 0)
      .map(({ errors, name }) => ({
        items: errors
          .sort(compareName)
          .map(({ documentation, name }) => ({
            docs: documentation,
            name: name.toString()
          })),
        name: stringCamelCase(name)
      }));

    const types = [
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
export function generateDefaultErrors (dest = 'packages/api/src/augment/errors.ts', data = staticData, isStrict = false): void {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, data);

  registry.setMetadata(metadata);

  return generateForMeta(metadata, dest, isStrict);
}
