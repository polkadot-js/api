// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Codec, DefinitionRpc } from '@polkadot/types/types';

export * from '@polkadot/rpc-core/types.jsonrpc';

export interface RpcInterfaceMethod {
  <T extends Codec> (...params: unknown[]): Observable<T>;
  raw (...params: unknown[]): Observable<unknown>;
  meta: DefinitionRpc;
}
