// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import createState from './state';
import subscribe from './subscribe';

describe('subscribe', () => {
  let state;

  beforeEach(() => {
    state = createState();
  });

  it('fails on unknown methods', () => {
    return subscribe(state, 'test_notFound').catch((error) => {
      expect(error.message).toMatch(/Invalid method 'test_notFound'/);
    });
  });

  it('returns a subscription id', () => {
    return subscribe(state, 'subscribe_newHead', [() => void 0]).then((id) => {
      expect(id).toEqual(state.subscriptionId);
    });
  });

  it('stores the mapping values', () => {
    const cb = () => void 0;

    return subscribe(state, 'subscribe_newHead', [cb]).then((id) => {
      expect(state.subscriptionMap[id]).toEqual('subscribe_newHead');
      expect(state.subscriptions['subscribe_newHead'].callbacks[id]).toEqual(cb);
    });
  });

  it('calls back with the last known value', (done) => {
    state.subscriptions['subscribe_newHead'].lastValue = 'testValue';

    subscribe(state, 'subscribe_newHead', [(_, value) => {
      expect(value).toEqual('testValue');
      done();
    }]);
  });
});
