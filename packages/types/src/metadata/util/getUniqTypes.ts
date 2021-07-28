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
function getCallNames ({ lookup, pallets }: MetadataLatest): string[][][] {
  return pallets.map(({ calls }): string[][] =>
    calls.isNone
      ? []
      : extractFieldTypes(lookup, calls.unwrap().type)
  );
}

/** @internal */
function getConstantNames ({ lookup, pallets }: MetadataLatest): string[][] {
  return pallets.map(({ constants }): string[] =>
    extractTypes(lookup, constants)
  );
}

/** @internal */
function getEventNames ({ lookup, pallets }: MetadataLatest): string[][][] {
  return pallets.map(({ events }): string[][] =>
    events.isNone
      ? []
      : extractFieldTypes(lookup, events.unwrap().type)
  );
}

/** @internal */
function getStorageNames ({ lookup, pallets }: MetadataLatest): string[][][] {
  return pallets.map(({ storage }): string[][] =>
    storage.unwrapOr({ items: [] }).items.map(({ type }) =>
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
    )
  );
}

/** @internal */
export function getUniqTypes (registry: Registry, meta: MetadataLatest, throwError: boolean): string[] {
  return validateTypes(registry, throwError, flattenUniq([
    getCallNames(meta),
    getConstantNames(meta),
    getEventNames(meta),
    getStorageNames(meta)
  ]));
}
