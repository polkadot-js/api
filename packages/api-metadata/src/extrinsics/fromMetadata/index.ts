// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadata } from '@polkadot/types/Metadata/v6/Metadata';
import { Methods, ModulesWithMethods } from '@polkadot/types/primitive/Method';
import Metadata from '@polkadot/types/Metadata';
import { stringCamelCase } from '@polkadot/util';

import extrinsics from '../';
import createUnchecked from './createUnchecked';

/**
 * Return an object with the modules and the functions to use extrinsics.
 *
 * @param metadata - The metadata
 */
export default function fromMetadata (metadata: Metadata): ModulesWithMethods {
  return metadata.asV6.modules
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
