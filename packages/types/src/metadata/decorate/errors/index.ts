// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchErrorModule, MetadataLatest, PalletMetadataV14, PortableRegistry, SiField, SiVariant } from '../../../interfaces';
import type { Text, u8 } from '../../../primitive';
import type { Registry } from '../../../types';
import type { Errors, IsError, ModuleErrors } from '../types';

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

function createIsError (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionIndex: number): IsError {
  return {
    is: ({ error, index }: DispatchErrorModule) =>
      index.eq(sectionIndex) &&
      error.eq(variant.index),
    meta: registry.createType('ErrorMetadataLatest', variantToMeta(lookup, variant))
  };
}

function createLazyMethod (registry: Registry, lookup: PortableRegistry, result: ModuleErrors, variant: SiVariant, sectionIndex: number): void {
  let cached: IsError | null = null;

  function get (): IsError {
    if (!cached) {
      cached = createIsError(registry, lookup, variant, sectionIndex);
    }

    return cached;
  }

  Object.defineProperty(result, variant.name.toString(), { enumerable: true, get });
}

function createLazySection (registry: Registry, lookup: PortableRegistry, result: Errors, { errors, name }: PalletMetadataV14, sectionIndex: number): void {
  if (!errors.isSome) {
    return;
  }

  let cached: ModuleErrors | null = null;

  function get (): ModuleErrors {
    if (!cached) {
      cached = {};

      const { variants } = lookup.getSiType(errors.unwrap().type).def.asVariant;

      for (let v = 0; v < variants.length; v++) {
        createLazyMethod(registry, lookup, cached, variants[v], sectionIndex);
      }
    }

    return cached;
  }

  Object.defineProperty(result, stringCamelCase(name), { enumerable: true, get });
}

/** @internal */
export function decorateErrors (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Errors {
  const result: Errors = {};

  for (let p = 0; p < pallets.length; p++) {
    const sectionIndex = metaVersion >= 12
      ? pallets[p].index.toNumber()
      : p;

    createLazySection(registry, lookup, result, pallets[p], sectionIndex);
  }

  return result;
}
