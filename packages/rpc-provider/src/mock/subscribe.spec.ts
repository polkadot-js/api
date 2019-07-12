// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Mock from './';

describe('subscribe', (): void => {
  let mock: Mock;

  beforeEach((): void => {
    mock = new Mock();
  });

  it('fails on unknown methods', (): Promise<number | void> => {
    return mock
      .subscribe('test', 'test_notFound')
      .catch((error): void => {
        expect(error.message).toMatch(/Invalid method 'test_notFound'/);
      });
  });

  it('returns a subscription id', (): Promise<void> => {
    return mock
      .subscribe('chain_newHead', 'chain_subscribeNewHead', (): void => void 0)
      .then((id): void => {
        expect(id).toEqual(1);
      });
  });

  it('calls back with the last known value', (done): Promise<number> => {
    mock.isUpdating = false;
    mock.subscriptions['chain_subscribeNewHead'].lastValue = 'testValue';

    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, value: string): void => {
      expect(value).toEqual('testValue');
      done();
    });
  });

  it('calls back with new headers', (done): Promise<number> => {
    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, header: any): void => {
      if (header.number === 4) {
        done();
      }
    });
  });

  it('handles errors withing callbacks gracefully', (done): Promise<number> => {
    let hasThrown = false;

    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_: any, header: any): void => {
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
