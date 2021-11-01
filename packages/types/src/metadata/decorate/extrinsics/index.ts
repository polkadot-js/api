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

  for (let p = 0; p < filtered.length; p++) {
    const { calls, index, name } = filtered[p];
    const sectionName = stringCamelCase(name);
    const sectionIndex = metaVersion >= 12
      ? index.toNumber()
      : p;
    const newModule: ModuleExtrinsics = {};
    const { variants } = lookup.getSiType(calls.unwrap().type).def.asVariant;

    for (let v = 0; v < variants.length; v++) {
      const variant = variants[v];
      const args = new Array<Record<string, unknown>>(variant.fields.length);

      for (let a = 0; a < variant.fields.length; a++) {
        const { name, type, typeName } = variant.fields[a];

        args[a] = {
          name: stringCamelCase(name.unwrapOr(`param${a}`)),
          type: getSiName(lookup, type),
          ...(typeName.isSome
            ? { typeName: typeName.unwrap() }
            : {}
          )
        };
      }

      const callMetadata = registry.createType('FunctionMetadataLatest', { ...variant, args });

      newModule[stringCamelCase(callMetadata.name)] = createUnchecked(registry, sectionName, new Uint8Array([sectionIndex, callMetadata.index.toNumber()]), callMetadata);
    }

    result[sectionName] = newModule;
  }

  return result;
}
