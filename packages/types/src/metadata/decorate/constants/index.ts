// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ConstantCodec, Constants, ModuleConstants } from '../types';

import { hexToU8a, stringCamelCase } from '@polkadot/util';

/** @internal */
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest): Constants {
  return pallets.reduce((result: Constants, { constants, name }): Constants => {
    if (constants.isEmpty) {
      return result;
    }

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name)] = constants.reduce((newModule: ModuleConstants, meta): ModuleConstants => {
      const codec = registry.createTypeUnsafe(registry.createLookupType(meta.type), [hexToU8a(meta.value.toHex())]) as unknown;

      (codec as Record<string, unknown>).meta = meta;
      newModule[stringCamelCase(meta.name)] = codec as ConstantCodec;

      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, {} as Constants);
}
