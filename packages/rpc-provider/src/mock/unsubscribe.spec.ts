// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types/create';

import { MockProvider } from './index.js';

describe('unsubscribe', (): void => {
  const registry = new TypeRegistry();
  let mock: MockProvider;
  let id: number;

  beforeEach((): Promise<void> => {
    mock = new MockProvider(registry);

    return mock
      .subscribe('chain_newHead', 'chain_subscribeNewHead', (): void => undefined)
      .then((_id): void => {
        id = _id;
      });
  });

  afterEach(async () => {
    await mock.disconnect();
  });

  it('fails on unknown ids', async (): Promise<void> => {
    await mock
      .unsubscribe('chain_newHead', 'chain_subscribeNewHead', 5)
      .catch((error): boolean => {
        // eslint-disable-next-line jest/no-conditional-expect
        expect((error as Error).message).toMatch(/Unable to find/);

        return false;
      });
  });

  // eslint-disable-next-line jest/expect-expect
  it('unsubscribes successfully', async (): Promise<void> => {
    await mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id);
  });

  it('fails on double unsubscribe', async (): Promise<void> => {
    await mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id)
      .then((): Promise<boolean> =>
        mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id)
      )
      .catch((error): boolean => {
        // eslint-disable-next-line jest/no-conditional-expect
        expect((error as Error).message).toMatch(/Unable to find/);

        return false;
      });
  });
});
