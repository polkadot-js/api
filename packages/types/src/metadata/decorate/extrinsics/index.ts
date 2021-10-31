// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataV14 } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Extrinsics, ModuleExtrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { getSiName } from '../../util';
import { createUnchecked } from './createUnchecked';

export function filterCallsSome ({ calls }: PalletMetadataV14): boolean {
  return calls.isSome;
}

/** @internal */
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Extrinsics {
  const filtered = pallets.filter(filterCallsSome);
  const result: Extrinsics = {};

  for (let i = 0; i < filtered.length; i++) {
    const { calls, index, name } = filtered[i];
    const sectionName = stringCamelCase(name);
    const sectionIndex = metaVersion >= 12
      ? index.toNumber()
      : i;
    const newModule: ModuleExtrinsics = {};

    for (const v of lookup.getSiType(calls.unwrap().type).def.asVariant.variants) {
      const callMetadata = registry.createType('FunctionMetadataLatest', {
        ...v,
        args: v.fields.map(({ name, type, typeName }, index) => ({
          name: stringCamelCase(name.unwrapOr(`param${index}`)),
          type: getSiName(lookup, type),
          ...(typeName.isSome
            ? { typeName: typeName.unwrap() }
            : {}
          )
        }))
      });

      newModule[stringCamelCase(callMetadata.name)] = createUnchecked(registry, sectionName, new Uint8Array([sectionIndex, callMetadata.index.toNumber()]), callMetadata);
    }

    result[sectionName] = newModule;
  }

  return result;
}
