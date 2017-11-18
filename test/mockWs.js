// ISC, Copyright 2017 Jaco Greeff

const { Server } = require('mock-socket');

const TEST_WS_URL = 'ws://localhost:9955';

let server;

function mockWs (requests) {
  server = new Server(TEST_WS_URL);
  let requestCount = 0;

  server.on('message', (body) => {
    try {
      const request = requests[requestCount];
      const result = request.reply;
      const response = request.error
        ? {
          id: request.id,
          jsonrpc: '2.0',
          error: {
            code: request.error.code,
            message: request.error.message
          }
        }
        : {
          id: request.id,
          jsonrpc: '2.0',
          result: result.result
        };

      scope.body[request.method] = body;
      requestCount++;

      server.send(JSON.stringify(response));
    } catch (error) {
      console.error('mock:onmessage', body, error);
    }
  });

  const scope = {
    body: {},
    requests: 0,
    server,
    done: () => server.stop(),
    isDone: () => requestCount === requests.length
  };

  return scope;
}

module.exports = {
  TEST_WS_URL,
  mockWs
};
