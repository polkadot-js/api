// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import WsProvider from './';
import { Global, Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

declare const global: Global;
let provider: WsProvider;
let mock: Mock;

function createMock (requests: Array<any>) {
  mock = mockWs(requests);
}

function createWs (autoConnect: boolean = true) {
  provider = new WsProvider(TEST_WS_URL, autoConnect);

  return provider;
}

describe('send', () => {
  let globalWs: Constructor<WebSocket>;

  beforeEach(() => {
    globalWs = global.WebSocket;
  });

  afterEach(() => {
    global.WebSocket = globalWs;

    if (mock) {
      mock.done();
    }
  });

  it('handles internal errors', () => {
    createMock([]);

    (global as any).WebSocket = class {
      send () {
        throw new Error('send error');
      }
    };

    provider = createWs(true);
    // @ts-ignore Accessing private method
    provider.websocket.onopen();

    return provider
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

    return createWs(true)
      .send('test_body', ['param'])
      .then((result) => {
        expect(
          (mock.body as any)['test_body']
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

    return createWs(true)
      .send('test_error', [])
      .catch((error) => {
        expect(error.message).toMatch(/666: error/);
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

    return createWs(true)
      .send('test_sub', [])
      .then((id) => {
        expect(id).toEqual(1);
      });
  });
});
