// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry, RegistryMetadata, RegistryMetadataModule } from '@polkadot/types/types';
import type { Extrinsics, ModuleExtrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { createUnchecked } from './createUnchecked';

/** @internal */
export function decorateExtrinsics (registry: Registry, metadata: RegistryMetadata): Extrinsics {
  const modules = metadata.asLatest.modules;
  const isIndexed = modules.some(({ index }) => !index.eqn(255));

  return modules
    .filter(({ calls }) => calls.isSome)
    .reduce((result: Extrinsics, { calls, index, name }: RegistryMetadataModule, _sectionIndex): Extrinsics => {
      const sectionIndex = isIndexed
        ? index.toNumber()
        : _sectionIndex;
      const section = stringCamelCase(name);

      result[section] = calls.unwrap().reduce((newModule: ModuleExtrinsics, callMetadata, methodIndex): ModuleExtrinsics => {
        newModule[stringCamelCase(callMetadata.name)] = createUnchecked(registry, section, new Uint8Array([sectionIndex, methodIndex]), callMetadata);

        return newModule;
      }, {});

      return result;
    }, {});
}
