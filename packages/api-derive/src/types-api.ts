// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DecoratedRpc, QueryableStorageEntry, QueryableStorageMulti, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { RpcInterface } from '@polkadot/rpc-core/types';
import type { RuntimeVersion } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { Codec } from '@polkadot/types-codec/types';
import type { ExactDerive } from './derive';

// This is reset inside the API as type -
// export type DeriveApi = ApiInterfaceRx;

type Sections <M> = Record<string, Record<string, M>>;

export interface DeriveApi {
  registry: Registry;
  runtimeVersion: RuntimeVersion;

  consts: Sections<Codec>;
  derive: ExactDerive;
  query: Sections<QueryableStorageEntry<'rxjs'>>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: Sections<SubmittableExtrinsicFunction<'rxjs'>>;

  queryAt: (hash: string | Uint8Array) => Observable<Sections<QueryableStorageEntry<'rxjs'>>>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
}
