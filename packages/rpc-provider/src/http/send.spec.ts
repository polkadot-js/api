// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Mock } from '../mock/types';

import { mockHttp, TEST_HTTP_URL } from '../mock/mockHttp';
import { HttpProvider } from './';

describe('send', (): void => {
  let http: HttpProvider;
  let mock: Mock;

  beforeEach((): void => {
    http = new HttpProvider(TEST_HTTP_URL);
  });

  afterEach((): void => {
    if (mock) {
      mock.done();
    }
  });

  it('passes the body through correctly', (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mock = mockHttp([{
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);

    return http
      .send('test_body', ['param'])
      .then((): void => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect((mock.body as any).test_body).toEqual({
          id: 1,
          jsonrpc: '2.0',
          method: 'test_body',
          params: ['param']
        });
      });
  });

  it('throws error when !response.ok', (): Promise<any> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mock = mockHttp([{
      code: 500,
      method: 'test_error'
    }]);

    return http
      .send('test_error', [])
      .catch((error): void => {
        expect((error as Error).message).toMatch(/\[500\]: Internal Server/);
      });
  });
});
