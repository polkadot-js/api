// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import type { Request } from '../mock/mockWs.js';
import type { Global, Mock } from './../mock/types.js';

import { mockWs } from '../mock/mockWs.js';
import { WsProvider } from './index.js';

declare const global: Global;

const TEST_WS_URL = 'ws://localhost-unsubscribe.test.ts:9933';

let provider: WsProvider | null;
let mock: Mock;

function createMock (requests: Request[]): void {
  mock = mockWs(requests, TEST_WS_URL);
}

function createWs (autoConnect = 1000): Promise<WsProvider> {
  provider = new WsProvider(TEST_WS_URL, autoConnect);

  return provider.isReady;
}

describe('subscribe', (): void => {
  let globalWs: typeof WebSocket;

  beforeEach((): void => {
    globalWs = global.WebSocket;
  });

  afterEach(async () => {
    global.WebSocket = globalWs;

    if (mock) {
      await mock.done();
    }

    if (provider) {
      await provider.disconnect();
      provider = null;
    }
  });

  it('removes subscriptions', async (): Promise<void> => {
    createMock([
      {
        id: 1,
        method: 'subscribe_test',
        reply: {
          result: 1
        }
      },
      {
        id: 2,
        method: 'unsubscribe_test',
        reply: {
          result: true
        }
      }
    ]);

    await createWs().then((ws) =>
      ws
        .subscribe('test', 'subscribe_test', [], (cb): void => {
          expect(cb).toEqual(expect.anything());
        })
        .then((id): Promise<boolean> => {
          return ws.unsubscribe('test', 'subscribe_test', id);
        })
    );
  });

  it('fails when sub not found', (): Promise<void> => {
    createMock([{
      id: 1,
      method: 'subscribe_test',
      reply: {
        result: 1
      }
    }]);

    return createWs().then((ws) =>
      ws
        .subscribe('test', 'subscribe_test', [], (cb): void => {
          expect(cb).toEqual(expect.anything());
        })
        .then((): Promise<boolean> => {
          return ws.unsubscribe('test', 'subscribe_test', 111);
        })
        .then((result): void => {
          expect(result).toBe(false);
        })
    );
  });
});
