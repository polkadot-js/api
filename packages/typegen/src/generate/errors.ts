// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import { assert, stringCamelCase } from '@polkadot/util';

import { compareName, createImports, initMeta, readTemplate, writeFile } from '../util';

const template = readTemplate('errors');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (meta: Metadata, dest: string, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const imports = createImports({});
    const { pallets, types } = meta.asLatest;
    const modules = pallets
      .sort(compareName)
      .filter(({ errors }) => errors.isSome)
      .map(({ errors, name }) => {
        const sectionName = stringCamelCase(name);
        const { def } = types.lookupType(errors.unwrap().type);

        assert(def.isVariant, () => `Expected a variant type for Errors from ${sectionName}`);

        return {
          items: def.asVariant.variants
            .sort(compareName)
            .map(({ docs, name }) => ({
              docs,
              name: name.toString()
            })),
          name: sectionName
        };
      });

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types: [
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
export function generateDefaultErrors (dest = 'packages/api/src/augment/errors.ts', data?: string, extraTypes: ExtraTypes = {}, isStrict = false): void {
  const { metadata } = initMeta(data, extraTypes);

  return generateForMeta(metadata, dest, isStrict);
}
