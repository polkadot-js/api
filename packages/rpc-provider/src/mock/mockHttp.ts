// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable */

import nock from 'nock';

export const TEST_HTTP_URL = 'http://localhost:9944';

export function mockHttp (requests: any[]): any {
  nock.cleanAll();

  return requests.reduce((scope, request: any): nock.Scope => {
    return scope
      .post('/')
      .reply(request.code || 200, (uri: string, body: { id: string }): any => {
        scope.body = scope.body || {};
        scope.body[request.method] = body;

        return Object.assign({ id: body.id, jsonrpc: '2.0' }, request.reply || {});
      });
  }, nock(TEST_HTTP_URL));
}
