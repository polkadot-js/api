// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const state = require('./state');

describe('state', () => {
  it('requires an http:// prefixed endpoint', () => {
    expect(
      () => state('ws://')
    ).toThrow(/with 'http/);
  });

  it('allows https:// endpoints', () => {
    expect(
      state('https://')
    ).toBeDefined();
  });
});
