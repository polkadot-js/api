// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Mock from './';

describe('unsubscribe', () => {
  let mock: Mock;
  let id: number;

  beforeEach(() => {
    mock = new Mock();

    return mock
      .subscribe('chain_newHead', 'chain_subscribeNewHead', () => void 0)
      .then((_id) => {
        id = _id;
      });
  });

  it('fails on unknown ids', () => {
    return mock
      .unsubscribe('chain_newHead', 'chain_subscribeNewHead', 5)
      .catch((error) => {
        expect(error.message).toMatch(/Unable to find/);
      });
  });

  it('unsubscribes successfully', () => {
    return mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id);
  });

  it('fails on double unsubscribe', () => {
    return mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id)
      .then(() => mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id))
      .catch((error) => {
        expect(error.message).toMatch(/Unable to find/);
      });
  });
});
