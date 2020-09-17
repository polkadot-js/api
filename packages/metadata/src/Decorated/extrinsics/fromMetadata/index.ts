// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Calls, ModulesWithCalls, Registry, RegistryMetadata, RegistryMetadataModule } from '@polkadot/types/types';

import { stringCamelCase } from '@polkadot/util';

import extrinsics from '../';
import createUnchecked from './createUnchecked';

/** @internal */
export default function fromMetadata (registry: Registry, metadata: RegistryMetadata): ModulesWithCalls {
  const modules = metadata.asLatest.modules;
  const isIndexed = modules.some(({ index }) => !index.eqn(255));

  return modules
    .filter(({ calls }) => calls.isSome)
    .reduce((result, { calls, index, name }: RegistryMetadataModule, _sectionIndex): ModulesWithCalls => {
      const sectionIndex = isIndexed
        ? index.toNumber()
        : _sectionIndex;
      const section = stringCamelCase(name.toString());

      result[section] = calls.unwrap().reduce((newModule: Calls, callMetadata, methodIndex): Calls => {
        const method = stringCamelCase(callMetadata.name.toString());

        newModule[method] = createUnchecked(registry, section, sectionIndex, methodIndex, callMetadata);

        return newModule;
      }, {});

      return result;
    }, { ...extrinsics });
}
