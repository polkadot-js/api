// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Extrinsics, ModuleExtrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { getSiName } from '../../util';
import { createUnchecked } from './createUnchecked';

/** @internal */
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Extrinsics {
  return pallets
    .filter(({ calls }) => calls.isSome)
    .reduce((result: Extrinsics, { calls, index, name }, _sectionIndex): Extrinsics => {
      const sectionName = stringCamelCase(name);
      const sectionIndex = metaVersion >= 12
        ? index.toNumber()
        : _sectionIndex;

      result[sectionName] = lookup.getSiType(calls.unwrap().type).def.asVariant.variants
        .reduce((newModule: ModuleExtrinsics, variant): ModuleExtrinsics => {
          const callMetadata = registry.createType('FunctionMetadataLatest', {
            ...variant,
            args: variant.fields.map(({ name, type }, index) => ({
              name: stringCamelCase(name.unwrapOr(`param${index}`)),
              type: getSiName(lookup, type)
            }))
          });

          newModule[stringCamelCase(callMetadata.name)] = createUnchecked(registry, sectionName, new Uint8Array([sectionIndex, callMetadata.index.toNumber()]), callMetadata);

          return newModule;
        }, {});

      return result;
    }, {});
}
