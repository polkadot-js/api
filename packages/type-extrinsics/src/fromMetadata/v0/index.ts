// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV0 from '@plugnet/types/Metadata/v0';
import { RuntimeModuleMetadata } from '@plugnet/types/Metadata/v0/Modules';
import { Methods, ModulesWithMethods } from '@plugnet/types/primitive/Method';
import { stringCamelCase } from '@plugnet/util';

import extrinsics from '../../index';
import createUnchecked from './createUnchecked';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param extrinsics - An extrinsics object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromV0 (metadata: MetadataV0): ModulesWithMethods {
  let indexCount = -1;

  const findIndex = (prefix: string): number => {
    indexCount++;

    const mod = metadata.calls.find((item) => item.prefix.toString() === prefix);

    if (!mod) {
      console.error(`Unable to find module index for '${prefix}'`);

      // compatible with old versions
      return indexCount;
    }

    return mod.index.toNumber();
  };

  return metadata.modules.reduce((result, meta: RuntimeModuleMetadata) => {
    if (!meta.module.call || !meta.module.call.functions.length) {
      return result;
    }

    const prefix = stringCamelCase(meta.prefix.toString());
    const index = findIndex(meta.prefix.toString());

    result[prefix] = meta.module.call.functions.reduce((newModule, funcMeta) => {
      // extrinsics.balances.set_balance -> extrinsics.balances.setBalance
      const funcName = stringCamelCase(funcMeta.name.toString());

      newModule[funcName] = createUnchecked(prefix, funcName, index, funcMeta);

      return newModule;
    }, {} as Methods);

    return result;
  }, { ...extrinsics });
}
