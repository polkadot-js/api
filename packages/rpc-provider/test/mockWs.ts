// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Server } from 'mock-socket';

const TEST_WS_URL = 'ws://localhost:9955';

let server: Server;

type ErrorDef = {
  id: number,
  error: {
    code: number,
    message: string
  }
};

type ReplyDef = {
  id: number,
  reply: {
    result: any
  }
};

function createError ({ id, error: { code, message } }: ErrorDef) {
  return {
    id,
    jsonrpc: '2.0',
    error: {
      code,
      message
    }
  };
}

function createReply ({ id, reply: { result } }: ReplyDef) {
  return {
    id,
    jsonrpc: '2.0',
    result
  };
}

function mockWs (requests: Array<{ method: string }>) {
  server = new Server(TEST_WS_URL);

  let requestCount = 0;
  const scope: {
    body: { [index: string]: {} },
    requests: number,
    server: Server,
    done: any
  } = { body: {}, requests: 0, server, done: () =>
      server.stop(() => {
        // ignore
      })
  };

  server.on('connection', (socket) => {
    // @ts-ignore definitions are wrong, this is 'on', not 'onmessage'
    socket.on('message', (body: { [index: string]: {} }) => {
      const request = requests[requestCount];
      // @ts-ignore Yes, SHOULD be fixed, this is a mess
      const response = request.error
        // @ts-ignore Yes, SHOULD be fixed, this is a mess
        ? createError(request)
        // @ts-ignore Yes, SHOULD be fixed, this is a mess
        : createReply(request);

      scope.body[request.method] = body;
      requestCount++;

      socket.send(JSON.stringify(response));
    });
  });

  return scope;
}

export {
  TEST_WS_URL,
  mockWs
};
