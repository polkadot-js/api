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
  return pallets.reduce((result: Errors, { errors, index, name }, _sectionIndex): Errors => {
    if (!errors.isSome) {
      return result;
    }

    const sectionIndex = metaVersion >= 12
      ? index.toNumber()
      : _sectionIndex;

    result[stringCamelCase(name)] = lookup.getSiType(errors.unwrap().type).def.asVariant.variants.reduce((newModule: ModuleErrors, variant): ModuleErrors => {
      // we don't camelCase the error name
      newModule[variant.name.toString()] = {
        is: ({ error, index }: DispatchErrorModule) =>
          index.eq(sectionIndex) &&
          error.eq(variant.index),
        meta: registry.createType('ErrorMetadataLatest', variantToMeta(lookup, variant))
      };

      return newModule;
    }, {} as ModuleErrors);

    return result;
  }, {} as Errors);
}
