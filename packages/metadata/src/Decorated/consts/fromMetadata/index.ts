// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';
import { Constants, ConstantCodec, ModuleConstants } from '../../types';

import { createTypeUnsafe } from '@polkadot/types/create';
import { hexToU8a, stringCamelCase } from '@polkadot/util';

import Metadata from '../../../Metadata';

/** @internal */
export default function fromMetadata (registry: Registry, metadata: Metadata): Constants {
  return metadata.asLatest.modules.reduce((result: Constants, moduleMetadata): Constants => {
    if (moduleMetadata.constants.isEmpty) {
      return result;
    }

    const { name } = moduleMetadata;

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name.toString())] = moduleMetadata.constants.reduce((newModule: ModuleConstants, meta): ModuleConstants => {
      // convert to the natural type as received
      const type = meta.type.toString();
      const codec: ConstantCodec = createTypeUnsafe(registry, type, [hexToU8a(meta.value.toHex())]);

      codec.meta = meta;
      newModule[stringCamelCase(meta.name.toString())] = codec;

      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, {} as Constants);
}
