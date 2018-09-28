// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import camelCase from '@polkadot/util/string/camelCase';
import Metadata, { RuntimeModuleMetadata } from '@polkadot/api-codec/Metadata';

import createExtrinsic from './utils/createExtrinsic';
import { Extrinsics, ModuleExtrinsics } from './types';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param extrinsics - An extrinsics object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export function fromMetadata (extrinsics: Extrinsics, metadata: Metadata) {
  // Dont' clobber the input, create new
  const result = Object.keys(extrinsics).reduce((result, key) => {
    result[key] = extrinsics[key];

    return result;
  }, {} as Extrinsics);

  return metadata.modules.reduce((result, moduleMetadata: RuntimeModuleMetadata) => {
    if (!moduleMetadata.module.call) {
      return result;
    }

    const prefix = moduleMetadata.prefix.toString();

    result[moduleMetadata.prefix.toString()] = moduleMetadata.module.call.functions.reduce((newModule, func) => {
      // extrinsics.balances.set_balance -> extrinsics.balances.setBalance
      newModule[camelCase(func.name.toString())] = createExtrinsic(prefix, func.name, func);

      return newModule;
    }, {} as ModuleExtrinsics);

    return result;
  }, result);
}
