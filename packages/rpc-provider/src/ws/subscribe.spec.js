// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from '.';

let ws;
let mock;

function createMock (requests) {
  mock = mockWs(requests);
}

function createWs (autoConnect) {
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

  it('adds subscriptions', () => {
    createMock([{
      id: 1,
      method: 'test_sub',
      reply: {
        result: 1
      }
    }]);

    return createWs()
      .subscribe('test_sub', [], () => {})
      .then((id) => {
        expect(id).toEqual(1);
      });
  });
});
