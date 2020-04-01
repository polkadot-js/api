// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Server } from 'mock-socket';

const TEST_WS_URL = 'ws://localhost:9955';

let server: Server;

interface Scope {
  body: { [index: string]: {} };
  requests: number;
  server: Server;
  done: any;
}

interface ErrorDef {
  id: number;
  error: {
    code: number;
    message: string;
  };
}

interface ReplyDef {
  id: number;
  reply: {
    result: any;
  };
}

// should be JSONRPC def return
function createError ({ error: { code, message }, id }: ErrorDef): any {
  return {
    error: {
      code,
      message
    },
    id,
    jsonrpc: '2.0'
  };
}

// should be JSONRPC def return
function createReply ({ id, reply: { result } }: ReplyDef): any {
  return {
    id,
    jsonrpc: '2.0',
    result
  };
}

// scope definition returned
function mockWs (requests: { method: string }[]): Scope {
  server = new Server(TEST_WS_URL);

  let requestCount = 0;
  const scope: Scope = {
    body: {},
    done: (): void => {
      server.stop((): void => {
        // ignore
      });
    },
    requests: 0,
    server
  };

  server.on('connection', (socket): void => {
    // FIXME This whole any mess is a mess
    socket.on('message', (body: any): void => {
      const request = requests[requestCount];
      const response = (request as any).error
        ? createError(request as any)
        : createReply(request as any);

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
