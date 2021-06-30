// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise, WsProvider } from '@polkadot/api';
import { Metadata } from '@polkadot/metadata';
import metaStatic from '@polkadot/metadata/static';
import { TypeRegistry } from '@polkadot/types';

export function createApiWithAugmentations (): ApiPromise {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, metaStatic);

  registry.setMetadata(metadata);

  const api = new ApiPromise({ provider: new WsProvider('ws://', false), registry });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  api._injectMetadata({ metadata, registry }, true);

  return api;
}
