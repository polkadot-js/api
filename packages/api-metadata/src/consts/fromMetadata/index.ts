// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType } from '@polkadot/types';
import Metadata from '@polkadot/types/Metadata';
import { stringCamelCase } from '@polkadot/util';

import { Constants, ModuleConstants } from './types';

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
    result[stringCamelCase(name.toString())] = moduleMetadata.constants.reduce((newModule, constantMeta) => {
      newModule[stringCamelCase(constantMeta.name.toString())] = createType(constantMeta.type, constantMeta.value);
      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, { } as Constants);
}
