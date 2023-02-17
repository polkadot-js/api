// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Server, WebSocket } from 'mock-socket';

import { stringify } from '@polkadot/util';

interface Scope {
  body: { [index: string]: Record<string, unknown> };
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
    result: unknown;
  };
}

interface RpcBase {
  id: number;
  jsonrpc: '2.0';
}

type RpcError = RpcBase & ErrorDef;
type RpcReply = RpcBase & { result: unknown };

export type Request = { method: string } & (ErrorDef | ReplyDef);

global.WebSocket = WebSocket as typeof global.WebSocket;

export const TEST_WS_URL = 'ws://localhost:9955';

// should be JSONRPC def return
function createError ({ error: { code, message }, id }: ErrorDef): RpcError {
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
function createReply ({ id, reply: { result } }: ReplyDef): RpcReply {
  return {
    id,
    jsonrpc: '2.0',
    result
  };
}

// scope definition returned
export function mockWs (requests: Request[], wsUrl: string = TEST_WS_URL): Scope {
  const server = new Server(wsUrl);

  let requestCount = 0;
  const scope: Scope = {
    body: {},
    done: () => new Promise<void>((resolve) => server.stop(resolve)),
    requests: 0,
    server
  };

  server.on('connection', (socket): void => {
    socket.on('message', (body): void => {
      const request = requests[requestCount];
      const response = (request as ErrorDef).error
        ? createError(request as ErrorDef)
        : createReply(request as ReplyDef);

      scope.body[request.method] = body as unknown as Record<string, unknown>;
      requestCount++;

      socket.send(stringify(response));
    });
  });

  return scope;
}
