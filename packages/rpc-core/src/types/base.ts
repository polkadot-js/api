// Copyright 2017-2024 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ProviderInterface } from '@polkadot/rpc-provider/types';
import type { AnyFunction, Codec, DefinitionRpc } from '@polkadot/types/types';

export interface RpcInterfaceMethod {
  <T extends Codec> (...params: unknown[]): Observable<T>;
  raw (...params: unknown[]): Observable<unknown>;
  meta: DefinitionRpc;
}

export type AugmentedRpc<F extends AnyFunction> = F & {
  raw: <T> (...params: Parameters<F>) => Observable<T>;
  meta: DefinitionRpc;
};

/** Stats from the rpc-core layer, including the provider stats */
export interface RpcCoreStats extends NonNullable<ProviderInterface['stats']> {
  /** Internal stats for the rpc-core layer */
  core: {
    /** The number of values retrieved from the core cache */
    cacheHits: number;
    /** The number of entries in the core cache */
    cacheSize: number;
  }
}
