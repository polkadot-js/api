// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Json, Raw } from '@polkadot/types';
import type { Observable } from '@polkadot/x-rxjs';

export * from './types.jsonrpc';

export interface RpcInterfaceMethod {
  <T = any> (...params: any[]): Observable<T>;
  json (...params: any[]): Observable<Json>;
  raw (...params: any[]): Observable<Raw>;
}
