// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface JsonRpcObject {
  id: number;
  jsonrpc: '2.0';
}

export interface JsonRpcRequest extends JsonRpcObject {
  method: string;
  params: any[];
}

export interface JsonRpcResponseBaseError {
  code: number;
  data?: number | string;
  message: string;
}

interface JsonRpcResponseSingle {
  error?: JsonRpcResponseBaseError;
  result?: any;
}

interface JsonRpcResponseSubscription {
  method?: string;
  params: {
    error?: JsonRpcResponseBaseError;
    result: any;
    subscription: number;
  };
}

export type JsonRpcResponseBase = JsonRpcResponseSingle & JsonRpcResponseSubscription;

export type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;

export type ProviderInterfaceCallback = (result: any) => void;

export type ProviderInterfaceEmitted = 'connected' | 'disconnected' | 'error';

export type ProviderInterfaceEmitCb = (value?: any) => any;

export interface ProviderInterface {
  readonly hasSubscriptions: boolean;
  clone (): ProviderInterface;
  disconnect (): void;
  isConnected (): boolean;
  on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): void;
  send (method: string, params: any[]): Promise<any>;
  subscribe (type: string, method: string, params: any[], cb: ProviderInterfaceCallback): Promise<number>;
  unsubscribe (type: string, method: string, id: number): Promise<boolean>;
}
