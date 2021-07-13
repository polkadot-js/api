// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// FIXME MetadataLatest
import type { MetadataV14 } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ConstantCodec, Constants, ModuleConstants } from '../types';

import { hexToU8a, stringCamelCase } from '@polkadot/util';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateConstants (registry: Registry, { pallets }: MetadataV14, _metaVersion: number): Constants {
  return pallets.reduce((result: Constants, { constants, name }): Constants => {
    if (constants.isEmpty) {
      return result;
    }

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name)] = constants.reduce((newModule: ModuleConstants, meta): ModuleConstants => {
      // convert to the natural type as received
      const type = meta.type.toString();
      const codec = registry.createType(type as 'Raw', hexToU8a(meta.value.toHex())) as unknown;

      (codec as Record<string, unknown>).meta = meta;
      newModule[stringCamelCase(meta.name)] = codec as ConstantCodec;

      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, {} as Constants);
}
