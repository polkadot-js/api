// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createState = require('./state');
const subscribe = require('./subscribe');

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
    return subscribe(state, 'extra_getBlockNumber', [() => void 0]).then((id) => {
      expect(id).toEqual(state.subscriptionId);
    });
  });

  it('stores the mapping values', () => {
    const cb = () => void 0;

    return subscribe(state, 'extra_getBlockNumber', [cb]).then((id) => {
      expect(state.subscriptionMap[id]).toEqual('extra_getBlockNumber');
      expect(state.subscriptions['extra_getBlockNumber'].callbacks[id]).toEqual(cb);
    });
  });

  it('calls back with the last known value', (done) => {
    state.subscriptions['extra_getBlockNumber'].lastValue = 'testValue';

    subscribe(state, 'extra_getBlockNumber', [(_, value) => {
      expect(value).toEqual('testValue');
      done();
    }]);
  });
});
