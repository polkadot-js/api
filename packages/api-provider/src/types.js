// ISC, Copyright 2017 Jaco Greeff
// @flow

export type JsonRpcObject = {
  id: number;
  jsonrpc: '2.0';
};

export type JsonRpcRequest = JsonRpcObject & {
  method: string;
  params: Array<any>;
};

export type JsonRpcResponseBase = {
  error?: {
    code: number,
    message: string
  };
  result?: any;
}

export type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;

export interface ProviderInterface {
  send (method: string, params: Array<any>): Promise<any>;
}
