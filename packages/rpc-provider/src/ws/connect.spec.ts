// Copyright 2017-2021 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Mock } from '../mock/types';

import { jest } from '@jest/globals';

import { mockWs } from '../mock/mockWs';
import { WsProvider } from './';

const TEST_WS_URL = 'ws://localhost-connect.spec.ts:9988';

function sleepMs (ms = 0): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('onConnect', (): void => {
  let mocks: Mock[];

  beforeEach((): void => {
    jest.setTimeout(30000);
    mocks = [mockWs([], TEST_WS_URL)];
  });

  afterEach((): void => {
    jest.setTimeout(5000);
    mocks.forEach((m) => {
      if (m) {
        m.done();
      }
    });
  });

  it('Does not connect when autoConnect is false', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 0);

    await sleepMs(100); // Hack to give the provider time to connect
    expect(provider.isConnected).toBe(false);

    await provider.connect();
    await sleepMs(100); // Hack to give the provider time to connect
    expect(provider.isConnected).toBe(true);

    await provider.disconnect();

    await sleepMs(100); // Hack to give the provider time to connect
    expect(provider.isConnected).toBe(false);
  });

  it('Does connect when autoConnect is true', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 1);

    await sleepMs(100); // Hack to give the provider time to connect
    expect(provider.isConnected).toBe(true);

    await provider.disconnect();
  });

  it('Creates a new WebSocket instance by calling the connect() method', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, false);

    expect(provider.isConnected).toBe(false);
    expect(mocks[0].server.clients().length).toBe(0);

    await provider.connect();
    await sleepMs(100); // Hack to give the provider time to connect

    expect(provider.isConnected).toBe(true);
    expect(mocks[0].server.clients()).toHaveLength(1);

    await provider.disconnect();
  });

  it('Connects to first endpoint when an array is given', async () => {
    const provider: WsProvider = new WsProvider([TEST_WS_URL], 1);

    await provider.connect();
    await sleepMs(100); // Hack to give the provider time to connect

    expect(provider.isConnected).toBe(true);

    await provider.disconnect();
  });

  it('Connects to the second endpoint when the first is unreachable', async () => {
    /* eslint-disable @typescript-eslint/no-empty-function */
    jest.spyOn(console, 'error').mockImplementation((): void => {});

    const endpoints: string[] = ['ws://localhost-connect.spec.ts:9956', TEST_WS_URL];
    const provider: WsProvider = new WsProvider(endpoints, 1);

    await sleepMs(100); // Hack to give the provider time to connect

    expect(provider.isConnected).toBe(true);

    await provider.disconnect();
  });

  it('Connects to the second endpoint when the first is dropped', async () => {
    const endpoints: string[] = [TEST_WS_URL, 'ws://localhost-connect.spec.ts:9957'];

    mocks.push(mockWs([], endpoints[1]));

    const provider: WsProvider = new WsProvider(endpoints, 1);

    await sleepMs(100); // Hack to give the provider time to connect
    // Check that first server is connected
    expect(mocks[0].server.clients()).toHaveLength(1);
    expect(mocks[1].server.clients()).toHaveLength(0);

    // Close connection from first server
    mocks[0].server.clients()[0].close();
    await sleepMs(100);

    // Check that second server is connected
    expect(mocks[1].server.clients()).toHaveLength(1);
    expect(provider.isConnected).toBe(true);

    await provider.disconnect();
  });

  it('Round-robin of endpoints on WsProvider', async () => {
    const endpoints: string[] = [
      TEST_WS_URL,
      'ws://localhost-connect.spec.ts:9956',
      'ws://localhost-connect.spec.ts:9957',
      'ws://invalid-connect.spec.ts:9956',
      'ws://localhost-connect.spec.ts:9958'
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

    for (let round = 0; round < 5; round++) {
      for (let mock = 0; mock < mocks.length; mock++) {
        await sleepMs(100); // Hack to give the provider time to connect

        // Check that first server is connected and the next one isn't
        expect(mocks[mock].server.clients()).toHaveLength(1);
        expect(mockNext[mock].server.clients()).toHaveLength(0);
        expect(provider.isConnected).toBe(true);

        // Close connection from first server
        mocks[mock].server.clients()[0].close();
      }
    }

    await provider.disconnect();
  });
});
