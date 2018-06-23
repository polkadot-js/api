// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Server } from 'mock-socket';

const TEST_WS_URL = 'ws://localhost:9955';

let server: Server;

function createError ({ id, error: { code, message } }: { id: number, error: { code: number, message: string } }) {
  return {
    id,
    jsonrpc: '2.0',
    error: {
      code,
      message
    }
  };
}

function createReply ({ id, reply: { result } }: { id: number, reply: { result: any }}) {
  return {
    id,
    jsonrpc: '2.0',
    result
  };
}

function mockWs (requests: Array<{ method: string }>) {
  server = new Server(TEST_WS_URL);

  let requestCount = 0;
  const scope: { body: { [index: string]: {} }, requests: number, server: Server, done: any } = {
    body: {},
    requests: 0,
    server,
    done: () => server.stop()
  };

  server.on('message', (body: {}) => {
    const request = requests[requestCount];
    // @ts-ignore Yes, SHOULD be fixed, this is a mess
    const response = request.error
      // @ts-ignore Yes, SHOULD be fixed, this is a mess
      ? createError(request)
      // @ts-ignore Yes, SHOULD be fixed, this is a mess
      : createReply(request);

    scope.body[request.method] = body;
    requestCount++;

    server.send(JSON.stringify(response));
  });

  return scope;
}

export {
  TEST_WS_URL,
  mockWs
};
