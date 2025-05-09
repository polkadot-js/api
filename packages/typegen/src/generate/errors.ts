// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { VariantDeprecationInfoV16 } from '@polkadot/types/interfaces';
import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types.js';

import Handlebars from 'handlebars';

import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, initMeta, readTemplate, writeFile } from '../util/index.js';

const generateForMetaTemplate = Handlebars.compile(readTemplate('errors'));

function getDeprecationNotice (deprecationInfo: VariantDeprecationInfoV16, name: string): string {
  let deprecationNotice = '@deprecated';

  if (deprecationInfo.isDeprecated) {
    const { note, since } = deprecationInfo.asDeprecated;
    const sinceText = since.isSome ? ` Since ${since.unwrap().toString()}.` : '';

    deprecationNotice += ` ${note.toString()}${sinceText}`;
  } else {
    deprecationNotice += ` ${name} has been deprecated`;
  }

  return deprecationNotice;
}

/** @internal */
function generateForMeta (meta: Metadata, dest: string, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const imports = createImports({});
    const { lookup, pallets } = meta.asLatest;
    const modules = pallets
      .filter(({ errors }) => errors.isSome)
      .map((data) => {
        const name = data.name;
        const errors = data.errors.unwrap();
        const deprecationInfo = errors.deprecationInfo[0].toJSON();

        return {
          items: lookup.getSiType(errors.type).def.asVariant.variants
            .map(({ docs, index, name }) => {
              const rawStatus = deprecationInfo?.[index.toNumber()];

              if (rawStatus) {
                const deprecationVariantInfo: VariantDeprecationInfoV16 = meta.registry.createTypeUnsafe('VariantDeprecationInfoV16', [rawStatus]);

                const deprecationNotice = getDeprecationNotice(deprecationVariantInfo, name.toString());
                const notice = docs.length ? ['', deprecationNotice] : [deprecationNotice];

                docs.push(...notice.map((text) => meta.registry.createType('Text', text)));
              }

              return {
                docs,
                name: name.toString()
              };
            })
            .sort(compareName),
          name: stringCamelCase(name)
        };
      })
      .sort(compareName);

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types: [
        {
          file: '@polkadot/api-base/types',
          types: ['ApiTypes', 'AugmentedError']
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
