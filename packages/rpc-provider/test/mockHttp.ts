// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import nock from 'nock';

const TEST_HTTP_URL = 'http://localhost:9944';

function mockHttp (requests: any[]): any {
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

export {
  TEST_HTTP_URL,
  mockHttp
};
