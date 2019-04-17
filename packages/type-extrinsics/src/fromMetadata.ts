// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeModuleMetadata } from '@polkadot/types/Metadata/v0/Modules';
import { Methods, ModulesWithMethods } from '@polkadot/types/primitive/Method';
import MetadataV0 from '@polkadot/types/Metadata/v0';

import { Metadata, TypeRegistry } from '@polkadot/types';
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
export default function fromMetadata (metadata: Metadata, typeRegistry: TypeRegistry): ModulesWithMethods {
  if (metadata.version <= 3) {
    return fromMetadataV0(metadata.asV0, typeRegistry);
  }
  throw new Error('metadata version not supported');
}

export function fromMetadataV0 (metadata: MetadataV0, typeRegistry: TypeRegistry): ModulesWithMethods {
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
      newModule[funcName] = createUnchecked(prefix, funcName, index, {
        id: funcMeta.id.toNumber(),
        name: funcMeta.name.toString(),
        arguments: funcMeta.arguments.toArray()
      }, typeRegistry);

      return newModule;
    }, {} as Methods);

    return result;
  }, { ...extrinsics });
}
