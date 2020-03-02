// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';

export * from './types.jsonrpc';

export interface RpcInterfaceMethod {
  (...params: any[]): Observable<any>;
  raw (...params: any[]): Observable<any>;
}

export interface UserRpcMethod {
  description?: string;
  name: string;
  params: { isOptional?: boolean; name: string; type: string }[];
  type: string;
}

export type UserRpc = Record<string, UserRpcMethod[]>;
