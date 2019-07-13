// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constants, ConstantCodec, ModuleConstants } from './types';

import { createType } from '@polkadot/types';
import Metadata from '@polkadot/types/Metadata';
import { stringCamelCase } from '@polkadot/util';

/**
 * Retrieve the parameter types (module constants) from the runtime metadata.
 *
 * @param metadata - The metadata
 */
export default function fromMetadata (metadata: Metadata): Constants {
  return metadata.asV6.modules.reduce((result, moduleMetadata) => {
    if (moduleMetadata.constants.isEmpty) {
      return result;
    }

    const { name } = moduleMetadata;

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name.toString())] = moduleMetadata.constants.reduce((newModule, meta) => {
      const codec = createType(meta.type, meta.value);
      const ccodec = codec as ConstantCodec;

      ccodec.meta = meta;
      newModule[stringCamelCase(meta.name.toString())] = ccodec;

      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, { } as Constants);
}
