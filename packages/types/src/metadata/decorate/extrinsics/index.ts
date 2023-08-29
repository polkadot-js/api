// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, PalletMetadataLatest, SiVariant } from '../../../interfaces/index.js';
import type { PortableRegistry } from '../../../metadata/index.js';
import type { CallFunction } from '../../../types/index.js';
import type { Extrinsics } from '../types.js';

import { lazyMethod, objectSpread, stringCamelCase } from '@polkadot/util';

import { lazyVariants } from '../../../create/lazy.js';
import { getSiName } from '../../util/index.js';
import { objectNameToCamel } from '../util.js';
import { createUnchecked } from './createUnchecked.js';

export function filterCallsSome ({ calls }: PalletMetadataLatest): boolean {
  return calls.isSome;
}

export function createCallFunction (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionName: string, sectionIndex: number): CallFunction {
  const { fields, index } = variant;
  const count = fields.length;
  const args = new Array<Record<string, unknown>>(count);

  for (let i = 0; i < count; i++) {
    const { name, type, typeName } = fields[i];

    args[i] = objectSpread(
      {
        name: stringCamelCase(name.unwrapOr(`param${i}`)),
        type: getSiName(lookup, type)
      },
      typeName.isSome
        ? { typeName: typeName.unwrap() }
        : null
    );
  }

  return createUnchecked(
    registry,
    sectionName,
    new Uint8Array([sectionIndex, index.toNumber()]),
    registry.createTypeUnsafe('FunctionMetadataLatest', [objectSpread({ args }, variant)])
  );
}

/** @internal */
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataLatest, version: number): Extrinsics {
  const result: Extrinsics = {};
  const filtered = pallets.filter(filterCallsSome);

  for (let i = 0, count = filtered.length; i < count; i++) {
    const { calls, index, name } = filtered[i];
    const sectionName = stringCamelCase(name);
    const sectionIndex = version >= 12 ? index.toNumber() : i;

    lazyMethod(result, sectionName, () =>
      lazyVariants(lookup, calls.unwrap(), objectNameToCamel, (variant: SiVariant) =>
        createCallFunction(registry, lookup, variant, sectionName, sectionIndex)
      )
    );
  }

  return result;
}
