// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from '@polkadot/rpc-provider/ws';

let ws;
let mock;

function createMock (requests: any) {
  mock = mockWs(requests);
}

function createWs (autoConnect: boolean = true) {
  ws = new Ws(TEST_WS_URL, autoConnect);

  return ws;
}

describe('subscribe', () => {
  let globalWs;

  beforeEach(() => {
    globalWs = global.WebSocket;
  });

  afterEach(() => {
    global.WebSocket = globalWs;

    if (mock) {
      mock.done();
      mock = null;
    }
  });

  it('removes subscriptions', () => {
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
      .subscribe('test', 'subscribe_test', [], (cb) => { expect(cb).toEqual(expect.anything()); })
      .then((id) => {
        return ws.unsubscribe('test', 'subscribe_test', id);
      });
  });

  it('fails when sub not found', () => {
    createMock([{
      id: 1,
      method: 'subscribe_test',
      reply: {
        result: 1
      }
    }]);

    const ws = createWs(true);

    return ws
      .subscribe('test', 'subscribe_test', [], (cb) => { expect(cb).toEqual(expect.anything()); })
      .then((id) => {
        return ws.unsubscribe('test', 'subscribe_test', 111);
      })
      .then((result) => {
        expect(result).toBe(false);
      });
  });
});
