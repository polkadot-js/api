// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '@polkadot/types/interfaces';
import type { CodecRegistry, ICompact, INumber } from '@polkadot/types-codec/types';
import type { ILookup } from '@polkadot/types-create/types';

import { flattenUniq } from './flattenUniq';
import { validateTypes } from './validateTypes';

/** @internal */
function extractTypes (lookup: ILookup, types: { type: ICompact<INumber> }[]): string[] {
  return types.map(({ type }) =>
    lookup.getTypeDef(type).type
  );
}

/** @internal */
function extractFieldTypes (lookup: ILookup, type: ICompact<INumber>): string[][] {
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
      all.push(storage.unwrap().items.map(({ type }): string[] => {
        if (type.isPlain) {
          return [lookup.getTypeDef(type.asPlain).type];
        }

        const { hashers, key, value } = type.asMap;

        return hashers.length === 1
          ? [
            lookup.getTypeDef(value).type,
            lookup.getTypeDef(key).type
          ]
          : [
            lookup.getTypeDef(value).type,
            ...lookup.getSiType(key).def.asTuple.map((t) =>
              lookup.getTypeDef(t).type
            )
          ];
      }));
    }

    return all;
  }, []);
}

/** @internal */
export function getUniqTypes (registry: CodecRegistry, meta: MetadataLatest, throwError: boolean): string[] {
  return validateTypes(registry, throwError, flattenUniq(getPalletNames(meta)));
}
