// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types/create';

import { MockProvider } from './';

describe('subscribe', (): void => {
  const registry = new TypeRegistry();
  let mock: MockProvider;

  beforeEach((): void => {
    mock = new MockProvider(registry);
  });

  it('fails on unknown methods', (): Promise<number | void> => {
    return mock
      .subscribe('test', 'test_notFound')
      .catch((error): void => {
        expect((error as Error).message).toMatch(/Invalid method 'test_notFound'/);
      });
  });

  it('returns a subscription id', (): Promise<void> => {
    return mock
      .subscribe('chain_newHead', 'chain_subscribeNewHead', (): void => undefined)
      .then((id): void => {
        expect(id).toEqual(1);
      });
  });

  it('calls back with the last known value', (done): Promise<number> => {
    mock.isUpdating = false;
    mock.subscriptions.chain_subscribeNewHead.lastValue = 'testValue';

    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, value: string): void => {
      expect(value).toEqual('testValue');
      done();
    });
  });

  it('calls back with new headers', (done): Promise<number> => {
    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, header: { number: number }): void => {
      if (header.number === 4) {
        done();
      }
    });
  });

  it('handles errors withing callbacks gracefully', (done): Promise<number> => {
    let hasThrown = false;

    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, header: { number: number }): void => {
      if (!hasThrown) {
        hasThrown = true;

        throw new Error('testing');
      }

      if (header.number === 3) {
        done();
      }
    });
  });
});
