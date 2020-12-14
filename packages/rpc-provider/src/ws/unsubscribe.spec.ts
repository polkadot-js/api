// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor } from '@polkadot/types/types';

import { mockWs, TEST_WS_URL } from '../../test/mockWs';
import { Global, Mock } from './../mock/types';
import { WsProvider } from './';

declare const global: Global;

let ws: WsProvider;
let mock: Mock;

function createMock (requests: any): void {
  mock = mockWs(requests);
}

function createWs (autoConnect = 1000): Promise<WsProvider> {
  ws = new WsProvider(TEST_WS_URL, autoConnect);

  return ws.isReady;
}

describe('subscribe', (): void => {
  let globalWs: Constructor<WebSocket>;

  beforeEach((): void => {
    globalWs = global.WebSocket;
  });

  afterEach((): void => {
    global.WebSocket = globalWs;

    if (mock) {
      mock.done();
    }
  });

  it('removes subscriptions', (): Promise<boolean> => {
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

    return createWs().then((ws) =>
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
