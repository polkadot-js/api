// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MockRequest } from '../types';

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from './index';

let ws: any;
let mock: any;

function createMock (requests: MockRequest) {
  mock = mockWs(requests);
}

function createWs (autoConnect: boolean) {
  ws = new Ws(TEST_WS_URL, autoConnect);

  return ws;
}

describe('subscribe', () => {
  let globalWs: any;

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
        result: 'ok'
      }
    }]);

    return createWs(true)
      .subscribe('test_sub', [], () => {/**/})
      .then((id: number) => {
        expect(id).toEqual(1);
      });
  });
});
