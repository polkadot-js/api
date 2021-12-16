// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { MetadataLatest, PalletMetadataLatest, SiVariant } from '../../../interfaces';
import type { PortableRegistry } from '../../../metadata';
import type { CallFunction } from '../../../types';
import type { Extrinsics } from '../types';

import { objectNameToCamel } from '@polkadot/types-helpers';
import { lazyMethod, objectSpread, stringCamelCase } from '@polkadot/util';

import { lazyVariants } from '../../../create/lazy';
import { getSiName } from '../../util';
import { createUnchecked } from './createUnchecked';

export function filterCallsSome ({ calls }: PalletMetadataLatest): boolean {
  return calls.isSome;
}

export function createCallFunction (registry: CodecRegistry, lookup: PortableRegistry, variant: SiVariant, sectionName: string, sectionIndex: number): CallFunction {
  const { fields, index } = variant;
  const args = new Array<Record<string, unknown>>(fields.length);

  for (let a = 0; a < fields.length; a++) {
    const { name, type, typeName } = fields[a];

    args[a] = objectSpread(
      {
        name: stringCamelCase(name.unwrapOr(`param${a}`)),
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
export function decorateExtrinsics (registry: CodecRegistry, { lookup, pallets }: MetadataLatest, version: number): Extrinsics {
  const result: Extrinsics = {};
  const filtered = pallets.filter(filterCallsSome);

  for (let i = 0; i < filtered.length; i++) {
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
