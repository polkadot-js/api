// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Ws from './index';

describe('state', () => {
  it('requires an ws:// prefixed endpoint', () => {
    expect(
      () => new Ws('http://', false)
    ).toThrow(/with 'ws/);
  });

  it('allows wss:// endpoints', () => {
    expect(
      () => new Ws('wss://', false)
    ).not.toThrow();
  });
});
