// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadata } from '@plugnet/types/Metadata/v4/Metadata';
import { Methods, ModulesWithMethods } from '@plugnet/types/primitive/Method';
import Metadata from '@plugnet/types/Metadata';
import { stringCamelCase } from '@plugnet/util';

import extrinsics from '../';
import createUnchecked from './createUnchecked';

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param extrinsics - An extrinsics object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata (metadata: Metadata): ModulesWithMethods {
  return metadata.asV4.modules
    .filter((modul) => modul.calls.isSome)
    .reduce((result, modul: ModuleMetadata, sectionIndex) => {
      const section = stringCamelCase(modul.name.toString());

      result[section] = modul.calls.unwrap().reduce((newModule, callMetadata, methodIndex) => {
        const method = stringCamelCase(callMetadata.name.toString());

        newModule[method] = createUnchecked(section, sectionIndex, methodIndex, callMetadata);

        return newModule;
      }, {} as Methods);

      return result;
    }, { ...extrinsics });
}
