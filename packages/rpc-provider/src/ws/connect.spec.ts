// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

describe('onConnect', (): void => {
  let mock: Mock;

  beforeEach((): void => {
    mock = mockWs([]);
  });

  afterEach((): void => {
    if (mock) {
      mock.done();
    }
  });

  it('Does not connect when autoConnect is false', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, false);
    // We need to access the private WsProvider property 'websocket' here which would otherwise trigger a tslint error.
    expect((provider as any).websocket).toBeNull();
  });

  it('Does connect when autoConnect is true', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, true);

    expect((provider as any).websocket).not.toBeNull();
  });

  it('Creates a new WebSocket instance by calling the connect() method', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, false);

    expect((provider as any).websocket).toBeNull();

    provider.connect();

    expect((provider as any).websocket).not.toBeNull();
    expect((provider as any).websocket instanceof WebSocket).toBe(true);
  });

  it('Creates the on handlers', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL);

    expect((provider as any).websocket).not.toBeNull();
    expect((provider as any).websocket).toEqual(expect.objectContaining({
      listeners: expect.objectContaining({
        close: [expect.any(Function)],
        error: [expect.any(Function)],
        message: [expect.any(Function)],
        open: [expect.any(Function)]
      })
    }));
  });
});
