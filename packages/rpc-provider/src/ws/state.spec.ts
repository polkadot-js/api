// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { WsProvider } from './';

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
