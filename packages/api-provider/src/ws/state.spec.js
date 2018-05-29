// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const state = require('./state');

describe('state', () => {
  it('requires an ws:// prefixed endpoint', () => {
    expect(
      () => state('http://')
    ).toThrow(/with 'ws/);
  });

  it('allows wss:// endpoints', () => {
    expect(
      state('wss://')
    ).toBeDefined();
  });
});
