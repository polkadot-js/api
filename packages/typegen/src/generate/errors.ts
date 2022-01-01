// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, initMeta, readTemplate, writeFile } from '../util';

const generateForMetaTemplate = Handlebars.compile(readTemplate('errors'));

/** @internal */
function generateForMeta (meta: Metadata, dest: string, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const imports = createImports({});
    const { lookup, pallets } = meta.asLatest;
    const modules = pallets
      .filter(({ errors }) => errors.isSome)
      .map(({ errors, name }) => ({
        items: lookup.getSiType(errors.unwrap().type).def.asVariant.variants
          .map(({ docs, name }) => ({
            docs,
            name: name.toString()
          }))
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
export function generateDefaultErrors (dest: string, data: HexString, extraTypes: ExtraTypes = {}, isStrict = false): void {
  const { metadata } = initMeta(data, extraTypes);

  return generateForMeta(metadata, dest, isStrict);
}
