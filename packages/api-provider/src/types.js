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
  method?: string;
  result?: mixed;
  params?: {
    result: mixed
  },
  subscription: number;
}

export type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;

export type ProviderInterface$Callback = (error: ?Error, result: mixed) => void;

export type ProviderInterface = {
  isConnected (): boolean,
  send (method: string, params: Array<mixed>): Promise<mixed>,
  subscribe (method: string, params: Array<mixed>, cb: ProviderInterface$Callback): Promise<number>,
  unsubscribe (id: number): Promise<boolean>
}
