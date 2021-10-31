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

  for (let p = 0; p < pallets.length; p++) {
    const { errors, index, name } = pallets[p];

    if (errors.isSome) {
      const sectionIndex = metaVersion >= 12
        ? index.toNumber()
        : p;
      const newModule: ModuleErrors = {};
      const { variants } = lookup.getSiType(errors.unwrap().type).def.asVariant;

      for (let v = 0; v < variants.length; v++) {
        const variant = variants[v];

        // we don't camelCase the error name
        newModule[variant.name.toString()] = {
          is: ({ error, index }: DispatchErrorModule) =>
            index.eq(sectionIndex) &&
            error.eq(variant.index),
          meta: registry.createType('ErrorMetadataLatest', variantToMeta(lookup, variant))
        };
      }

      result[stringCamelCase(name)] = newModule;
    }
  }

  return result;
}
