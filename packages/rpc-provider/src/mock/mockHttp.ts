// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Mock } from './types.js';

import nock from 'nock';

interface Request {
  code?: number;
  method: string;
  reply?: Record<string, unknown>;
}

interface HttpMock extends Mock {
  post: (uri: string) => {
    reply: (code: number, handler: (uri: string, body: { id: string }) => unknown) => HttpMock
  }
}

export const TEST_HTTP_URL = 'http://localhost:9944';

export function mockHttp (requests: Request[]): Mock {
  nock.cleanAll();

  return requests.reduce((scope: HttpMock, request: Request) =>
    scope
      .post('/')
      .reply(request.code || 200, (uri: string, body: { id: string }) => {
        scope.body = scope.body || {};
        scope.body[request.method] = body;

        return Object.assign({ id: body.id, jsonrpc: '2.0' }, request.reply || {}) as unknown;
      }),
  nock(TEST_HTTP_URL) as unknown as HttpMock);
}
