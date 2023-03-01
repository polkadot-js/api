// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '@polkadot/types/create';

import { MockProvider } from './';

describe('subscribe', (): void => {
  const registry = new TypeRegistry();
  let mock: MockProvider;

  beforeEach((): void => {
    mock = new MockProvider(registry);
  });

  afterEach(async () => {
    await mock.disconnect();
  });

  it('fails on unknown methods', async (): Promise<void> => {
    await mock
      .subscribe('test', 'test_notFound')
      .catch((error): void => {
        expect((error as Error).message).toMatch(/Invalid method 'test_notFound'/);
      });
  });

  it('returns a subscription id', async (): Promise<void> => {
    await mock
      .subscribe('chain_newHead', 'chain_subscribeNewHead', (): void => undefined)
      .then((id): void => {
        expect(id).toEqual(1);
      });
  });

  it('calls back with the last known value', async (): Promise<void> => {
    mock.isUpdating = false;
    mock.subscriptions.chain_subscribeNewHead.lastValue = 'testValue';

    await new Promise<boolean>((resolve) => {
      mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, value: string): void => {
        expect(value).toEqual('testValue');
        resolve(true);
      }).catch(console.error);
    });
  });

  it('calls back with new headers', async (): Promise<void> => {
    await new Promise<boolean>((resolve) => {
      mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, header: { number: number }): void => {
        if (header.number === 4) {
          resolve(true);
        }
      }).catch(console.error);
    });
  });

  it('handles errors within callbacks gracefully', async (): Promise<void> => {
    let hasThrown = false;

    await new Promise<boolean>((resolve) => {
      mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, header: { number: number }): void => {
        if (!hasThrown) {
          hasThrown = true;

          throw new Error('testing');
        }

        if (header.number === 3) {
          resolve(true);
        }
      }).catch(console.error);
    });
  });
});
