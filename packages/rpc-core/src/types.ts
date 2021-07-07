// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Json, Raw } from '@polkadot/types';
import type { Codec, DefinitionRpc } from '@polkadot/types/types';

export * from './types.jsonrpc';

export interface RpcInterfaceMethod {
  <T extends Codec> (...params: unknown[]): Observable<T>;
  json (...params: unknown[]): Observable<Json>;
  raw (...params: unknown[]): Observable<Raw>;
  meta: DefinitionRpc;
}
