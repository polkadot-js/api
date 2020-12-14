// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor } from '@polkadot/types/types';

import { mockWs, TEST_WS_URL } from '../../test/mockWs';
import { Global, Mock } from './../mock/types';
import { WsProvider } from './';

declare const global: Global;

let provider: WsProvider;
let mock: Mock;

function createMock (requests: any[]): void {
  mock = mockWs(requests);
}

function createWs (autoConnect = 1000): Promise<WsProvider> {
  provider = new WsProvider(TEST_WS_URL, autoConnect);

  return provider.isReady;
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
    createMock([{
      id: 1,
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);

    return createWs().then((ws) =>
      ws
        .send('test_encoding', [{ error: 'send error' }])
        .catch((error): void => {
          expect((error as Error).message).toEqual('send error');
        })
    );
  });

  it('passes the body through correctly', (): Promise<void> => {
    createMock([{
      id: 1,
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);

    return createWs().then((ws) =>
      ws
        .send('test_body', ['param'])
        .then((): void => {
          expect(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (mock.body as any).test_body
          ).toEqual('{"id":1,"jsonrpc":"2.0","method":"test_body","params":["param"]}');
        })
    );
  });

  it('throws error when !response.ok', (): Promise<any> => {
    createMock([{
      error: {
        code: 666,
        message: 'error'
      },
      id: 1
    }]);

    return createWs().then((ws) =>
      ws
        .send('test_error', [])
        .catch((error): void => {
          expect((error as Error).message).toMatch(/666: error/);
        })
    );
  });

  it('adds subscriptions', (): Promise<void> => {
    createMock([{
      id: 1,
      method: 'test_sub',
      reply: {
        result: 1
      }
    }]);

    return createWs().then((ws) =>
      ws
        .send('test_sub', [])
        .then((id): void => {
          expect(id).toEqual(1);
        })
    );
  });
});
