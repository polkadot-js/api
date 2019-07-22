// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

let ws: WsProvider;
let mock: Mock;

function createWs (requests: any[], autoConnect: boolean | undefined): WsProvider {
  mock = mockWs(requests);
  ws = new WsProvider(TEST_WS_URL, autoConnect);

  return ws;
}

describe('onOpen', (): void => {
  afterEach((): void => {
    if (mock) {
      mock.done();
    }
  });

  it('sends messages when connected', (): Promise<void> => {
    const ws = createWs([{
      id: 1,
      method: 'test_queue',
      reply: {
        result: 'ok'
      }
    }], false);
    const sendPromise = ws.send('test_queue', []);

    ws.connect();

    return sendPromise.then((result): void => {
      expect(result).toEqual('ok');
    });
  });
});
