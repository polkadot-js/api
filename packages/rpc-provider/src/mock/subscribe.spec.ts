// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import createState from './state';
import subscribe from './subscribe';

describe('subscribe', () => {
  let state;
  const cb = () => void 0;

  beforeEach(() => {
    state = createState();
  });

  it('fails on unknown methods', () => {
    return subscribe(state, 'test', 'test_notFound').catch((error) => {
      expect(error.message).toMatch(/Invalid method 'test_notFound'/);
    });
  });

  it('returns a subscription id', () => {
    return subscribe(state, 'chain_newHead', 'chain_subscribeNewHead', [cb]).then((id) => {
      expect(id).toEqual(state.subscriptionId);
    });
  });

  it('stores the mapping values', () => {
    const cb = () => void 0;

    return subscribe(state, 'chain_newHead', 'chain_subscribeNewHead', [cb]).then((id) => {
      expect(state.subscriptionMap[id]).toEqual('chain_subscribeNewHead');
      expect(state.subscriptions['chain_subscribeNewHead'].callbacks[id]).toEqual(cb);
    });
  });

  it('calls back with the last known value', (done) => {
    state.subscriptions['chain_subscribeNewHead'].lastValue = 'testValue';

    return subscribe(state, 'chain_newHead', 'chain_subscribeNewHead', [(_, value) => {
      expect(value).toEqual('testValue');
      done();
    }]);
  });
});
