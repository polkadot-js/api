// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../interfaces';
import type { Registry } from '../../types';

import { flattenUniq } from './flattenUniq';
import { validateTypes } from './validateTypes';

/** @internal */
function getCallNames ({ pallets, types }: MetadataLatest): string[][][] {
  return pallets.map(({ calls }): string[][] =>
    calls.isNone
      ? []
      : types.lookupType(calls.unwrap().type).def.asVariant.variants.map(({ fields }) =>
        fields.map(({ type }) =>
          types.lookupTypeDef(type).type
        )
      )
  );
}

/** @internal */
function getConstantNames ({ pallets, types }: MetadataLatest): string[][] {
  return pallets.map(({ constants }): string[] =>
    constants.map(({ type }) =>
      types.lookupTypeDef(type).type
    )
  );
}

/** @internal */
function getEventNames ({ pallets, types }: MetadataLatest): string[][][] {
  return pallets.map(({ events }): string[][] =>
    events.isNone
      ? []
      : types.lookupType(events.unwrap().type).def.asVariant.variants.map(({ fields }) =>
        fields.map(({ type }) =>
          types.lookupTypeDef(type).type
        )
      )
  );
}

/** @internal */
function getStorageNames ({ pallets, types }: MetadataLatest): string[][][] {
  return pallets.map(({ storage }): string[][] =>
    storage.unwrapOr({ items: [] }).items.map(({ type }) =>
      type.isPlain
        ? [
          types.lookupTypeDef(type.asPlain).type
        ]
        : type.isMap
          ? [
            types.lookupTypeDef(type.asMap.value).type,
            types.lookupTypeDef(type.asMap.key).type
          ]
          : type.isDoubleMap
            ? [
              types.lookupTypeDef(type.asDoubleMap.value).type,
              types.lookupTypeDef(type.asDoubleMap.key1).type,
              types.lookupTypeDef(type.asDoubleMap.key2).type
            ]
            : [
              types.lookupTypeDef(type.asNMap.value).type,
              ...types.lookupType(type.asNMap.key).def.asTuple.map((t) =>
                types.lookupTypeDef(t).type
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
