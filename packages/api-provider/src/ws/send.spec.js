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
  ws = require('./index').default(TEST_WS_URL, autoConnect);

  return ws;
}

describe('send', () => {
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

  it('handles internal errors', () => {
    createMock([]);

    let websocket;

    global.WebSocket = class {
      constructor () {
        websocket = this;
      }

      send () {
        throw new Error('send error');
      }
    };

    ws = createWs();
    websocket.onopen();

    return ws
      .send('test_encoding', ['param'])
      .catch((error) => {
        expect(error.message).toEqual('send error');
      });
  });

  it('passes the body through correctly', () => {
    createMock([{
      id: 1,
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);

    return createWs()
      .send('test_body', ['param'])
      .then((result) => {
        expect(
          mock.body['test_body']
        ).toEqual('{"id":1,"jsonrpc":"2.0","method":"test_body","params":["param"]}');
      });
  });

  it('throws error when !response.ok', () => {
    createMock([{
      id: 1,
      error: {
        code: 666,
        message: 'error'
      }
    }]);

    return createWs()
      .send('test_error', [])
      .catch((error) => {
        expect(error.message).toMatch(/\[666\]: error/);
      });
  });

  it('adds subscriptions', () => {
    createMock([{
      id: 1,
      method: 'test_sub',
      reply: {
        result: 1
      }
    }]);

    return createWs()
      .send('test_sub', [], () => {})
      .then((id) => {
        expect(id).toEqual(1);
      });
  });
});
