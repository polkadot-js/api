// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import WsProvider from './';
import { Global, Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

declare const global: Global;

let provider: WsProvider;
let mock: Mock;

function createMock (requests: any[]): void {
  mock = mockWs(requests);
}

function createWs (autoConnect = true): WsProvider {
  provider = new WsProvider(TEST_WS_URL, autoConnect);

  return provider;
}

describe('send', (): void => {
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

  it('handles internal errors', (): Promise<any> => {
    createMock([]);

    (global as any).WebSocket = class {
      public send (): void {
        throw new Error('send error');
      }
    };

    provider = createWs(true);

    // HACK this is a private method...
    (provider as any).websocket.onopen();

    return provider
      .send('test_encoding', ['param'])
      .catch((error): void => {
        expect(error.message).toEqual('send error');
      });
  });

  it('passes the body through correctly', (): Promise<void> => {
    createMock([{
      id: 1,
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);

    return createWs(true)
      .send('test_body', ['param'])
      .then((): void => {
        expect(
          (mock.body as any).test_body
        ).toEqual('{"id":1,"jsonrpc":"2.0","method":"test_body","params":["param"]}');
      });
  });

  it('throws error when !response.ok', (): Promise<any> => {
    createMock([{
      id: 1,
      error: {
        code: 666,
        message: 'error'
      }
    }]);

    return createWs(true)
      .send('test_error', [])
      .catch((error): void => {
        expect(error.message).toMatch(/666: error/);
      });
  });

  it('adds subscriptions', (): Promise<void> => {
    createMock([{
      id: 1,
      method: 'test_sub',
      reply: {
        result: 1
      }
    }]);

    return createWs(true)
      .send('test_sub', [])
      .then((id): void => {
        expect(id).toEqual(1);
      });
  });
});
