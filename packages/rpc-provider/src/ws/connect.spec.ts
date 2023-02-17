// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Mock } from '../mock/types';

import { mockWs } from '../mock/mockWs';
import { WsProvider } from './';

const TEST_WS_URL = 'ws://localhost-connect.spec.ts:9988';

function sleep (ms = 100): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('onConnect', (): void => {
  let mocks: Mock[];
  let provider: WsProvider | null;

  beforeEach((): void => {
    mocks = [mockWs([], TEST_WS_URL)];
  });

  afterEach(async () => {
    if (provider) {
      await provider.disconnect();
      await sleep();

      provider = null;
    }

    await Promise.all(mocks.map((m) => m.done()));
    await sleep();
  });

  it('Does not connect when autoConnect is false', async () => {
    provider = new WsProvider(TEST_WS_URL, 0);

    await sleep();

    expect(provider.isConnected).toBe(false);

    await provider.connect();
    await sleep();

    expect(provider.isConnected).toBe(true);

    await provider.disconnect();
    await sleep();

    expect(provider.isConnected).toBe(false);
  });

  it('Does connect when autoConnect is true', async () => {
    provider = new WsProvider(TEST_WS_URL, 1);

    await sleep();

    expect(provider.isConnected).toBe(true);
  });

  it('Creates a new WebSocket instance by calling the connect() method', async () => {
    provider = new WsProvider(TEST_WS_URL, false);

    expect(provider.isConnected).toBe(false);
    expect(mocks[0].server.clients().length).toBe(0);

    await provider.connect();
    await sleep();

    expect(provider.isConnected).toBe(true);
    expect(mocks[0].server.clients()).toHaveLength(1);
  });

  it('Connects to first endpoint when an array is given', async () => {
    provider = new WsProvider([TEST_WS_URL], 1);

    await sleep();

    expect(provider.isConnected).toBe(true);
    expect(mocks[0].server.clients()).toHaveLength(1);
  });

  it('Does not allow connect() on already-connected', async () => {
    provider = new WsProvider([TEST_WS_URL], 1);

    await sleep();

    expect(provider.isConnected).toBe(true);

    await expect(
      provider.connect()
    ).rejects.toThrow(/already connected/);
  });

  it('Connects to the second endpoint when the first is unreachable', async () => {
    const endpoints: string[] = ['ws://localhost-unreachable-connect.spec.ts:9956', TEST_WS_URL];

    provider = new WsProvider(endpoints, 1);

    await sleep();

    expect(mocks[0].server.clients()).toHaveLength(1);
    expect(provider.isConnected).toBe(true);
  });

  it('Connects to the second endpoint when the first is dropped', async () => {
    const endpoints: string[] = [TEST_WS_URL, 'ws://localhost-connect.spec.ts:9957'];

    mocks.push(mockWs([], endpoints[1]));

    provider = new WsProvider(endpoints, 1);

    await sleep();

    // Check that first server is connected
    expect(mocks[0].server.clients()).toHaveLength(1);
    expect(mocks[1].server.clients()).toHaveLength(0);

    // Close connection from first server
    mocks[0].server.clients()[0].close();

    await sleep();

    // Check that second server is connected
    expect(mocks[1].server.clients()).toHaveLength(1);
    expect(provider.isConnected).toBe(true);
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

    provider = new WsProvider(endpoints, 1);

    for (let round = 0; round < 2; round++) {
      for (let mock = 0; mock < mocks.length; mock++) {
        await sleep();

        // Wwe are connected, the current mock has the connection and the next doesn't
        expect(provider.isConnected).toBe(true);
        expect(mocks[mock].server.clients()).toHaveLength(1);
        expect(mockNext[mock].server.clients()).toHaveLength(0);

        // Close connection from first server
        mocks[mock].server.clients()[0].close();
      }
    }
  });
});
