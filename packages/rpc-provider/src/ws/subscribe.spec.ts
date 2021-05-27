// Copyright 2017-2021 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor } from '@polkadot/types/types';

import { mockWs, TEST_WS_URL } from '../../test/mockWs';
import { Global, Mock } from './../mock/types';
import { WsProvider } from './';

declare const global: Global;

let provider: WsProvider | null;
let mock: Mock;

function createMock (requests: any[]): void {
  mock = mockWs(requests);
}

function createWs (autoConnect = 1000): Promise<WsProvider> {
  provider = new WsProvider(TEST_WS_URL, autoConnect);

  return provider.isReady;
}

describe('subscribe', (): void => {
  let globalWs: Constructor<WebSocket>;

  beforeEach((): void => {
    globalWs = global.WebSocket;
  });

  afterEach(async () => {
    global.WebSocket = globalWs;

    if (mock) {
      mock.done();
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
