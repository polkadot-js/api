// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

function sleepMs(ms: number = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 0);
    expect(provider.isConnected()).toBe(false);
  });

  it('Does connect when autoConnect is true', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 1000);
    await sleepMs(10); // Hack to give the provider time to connect
    expect(provider.isConnected()).toBe(true);
  });

  it('Creates a new WebSocket instance by calling the connect() method', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 0);

    expect(provider.isConnected()).toBe(false);
    expect(mock.server.clients().length).toBe(0);

    await provider.connect();
    await sleepMs(10); // Hack to give the provider time to connect

    expect(provider.isConnected()).toBe(true);
    expect(mock.server.clients().length).toBe(1);
  });

  it('Connects to first endpoint when an array is given', async () => {
    const provider: WsProvider = new WsProvider([TEST_WS_URL], 0);

    await provider.connect();
    await sleepMs(10); // Hack to give the provider time to connect

    expect(provider.isConnected()).toBe(true);
  });

  it('Connects to the second endpoint when the first is unreachable', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const endpoints: string[] = ['ws://localhost:9956', TEST_WS_URL];
    const provider: WsProvider = new WsProvider(endpoints, 10);

    await provider.connect();
    await sleepMs(20); // Hack to give the provider time to connect

    expect(provider.isConnected()).toBe(true);
  });

  it('Connects to the second endpoint when the first is dropped', async () => {
    const endpoints: string[] = ['ws://localhost:9956', 'ws://localhost:9957'];
    const mocks = [
      mockWs([], endpoints[0]),
      mockWs([], endpoints[1])
    ];
    const provider: WsProvider = new WsProvider(endpoints, 10);

    await sleepMs(20); // Hack to give the provider time to connect
    // Check that first server is connected
    expect(mocks[0].server.clients().length).toBe(1);
    expect(mocks[1].server.clients().length).toBe(0);

    // Close connection from first server
    mocks[0].server.clients()[0].close();
    await sleepMs(1000);

    // Check that second server is connected
    expect(mocks[1].server.clients().length).toBe(1);
    expect(provider.isConnected()).toBe(true);

    // Clean up mocks
    mocks.forEach((mock) => mock.done());
  });
});
