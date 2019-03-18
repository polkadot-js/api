// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
  data?: number | string,
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

export type ProviderInterface$Callback = (result: any) => void;

export type ProviderInterface$Emitted = 'connected' | 'disconnected' | 'error';

export type ProviderInterface$EmitCb = (value?: any) => any;

export interface ProviderInterface {
  readonly hasSubscriptions: boolean;
  clone (): ProviderInterface;
  disconnect (): void;
  isConnected (): boolean;
  on (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void;
  send (method: string, params: Array<any>): Promise<any>;
  subscribe (type: string, method: string, params: Array<any>, cb: ProviderInterface$Callback): Promise<number>;
  unsubscribe (type: string, method: string, id: number): Promise<boolean>;
}
