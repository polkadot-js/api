// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import WsProvider from './';
import { Global, Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

declare var global: Global;
let ws: WsProvider;
let mock: Mock;

function createMock (requests: any): void {
  mock = mockWs(requests);
}

function createWs (autoConnect: boolean = true): WsProvider {
  ws = new WsProvider(TEST_WS_URL, autoConnect);

  return ws;
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

    const ws = createWs(true);

    return ws
      .subscribe('test', 'subscribe_test', [], (cb): void => {
        expect(cb).toEqual(expect.anything());
      })
      .then((id): Promise<boolean> => {
        return ws.unsubscribe('test', 'subscribe_test', id);
      });
  });

  it('fails when sub not found', (): Promise<void> => {
    createMock([{
      id: 1,
      method: 'subscribe_test',
      reply: {
        result: 1
      }
    }]);

    const ws = createWs(true);

    return ws
      .subscribe('test', 'subscribe_test', [], (cb): void => {
        expect(cb).toEqual(expect.anything());
      })
      .then((): Promise<boolean> => {
        return ws.unsubscribe('test', 'subscribe_test', 111);
      })
      .then((result): void => {
        expect(result).toBe(false);
      });
  });
});
