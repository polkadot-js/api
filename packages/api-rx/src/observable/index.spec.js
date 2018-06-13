// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createObservable = require('./index');

describe('observable', () => {
  let section;

  beforeEach(() => {
    const withSub = () => {};

    withSub.unsubscribe = jest.fn();

    section = {
      'test_noSub': jest.fn(() => Promise.resolve(true)),
      'test_withSub': withSub,
      subscribe: jest.fn((name, params, _callback) => {
        return Promise.resolve(12345);
      }),
      unsubscribe: jest.fn(() => {
        return Promise.resolve(true);
      })
    };
  });

  it('creates a single-shot observable', () => {
    expect(
      createObservable('test_noSub', 'test_noSub', section)()
    ).toBeDefined();
  });

  it('creates a subscription observable', () => {
    expect(
      createObservable('test_withSub', 'test_withSub', section)()
    ).toBeDefined();
  });
});
