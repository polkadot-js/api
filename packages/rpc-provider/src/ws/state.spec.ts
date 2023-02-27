// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { WsProvider } from './';

describe('state', (): void => {
  it('requires an ws:// prefixed endpoint', (): void => {
    expect(
      () => new WsProvider('http://', 0)
    ).toThrow(/with 'ws/);
  });

  it('allows wss:// endpoints', (): void => {
    expect(
      () => new WsProvider('wss://', 0)
    ).not.toThrow();
  });
});
