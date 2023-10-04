// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
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

export interface RpcErrorInterface<T> {
  code: number;
  data?: T;
  message: string;
  stack: string;
}

interface JsonRpcResponseSingle<T> {
  error?: JsonRpcResponseBaseError;
  result: T;
}

interface JsonRpcResponseSubscription<T> {
  method?: string;
  params: {
    error?: JsonRpcResponseBaseError;
    result: T;
    subscription: number | string;
  };
}

export type JsonRpcResponseBase<T> = JsonRpcResponseSingle<T> & JsonRpcResponseSubscription<T>;

export type JsonRpcResponse<T> = JsonRpcObject & JsonRpcResponseBase<T>;

export type ProviderInterfaceCallback = (error: Error | null, result: any) => void;

export type ProviderInterfaceEmitted = 'connected' | 'disconnected' | 'error';

export type ProviderInterfaceEmitCb = (value?: any) => any;

export interface ProviderInterface {
  /** true if the provider supports subscriptions (not available for HTTP) */
  readonly hasSubscriptions: boolean;
  /** true if the clone() functionality is available on the provider */
  readonly isClonable: boolean;
  /** true if the provider is currently connected (ws/sc has connection logic) */
  readonly isConnected: boolean;
  /** (optional) stats for the provider with connections/bytes */
  readonly stats?: ProviderStats;

  clone (): ProviderInterface;
  connect (): Promise<void>;
  disconnect (): Promise<void>;
  on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void;
  send <T = any> (method: string, params: unknown[], isCacheable?: boolean): Promise<T>;
  subscribe (type: string, method: string, params: unknown[], cb: ProviderInterfaceCallback): Promise<number | string>;
  unsubscribe (type: string, method: string, id: number | string): Promise<boolean>;
}

/** Stats for a specific endpoint */
export interface EndpointStats {
  /** The total number of bytes sent */
  bytesRecv: number;
  /** The total number of bytes received */
  bytesSent: number;
  /** The number of cached/in-progress requests made */
  cached: number;
  /** The number of errors found */
  errors: number;
  /** The number of requests */
  requests: number;
  /** The number of subscriptions */
  subscriptions: number;
  /** The number of request timeouts */
  timeout: number;
}

/** Overall stats for the provider */
export interface ProviderStats {
  /** Details for the active/open requests */
  active: {
    /** Number of active requests */
    requests: number;
    /** Number of active subscriptions */
    subscriptions: number;
  };
  /** The total requests that have been made */
  total: EndpointStats;
}
