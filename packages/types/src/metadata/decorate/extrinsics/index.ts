// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// FIXME MetadataLatest
import type { MetadataV14 } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Extrinsics, ModuleExtrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { createUnchecked } from './createUnchecked';

/** @internal */
export function decorateExtrinsics (registry: Registry, { pallets }: MetadataV14, metaVersion: number): Extrinsics {
  return pallets
    .filter(({ calls }) => calls.isSome)
    .reduce((result: Extrinsics, { calls, index, name }, _sectionIndex): Extrinsics => {
      const sectionIndex = metaVersion >= 12 ? index.toNumber() : _sectionIndex;
      const section = stringCamelCase(name);

      result[section] = calls
        .unwrap()
        .calls
        .reduce((newModule: ModuleExtrinsics, callMetadata, methodIndex): ModuleExtrinsics => {
          newModule[stringCamelCase(callMetadata.name)] = createUnchecked(registry, section, new Uint8Array([sectionIndex, methodIndex]), callMetadata);

          return newModule;
        }, {});

      return result;
    }, {});
}
