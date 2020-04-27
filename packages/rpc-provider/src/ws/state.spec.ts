// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';

describe('state', (): void => {
  it('requires an ws:// prefixed endpoint', (): void => {
    expect(
      (): WsProvider => new WsProvider('http://', 0)
    ).toThrow(/with 'ws/);
  });

  it('allows wss:// endpoints', (): void => {
    expect(
      (): WsProvider => new WsProvider('wss://', 0)
    ).not.toThrow();
  });
});
