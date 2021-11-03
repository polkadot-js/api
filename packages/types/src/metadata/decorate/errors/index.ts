// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchErrorModule, MetadataLatest, PortableRegistry, SiField, SiVariant } from '../../../interfaces';
import type { Text, u8 } from '../../../primitive';
import type { Registry } from '../../../types';
import type { Errors, IsError } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { lazyMethod } from '../../../create/lazy';
import { lazyVariant, objectNameToString } from '../util';

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

function createIsError (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionIndex: number): IsError {
  return {
    is: ({ error, index }: DispatchErrorModule) =>
      index.eq(sectionIndex) &&
      error.eq(variant.index),
    meta: registry.createType('ErrorMetadataLatest', variantToMeta(lookup, variant))
  };
}

/** @internal */
export function decorateErrors (registry: Registry, { lookup, pallets }: MetadataLatest, version: number): Errors {
  const result: Errors = {};

  for (let i = 0; i < pallets.length; i++) {
    const { errors, index, name } = pallets[i];

    if (errors.isSome) {
      const sectionIndex = version >= 12 ? index.toNumber() : i;

      lazyMethod(result, stringCamelCase(name), () =>
        lazyVariant(lookup, errors, objectNameToString, (variant: SiVariant) =>
          createIsError(registry, lookup, variant, sectionIndex)
        )
      );
    }
  }

  return result;
}
