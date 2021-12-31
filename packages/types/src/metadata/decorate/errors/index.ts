// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text, u8 } from '@polkadot/types-codec';
import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { DispatchErrorModule, MetadataLatest, SiField, SiVariant } from '../../../interfaces';
import type { PortableRegistry } from '../../../metadata';
import type { Errors, IsError } from '../types';

import { lazyMethod, objectSpread, stringCamelCase } from '@polkadot/util';

import { lazyVariants } from '../../../create/lazy';
import { objectNameToString } from '../util';

interface ItemMeta {
  args: string[];
  name: Text;
  fields: SiField[];
  index: u8;
  docs: Text[];
}

export function variantToMeta (lookup: PortableRegistry, variant: SiVariant): ItemMeta {
  return objectSpread(
    { args: variant.fields.map(({ type }) => lookup.getTypeDef(type).type) },
    variant
  );
}

/** @internal */
export function decorateErrors (registry: CodecRegistry, { lookup, pallets }: MetadataLatest, version: number): Errors {
  const result: Errors = {};

  for (let i = 0; i < pallets.length; i++) {
    const { errors, index, name } = pallets[i];

    if (errors.isSome) {
      const sectionIndex = version >= 12 ? index.toNumber() : i;

      lazyMethod(result, stringCamelCase(name), () =>
        lazyVariants(lookup, errors.unwrap(), objectNameToString, (variant: SiVariant): IsError => ({
          is: ({ error, index }: DispatchErrorModule) =>
            index.eq(sectionIndex) &&
            error.eq(variant.index),
          meta: registry.createTypeUnsafe('ErrorMetadataLatest', [variantToMeta(lookup, variant)])
        }))
      );
    }
  }

  return result;
}
