// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import type { ProviderInterfaceEmitted } from '../types.js';

import { TypeRegistry } from '@polkadot/types/create';

import { MockProvider } from './index.js';

describe('on', (): void => {
  const registry = new TypeRegistry();
  let mock: MockProvider;

  beforeEach((): void => {
    mock = new MockProvider(registry);
  });

  afterEach(async () => {
    await mock.disconnect();
  });

  it('it emits both connected and disconnected events', async (): Promise<void> => {
    const events: Record<string, boolean> = { connected: false, disconnected: false };

    await new Promise<boolean>((resolve) => {
      const handler = (type: ProviderInterfaceEmitted): void => {
        mock.on(type, (): void => {
          events[type] = true;

          if (Object.values(events).filter((value): boolean => value).length === 2) {
            resolve(true);
          }
        });
      };

      handler('connected');
      handler('disconnected');
    });
  });
});
