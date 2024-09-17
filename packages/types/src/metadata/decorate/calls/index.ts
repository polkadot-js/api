// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest } from '../../../interfaces/index.js';
import type { PortableRegistry } from '../../../metadata/index.js';
import type { Calls } from '../types.js';

import { lazyMethod, objectSpread, stringCamelCase } from '@polkadot/util';

function lazyMethods () {

}

export function createCallFunction (registry: Registry, lookup: PortableRegistry, sectionName: string) {
  registry;
  lookup;
  sectionName;
}

export function decorateCalls (registry: Registry, { apis, lookup }: MetadataLatest, _metaVersion: number): Calls {
  const result: Calls = {};

  for (let i = 0, count = apis.length; i < count; i++) {
    const { methods, name } = apis[i];
    const sectionName = stringCamelCase(name);

    methods;
    // lazyMethod(result, sectionName, () =>

    // )
    lazyMethod;
    objectSpread;
  }

  lookup;
  apis;
  registry;

  return result;
}
