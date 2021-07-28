// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PortableRegistry, SiLookupTypeId } from '../../interfaces';
import type { Registry } from '../../types';

import { flattenUniq } from './flattenUniq';
import { validateTypes } from './validateTypes';

/** @internal */
function extractTypes (lookup: PortableRegistry, types: { type: SiLookupTypeId }[]): string[] {
  return types.map(({ type }) =>
    lookup.getTypeDef(type).type
  );
}

/** @internal */
function extractFieldTypes (lookup: PortableRegistry, type: SiLookupTypeId): string[][] {
  return lookup.getSiType(type).def.asVariant.variants.map(({ fields }) =>
    extractTypes(lookup, fields)
  );
}

/** @internal */
function getPalletNames ({ lookup, pallets }: MetadataLatest): string[][][] {
  return pallets.reduce<string[][][]>((all, { calls, constants, events, storage }) => {
    all.push([extractTypes(lookup, constants)]);

    if (calls.isSome) {
      all.push(extractFieldTypes(lookup, calls.unwrap().type));
    }

    if (events.isSome) {
      all.push(extractFieldTypes(lookup, events.unwrap().type));
    }

    if (storage.isSome) {
      all.push(storage.unwrap().items.map(({ type }) =>
        type.isPlain
          ? [
            lookup.getTypeDef(type.asPlain).type
          ]
          : type.isMap
            ? [
              lookup.getTypeDef(type.asMap.value).type,
              lookup.getTypeDef(type.asMap.key).type
            ]
            : type.isDoubleMap
              ? [
                lookup.getTypeDef(type.asDoubleMap.value).type,
                lookup.getTypeDef(type.asDoubleMap.key1).type,
                lookup.getTypeDef(type.asDoubleMap.key2).type
              ]
              : [
                lookup.getTypeDef(type.asNMap.value).type,
                ...lookup.getSiType(type.asNMap.key).def.asTuple.map((t) =>
                  lookup.getTypeDef(t).type
                )
              ]
      ));
    }

    return all;
  }, []);
}

/** @internal */
export function getUniqTypes (registry: Registry, meta: MetadataLatest, throwError: boolean): string[] {
  return validateTypes(registry, throwError, flattenUniq(getPalletNames(meta)));
}
