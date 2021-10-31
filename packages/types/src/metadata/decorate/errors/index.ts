// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchErrorModule, MetadataLatest, PortableRegistry, SiField, SiVariant } from '../../../interfaces';
import type { Text, u8 } from '../../../primitive';
import type { Registry } from '../../../types';
import type { Errors, ModuleErrors } from '../types';

import { stringCamelCase } from '@polkadot/util';

interface ItemMeta {
  args: string[];
  name: Text;
  fields: SiField[];
  index: u8;
  docs: Text[];
}

export function variantToMeta (lookup: PortableRegistry, variant: SiVariant): ItemMeta {
  return {
    ...variant,
    args: variant.fields.map(({ type }) =>
      lookup.getTypeDef(type).type
    )
  };
}

/** @internal */
export function decorateErrors (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Errors {
  const result: Errors = {};

  for (let i = 0; i < pallets.length; i++) {
    const { errors, index, name } = pallets[i];

    if (errors.isSome) {
      const sectionIndex = metaVersion >= 12
        ? index.toNumber()
        : i;
      const newModule: ModuleErrors = {};

      for (const v of lookup.getSiType(errors.unwrap().type).def.asVariant.variants) {
        // we don't camelCase the error name
        newModule[v.name.toString()] = {
          is: ({ error, index }: DispatchErrorModule) =>
            index.eq(sectionIndex) &&
            error.eq(v.index),
          meta: registry.createType('ErrorMetadataLatest', variantToMeta(lookup, v))
        };
      }

      result[stringCamelCase(name)] = newModule;
    }
  }

  return result;
}
