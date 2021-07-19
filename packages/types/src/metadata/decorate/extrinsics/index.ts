// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// FIXME MetadataLatest
import type { MetadataV14 } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Extrinsics, ModuleExtrinsics } from '../types';

import { assert, stringCamelCase } from '@polkadot/util';

import { createUnchecked } from './createUnchecked';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataV14, _metaVersion: number): Extrinsics {
  return pallets
    .filter(({ calls }) => calls.isSome)
    .reduce((result: Extrinsics, { calls, index, name }): Extrinsics => {
      const sectionName = stringCamelCase(name);

      const { def } = lookup.getSiType(calls.unwrap().type);

      assert(def.isVariant, () => `Expected a variant type for Calls from ${sectionName}`);

      result[sectionName] = def.asVariant.variants
        .reduce((newModule: ModuleExtrinsics, callMetadata): ModuleExtrinsics => {
          newModule[stringCamelCase(callMetadata.name)] = createUnchecked(registry, sectionName, new Uint8Array([index.toNumber(), callMetadata.index.toNumber()]), callMetadata);

          return newModule;
        }, {});

      return result;
    }, {});
}
