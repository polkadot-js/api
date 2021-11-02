// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataLatest, PortableRegistry, SiVariant } from '../../../interfaces';
import type { CallFunction, Registry } from '../../../types';
import type { Extrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { lazyMethod, lazyMethods } from '../../../create/lazy';
import { getSiName } from '../../util';
import { objectNameToCamel } from '../util';
import { createUnchecked } from './createUnchecked';

export function filterCallsSome ({ calls }: PalletMetadataLatest): boolean {
  return calls.isSome;
}

export function createCallFunction (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionIndex: number, sectionName: string): CallFunction {
  const { fields, index } = variant;
  const args = new Array<Record<string, unknown>>(fields.length);

  for (let a = 0; a < fields.length; a++) {
    const { name, type, typeName } = fields[a];

    args[a] = {
      name: stringCamelCase(name.unwrapOr(`param${a}`)),
      type: getSiName(lookup, type),
      ...(typeName.isSome
        ? { typeName: typeName.unwrap() }
        : {}
      )
    };
  }

  return createUnchecked(
    registry,
    sectionName,
    new Uint8Array([sectionIndex, index.toNumber()]),
    registry.createType('FunctionMetadataLatest', { ...variant, args })
  );
}

/** @internal */
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataLatest, version: number): Extrinsics {
  const result: Extrinsics = {};

  const lazySection = ({ calls, name }: PalletMetadataLatest, sectionIndex: number): void => {
    const sectionName = stringCamelCase(name);

    lazyMethod(
      result,
      lookup.getSiType(calls.unwrap().type).def.asVariant.variants,
      (variants: SiVariant[]) =>
        lazyMethods(
          variants,
          (variant: SiVariant) =>
            createCallFunction(registry, lookup, variant, sectionIndex, sectionName),
          objectNameToCamel
        ),
      () => sectionName
    );
  };

  const filtered = pallets.filter(filterCallsSome);

  for (let p = 0; p < filtered.length; p++) {
    const pallet = filtered[p];

    lazySection(pallet, version >= 12 ? pallet.index.toNumber() : p);
  }

  return result;
}
