// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ConstantCodec, Constants, ModuleConstants } from '../types';

import { hexToU8a, stringCamelCase } from '@polkadot/util';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest, _metaVersion: number): Constants {
  const result: Constants = {};

  for (const { constants, name } of pallets) {
    if (!constants.isEmpty) {
      const newModule: ModuleConstants = {};

      for (const meta of constants) {
        const codec = registry.createTypeUnsafe(registry.createLookupType(meta.type), [hexToU8a(meta.value.toHex())]) as unknown;

        (codec as Record<string, unknown>).meta = meta;
        newModule[stringCamelCase(meta.name)] = codec as ConstantCodec;
      }

      // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
      result[stringCamelCase(name)] = newModule;
    }
  }

  return result;
}
