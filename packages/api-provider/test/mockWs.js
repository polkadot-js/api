// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { Server } = require('mock-socket');

const TEST_WS_URL = 'ws://localhost:9955';

let server;

function createError ({ id, error: { code, message } }) {
  return {
    id,
    jsonrpc: '2.0',
    error: {
      code,
      message
    }
  };
}

function createReply ({ id, reply: { result } }) {
  return {
    id,
    jsonrpc: '2.0',
    result
  };
}

function mockWs (requests) {
  server = new Server(TEST_WS_URL);

  let requestCount = 0;
  const scope = {
    body: {},
    requests: 0,
    server,
    done: () => server.stop()
  };

  server.on('message', (body) => {
    const request = requests[requestCount];
    const response = request.error
      ? createError(request)
      : createReply(request);

    scope.body[request.method] = body;
    requestCount++;

    server.send(JSON.stringify(response));
  });

  return scope;
}

module.exports = {
  TEST_WS_URL,
  mockWs
};
