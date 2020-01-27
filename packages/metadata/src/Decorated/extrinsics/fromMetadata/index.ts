// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Calls, ModulesWithCalls, Registry, RegistryMetadata, RegistryMetadataModule } from '@polkadot/types/types';

import { stringCamelCase } from '@polkadot/util';

import extrinsics from '../';
import createUnchecked from './createUnchecked';

/** @internal */
export default function fromMetadata (registry: Registry, metadata: RegistryMetadata): ModulesWithCalls {
  return metadata.asLatest.modules
    .filter(({ calls }): boolean => calls.isSome)
    .reduce((result, { calls, name }: RegistryMetadataModule, sectionIndex): ModulesWithCalls => {
      const section = stringCamelCase(name.toString());

      result[section] = calls.unwrap().reduce((newModule: Calls, callMetadata, methodIndex): Calls => {
        const method = stringCamelCase(callMetadata.name.toString());

        newModule[method] = createUnchecked(registry, section, sectionIndex, methodIndex, callMetadata);

        return newModule;
      }, {});

      return result;
    }, { ...extrinsics });
}
