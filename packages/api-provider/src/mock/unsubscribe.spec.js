// Copyright 2017-2018 @polkadot/api-provider authors & contributors
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

    return subscribe(state, 'subscribe_newHead', [() => void 0]).then((_id) => {
      id = _id;
    });
  });

  it('fails on unknown ids', () => {
    return unsubscribe(state, 'subscribe_newHead', 5).catch((error) => {
      expect(error.message).toMatch(/Unable to find/);
    });
  });

  it('unsubscribes successfully', () => {
    return unsubscribe(state, 'subscribe_newHead', id);
  });

  it('fails on double unsubscribe', () => {
    return unsubscribe(state, 'subscribe_newHead', id)
      .then(() => unsubscribe(state, id))
      .catch((error) => {
        expect(error.message).toMatch(/Unable to find/);
      });
  });

  it('clears the subscriptions', () => {
    return unsubscribe(state, 'subscribe_newHead', id).then(() => {
      expect(state.subscriptionMap[id]).not.toBeDefined();
      expect(state.subscriptions['subscribe_newHead'].callbacks[id]).not.toBeDefined();
    });
  });
});
