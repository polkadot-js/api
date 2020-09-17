// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface JsonRpcObject {
  id: number;
  jsonrpc: '2.0';
}

export interface JsonRpcRequest extends JsonRpcObject {
  method: string;
  params: unknown[];
}

export interface JsonRpcResponseBaseError {
  code: number;
  data?: number | string;
  message: string;
}

interface JsonRpcResponseSingle {
  error?: JsonRpcResponseBaseError;
  result?: unknown;
}

interface JsonRpcResponseSubscription {
  method?: string;
  params: {
    error?: JsonRpcResponseBaseError;
    result: unknown;
    subscription: number | string;
  };
}

export type JsonRpcResponseBase = JsonRpcResponseSingle & JsonRpcResponseSubscription;

export type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;

export type ProviderInterfaceCallback = (error: Error | null, result: any) => void;

export type ProviderInterfaceEmitted = 'connected' | 'disconnected' | 'error';

export type ProviderInterfaceEmitCb = (value?: any) => any;

export interface ProviderInterface {
  readonly hasSubscriptions: boolean;
  readonly isConnected: boolean;

  clone (): ProviderInterface;
  connect (): Promise<void>;
  disconnect (): Promise<void>;
  on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void;
  send (method: string, params: any[]): Promise<any>;
  subscribe (type: string, method: string, params: any[], cb: ProviderInterfaceCallback): Promise<number | string>;
  unsubscribe (type: string, method: string, id: number | string): Promise<boolean>;
}
