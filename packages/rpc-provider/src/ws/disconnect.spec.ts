// Copyright 2017-2026 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

// side-effect import: sets `global.WebSocket` to the mock-socket implementation
// before `@polkadot/x-ws` (imported via `./index.js`) captures it
import '../mock/mockWs.manual.js';

import type { WebSocket } from 'mock-socket';

import { Server } from 'mock-socket';

import { WsProvider } from './index.js';

declare const global: {
  WebSocket: typeof WebSocket;
};

const TEST_WS_URL = 'ws://localhost-disconnect.spec.ts:9988';

function sleep (ms = 100): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('WsProvider disconnect', (): void => {
  let globalWs: typeof WebSocket;
  let provider: WsProvider | null;
  let server: Server;

  beforeEach(async () => {
    globalWs = global.WebSocket;

    // a server that accepts the connection but never responds, so any
    // request stays pending in the provider's #handlers
    server = new Server(TEST_WS_URL);

    server.on('connection', (socket): void => {
      socket.on('message', (): void => {
        // deliberately leave the request unanswered
      });
    });

    provider = new WsProvider(TEST_WS_URL, 0);
    await provider.connect();
    await sleep();
  });

  afterEach(async () => {
    if (provider) {
      await provider.disconnect();
      await sleep();
      provider = null;
    }

    await new Promise<void>((resolve) => server.stop(resolve));
    await sleep();

    global.WebSocket = globalWs;
  });

  it('marks pending requests as a normal close when disconnected (1000)', async () => {
    if (!provider) {
      throw new Error('provider not initialized');
    }

    const wsProvider = provider;
    const captured: { error: Error | null } = { error: null };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    wsProvider.send('state_getRuntimeVersion', []).catch((error: Error): void => {
      captured.error = error;
    });

    await wsProvider.disconnect();
    await sleep();

    expect(captured.error !== null && captured.error.message.includes('1000')).toEqual(true);
    expect(captured.error !== null && (captured.error as Error & { isNormalClose?: boolean }).isNormalClose).toEqual(true);
  });
});
