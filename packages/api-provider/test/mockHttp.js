// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const nock = require('nock');

const TEST_HTTP_URL = 'http://localhost:9944';

function mockHttp (requests) {
  nock.cleanAll();

  return requests.reduce((scope, request, index) => {
    return scope
      .post('/')
      .reply(request.code || 200, (uri, body) => {
        scope.body = scope.body || {};
        scope.body[request.method] = body;

        return Object.assign({ id: body.id, jsonrpc: '2.0' }, request.reply || {});
      });
  }, nock(TEST_HTTP_URL));
}

module.exports = {
  TEST_HTTP_URL,
  mockHttp
};
