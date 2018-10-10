// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import camelCase from '@polkadot/util/string/camelCase';
import Metadata, { RuntimeModuleMetadata } from '@polkadot/types/Metadata';
import { Extrinsics, ModuleExtrinsics } from './types';

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
  const findIndex = (prefix: string): number => {
    const mod = metadata.calls.find((item) =>
      item.prefix.toString() === prefix
    );

    if (!mod) {
      throw new Error(`Unable to find module index for '${prefix}'`);
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

    const prefix = camelCase(meta.prefix.toString());
    const index = findIndex(meta.prefix.toString());

    result[prefix] = meta.module.call.functions.reduce((newModule, funcMeta) => {
      // extrinsics.balances.set_balance -> extrinsics.balances.setBalance
      const funcName = camelCase(funcMeta.name.toString());

      newModule[funcName] = createUnchecked(prefix, funcName, index, funcMeta);

      return newModule;
    }, {} as ModuleExtrinsics);

    return result;
  }, result);
}
