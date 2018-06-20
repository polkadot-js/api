// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import state from './state';

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
