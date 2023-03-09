// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import type { Mock } from '../mock/types';

import { mockHttp, TEST_HTTP_URL } from '../mock/mockHttp.js';
import { HttpProvider } from './index.js';

// Does not work with Node 18 (native fetch)
// See https://github.com/nock/nock/issues/2397
describe.skip('send', (): void => {
  let http: HttpProvider;
  let mock: Mock;

  beforeEach((): void => {
    http = new HttpProvider(TEST_HTTP_URL);
  });

  afterEach(async () => {
    if (mock) {
      await mock.done();
    }
  });

  it('passes the body through correctly', (): Promise<void> => {
    mock = mockHttp([{
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);

    return http
      .send('test_body', ['param'])
      .then((): void => {
        expect(mock.body.test_body).toEqual({
          id: 1,
          jsonrpc: '2.0',
          method: 'test_body',
          params: ['param']
        });
      });
  });

  it('throws error when !response.ok', async (): Promise<any> => {
    mock = mockHttp([{
      code: 500,
      method: 'test_error'
    }]);

    return http
      .send('test_error', [])
      .catch((error): void => {
        expect((error as Error).message).toMatch(/\[500\]/);
      });
  });
});
