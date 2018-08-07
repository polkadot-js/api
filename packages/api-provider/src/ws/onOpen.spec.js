// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from './index';

let ws;
let mock;

function createWs (requests, autoConnect) {
  mock = mockWs(requests);
  ws = new Ws(TEST_WS_URL, autoConnect);

  return ws;
}

describe('onOpen', () => {
  afterEach(() => {
    if (mock) {
      mock.done();
      mock = null;
    }
  });

  it('sends messages when connected', () => {
    const ws = createWs([{
      id: 1,
      method: 'test_queue',
      reply: {
        result: 'ok'
      }
    }], false);
    const sendPromise = ws.send('test_queue', []);

    ws.connect();

    return sendPromise.then((result) => {
      expect(result).toEqual('ok');
    });
  });
});
