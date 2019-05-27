// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

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
    // We need to access the private WsProvider property 'websocket' here which would otherwise trigger a tslint error.
    // @ts-ignore
    expect(provider.websocket).toBeNull();
  });

  it('Does connect when autoConnect is true', () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, true);
    // @ts-ignore
    expect(provider.websocket).not.toBeNull();
  });

  it('Creates a new WebSocket instance by calling the connect() method', () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, false);
    // @ts-ignore
    expect(provider.websocket).toBeNull();

    provider.connect();

    // @ts-ignore
    expect(provider.websocket).not.toBeNull();
    // @ts-ignore
    expect(provider.websocket instanceof WebSocket).toBe(true);
  });

  it('Creates the on handlers', () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL);

    // @ts-ignore
    expect(provider.websocket).not.toBeNull();
    // @ts-ignore
    expect(provider.websocket).toEqual(expect.objectContaining({
      listeners: expect.objectContaining({
        close: [expect.any(Function)],
        error: [expect.any(Function)],
        message: [expect.any(Function)],
        open: [expect.any(Function)]
      })
    }));
  });
});
