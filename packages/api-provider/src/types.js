// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

export type JsonRpcObject = {
  id: number;
  jsonrpc: '2.0';
};

export type JsonRpcRequest = JsonRpcObject & {
  method: string;
  params: Array<mixed>;
};

export type JsonRpcResponseBase = {
  error?: {
    code: number,
    message: string
  };
  result?: mixed;
}

export type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;

export interface ProviderInterface {
  +isConnected: boolean;
  send (method: string, params: Array<mixed>): Promise<mixed>;
}
