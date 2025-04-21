// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types.js';

import Handlebars from 'handlebars';

import { stringCamelCase } from '@polkadot/util';

import { compareName, createImports, initMeta, readTemplate, writeFile } from '../util/index.js';
import type { DeprecationStatusV16 } from '@polkadot/types/interfaces';

const generateForMetaTemplate = Handlebars.compile(readTemplate('errors'));

function getDeprecationNotice(deprecationStatus: DeprecationStatusV16, name: string): string {
  let deprecationNotice = "@deprecated"

  if (deprecationStatus.isDeprecated) {
      const { note, since } = deprecationStatus.asDeprecated;
      const sinceText = since.isSome ? ` Since ${since.unwrap()}.` : "";

      deprecationNotice += ` ${note}${sinceText}`;
  }else {
    deprecationNotice += ` ${name} has been deprecated`
  }

  return deprecationNotice
}

/** @internal */
function generateForMeta (meta: Metadata, dest: string, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const imports = createImports({});
    const { lookup, pallets } = meta.asLatest;
    const modules = pallets
      .filter(({ errors }) => errors.isSome)
      .map((data) => {
        let name = data.name;
        let errors = data.errors.unwrap()
        return {
          items: lookup.getSiType(errors.type).def.asVariant.variants
            .map(({ docs, name, index }) => {
              if (errors.deprecationInfo.isVariantsDeprecated) {
                const rawStatus = errors.deprecationInfo.asVariantsDeprecated.toJSON()?.[index.toNumber()];

                if (rawStatus) {
                  const deprecationStatus: DeprecationStatusV16 = meta.registry.createTypeUnsafe("DeprecationStatusV16", [rawStatus]);
                  if (!deprecationStatus.isNotDeprecated){
                    const deprecationNotice = getDeprecationNotice(deprecationStatus, name.toString());
                    const notices = docs.length ? ["", deprecationNotice] : [deprecationNotice];
                    docs.push(...notices.map(text => meta.registry.createType('Text', text)));
                  }
                }
              }
              return {
                docs,
                name: name.toString()
              }})
            .sort(compareName),
          name: stringCamelCase(name)
        }})
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
