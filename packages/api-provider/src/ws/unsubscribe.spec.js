// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

let ws;
let mock;

function createMock (requests) {
  mock = mockWs(requests);
}

function createWs (autoConnect) {
  ws from './index')(TEST_WS_URL, autoConnect);

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

    const ws = createWs();

    return ws
      .subscribe('subscribe_test', [], () => {})
      .then((id) => {
        return ws.unsubscribe('unsubscribe_test', id);
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

    const ws = createWs();

    return ws
      .subscribe('subscribe_test', [], () => {})
      .then((id) => {
        return ws.unsubscribe('unsubscribe_test', 111);
      })
      .catch((error) => {
        expect(error.message).toMatch(/find active subscription/);
      });
  });
});
