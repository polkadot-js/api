// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
