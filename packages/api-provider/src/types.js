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

export type ProviderInterface$Subscribe$Callback = (error: ?Error, result: mixed) => void;

export interface ProviderInterface$Subscribe extends ProviderInterface {
  subscribe (method: string, params: Array<mixed>, cb: ProviderInterface$Subscribe$Callback): Promise<number>;
  unsubscribe (id: number): Promise<boolean>;
}
