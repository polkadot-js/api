// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import createState from './state';
import subscribe from './subscribe';
import unsubscribe from './unsubscribe';

describe('unsubscribe', () => {
  let state;
  let id;

  beforeEach(() => {
    state = createState();

    return subscribe(state, 'chain_newHead', 'chain_subscribeNewHead', [() => void 0]).then((_id) => {
      id = _id;
    });
  });

  it('fails on unknown ids', () => {
    return unsubscribe(state, 'chain_newHead', 'chain_subscribeNewHead', 5).catch((error) => {
      expect(error.message).toMatch(/Unable to find/);
    });
  });

  it('unsubscribes successfully', () => {
    return unsubscribe(state, 'chain_newHead', 'chain_subscribeNewHead', id);
  });

  it('fails on double unsubscribe', () => {
    return unsubscribe(state, 'chain_newHead', 'chain_subscribeNewHead', id)
      .then(() => unsubscribe(state, id))
      .catch((error) => {
        expect(error.message).toMatch(/Unable to find/);
      });
  });

  it('clears the subscriptions', () => {
    return unsubscribe(state, 'chain_newHead', 'chain_subscribeNewHead', id).then(() => {
      expect(state.subscriptionMap[id]).not.toBeDefined();
      expect(state.subscriptions['chain_subscribeNewHead'].callbacks[id]).not.toBeDefined();
    });
  });
});
