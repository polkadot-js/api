// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constants, ConstantCodec, ModuleConstants } from '../types';

import { createType } from '@polkadot/types';
import Metadata from '@polkadot/types/Metadata';
import { stringCamelCase } from '@polkadot/util';

/**
 * Retrieve the parameter types (module constants) from the runtime metadata.
 *
 * @param metadata - The metadata
 */
export default function fromMetadata (metadata: Metadata): Constants {
  return metadata.asV6.modules.reduce((result, moduleMetadata): Constants => {
    if (moduleMetadata.constants.isEmpty) {
      return result;
    }

    const { name } = moduleMetadata;

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name.toString())] = moduleMetadata.constants.reduce((newModule, meta): ModuleConstants => {
      const codec = createType(meta.type, meta.value);

      // This is not a perfect idea, however as it stands with number-only constants on the metadata
      // does not have any effect. However, this could become problematic in cases where items are
      // exposed that contain their own metadata. As of now, the compatibility with current, e.g.
      // storage is the driving factor, one consistent way of handling interfaces
      (codec as ConstantCodec).meta = meta;
      newModule[stringCamelCase(meta.name.toString())] = codec;

      return newModule;
    }, {} as unknown as ModuleConstants);

    return result;
  }, {} as unknown as Constants);
}
