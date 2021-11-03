// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataLatest, PortableRegistry, SiVariant } from '../../../interfaces';
import type { CallFunction, Registry } from '../../../types';
import type { Extrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { lazyMethod, lazyVariants } from '../../../create/lazy';
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
  const filtered = pallets.filter(filterCallsSome);

  for (let i = 0; i < filtered.length; i++) {
    const { calls, index, name } = filtered[i];
    const sectionName = stringCamelCase(name);
    const sectionIndex = version >= 12 ? index.toNumber() : i;

    lazyMethod(result, sectionName, () =>
      lazyVariants(lookup, calls.unwrap(), objectNameToCamel, (variant: SiVariant) =>
        createCallFunction(registry, lookup, variant, sectionIndex, sectionName)
      )
    );
  }

  return result;
}
