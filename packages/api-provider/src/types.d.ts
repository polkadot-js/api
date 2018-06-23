// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

export type JsonRpcObject = {
  id: number;
  jsonrpc: '2.0';
};

export type JsonRpcRequest = JsonRpcObject & {
  method: string;
  params: Array<any>;
};

export type JsonRpcResponseBase$Error = {
  code: number,
  message: string
};

type JsonRpcResponse$Single = {
  error?: JsonRpcResponseBase$Error;
  result?: any;
};

type JsonRpcResponse$Subscription = {
  method?: string;
  params: {
    error?: JsonRpcResponseBase$Error;
    result: any;
    subscription: number;
  }
};

export type JsonRpcResponseBase = JsonRpcResponse$Single & JsonRpcResponse$Subscription;

export type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;

export type ProviderInterface$Callback = (error: Error | null, result: any) => void;

export type ProviderInterface$Emitted = 'connected' | 'disconnected';

export type ProviderInterface$EmitCb = (value?: any) => any;

export type ProviderInterface = {
  isConnected (): boolean,
  on (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void,
  send (method: string, params: Array<any>): Promise<any>,
  subscribe (method: string, params: Array<any>, cb: ProviderInterface$Callback): Promise<number>,
  unsubscribe (method: string, id: number): Promise<boolean>
}
