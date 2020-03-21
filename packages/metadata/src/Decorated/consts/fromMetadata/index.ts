// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';
import { Constants, ConstantCodec, ModuleConstants } from '../../types';

import { createTypeUnsafe } from '@polkadot/types/create';
import { stringCamelCase } from '@polkadot/util';

import Metadata from '../../../Metadata';

const AS_STRIPPED = ['Bytes'];

/** @internal */
export default function fromMetadata (registry: Registry, metadata: Metadata): Constants {
  return metadata.asLatest.modules.reduce((result: Constants, moduleMetadata): Constants => {
    if (moduleMetadata.constants.isEmpty) {
      return result;
    }

    const { name } = moduleMetadata;

    // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod
    result[stringCamelCase(name.toString())] = moduleMetadata.constants.reduce((newModule: ModuleConstants, meta): ModuleConstants => {
      // in the case of Bytes, the data has a length prefix encoded when received,
      // leading to double-encoding unless removed
      const type = meta.type.toString();
      const codec: ConstantCodec = createTypeUnsafe(registry, type, [
        AS_STRIPPED.includes(type)
          ? meta.value.toU8a(true)
          : meta.value
      ]);

      // This is not a perfect idea, however as it stands with number-only constants on the metadata
      // does not have any effect. However, this could become problematic in cases where items are
      // exposed that contain their own metadata. As of now, the compatibility with current, e.g.
      // storage is the driving factor, one consistent way of handling interfaces
      codec.meta = meta;
      newModule[stringCamelCase(meta.name.toString())] = codec;

      return newModule;
    }, {} as ModuleConstants);

    return result;
  }, {} as Constants);
}
