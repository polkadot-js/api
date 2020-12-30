// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from '@polkadot/x-rxjs';

export * from './types.jsonrpc';

export interface RpcInterfaceMethod {
  (...params: any[]): Observable<any>;
  json (...params: any[]): Observable<any>;
  raw (...params: any[]): Observable<any>;
}
