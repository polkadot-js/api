// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createState = require('./state');
const subscribe = require('./subscribe');
const unsubscribe = require('./unsubscribe');

describe('unsubscribe', () => {
  let state;
  let id;

  beforeEach(() => {
    state = createState();

    return subscribe(state, 'extra_getBlockNumber', [() => void 0]).then((_id) => {
      id = _id;
    });
  });

  it('fails on unknown ids', () => {
    return unsubscribe(state, 5).catch((error) => {
      expect(error.message).toMatch(/Unable to find/);
    });
  });

  it('unsubscribes successfully', () => {
    return unsubscribe(state, id);
  });

  it('fails on double unsubscribe', () => {
    return unsubscribe(state, id)
      .then(() => unsubscribe(state, id))
      .catch((error) => {
        expect(error.message).toMatch(/Unable to find/);
      });
  });

  it('clears the subscriptions', () => {
    return unsubscribe(state, id).then(() => {
      expect(state.subscriptionMap[id]).not.toBeDefined();
      expect(state.subscriptions['extra_getBlockNumber'].callbacks[id]).not.toBeDefined();
    });
  });
});
