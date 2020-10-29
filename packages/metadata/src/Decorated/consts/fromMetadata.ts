// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Registry } from '@polkadot/types/types';
import { Constants, ConstantCodec, ModuleConstants } from '../types';

import { createTypeUnsafe } from '@polkadot/types/create';
import { hexToU8a, stringCamelCase } from '@polkadot/util';

import Metadata from '../..';

/** @internal */
export default function fromMetadata (registry: Registry, metadata: Metadata): Constants {
  return metadata.asLatest.modules.reduce((result: Constants, moduleMetadata): Constants => {
    if (moduleMetadata.constants.isEmpty) {
      return result;
    }

    const { name } = moduleMetadata;

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name)] = moduleMetadata.constants.reduce((newModule: ModuleConstants, meta): ModuleConstants => {
      // convert to the natural type as received
      const type = meta.type.toString();
      const codec: ConstantCodec = createTypeUnsafe(registry, type, [hexToU8a(meta.value.toHex())]);

      codec.meta = meta;
      newModule[stringCamelCase(meta.name)] = codec;

      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, {} as Constants);
}
