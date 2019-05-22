// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import { Global, Mock } from '@polkadot/rpc-provider/mock/types';

import WsProvider from '@polkadot/rpc-provider/ws';

declare var global: Global;
let ws: WsProvider;
let mock: Mock;

function createMock (requests: Array<any>) {
  mock = mockWs(requests);
}

function createWs (autoConnect: boolean = true) {
  ws = new WsProvider(TEST_WS_URL, autoConnect);

  return ws;
}

describe('subscribe', () => {
  let globalWs: WebSocket;

  beforeEach(() => {
    globalWs = global.WebSocket;
  });

  afterEach(() => {
    global.WebSocket = globalWs;

    if (mock) {
      mock.done();
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

    return createWs(true)
      .subscribe('type', 'test_sub', [], (cb) => { expect(cb).toEqual(expect.anything()); })
      .then((id) => {
        expect(id).toEqual(1);
      });
  });
});
