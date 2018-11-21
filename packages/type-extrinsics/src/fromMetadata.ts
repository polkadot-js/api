// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeModuleMetadata } from '@polkadot/types/Metadata';
import { Extrinsics, ModuleExtrinsics } from '@polkadot/types/Method';
import { Metadata } from '@polkadot/types/index';

import { stringCamelCase } from '@polkadot/util';

import createUnchecked from './utils/createUnchecked';
import extrinsics from './index';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param extrinsics - An extrinsics object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata (metadata: Metadata): Extrinsics {
  let indexCount = -1;

  const findIndex = (prefix: string): number => {
    indexCount++;

    const mod = metadata.calls.find((item) =>
      item.prefix.toString() === prefix
    );

    if (!mod) {
      console.error(`Unable to find module index for '${prefix}'`);

      // compatible with old versions
      return indexCount;
    }

    return mod.index.toNumber();
  };

  // Dont' clobber the input, create new
  const result = Object.keys(extrinsics).reduce((result, key) => {
    result[key] = extrinsics[key];

    return result;
  }, {} as Extrinsics);

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
    }, {} as ModuleExtrinsics);

    return result;
  }, result);
}
