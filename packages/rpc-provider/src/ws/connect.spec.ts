// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

function sleepMs (ms = 0): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('onConnect', (): void => {
  let mocks: Mock[];

  beforeEach((): void => {
    jest.setTimeout(30000);
    mocks = [mockWs([])];
  });

  afterEach((): void => {
    jest.setTimeout(5000);
    mocks.forEach((m) => {
      if (m) {
        m.done();
      }
    });
  });

  it('Does not connect when autoConnect is false', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 0);

    expect(provider.isConnected()).toBe(false);
  });

  it('Does connect when autoConnect is true', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 1);

    await sleepMs(100); // Hack to give the provider time to connect
    expect(provider.isConnected()).toBe(true);
  });

  it('Creates a new WebSocket instance by calling the connect() method', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, false);

    expect(provider.isConnected()).toBe(false);
    expect(mocks[0].server.clients().length).toBe(0);

    await provider.connect();
    await sleepMs(100); // Hack to give the provider time to connect

    expect(provider.isConnected()).toBe(true);
    expect(mocks[0].server.clients().length).toBe(1);
  });

  it('Connects to first endpoint when an array is given', async () => {
    const provider: WsProvider = new WsProvider([TEST_WS_URL], 1);

    await provider.connect();
    await sleepMs(100); // Hack to give the provider time to connect

    expect(provider.isConnected()).toBe(true);
  });

  it('Connects to the second endpoint when the first is unreachable', async () => {
    /* eslint-disable @typescript-eslint/no-empty-function */
    jest.spyOn(console, 'error').mockImplementation((): void => {});

    const endpoints: string[] = ['ws://localhost:9956', TEST_WS_URL];
    const provider: WsProvider = new WsProvider(endpoints, 1);

    await sleepMs(100); // Hack to give the provider time to connect

    expect(provider.isConnected()).toBe(true);
  });

  it('Connects to the second endpoint when the first is dropped', async () => {
    const endpoints: string[] = [TEST_WS_URL, 'ws://localhost:9957'];

    mocks.push(mockWs([], endpoints[1]));

    const provider: WsProvider = new WsProvider(endpoints, 1);

    await sleepMs(100); // Hack to give the provider time to connect
    // Check that first server is connected
    expect(mocks[0].server.clients().length).toBe(1);
    expect(mocks[1].server.clients().length).toBe(0);

    // Close connection from first server
    mocks[0].server.clients()[0].close();
    await sleepMs(100);

    // Check that second server is connected
    expect(mocks[1].server.clients().length).toBe(1);
    expect(provider.isConnected()).toBe(true);
  });

  it('Round-robin of endpoints on WsProvider', async () => {
    const rounds = 5;
    const endpoints: string[] = [
      TEST_WS_URL,
      'ws://localhost:9956',
      'ws://localhost:9957',
      'ws://invalid:9956',
      'ws://localhost:9958'
    ];

    mocks.push(mockWs([], endpoints[1]));
    mocks.push(mockWs([], endpoints[2]));
    mocks.push(mockWs([], endpoints[4]));

    const mockNext = [
      mocks[1],
      mocks[2],
      mocks[3],
      mocks[0]
    ];
    const provider: WsProvider = new WsProvider(endpoints, 1);

    for (let round = 0; round < rounds; round++) {
      for (let index = 0; index < mocks.length; index++) {
        await sleepMs(100); // Hack to give the provider time to connect

        // Check that first server is connected and the next one isn't
        expect(mocks[index].server.clients().length).toBe(1);
        expect(mockNext[index].server.clients().length).toBe(0);
        expect(provider.isConnected()).toBe(true);

        // Close connection from first server
        mocks[index].server.clients()[0].close();
      }
    }
  });
});
