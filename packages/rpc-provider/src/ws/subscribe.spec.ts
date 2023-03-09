// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import type { Request } from '../mock/mockWs.js';
import type { Global, Mock } from './../mock/types.js';

import { mockWs } from '../mock/mockWs.js';
import { WsProvider } from './index.js';

declare const global: Global;

const TEST_WS_URL = 'ws://localhost-subscribe.test.ts:9933';

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

  it('adds subscriptions', (): Promise<void> => {
    createMock([{
      id: 1,
      method: 'test_sub',
      reply: {
        result: 1
      }
    }]);

    return createWs().then((ws) =>
      ws
        .subscribe('type', 'test_sub', [], (cb): void => {
          expect(cb).toEqual(expect.anything());
        })
        .then((id): void => {
          expect(id).toEqual(1);
        })
    );
  });
});
