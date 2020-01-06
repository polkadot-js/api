// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import Mock from './';

describe('unsubscribe', (): void => {
  const registry = new TypeRegistry();
  let mock: Mock;
  let id: number;

  beforeEach((): Promise<void> => {
    mock = new Mock(registry);

    return mock
      .subscribe('chain_newHead', 'chain_subscribeNewHead', (): void => undefined)
      .then((_id): void => {
        id = _id;
      });
  });

  it('fails on unknown ids', (): Promise<boolean> => {
    return mock
      .unsubscribe('chain_newHead', 'chain_subscribeNewHead', 5)
      .catch((error): boolean => {
        expect(error.message).toMatch(/Unable to find/);

        return false;
      });
  });

  it('unsubscribes successfully', (): Promise<boolean> => {
    return mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id);
  });

  it('fails on double unsubscribe', (): Promise<boolean> => {
    return mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id)
      .then((): Promise<boolean> =>
        mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id)
      )
      .catch((error): boolean => {
        expect(error.message).toMatch(/Unable to find/);

        return false;
      });
  });
});
