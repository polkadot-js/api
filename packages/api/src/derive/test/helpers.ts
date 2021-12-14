// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Metadata, TypeRegistry } from '@polkadot/types';
import metaStatic from '@polkadot/types-support/metadata/static-substrate';

import { ApiPromise, WsProvider } from '../..';

export function createApiWithAugmentations (): ApiPromise {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, metaStatic);

  registry.setMetadata(metadata);

  const api = new ApiPromise({ provider: new WsProvider('ws://', false), registry });

  api.injectMetadata(metadata, true, registry);

  return api;
}
