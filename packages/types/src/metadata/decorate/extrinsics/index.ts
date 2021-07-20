// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// FIXME MetadataLatest
import type { MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Extrinsics, ModuleExtrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { createUnchecked } from './createUnchecked';

/** @internal */
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataLatest): Extrinsics {
  return pallets
    .filter(({ calls }) => calls.isSome)
    .reduce((result: Extrinsics, { calls, index, name }): Extrinsics => {
      const sectionName = stringCamelCase(name);

      result[sectionName] = lookup.getSiType(calls.unwrap().type).def.asVariant.variants
        .reduce((newModule: ModuleExtrinsics, callMetadata): ModuleExtrinsics => {
          newModule[stringCamelCase(callMetadata.name)] = createUnchecked(registry, sectionName, new Uint8Array([index.toNumber(), callMetadata.index.toNumber()]), callMetadata);

          return newModule;
        }, {});

      return result;
    }, {});
}
