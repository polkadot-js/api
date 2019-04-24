// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata } from '@polkadot/types';
import { RuntimeModuleMetadata } from '@polkadot/types/Metadata/v0/Modules';
import MetadataV0 from '@polkadot/types/Metadata/v0';
import MetadataV3, { MetadataModule } from '@polkadot/types/Metadata/v3/Metadata';
import { Methods, ModulesWithMethods } from '@polkadot/types/primitive/Method';
import { stringCamelCase } from '@polkadot/util';

import createUnchecked from './utils/createUnchecked';
import extrinsics from '.';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param extrinsics - An extrinsics object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata (metadata: Metadata): ModulesWithMethods {
  if (metadata.version <= 2) {
    return fromMetadataV0(metadata.asV0);
  }
  if (metadata.version === 3) {
    return fromMetadataV3(metadata.asV3);
  }
  throw new Error('metadata version not supported');
}

export function fromMetadataV0 (metadata: MetadataV0): ModulesWithMethods {
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

      // TODO: convert FunctionMetadata to IFunctionMetadata
      newModule[funcName] = createUnchecked(prefix, funcName, index, funcMeta.toInterface(meta.module.name.toString()));

      return newModule;
    }, {} as Methods);

    return result;
  }, { ...extrinsics });
}

export function fromMetadataV3 (metadata: MetadataV3): ModulesWithMethods {
  let indexCount = -1;
  return metadata.modules.reduce((result, module: MetadataModule) => {
    if (!module.calls || module.calls.isEmpty) {
      return result;
    }
    indexCount++;
    const prefix = stringCamelCase(module.prefix.toString());
    result[prefix] = module.calls.unwrap().reduce((newModule, call, index) => {
      const funcName = stringCamelCase(call.name.toString());
      newModule[funcName] = createUnchecked(prefix, funcName, indexCount, call.toInterface(index, module.name.toString()));

      return newModule;
    }, {} as Methods);

    return result;
  }, { ...extrinsics });
}
