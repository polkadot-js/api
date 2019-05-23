// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import { Mock } from '@polkadot/rpc-provider/mock/types';
// import WsProvider from '@polkadot/rpc-provider/mock';

import WsProvider from '@polkadot/rpc-provider/ws';

describe('onConnect', () => {
  let mock: Mock;

  beforeEach(() => {
    mock = mockWs([]);
  });

  afterEach(() => {
    if (mock) {
      mock.done();
    }
  });

  it('Does not connect when autoConnect is false', () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, false);

    expect(provider.websocket).toBeNull();
  });

  it('Does not connect when autoConnect is false', () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, true);

    expect(provider.websocket).not.toBeNull();
  });

  it('Creates a new WebSocket instance by calling the connect() method', () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, false);

    expect(provider.websocket).toBeNull();

    provider.connect();

    expect(provider.websocket).not.toBeNull();
    expect(provider.websocket instanceof WebSocket).toBe(true);
  });

  it('Creates the on handlers', () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL);

    expect(provider.websocket).not.toBeNull();
    // expect(provider.websocket).toEqual(expect.objectContaining({
    //   close: expect.any(Function),
    //   error: expect.any(Function),
    //   message: expect.any(Function),
    //   open: expect.any(Function)
    // }));
  });
});
