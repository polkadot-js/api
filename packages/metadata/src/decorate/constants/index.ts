// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { ConstantCodec, Constants, ModuleConstants } from '../types';

import { hexToU8a, stringCamelCase } from '@polkadot/util';

/** @internal */
export function decorateConstants (registry: Registry, { modules }: MetadataLatest): Constants {
  return modules.reduce((result: Constants, moduleMetadata): Constants => {
    if (moduleMetadata.constants.isEmpty) {
      return result;
    }

    const { name } = moduleMetadata;

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name)] = moduleMetadata.constants.reduce((newModule: ModuleConstants, meta): ModuleConstants => {
      // convert to the natural type as received
      const type = meta.type.toString();
      const codec = registry.createType(type as 'Raw', hexToU8a(meta.value.toHex())) as unknown as ConstantCodec;

      codec.meta = meta;
      newModule[stringCamelCase(meta.name)] = codec;

      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, {} as Constants);
}
